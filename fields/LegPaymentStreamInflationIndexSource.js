var invert = require('invert-obj');

function LegPaymentStreamInflationIndexSource (legPaymentStreamInflationIndexSource) {
  this.message = legPaymentStreamInflationIndexSource;
}

LegPaymentStreamInflationIndexSource.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInflationIndexSource.Tag = '40354';

LegPaymentStreamInflationIndexSource.Type = 'INT';

module.exports = LegPaymentStreamInflationIndexSource;