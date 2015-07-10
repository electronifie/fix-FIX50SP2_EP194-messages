var invert = require('invert-obj');

function BlockTrdAllocIndicator (blockTrdAllocIndicator) {
  this.message = blockTrdAllocIndicator;
}

BlockTrdAllocIndicator.prototype.value = function () {
  return this.message;
};


BlockTrdAllocIndicator.Keys = {
  BLOCK_TO_BE_ALLOCATED: '0',
  BLOCK_NOT_TO_BE_ALLOCATED: '1',
  ALLOCATED_TRADE: '2',
};

BlockTrdAllocIndicator.Tag = '1980';

BlockTrdAllocIndicator.Type = 'INT';

BlockTrdAllocIndicator.Values = invert(BlockTrdAllocIndicator.Keys);

module.exports = BlockTrdAllocIndicator;