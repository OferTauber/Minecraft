import {
  SKY,
  CLUDE,
  EARTH,
  STONE,
  WOOD,
  LEAF,
  NO_NEIGHBORS,
  SHOVEL,
  AXE,
  PICKAXE,
} from './game.js';

export function Cube(type, game) {
  this.type = type;
  this.game = game;
  this.neighbors = {
    up: NO_NEIGHBORS,
    down: NO_NEIGHBORS,
    left: NO_NEIGHBORS,
    right: NO_NEIGHBORS,
  };
}
Cube.prototype.cubeClick = function () {
  if (this.game.currentTool.type > 10) {
    build(this); //todo !!!!
  }
  if (this.game.currentTool.type < 10) {
    dig(this);
  }
};

Cube.prototype.append = function (elementToTppendOn) {
  this.cubeElement = document.createElement('div');
  this.cubeElement.classList.add(classConvertor(this.type));
  this.cubeElement.classList.add('cube');
  this.cubeElement.addEventListener('click', (e) => {
    void e;
    this.cubeClick();
  });
  elementToTppendOn.append(this.cubeElement);
};

function build(cube) {
  console.log('create the build function!!!!'); //todo !!!
}

function dig(cube) {
  if (
    !(
      toolIsValid(cube.game.currentTool.type, cube.type) &&
      cubeIsAccecable(cube)
    )
  )
    return;

  const inventory = cube.game.inventory[classConvertor(cube.type)];
  inventory[0]++;
  inventory[1].textContent = inventory[0] + '';

  setCubeType(cube, SKY);
}

function toolIsValid(tool, cubeType) {
  return tool === cubeType % 10;
}

function cubeIsAccecable(cube) {
  return (
    (cube.neighbors.up && cube.neighbors.up.type < 1) ||
    (cube.neighbors.down && cube.neighbors.down.type < 1) ||
    (cube.neighbors.left && cube.neighbors.left.type < 1) ||
    (cube.neighbors.right && cube.neighbors.right.type < 1)
  );
}

function setCubeType(cube, newType) {
  cube.type = newType;
  cube.cubeElement.classList.remove(
    'wood',
    'sky',
    'clude',
    'earth',
    'stone',
    'leaf'
  );
  cube.cubeElement.classList.add(classConvertor(newType));
}

function classConvertor(type) {
  switch (type) {
    case SKY:
      return 'sky';
    case CLUDE:
      return 'clude';
    case EARTH:
      return 'earth';
    case STONE:
      return 'stone';
    case WOOD:
      return 'wood';
    case LEAF:
      return 'leaf';
  }
}
