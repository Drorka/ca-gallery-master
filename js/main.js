'use strict'
console.log('Starting up')

var gProjs = [
  {
    id: 'bookshop',
    name: 'Book Shop',
    title: 'Magical Book Shop',
    desc: 'Enter the magical shop in Diagon Alley',
    url: 'https://drorka.github.io/book-shop/',
    publishedAt: 1669903200000,
    labels: ['table', 'filter', 'crudl', 'render'],
  },
  {
    id: 'minesweeper',
    name: 'Mine Sweeper',
    title: 'Sweep Those Mines',
    desc: 'Open all cells without exploding!',
    url: 'https://drorka.github.io/Minesweeper/',
    publishedAt: 1669557600000,
    labels: ['matrix', 'timer', 'render'],
  },
  {
    id: 'touchnums',
    name: 'Touch Nums',
    title: "Touch 'em Nums",
    desc: 'Tap on the numbers by order',
    url: 'https://drorka.github.io/Touch-nums/',
    publishedAt: 1669125600000,
    labels: ['matrix', 'timer', 'render'],
  },
  {
    id: 'pacman',
    name: 'Pacman',
    title: 'The All-Time Classic',
    desc: 'Eat all the foods, avoid all the ghosts',
    url: 'https://drorka.github.io/pacman/',
    publishedAt: 1668693600000,
    labels: ['matrix', 'flow', 'render'],
  },
  {
    id: 'inpic',
    name: 'In-Pic',
    title: 'Trickier Than You Think',
    desc: "What's in the pictures?",
    url: 'https://drorka.github.io/InPic/',
    publishedAt: 1668693600000,
    labels: ['flow', 'render'],
  },
]

function getGProjs() {
  return gProjs
}

function getProjById(projId) {
  const proj = gProjs.find((proj) => projId === proj.id)
  return proj
}
