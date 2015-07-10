var invert = require('invert-obj');

function AdditionalTermBondMaturityDate (additionalTermBondMaturityDate) {
  this.message = additionalTermBondMaturityDate;
}

AdditionalTermBondMaturityDate.prototype.value = function () {
  return this.message;
};

AdditionalTermBondMaturityDate.Tag = '40013';

AdditionalTermBondMaturityDate.Type = 'LOCALMKTDATE';

module.exports = AdditionalTermBondMaturityDate;