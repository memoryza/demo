import Immutable from 'immutable';
let foo = Immutable.fromJS({a: {b: 1}});
let bar = foo.setIn(['a', 'b'], 2);
console.log(foo.getIn(['a', 'b']));
console.log(foo === bar)