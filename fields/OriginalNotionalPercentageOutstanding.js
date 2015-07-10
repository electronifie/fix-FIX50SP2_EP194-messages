var invert = require('invert-obj');

function OriginalNotionalPercentageOutstanding (originalNotionalPercentageOutstanding) {
  this.message = originalNotionalPercentageOutstanding;
}

OriginalNotionalPercentageOutstanding.prototype.value = function () {
  return this.message;
};

OriginalNotionalPercentageOutstanding.Tag = '1452';

OriginalNotionalPercentageOutstanding.Type = 'PERCENTAGE';

module.exports = OriginalNotionalPercentageOutstanding;