var NoLegCashSettlDealers = require('../fields/NoLegCashSettlDealers');
var LegCashSettlDealer = require('../fields/LegCashSettlDealer');

function LegCashSettlDealerGrp (legCashSettlDealerGrp) {
  this.message = legCashSettlDealerGrp;
}

/* group */

/* field */
LegCashSettlDealerGrp.prototype.legCashSettlDealer = function () {
  return new LegCashSettlDealer(this.message.tags[LegCashSettlDealer.Tag]);
};

/* end group */

LegCashSettlDealerGrp.Tag = '41342';

module.exports = LegCashSettlDealerGrp;