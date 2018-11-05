/**
 * @param {string} [somebody] - Somebody's name.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe';
  }
  console.log('Hello ' + somebody);
}

sayHello();
