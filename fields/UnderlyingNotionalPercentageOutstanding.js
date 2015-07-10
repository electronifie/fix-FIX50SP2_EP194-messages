var invert = require('invert-obj');

function UnderlyingNotionalPercentageOutstanding (underlyingNotionalPercentageOutstanding) {
  this.message = underlyingNotionalPercentageOutstanding;
}

UnderlyingNotionalPercentageOutstanding.prototype.value = function () {
  return this.message;
};

UnderlyingNotionalPercentageOutstanding.Tag = '1455';

UnderlyingNotionalPercentageOutstanding.Type = 'PERCENTAGE';

module.exports = UnderlyingNotionalPercentageOutstanding;