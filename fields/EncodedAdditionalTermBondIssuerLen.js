var invert = require('invert-obj');

function EncodedAdditionalTermBondIssuerLen (encodedAdditionalTermBondIssuerLen) {
  this.message = encodedAdditionalTermBondIssuerLen;
}

EncodedAdditionalTermBondIssuerLen.prototype.value = function () {
  return this.message;
};

EncodedAdditionalTermBondIssuerLen.Tag = '40008';

EncodedAdditionalTermBondIssuerLen.Type = 'LENGTH';

module.exports = EncodedAdditionalTermBondIssuerLen;