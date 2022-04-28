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

export function Tool(type, game) {
  this.type = type;
  this.game = game;
}

function classConvertor(type) {
  switch (type) {
    case SHOVEL:
      return 'shovel';
    case AXE:
      return 'axe';
    case PICKAXE:
      return 'pickaxe';
  }
}
// Tool.prototype.selectTool() {
//   this
// }
