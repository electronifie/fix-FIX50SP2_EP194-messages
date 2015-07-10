var invert = require('invert-obj');

function LegAdditionalTermBondSeniority (legAdditionalTermBondSeniority) {
  this.message = legAdditionalTermBondSeniority;
}

LegAdditionalTermBondSeniority.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondSeniority.Tag = '41326';

LegAdditionalTermBondSeniority.Type = 'STRING';

module.exports = LegAdditionalTermBondSeniority;