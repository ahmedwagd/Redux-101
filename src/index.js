import store from './store';
import { bugAdded, bugResolved } from './actions';
// state = reducer (state, action);
//notify the subscribers

store.dispatch(bugAdded('Bug 1'))
store.dispatch(bugAdded('Bug 2'))
store.dispatch(bugAdded('Bug 3'))

console.log(store.getState())

console.log(store.getState())


/*
// subscrib
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed! ", store.getState())
})

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1'
  }
});
unsubscribe()
store.dispatch({
  type: 'bugRemover',
  payload: {
    id: 1
  }
})

console.log(store.getState())
*/



/**
 *

import { pipe, compose } from 'lodash/fp';

let input = '  JavaScript  ';
let outPut = `<div>${input.trim()}</div>`;

const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`;

const transform = pipe(trim, toLowerCase, wrapInDiv);
transform(input)
const call = wrapInDiv(toLowerCase(trim(input)));


*/