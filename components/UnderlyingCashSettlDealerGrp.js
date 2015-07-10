var NoUnderlyingCashSettlDealers = require('../fields/NoUnderlyingCashSettlDealers');
var UnderlyingCashSettlDealer = require('../fields/UnderlyingCashSettlDealer');

function UnderlyingCashSettlDealerGrp (underlyingCashSettlDealerGrp) {
  this.message = underlyingCashSettlDealerGrp;
}

/* group */

/* field */
UnderlyingCashSettlDealerGrp.prototype.underlyingCashSettlDealer = function () {
  return new UnderlyingCashSettlDealer(this.message.tags[UnderlyingCashSettlDealer.Tag]);
};

/* end group */

UnderlyingCashSettlDealerGrp.Tag = '42039';

module.exports = UnderlyingCashSettlDealerGrp;