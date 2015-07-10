var invert = require('invert-obj');

function LegProvisionCashSettlValueTime (legProvisionCashSettlValueTime) {
  this.message = legProvisionCashSettlValueTime;
}

LegProvisionCashSettlValueTime.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlValueTime.Tag = '40524';

LegProvisionCashSettlValueTime.Type = 'LOCALMKTTIME';

module.exports = LegProvisionCashSettlValueTime;