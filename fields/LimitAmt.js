var invert = require('invert-obj');

function LimitAmt (limitAmt) {
  this.message = limitAmt;
}

LimitAmt.prototype.value = function () {
  return this.message;
};

LimitAmt.Tag = '2395';

LimitAmt.Type = 'AMT';

module.exports = LimitAmt;