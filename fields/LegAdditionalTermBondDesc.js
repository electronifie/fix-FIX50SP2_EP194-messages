var invert = require('invert-obj');

function LegAdditionalTermBondDesc (legAdditionalTermBondDesc) {
  this.message = legAdditionalTermBondDesc;
}

LegAdditionalTermBondDesc.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondDesc.Tag = '41319';

LegAdditionalTermBondDesc.Type = 'STRING';

module.exports = LegAdditionalTermBondDesc;