var invert = require('invert-obj');

function LegStreamMaximumPaymentAmount (legStreamMaximumPaymentAmount) {
  this.message = legStreamMaximumPaymentAmount;
}

LegStreamMaximumPaymentAmount.prototype.value = function () {
  return this.message;
};

LegStreamMaximumPaymentAmount.Tag = '41552';

LegStreamMaximumPaymentAmount.Type = 'AMT';

module.exports = LegStreamMaximumPaymentAmount;