var invert = require('invert-obj');

function AllocationRollupInstruction (allocationRollupInstruction) {
  this.message = allocationRollupInstruction;
}

AllocationRollupInstruction.prototype.value = function () {
  return this.message;
};


AllocationRollupInstruction.Keys = {
  ROLL_UP: '0',
  DO_NOT_ROLL_UP: '1',
};

AllocationRollupInstruction.Tag = '1735';

AllocationRollupInstruction.Type = 'INT';

AllocationRollupInstruction.Values = invert(AllocationRollupInstruction.Keys);

module.exports = AllocationRollupInstruction;