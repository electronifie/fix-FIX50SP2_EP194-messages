var invert = require('invert-obj');

function EncodedLegAdditionalTermBondIssuerLen (encodedLegAdditionalTermBondIssuerLen) {
  this.message = encodedLegAdditionalTermBondIssuerLen;
}

EncodedLegAdditionalTermBondIssuerLen.prototype.value = function () {
  return this.message;
};

EncodedLegAdditionalTermBondIssuerLen.Tag = '41324';

EncodedLegAdditionalTermBondIssuerLen.Type = 'LENGTH';

module.exports = EncodedLegAdditionalTermBondIssuerLen;