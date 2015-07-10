var invert = require('invert-obj');

function LegAdditionalTermBondIssuer (legAdditionalTermBondIssuer) {
  this.message = legAdditionalTermBondIssuer;
}

LegAdditionalTermBondIssuer.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondIssuer.Tag = '41323';

LegAdditionalTermBondIssuer.Type = 'STRING';

module.exports = LegAdditionalTermBondIssuer;