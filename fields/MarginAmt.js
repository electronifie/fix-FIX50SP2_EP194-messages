var invert = require('invert-obj');

function MarginAmt (marginAmt) {
  this.message = marginAmt;
}

MarginAmt.prototype.value = function () {
  return this.message;
};

MarginAmt.Tag = '1645';

MarginAmt.Type = 'AMT';

module.exports = MarginAmt;