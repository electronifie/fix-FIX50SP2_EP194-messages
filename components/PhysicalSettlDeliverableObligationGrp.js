var NoPhysicalSettlDeliverableObligations = require('../fields/NoPhysicalSettlDeliverableObligations');
var PhysicalSettlDeliverableObligationType = require('../fields/PhysicalSettlDeliverableObligationType');
var PhysicalSettlDeliverableObligationValue = require('../fields/PhysicalSettlDeliverableObligationValue');

function PhysicalSettlDeliverableObligationGrp (physicalSettlDeliverableObligationGrp) {
  this.message = physicalSettlDeliverableObligationGrp;
}

/* group */

/* field */
PhysicalSettlDeliverableObligationGrp.prototype.physicalSettlDeliverableObligationType = function () {
  return new PhysicalSettlDeliverableObligationType(this.message.tags[PhysicalSettlDeliverableObligationType.Tag]);
};

/* field */
PhysicalSettlDeliverableObligationGrp.prototype.physicalSettlDeliverableObligationValue = function () {
  return new PhysicalSettlDeliverableObligationValue(this.message.tags[PhysicalSettlDeliverableObligationValue.Tag]);
};

/* end group */

PhysicalSettlDeliverableObligationGrp.Tag = '40209';

module.exports = PhysicalSettlDeliverableObligationGrp;