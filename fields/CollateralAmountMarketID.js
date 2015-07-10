var invert = require('invert-obj');

function CollateralAmountMarketID (collateralAmountMarketId) {
  this.message = collateralAmountMarketId;
}

CollateralAmountMarketID.prototype.value = function () {
  return this.message;
};

CollateralAmountMarketID.Tag = '2093';

CollateralAmountMarketID.Type = 'STRING';

module.exports = CollateralAmountMarketID;