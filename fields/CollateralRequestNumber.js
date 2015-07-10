var invert = require('invert-obj');

function CollateralRequestNumber (collateralRequestNumber) {
  this.message = collateralRequestNumber;
}

CollateralRequestNumber.prototype.value = function () {
  return this.message;
};

CollateralRequestNumber.Tag = '2518';

CollateralRequestNumber.Type = 'INT';

module.exports = CollateralRequestNumber;