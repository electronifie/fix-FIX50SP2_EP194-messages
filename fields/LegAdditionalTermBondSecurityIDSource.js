var invert = require('invert-obj');

function LegAdditionalTermBondSecurityIDSource (legAdditionalTermBondSecurityIdsource) {
  this.message = legAdditionalTermBondSecurityIdsource;
}

LegAdditionalTermBondSecurityIDSource.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondSecurityIDSource.Tag = '41318';

LegAdditionalTermBondSecurityIDSource.Type = 'STRING';

module.exports = LegAdditionalTermBondSecurityIDSource;