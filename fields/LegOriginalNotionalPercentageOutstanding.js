var invert = require('invert-obj');

function LegOriginalNotionalPercentageOutstanding (legOriginalNotionalPercentageOutstanding) {
  this.message = legOriginalNotionalPercentageOutstanding;
}

LegOriginalNotionalPercentageOutstanding.prototype.value = function () {
  return this.message;
};

LegOriginalNotionalPercentageOutstanding.Tag = '2152';

LegOriginalNotionalPercentageOutstanding.Type = 'PERCENTAGE';

module.exports = LegOriginalNotionalPercentageOutstanding;