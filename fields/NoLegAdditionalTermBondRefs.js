var invert = require('invert-obj');

function NoLegAdditionalTermBondRefs (noLegAdditionalTermBondRefs) {
  this.message = noLegAdditionalTermBondRefs;
}

NoLegAdditionalTermBondRefs.prototype.value = function () {
  return this.message;
};

NoLegAdditionalTermBondRefs.Tag = '41316';

NoLegAdditionalTermBondRefs.Type = 'NUMINGROUP';

module.exports = NoLegAdditionalTermBondRefs;