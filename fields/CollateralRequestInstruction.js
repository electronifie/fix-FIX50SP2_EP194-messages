var invert = require('invert-obj');

function CollateralRequestInstruction (collateralRequestInstruction) {
  this.message = collateralRequestInstruction;
}

CollateralRequestInstruction.prototype.value = function () {
  return this.message;
};

CollateralRequestInstruction.Tag = '2516';

CollateralRequestInstruction.Type = 'STRING';

module.exports = CollateralRequestInstruction;