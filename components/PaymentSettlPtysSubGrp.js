var NoPaymentSettlPartySubIDs = require('../fields/NoPaymentSettlPartySubIDs');
var PaymentSettlPartySubID = require('../fields/PaymentSettlPartySubID');
var PaymentSettlPartySubIDType = require('../fields/PaymentSettlPartySubIDType');

function PaymentSettlPtysSubGrp (paymentSettlPtysSubGrp) {
  this.message = paymentSettlPtysSubGrp;
}

/* group */

/* field */
PaymentSettlPtysSubGrp.prototype.paymentSettlPartySubId = function () {
  return new PaymentSettlPartySubID(this.message.tags[PaymentSettlPartySubID.Tag]);
};

/* field */
PaymentSettlPtysSubGrp.prototype.paymentSettlPartySubIdtype = function () {
  return new PaymentSettlPartySubIDType(this.message.tags[PaymentSettlPartySubIDType.Tag]);
};

/* end group */

PaymentSettlPtysSubGrp.Tag = '40238';

module.exports = PaymentSettlPtysSubGrp;