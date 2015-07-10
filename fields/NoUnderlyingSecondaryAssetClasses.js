var invert = require('invert-obj');

function NoUnderlyingSecondaryAssetClasses (noUnderlyingSecondaryAssetClasses) {
  this.message = noUnderlyingSecondaryAssetClasses;
}

NoUnderlyingSecondaryAssetClasses.prototype.value = function () {
  return this.message;
};

NoUnderlyingSecondaryAssetClasses.Tag = '2080';

NoUnderlyingSecondaryAssetClasses.Type = 'NUMINGROUP';

module.exports = NoUnderlyingSecondaryAssetClasses;