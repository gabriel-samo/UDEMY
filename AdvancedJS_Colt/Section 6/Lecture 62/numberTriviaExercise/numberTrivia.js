async function showNumberTrivia() {
    let number = randomNum();
    const url = `http://numbersapi.com/${number}/trivia?json`
    try {
        const numFact = await fetch(url);
        const data = await numFact.json();
        console.log(`showNumberTrivia: ${data.text}`);
    } catch (error) {
        console.log('Error occured:', error);
    }
}

function showNumberRace() {
    multiFetch = ([
        fetch(`http://numbersapi.com/${randomNum()}/trivia?json`),
        fetch(`http://numbersapi.com/${randomNum()}/trivia?json`),
        fetch(`http://numbersapi.com/${randomNum()}/trivia?json`),
        fetch(`http://numbersapi.com/${randomNum()}/trivia?json`)
    ]);
    Promise.race(multiFetch)
        .then((winner) => {
            const result = winner.json();
            result.then((data) => {
                console.log(`showNumberRace: ${data.text}`);
            })
        })
        .catch((error) => {
            console.log('Error occured:', error);
        })
}

async function showNumberAll(){
    multiFetch = ([
        fetch(`http://numbersapi.com/${randomNum()}/trivia?json`),
        fetch(`http://numbersapi.com/${randomNum()}/trivia?json`),
        fetch(`http://numbersapi.com/WORNG?json`),
        fetch(`http://numbersapi.com/${randomNum()}/trivia?json`)
    ]);

    let results = await Promise.allSettled(multiFetch);
    const fulfilled = [];
    const rejected = [];

    for(let index=0; index < results.length; index++){
        if(results[index].value.ok){
            let result = await results[index].value.json();
            if(results[index+1] === undefined){
                fulfilled.push(`'${result.text}'`);
            } else {
            fulfilled.push(`'${result.text}'\n`);
            }
        } else {
            let result = await results[index].value
            rejected.push(`'Request failed with status code ${result.status}'`);
        }
    }
    console.log(`showNumberAll fulfilled: [${fulfilled}]`);
    console.log(`showNumberAll rejected: [${rejected}]`);
}

function randomNum() {
    return Math.floor(Math.random() * 100);
}

function main(){
    showNumberTrivia();
    showNumberRace();
    showNumberAll();
}

main();