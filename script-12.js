const out = document.getElementById('output');
out.textContent += 'Hello this is JavaScript' + '\n';
out.textContent += 'Hello, again' + '\n';
out.textContent += `Hello, hello \n`;

let x = 3000;

function fun(params) {
  out.textContent += `${x} \n`;
}

fun();
out.textContent += `${x} \n`;

console.time('test');
let name = 'Meta Brains';
console.error(name);
console.warn('This is a warning');
console.warn('This is a warning');
console.warn('This is a warning');
console.warn('This is a warning');
console.warn('This is a warning');
console.warn('This is a warning');
console.warn('This is a warning');
console.warn('This is a warning');
console.timeEnd('test');

let a = 20;
let b = 10;

if (a < b) {
  out.textContent += `a:${a} is smaller than b:${b}\n`;
}
else if (a > b) {
  out.textContent += `a:${a} is bigger than b:${b}\n`;
}
else {
  out.textContent += `a:${a} is equal to b:${b}\n`;
}

// Ternary
let c = 40;
let d = 50;

let result = (c > d ? 'c is bigger than d' : 'c is not bigger than d') + ' Capichi';
out.textContent += result + '\n';

let day = 7;

switch(day) {
  case 0:
    out.textContent += `Day: ${day} Today is Monday`;
    break;

  case 1:
    out.textContent += `Day: ${day} Today is Tuesday`;
    break;

  case 2:
    out.textContent += `Day: ${day} Today is Wednesday`;
    break;

  case 3:
    out.textContent += `Day: ${day} Today is Thursday`;
    break;

  case 4:
    out.textContent += `Day: ${day} Today is Friday`;
    break;

  case 5:
    out.textContent += `Day: ${day} Today is Saturday`;
    break;
 
  case 6:
    out.textContent += `Day: ${day} Today is Sunday`;
    break;

  default:
    out.textContent += `Only numbers between 0 and 6 and you write ${day} \n`;
    break;
}

let p = 10;
let t = 3;

p **= t;
out.textContent += p;
