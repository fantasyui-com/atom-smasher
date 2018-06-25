# atom-smasher
Reduce a list of uuid tagged objects into a single writable (es6 class) object.

Note: 'uuid','version', 'tags' are reserved for atom control
Note: list is reserved for fetching source records

```JavaScript


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


```
