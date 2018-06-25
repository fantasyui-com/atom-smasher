const assert = require('assert');
const program = require('./index.js')({});

const input = [
  { uuid: 'a', title: 'Foobar' },
  { uuid: 'b', author: 'Alice' },
];

Plain_Test : {
  const actual = program.make(input);
  const expected = {
    title: 'Foobar',
    author: 'Alice',
  };
  assert.deepEqual( actual , expected );
}

Updating_Property_Test : {
  const actual = program.make(input);
  actual.title = 'Wonderland';
  const expected = {
    title: 'Wonderland',
    author: 'Alice',
  };
  assert.deepEqual( actual , expected );
}

Get_DataList_Test : {
  const actual = program.make(input);
  actual.title = 'Wonderland';
  const expected = [ { uuid: 'a', title: 'Wonderland' }, { uuid: 'b', author: 'Alice' } ];
  assert.deepEqual( actual.list , expected );
}
