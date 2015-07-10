var NoLegPhysicalSettlDeliverableObligations = require('../fields/NoLegPhysicalSettlDeliverableObligations');
var LegPhysicalSettlDeliverableObligationType = require('../fields/LegPhysicalSettlDeliverableObligationType');
var LegPhysicalSettlDeliverableObligationValue = require('../fields/LegPhysicalSettlDeliverableObligationValue');

function LegPhysicalSettlDeliverableObligationGrp (legPhysicalSettlDeliverableObligationGrp) {
  this.message = legPhysicalSettlDeliverableObligationGrp;
}

/* group */

/* field */
LegPhysicalSettlDeliverableObligationGrp.prototype.legPhysicalSettlDeliverableObligationType = function () {
  return new LegPhysicalSettlDeliverableObligationType(this.message.tags[LegPhysicalSettlDeliverableObligationType.Tag]);
};

/* field */
LegPhysicalSettlDeliverableObligationGrp.prototype.legPhysicalSettlDeliverableObligationValue = function () {
  return new LegPhysicalSettlDeliverableObligationValue(this.message.tags[LegPhysicalSettlDeliverableObligationValue.Tag]);
};

/* end group */

LegPhysicalSettlDeliverableObligationGrp.Tag = '41604';

module.exports = LegPhysicalSettlDeliverableObligationGrp;