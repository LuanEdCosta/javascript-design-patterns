/**
 * Simple Singleton function
 *
 * But this function has a problem:
 *
 * It's possible to mutate the instance in Singleton.instance
 */
function Singleton() {
  if (!Singleton.instance) {
    Singleton.instance = this
  }

  return Singleton.instance
}

// Creating the first instance
const singleton = new Singleton()

// The instances are equal because the function returned the same instance as the created before
console.log(singleton === new Singleton()) // === true


// -----------------------------------------------------------------------------

// Using closure concept

function Singleton2() {
  // Set the instance.
  let instance = this

  // Override the original implementation.
  Singleton2 = function() {
    return instance
  }
}

const singleton2 = new Singleton2()
console.log(singleton2 === new Singleton2())

// -----------------------------------------------------------------------------

// Using the module pattern

let Singleton3

// IIFE - Immediately-Invoked Function Expression
(function(){
  let instance

  Singleton3 = function() {
    if (instance) {
      return instance
    }

    instance = this
  }
})()

const singleton3 = new Singleton3()
console.log(singleton3 === new Singleton3())
