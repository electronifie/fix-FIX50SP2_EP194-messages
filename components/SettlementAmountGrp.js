var NoSettlementAmounts = require('../fields/NoSettlementAmounts');
var SettlementAmount = require('../fields/SettlementAmount');
var SettlementAmountCurrency = require('../fields/SettlementAmountCurrency');

function SettlementAmountGrp (settlementAmountGrp) {
  this.message = settlementAmountGrp;
}

/* group */

/* field */
SettlementAmountGrp.prototype.settlementAmount = function () {
  return new SettlementAmount(this.message.tags[SettlementAmount.Tag]);
};

/* field */
SettlementAmountGrp.prototype.settlementAmountCurrency = function () {
  return new SettlementAmountCurrency(this.message.tags[SettlementAmountCurrency.Tag]);
};

/* end group */

SettlementAmountGrp.Tag = '1700';

module.exports = SettlementAmountGrp;