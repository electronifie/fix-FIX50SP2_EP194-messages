var invert = require('invert-obj');

function PayCollectMarketSegmentID (payCollectMarketSegmentId) {
  this.message = payCollectMarketSegmentId;
}

PayCollectMarketSegmentID.prototype.value = function () {
  return this.message;
};

PayCollectMarketSegmentID.Tag = '1712';

PayCollectMarketSegmentID.Type = 'STRING';

module.exports = PayCollectMarketSegmentID;