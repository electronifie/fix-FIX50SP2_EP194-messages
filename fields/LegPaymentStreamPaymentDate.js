var invert = require('invert-obj');

function LegPaymentStreamPaymentDate (legPaymentStreamPaymentDate) {
  this.message = legPaymentStreamPaymentDate;
}

LegPaymentStreamPaymentDate.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPaymentDate.Tag = '41590';

LegPaymentStreamPaymentDate.Type = 'LOCALMKTDATE';

module.exports = LegPaymentStreamPaymentDate;