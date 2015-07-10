var invert = require('invert-obj');

function LegPaymentStreamFRADiscounting (legPaymentStreamFradiscounting) {
  this.message = legPaymentStreamFradiscounting;
}

LegPaymentStreamFRADiscounting.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFRADiscounting.Tag = '40358';

LegPaymentStreamFRADiscounting.Type = 'INT';

module.exports = LegPaymentStreamFRADiscounting;