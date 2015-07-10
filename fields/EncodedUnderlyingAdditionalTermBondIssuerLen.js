var invert = require('invert-obj');

function EncodedUnderlyingAdditionalTermBondIssuerLen (encodedUnderlyingAdditionalTermBondIssuerLen) {
  this.message = encodedUnderlyingAdditionalTermBondIssuerLen;
}

EncodedUnderlyingAdditionalTermBondIssuerLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingAdditionalTermBondIssuerLen.Tag = '42025';

EncodedUnderlyingAdditionalTermBondIssuerLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingAdditionalTermBondIssuerLen;