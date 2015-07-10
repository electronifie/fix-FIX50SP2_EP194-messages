var NoUnderlyingPaymentStreamPaymentDates = require('../fields/NoUnderlyingPaymentStreamPaymentDates');
var UnderlyingPaymentStreamPaymentDate = require('../fields/UnderlyingPaymentStreamPaymentDate');
var UnderlyingPaymentStreamPaymentDateType = require('../fields/UnderlyingPaymentStreamPaymentDateType');

function UnderlyingPaymentStreamPaymentDateGrp (underlyingPaymentStreamPaymentDateGrp) {
  this.message = underlyingPaymentStreamPaymentDateGrp;
}

/* group */

/* field */
UnderlyingPaymentStreamPaymentDateGrp.prototype.underlyingPaymentStreamPaymentDate = function () {
  return new UnderlyingPaymentStreamPaymentDate(this.message.tags[UnderlyingPaymentStreamPaymentDate.Tag]);
};

/* field */
UnderlyingPaymentStreamPaymentDateGrp.prototype.underlyingPaymentStreamPaymentDateType = function () {
  return new UnderlyingPaymentStreamPaymentDateType(this.message.tags[UnderlyingPaymentStreamPaymentDateType.Tag]);
};

/* end group */

UnderlyingPaymentStreamPaymentDateGrp.Tag = '41937';

module.exports = UnderlyingPaymentStreamPaymentDateGrp;