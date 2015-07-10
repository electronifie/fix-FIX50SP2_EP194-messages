var NoUnderlyingPhysicalSettlDeliverableObligations = require('../fields/NoUnderlyingPhysicalSettlDeliverableObligations');
var UnderlyingPhysicalSettlDeliverableObligationType = require('../fields/UnderlyingPhysicalSettlDeliverableObligationType');
var UnderlyingPhysicalSettlDeliverableObligationValue = require('../fields/UnderlyingPhysicalSettlDeliverableObligationValue');

function UnderlyingPhysicalSettlDeliverableObligationGrp (underlyingPhysicalSettlDeliverableObligationGrp) {
  this.message = underlyingPhysicalSettlDeliverableObligationGrp;
}

/* group */

/* field */
UnderlyingPhysicalSettlDeliverableObligationGrp.prototype.underlyingPhysicalSettlDeliverableObligationType = function () {
  return new UnderlyingPhysicalSettlDeliverableObligationType(this.message.tags[UnderlyingPhysicalSettlDeliverableObligationType.Tag]);
};

/* field */
UnderlyingPhysicalSettlDeliverableObligationGrp.prototype.underlyingPhysicalSettlDeliverableObligationValue = function () {
  return new UnderlyingPhysicalSettlDeliverableObligationValue(this.message.tags[UnderlyingPhysicalSettlDeliverableObligationValue.Tag]);
};

/* end group */

UnderlyingPhysicalSettlDeliverableObligationGrp.Tag = '42065';

module.exports = UnderlyingPhysicalSettlDeliverableObligationGrp;