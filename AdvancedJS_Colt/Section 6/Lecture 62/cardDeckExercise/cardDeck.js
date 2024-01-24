async function main() {
    const deckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle';
    let deck = await fetch(deckUrl);
    deck = await deck.json();
    const deckID = deck.deck_id;
    // console.log(deck);
    // console.log(deckID);

    const discardPile = document.getElementById('discardPile');
    const drawButton = document.getElementById('drawCard');

    drawButton.addEventListener('click', async () => {
        const drawCardRequsest = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw`);
        let drawCard = await drawCardRequsest.json();

        // console.log(drawCard.remaining);
        if (drawCard.remaining) {
            let newDiv = document.createElement('div');
            newDiv.classList.add(`card${drawCard.cards[0].code}`);

            let newImg = document.createElement('img');
            newImg.src = `${drawCard.cards[0].image}`;
            newImg.style.transform = `rotate(${generateRandom(-70, 70)}deg) translate(${generateRandom(-20, 20)}px, ${generateRandom(-20, 20)}px)`;

            newDiv.append(newImg);
            discardPile.append(newDiv);
        } else {
            drawButton.style.opacity = '0';
            drawButton.style.cursor = 'default';
            drawButton.disabled = true;
        }
    })
}

function generateRandom(min = 0, max = 180) {
    // find diff
    let difference = max - min;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor(rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
}

main();