const test = require('ava');
const alfyTest = require('alfy-test');

test('It shows forms of irregular verb', async t => {
  const alfy = alfyTest();

  const result = await alfy('eat');

  t.deepEqual(result, [
    {
      title: 'eat',
      subtitle: 'Base Form',
      arg: 'eat',
    },
    {
      title: 'ate',
      subtitle: 'Past Simple',
      arg: 'ate',
    },
    {
      title: 'eaten',
      subtitle: 'Past Participle',
      arg: 'eaten',
    },
    {
      title: 'eats',
      subtitle: '3rd Person Singular',
      arg: 'eats',
    },
    {
      title: 'eating',
      subtitle: 'Present Participle / Gerund',
      arg: 'eating',
    },
  ]);
});

test('It does not show anything for not irregular verb', async t => {
  const alfy = alfyTest();

  const result = await alfy('visit');

  t.deepEqual(result, []);
});
