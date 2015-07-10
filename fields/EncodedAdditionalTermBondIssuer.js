var invert = require('invert-obj');

function EncodedAdditionalTermBondIssuer (encodedAdditionalTermBondIssuer) {
  this.message = encodedAdditionalTermBondIssuer;
}

EncodedAdditionalTermBondIssuer.prototype.value = function () {
  return this.message;
};

EncodedAdditionalTermBondIssuer.Tag = '40009';

EncodedAdditionalTermBondIssuer.Type = 'DATA';

module.exports = EncodedAdditionalTermBondIssuer;