const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const args = process.argv[2];

try {
    const result = colors.green(langs.where('3', franc(args)).name)
    console.log(result);
} catch (error) {
    console.log(colors.red('Could not find tha language. Please try again with a longer sample'));
}