var invert = require('invert-obj');

function AdditionalTermBondSecurityIDSource (additionalTermBondSecurityIdsource) {
  this.message = additionalTermBondSecurityIdsource;
}

AdditionalTermBondSecurityIDSource.prototype.value = function () {
  return this.message;
};

AdditionalTermBondSecurityIDSource.Tag = '40002';

AdditionalTermBondSecurityIDSource.Type = 'STRING';

module.exports = AdditionalTermBondSecurityIDSource;