var invert = require('invert-obj');

function LegNotionalPercentageOutstanding (legNotionalPercentageOutstanding) {
  this.message = legNotionalPercentageOutstanding;
}

LegNotionalPercentageOutstanding.prototype.value = function () {
  return this.message;
};

LegNotionalPercentageOutstanding.Tag = '2151';

LegNotionalPercentageOutstanding.Type = 'PERCENTAGE';

module.exports = LegNotionalPercentageOutstanding;