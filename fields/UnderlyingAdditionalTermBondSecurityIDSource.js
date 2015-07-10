var invert = require('invert-obj');

function UnderlyingAdditionalTermBondSecurityIDSource (underlyingAdditionalTermBondSecurityIdsource) {
  this.message = underlyingAdditionalTermBondSecurityIdsource;
}

UnderlyingAdditionalTermBondSecurityIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondSecurityIDSource.Tag = '41701';

UnderlyingAdditionalTermBondSecurityIDSource.Type = 'STRING';

module.exports = UnderlyingAdditionalTermBondSecurityIDSource;