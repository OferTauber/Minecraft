import { SKY, EARTH, STONE, WOOD, LEAF } from './game.js';

export function Cube(type, game) {
  this.type = type;
  this.game = game;
}

Cube.prototype.append = function (elementToTppendOn) {
  this.cubeElement = document.createElement('div');
  let type;
  switch (this.type) {
    case SKY:
      type = 'sky';
      break;
    case EARTH:
      type = 'earth';
      break;
    case STONE:
      type = 'stone';
      break;
    case WOOD:
      type = 'wood';
      break;
    case LEAF:
      type = 'leaf';
      break;
  }
  this.cubeElement.classList.add(type);
  this.cubeElement.classList.add('cube');
  elementToTppendOn.append(this.cubeElement);
};

// ========================================
export function Tool(type, game) {
  this.type = type;
  this.game = game;
}
