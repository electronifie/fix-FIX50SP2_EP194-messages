var invert = require('invert-obj');

function UnderlyingAdditionalTermBondIssuer (underlyingAdditionalTermBondIssuer) {
  this.message = underlyingAdditionalTermBondIssuer;
}

UnderlyingAdditionalTermBondIssuer.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondIssuer.Tag = '42017';

UnderlyingAdditionalTermBondIssuer.Type = 'STRING';

module.exports = UnderlyingAdditionalTermBondIssuer;