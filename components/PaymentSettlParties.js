var NoPaymentSettlPartyIDs = require('../fields/NoPaymentSettlPartyIDs');
var PaymentSettlPtysSubGrp = require('../components/PaymentSettlPtysSubGrp');
var PaymentSettlPartyID = require('../fields/PaymentSettlPartyID');
var PaymentSettlPartyIDSource = require('../fields/PaymentSettlPartyIDSource');
var PaymentSettlPartyRole = require('../fields/PaymentSettlPartyRole');
var PaymentSettlPartyRoleQualifier = require('../fields/PaymentSettlPartyRoleQualifier');

function PaymentSettlParties (paymentSettlParties) {
  this.message = paymentSettlParties;
}

/* group */

/* component */
PaymentSettlParties.prototype.paymentSettlPtysSubGrp = function () {
  return this.message.groups[PaymentSettlPtysSubGrp.Tag]
    .map(function (paymentSettlPtysSubGrp) {
      return new PaymentSettlPtysSubGrp(paymentSettlPtysSubGrp);
  });
};

/* field */
PaymentSettlParties.prototype.paymentSettlPartyId = function () {
  return new PaymentSettlPartyID(this.message.tags[PaymentSettlPartyID.Tag]);
};

/* field */
PaymentSettlParties.prototype.paymentSettlPartyIdsource = function () {
  return new PaymentSettlPartyIDSource(this.message.tags[PaymentSettlPartyIDSource.Tag]);
};

/* field */
PaymentSettlParties.prototype.paymentSettlPartyRole = function () {
  return new PaymentSettlPartyRole(this.message.tags[PaymentSettlPartyRole.Tag]);
};

/* field */
PaymentSettlParties.prototype.paymentSettlPartyRoleQualifier = function () {
  return new PaymentSettlPartyRoleQualifier(this.message.tags[PaymentSettlPartyRoleQualifier.Tag]);
};

/* end group */

PaymentSettlParties.Tag = '40233';

module.exports = PaymentSettlParties;