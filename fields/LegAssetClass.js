var invert = require('invert-obj');

function LegAssetClass (legAssetClass) {
  this.message = legAssetClass;
}

LegAssetClass.prototype.value = function () {
  return this.message;
};

LegAssetClass.Tag = '2067';

LegAssetClass.Type = 'INT';

module.exports = LegAssetClass;