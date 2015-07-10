var NoPaymentSettls = require('../fields/NoPaymentSettls');
var PaymentSettlParties = require('../components/PaymentSettlParties');
var PaymentSettlAmount = require('../fields/PaymentSettlAmount');
var PaymentSettlCurrency = require('../fields/PaymentSettlCurrency');

function PaymentSettlGrp (paymentSettlGrp) {
  this.message = paymentSettlGrp;
}

/* group */

/* component */
PaymentSettlGrp.prototype.paymentSettlParties = function () {
  return this.message.groups[PaymentSettlParties.Tag]
    .map(function (paymentSettlParties) {
      return new PaymentSettlParties(paymentSettlParties);
  });
};

/* field */
PaymentSettlGrp.prototype.paymentSettlAmount = function () {
  return new PaymentSettlAmount(this.message.tags[PaymentSettlAmount.Tag]);
};

/* field */
PaymentSettlGrp.prototype.paymentSettlCurrency = function () {
  return new PaymentSettlCurrency(this.message.tags[PaymentSettlCurrency.Tag]);
};

/* end group */

PaymentSettlGrp.Tag = '40230';

module.exports = PaymentSettlGrp;