const alfy = require('alfy');
const Irverbs = require('irverbs/irverbs.js');
const fixtures = require('irverbs/irverbs.json').fixtures;

const args = process.argv.slice(2);

if (args.length < 1) {
  return alfy.output([]);
}

const matches = new Irverbs(fixtures).find(args[0]);

if (matches.length === 0) {
  return alfy.output([]);
}

const output = [
  {
    title: matches[0][0],
    subtitle: 'Base Form',
    arg: matches[0][0],
  },
  {
    title: matches[0][1],
    subtitle: 'Past Simple',
    arg: matches[0][1],
  },
  {
    title: matches[0][2],
    subtitle: 'Past Participle',
    arg: matches[0][2],
  },
  {
    title: matches[0][3],
    subtitle: '3rd Person Singular',
    arg: matches[0][3],
  },
  {
    title: matches[0][4],
    subtitle: 'Present Participle / Gerund',
    arg: matches[0][4],
  },
];

alfy.output(output);
