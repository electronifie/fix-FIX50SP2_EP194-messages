var invert = require('invert-obj');

function LegAdditionalTermBondMaturityDate (legAdditionalTermBondMaturityDate) {
  this.message = legAdditionalTermBondMaturityDate;
}

LegAdditionalTermBondMaturityDate.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondMaturityDate.Tag = '41329';

LegAdditionalTermBondMaturityDate.Type = 'LOCALMKTDATE';

module.exports = LegAdditionalTermBondMaturityDate;