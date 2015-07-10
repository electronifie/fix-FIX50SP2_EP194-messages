var invert = require('invert-obj');

function AdditionalTermBondIssuer (additionalTermBondIssuer) {
  this.message = additionalTermBondIssuer;
}

AdditionalTermBondIssuer.prototype.value = function () {
  return this.message;
};

AdditionalTermBondIssuer.Tag = '40007';

AdditionalTermBondIssuer.Type = 'STRING';

module.exports = AdditionalTermBondIssuer;