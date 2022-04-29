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

export function Tool(type, game) {
  this.type = type;
  this.game = game;
  this.element = document.querySelector(`.${classConvertor(type)}`);
}

Tool.prototype.setEvant = function () {
  this.element.addEventListener('click', (e) => {
    void e;
    toolOrInventoryCkick(this);
  });
};

function selectTool(tool) {
  tool.element.classList.add('selected');
  tool.game.currentTool = tool;
}

function selectInventory(inventory) {
  inventory.element.classList.add('selected');
  inventory.game.currentTool = inventory;
}

function unSelectTool(tool) {
  if (tool) {
    tool.element.classList.remove('selected');
    tool.game.currentTool = undefined;
  }
}

function unSelectInventory(inventory) {
  if (inventory) {
    inventory.element.classList.remove('selected');
    inventory.game.currentTool = undefined;
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
    case WOOD_INVENTORY:
      return 'wood-inventory';
    case LEAF_INVENTORY:
      return 'leaf-inventory';
    case EARTH_INVENTORY:
      return 'earth-inventory';
    case STONE_INVENTORY:
      return 'stone-inventory';
    case LEAF_INVENTORY:
      return 'leaf-inventory';
  }
}

function isTool(toolOrInventory) {
  return (
    toolOrInventory &&
    (toolOrInventory.type === AXE ||
      toolOrInventory.type === SHOVEL ||
      toolOrInventory.type === PICKAXE)
  );
}

function toolOrInventoryCkick(tOi) {
  //! tOi = toolOrInventoiy
  const previousToolType = tOi.game.currentTool && tOi.game.currentTool.type;
  isTool(tOi.game.currentTool)
    ? unSelectTool(tOi.game.currentTool)
    : unSelectInventory(tOi.game.currentTool);
  if (previousToolType !== tOi.type) {
    isTool(tOi) ? selectTool(tOi) : selectInventory(tOi);
  }
}

export function Inventory(type, game) {
  this.type = type;
  this.game = game;
  this.inventory = 0;
  this.element = document.querySelector(`.${classConvertor(type)}`);
  this.element.addEventListener('click', (e) => {
    void e;
    toolOrInventoryCkick(this);
  });
}

Inventory.prototype.increment = function () {
  this.inventory++;
  this.element.textContent = this.inventory;
};
Inventory.prototype.decrement = function () {
  if (this.inventory) {
    this.inventory--;
    this.element.textContent = this.inventory || '';
  }
};
