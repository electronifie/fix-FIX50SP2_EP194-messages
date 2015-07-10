var invert = require('invert-obj');

function NoMarginAmt (noMarginAmt) {
  this.message = noMarginAmt;
}

NoMarginAmt.prototype.value = function () {
  return this.message;
};

NoMarginAmt.Tag = '1643';

NoMarginAmt.Type = 'NUMINGROUP';

module.exports = NoMarginAmt;