var NoCashSettlDealers = require('../fields/NoCashSettlDealers');
var CashSettlDealer = require('../fields/CashSettlDealer');

function CashSettlDealerGrp (cashSettlDealerGrp) {
  this.message = cashSettlDealerGrp;
}

/* group */

/* field */
CashSettlDealerGrp.prototype.cashSettlDealer = function () {
  return new CashSettlDealer(this.message.tags[CashSettlDealer.Tag]);
};

/* end group */

CashSettlDealerGrp.Tag = '40277';

module.exports = CashSettlDealerGrp;