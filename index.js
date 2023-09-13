// Code your solutions in this file
/*
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

*/

function writeCards(names, event) {
    const arr = [...names];
    const arr2 = [];
        for (let i = 0; i < arr.length; i++) {
            arr2[i] = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        }

    return arr2;
}

function countDown(int) {
    let i = int;
    while (i > -1) {
        console.log(i);
        i--;
    }
}
