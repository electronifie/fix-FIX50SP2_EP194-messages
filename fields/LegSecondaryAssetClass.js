var invert = require('invert-obj');

function LegSecondaryAssetClass (legSecondaryAssetClass) {
  this.message = legSecondaryAssetClass;
}

LegSecondaryAssetClass.prototype.value = function () {
  return this.message;
};

LegSecondaryAssetClass.Tag = '2077';

LegSecondaryAssetClass.Type = 'INT';

module.exports = LegSecondaryAssetClass;