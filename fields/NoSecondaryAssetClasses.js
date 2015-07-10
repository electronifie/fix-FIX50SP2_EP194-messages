var invert = require('invert-obj');

function NoSecondaryAssetClasses (noSecondaryAssetClasses) {
  this.message = noSecondaryAssetClasses;
}

NoSecondaryAssetClasses.prototype.value = function () {
  return this.message;
};

NoSecondaryAssetClasses.Tag = '1976';

NoSecondaryAssetClasses.Type = 'NUMINGROUP';

module.exports = NoSecondaryAssetClasses;