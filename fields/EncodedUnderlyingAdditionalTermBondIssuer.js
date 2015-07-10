var invert = require('invert-obj');

function EncodedUnderlyingAdditionalTermBondIssuer (encodedUnderlyingAdditionalTermBondIssuer) {
  this.message = encodedUnderlyingAdditionalTermBondIssuer;
}

EncodedUnderlyingAdditionalTermBondIssuer.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingAdditionalTermBondIssuer.Tag = '42026';

EncodedUnderlyingAdditionalTermBondIssuer.Type = 'DATA';

module.exports = EncodedUnderlyingAdditionalTermBondIssuer;