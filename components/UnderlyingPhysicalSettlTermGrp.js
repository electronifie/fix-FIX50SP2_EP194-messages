var NoUnderlyingPhysicalSettlTerms = require('../fields/NoUnderlyingPhysicalSettlTerms');
var UnderlyingPhysicalSettlDeliverableObligationGrp = require('../components/UnderlyingPhysicalSettlDeliverableObligationGrp');
var UnderlyingPhysicalSettlCurrency = require('../fields/UnderlyingPhysicalSettlCurrency');
var UnderlyingPhysicalSettlBusinessDays = require('../fields/UnderlyingPhysicalSettlBusinessDays');
var UnderlyingPhysicalSettlMaximumBusinessDays = require('../fields/UnderlyingPhysicalSettlMaximumBusinessDays');
var UnderlyingPhysicalSettlTermXID = require('../fields/UnderlyingPhysicalSettlTermXID');

function UnderlyingPhysicalSettlTermGrp (underlyingPhysicalSettlTermGrp) {
  this.message = underlyingPhysicalSettlTermGrp;
}

/* group */

/* component */
UnderlyingPhysicalSettlTermGrp.prototype.underlyingPhysicalSettlDeliverableObligationGrp = function () {
  return this.message.groups[UnderlyingPhysicalSettlDeliverableObligationGrp.Tag]
    .map(function (underlyingPhysicalSettlDeliverableObligationGrp) {
      return new UnderlyingPhysicalSettlDeliverableObligationGrp(underlyingPhysicalSettlDeliverableObligationGrp);
  });
};

/* field */
UnderlyingPhysicalSettlTermGrp.prototype.underlyingPhysicalSettlCurrency = function () {
  return new UnderlyingPhysicalSettlCurrency(this.message.tags[UnderlyingPhysicalSettlCurrency.Tag]);
};

/* field */
UnderlyingPhysicalSettlTermGrp.prototype.underlyingPhysicalSettlBusinessDays = function () {
  return new UnderlyingPhysicalSettlBusinessDays(this.message.tags[UnderlyingPhysicalSettlBusinessDays.Tag]);
};

/* field */
UnderlyingPhysicalSettlTermGrp.prototype.underlyingPhysicalSettlMaximumBusinessDays = function () {
  return new UnderlyingPhysicalSettlMaximumBusinessDays(this.message.tags[UnderlyingPhysicalSettlMaximumBusinessDays.Tag]);
};

/* field */
UnderlyingPhysicalSettlTermGrp.prototype.underlyingPhysicalSettlTermXid = function () {
  return new UnderlyingPhysicalSettlTermXID(this.message.tags[UnderlyingPhysicalSettlTermXID.Tag]);
};

/* end group */

UnderlyingPhysicalSettlTermGrp.Tag = '42060';

module.exports = UnderlyingPhysicalSettlTermGrp;