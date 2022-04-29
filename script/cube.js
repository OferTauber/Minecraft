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
  WOOD_INVENTORY,
  EARTH_INVENTORY,
  STONE_INVENTORY,
  LEAF_INVENTORY,
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
  if (!this.game.currentTool) return;
  if (this.game.currentTool.type >= 20) {
    build(this); //todo !!!!
  }
  if (this.game.currentTool.type < 20) {
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
  if (
    isSky(cube.type) &&
    cube.game.currentTool &&
    isInventory(cube.game.currentTool) &&
    cube.game.currentTool.inventory > 0 &&
    haveBase(cube)
  ) {
    cube.cubeElement.classList.remove('sky', 'clude');
    cube.cubeElement.classList.add(
      classConvertor(cube.game.currentTool.type / 20)
    );
    cube.type = cube.game.currentTool.type / 20;
    cube.game.currentTool.decrement();
  }
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
  inventory.increment();
  setCubeType(cube, SKY);
}

function haveBase(cube) {
  return cube.neighbors.down === undefined || !isSky(cube.neighbors.down.type);
}

function isSky(type) {
  return type < 1;
}

function isInventory(inventory) {
  return inventory.type >= 20;
}

function toolIsValid(tool, cubeType) {
  return tool === cubeType % 10;
}
function inventoryIsValid(inventory, cubeType) {
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
