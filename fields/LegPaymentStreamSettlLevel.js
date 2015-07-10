var invert = require('invert-obj');

function LegPaymentStreamSettlLevel (legPaymentStreamSettlLevel) {
  this.message = legPaymentStreamSettlLevel;
}

LegPaymentStreamSettlLevel.prototype.value = function () {
  return this.message;
};

LegPaymentStreamSettlLevel.Tag = '41568';

LegPaymentStreamSettlLevel.Type = 'INT';

module.exports = LegPaymentStreamSettlLevel;