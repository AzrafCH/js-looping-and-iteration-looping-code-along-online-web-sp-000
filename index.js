// Code your solutions in this file
function writeCards(names, event) {
  const cards = [];

  for(let i = 0; i < cards.length; i++) {
    cards.push('Thank you, ${names[i]}, for the wonderful ${event} gift!');
  }
  return cards;
}
