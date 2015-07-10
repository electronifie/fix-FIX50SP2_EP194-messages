var invert = require('invert-obj');

function EncodedLegAdditionalTermBondIssuer (encodedLegAdditionalTermBondIssuer) {
  this.message = encodedLegAdditionalTermBondIssuer;
}

EncodedLegAdditionalTermBondIssuer.prototype.value = function () {
  return this.message;
};

EncodedLegAdditionalTermBondIssuer.Tag = '41325';

EncodedLegAdditionalTermBondIssuer.Type = 'DATA';

module.exports = EncodedLegAdditionalTermBondIssuer;