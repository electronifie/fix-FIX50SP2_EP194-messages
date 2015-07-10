var invert = require('invert-obj');

function SettlPriceDeterminationMethod (settlPriceDeterminationMethod) {
  this.message = settlPriceDeterminationMethod;
}

SettlPriceDeterminationMethod.prototype.value = function () {
  return this.message;
};

SettlPriceDeterminationMethod.Tag = '2451';

SettlPriceDeterminationMethod.Type = 'INT';

module.exports = SettlPriceDeterminationMethod;