var invert = require('invert-obj');

function NoAdditionalTermBondRefs (noAdditionalTermBondRefs) {
  this.message = noAdditionalTermBondRefs;
}

NoAdditionalTermBondRefs.prototype.value = function () {
  return this.message;
};

NoAdditionalTermBondRefs.Tag = '40000';

NoAdditionalTermBondRefs.Type = 'NUMINGROUP';

module.exports = NoAdditionalTermBondRefs;