
// INPUT

const globalAlpha = 1;
const canvas = document.querySelector('canvas');
const keys = [];
const mouse = {
  x: 0,
  y: 0,
  down: false
};

// UTIL

const rands = () => Math.random() < 0.5 ? -1 : 1;
const randint = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const sinint = (min, max, t) => {
  const h = (max - min) / 2;
  return min + h + Math.sin(t) * h;
};