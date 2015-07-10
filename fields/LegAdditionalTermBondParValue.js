var invert = require('invert-obj');

function LegAdditionalTermBondParValue (legAdditionalTermBondParValue) {
  this.message = legAdditionalTermBondParValue;
}

LegAdditionalTermBondParValue.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondParValue.Tag = '41330';

LegAdditionalTermBondParValue.Type = 'AMT';

module.exports = LegAdditionalTermBondParValue;