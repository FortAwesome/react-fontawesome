let PRODUCTION = false
let TEST = false
let listeners = {};

try {
  PRODUCTION = process.env.NODE_ENV === 'production'
} catch (e) { }

try {
  TEST = process.env.NODE_ENV === 'test'
} catch (e) { }

export function listen(key, listener){
  if(!TEST && !PRODUCTION && console && typeof console.error === 'function'){
    console.error('listen() is only for use in test')
  }
  else {
    listeners[key] = listener
  }
}
export function clearListeners(){
  if(!TEST && !PRODUCTION && console && typeof console.error === 'function'){
    console.error('clearListeners() is only for use in test')
  }
  else {
    listeners = {};
  }
}

export default function (...args) {
  if(TEST && Object.keys(listeners).length > 0) {
    Object.keys(listeners).forEach(function(key){listeners[key](...args)});
  }
  else if (!PRODUCTION && console && typeof console.error === 'function') {
    console.error(...args)
  }
}
