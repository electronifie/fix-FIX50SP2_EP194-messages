var invert = require('invert-obj');

function UnderlyingOriginalNotionalPercentageOutstanding (underlyingOriginalNotionalPercentageOutstanding) {
  this.message = underlyingOriginalNotionalPercentageOutstanding;
}

UnderlyingOriginalNotionalPercentageOutstanding.prototype.value = function () {
  return this.message;
};

UnderlyingOriginalNotionalPercentageOutstanding.Tag = '1456';

UnderlyingOriginalNotionalPercentageOutstanding.Type = 'PERCENTAGE';

module.exports = UnderlyingOriginalNotionalPercentageOutstanding;