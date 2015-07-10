var invert = require('invert-obj');

function NotionalPercentageOutstanding (notionalPercentageOutstanding) {
  this.message = notionalPercentageOutstanding;
}

NotionalPercentageOutstanding.prototype.value = function () {
  return this.message;
};

NotionalPercentageOutstanding.Tag = '1451';

NotionalPercentageOutstanding.Type = 'PERCENTAGE';

module.exports = NotionalPercentageOutstanding;