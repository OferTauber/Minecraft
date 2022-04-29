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
  this.element = document.querySelector(`.${classConvertor(type)}`);
}

Tool.prototype.setEvant = function () {
  this.element.addEventListener('click', (e) => {
    void e;
    this.toolCkick();
  });
};

Tool.prototype.toolCkick = function () {
  const previousToolType = this.game.currentTool && this.game.currentTool.type;
  unSelectTool(this.game.currentTool);
  if (previousToolType !== this.type) selectTool(this);
};

function selectTool(tool) {
  console.log(tool.type);
  tool.element.classList.add('selected');
  tool.game.currentTool = tool;
}

function unSelectTool(tool) {
  if (tool) {
    tool.element.classList.remove('selected');
    tool.game.currentTool = undefined;
  }
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
