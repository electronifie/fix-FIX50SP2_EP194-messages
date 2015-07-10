var invert = require('invert-obj');

function NoUnderlyingAdditionalTermBondRefs (noUnderlyingAdditionalTermBondRefs) {
  this.message = noUnderlyingAdditionalTermBondRefs;
}

NoUnderlyingAdditionalTermBondRefs.prototype.value = function () {
  return this.message;
};

NoUnderlyingAdditionalTermBondRefs.Tag = '41340';

NoUnderlyingAdditionalTermBondRefs.Type = 'NUMINGROUP';

module.exports = NoUnderlyingAdditionalTermBondRefs;