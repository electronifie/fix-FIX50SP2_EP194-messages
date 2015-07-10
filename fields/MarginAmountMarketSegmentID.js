var invert = require('invert-obj');

function MarginAmountMarketSegmentID (marginAmountMarketSegmentId) {
  this.message = marginAmountMarketSegmentId;
}

MarginAmountMarketSegmentID.prototype.value = function () {
  return this.message;
};

MarginAmountMarketSegmentID.Tag = '1714';

MarginAmountMarketSegmentID.Type = 'STRING';

module.exports = MarginAmountMarketSegmentID;