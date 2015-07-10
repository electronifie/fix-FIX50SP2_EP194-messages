var invert = require('invert-obj');

function PosAmtMarketSegmentID (posAmtMarketSegmentId) {
  this.message = posAmtMarketSegmentId;
}

PosAmtMarketSegmentID.prototype.value = function () {
  return this.message;
};

PosAmtMarketSegmentID.Tag = '2099';

PosAmtMarketSegmentID.Type = 'STRING';

module.exports = PosAmtMarketSegmentID;