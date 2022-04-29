import { Cube } from './cube.js';
import { Tool, Inventory } from './tools_and_inventorry.js';
const BOARD_HEIGET = 20;
const BOARD_WIRDH = BOARD_HEIGET;
export const SKY = 0;
export const CLUDE = 0.5;
export const EARTH = 1;
export const SHOVEL = 1;
export const STONE = 2;
export const PICKAXE = 2;
export const WOOD = 3;
export const LEAF = 13;
export const AXE = 3;
export const WOOD_INVENTORY = WOOD * 20;
export const EARTH_INVENTORY = EARTH * 20;
export const STONE_INVENTORY = STONE * 20;
export const LEAF_INVENTORY = LEAF * 20;

export const NO_NEIGHBORS = 'no neighbors';

const game = {
  gameBodarElement: document.querySelector('.game-board'),
  cubesArr: [],
  currentTool: undefined,
  inventory: {
    wood: new Inventory(WOOD_INVENTORY, this),
    stone: new Inventory(STONE_INVENTORY, this),
    earth: new Inventory(EARTH_INVENTORY, this),
    leaf: new Inventory(LEAF_INVENTORY, this),
  },
  tools: {},

  ganerateIntentorys() {
    for (const el in this.inventory) {
      this.inventory[el].game = this;
    }
  },

  ganerateCubes(tamplate) {
    this.criareAndAppendAllCubes(tamplate);
    this.setCubesNeighbors();
  },

  criareAndAppendAllCubes(tamplate) {
    for (let i = 0; i < BOARD_HEIGET; i++) {
      const cubesLine = [];
      for (let j = 0; j < BOARD_WIRDH; j++) {
        const newCube = new Cube(tamplate[i][j], this);
        newCube.append(this.gameBodarElement);
        cubesLine.push(newCube);
      }
      this.cubesArr.push(cubesLine);
    }
  },

  setCubesNeighbors() {
    for (let i = 0; i < BOARD_HEIGET; i++) {
      for (let j = 0; j < BOARD_WIRDH; j++) {
        const cube = this.cubesArr[i][j];
        if (i > 0) cube.neighbors.up = this.cubesArr[i - 1][j];
        if (i < BOARD_HEIGET - 1) cube.neighbors.down = this.cubesArr[i + 1][j];
        if (j > 0) cube.neighbors.left = this.cubesArr[i][j - 1];
        if (j < BOARD_WIRDH - 1) cube.neighbors.right = this.cubesArr[i][j + 1];
      }
    }
  },

  generateTolls() {
    this.tools.axe = new Tool(AXE, this);
    this.tools.pickaxe = new Tool(PICKAXE, this);
    this.tools.suovel = new Tool(SHOVEL, this);
    this.tools.axe.setEvant();
    this.tools.pickaxe.setEvant();
    this.tools.suovel.setEvant();
  },
};

const tamplate = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0.5, 0.5, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 0, 0, 0], //3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 0, 0, 0], //3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0], //3
  [0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0], //3
  [0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0], //3
  [0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 2, 2, 0, 0], //4
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1], //6
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //6
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //6
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //6
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //7
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //8
];

game.ganerateCubes(tamplate);
game.generateTolls();
game.ganerateIntentorys();

console.log(game);
console.log(game.inventory);
