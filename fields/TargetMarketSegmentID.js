var invert = require('invert-obj');

function TargetMarketSegmentID (targetMarketSegmentId) {
  this.message = targetMarketSegmentId;
}

TargetMarketSegmentID.prototype.value = function () {
  return this.message;
};

TargetMarketSegmentID.Tag = '1790';

TargetMarketSegmentID.Type = 'STRING';

module.exports = TargetMarketSegmentID;