var invert = require('invert-obj');

function CollateralType (collateralType) {
  this.message = collateralType;
}

CollateralType.prototype.value = function () {
  return this.message;
};

CollateralType.Tag = '1706';

CollateralType.Type = 'STRING';

module.exports = CollateralType;