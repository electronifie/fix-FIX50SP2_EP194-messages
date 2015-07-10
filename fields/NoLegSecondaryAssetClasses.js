var invert = require('invert-obj');

function NoLegSecondaryAssetClasses (noLegSecondaryAssetClasses) {
  this.message = noLegSecondaryAssetClasses;
}

NoLegSecondaryAssetClasses.prototype.value = function () {
  return this.message;
};

NoLegSecondaryAssetClasses.Tag = '2076';

NoLegSecondaryAssetClasses.Type = 'NUMINGROUP';

module.exports = NoLegSecondaryAssetClasses;