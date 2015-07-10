var invert = require('invert-obj');

function CollateralAmountMarketSegmentID (collateralAmountMarketSegmentId) {
  this.message = collateralAmountMarketSegmentId;
}

CollateralAmountMarketSegmentID.prototype.value = function () {
  return this.message;
};

CollateralAmountMarketSegmentID.Tag = '2092';

CollateralAmountMarketSegmentID.Type = 'STRING';

module.exports = CollateralAmountMarketSegmentID;