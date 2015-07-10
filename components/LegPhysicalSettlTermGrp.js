var NoLegPhysicalSettlTerms = require('../fields/NoLegPhysicalSettlTerms');
var LegPhysicalSettlDeliverableObligationGrp = require('../components/LegPhysicalSettlDeliverableObligationGrp');
var LegPhysicalSettlCurency = require('../fields/LegPhysicalSettlCurency');
var LegPhysicalSettlBusinessDays = require('../fields/LegPhysicalSettlBusinessDays');
var LegPhysicalSettlMaximumBusinessDays = require('../fields/LegPhysicalSettlMaximumBusinessDays');
var LegPhysicalSettlTermXID = require('../fields/LegPhysicalSettlTermXID');

function LegPhysicalSettlTermGrp (legPhysicalSettlTermGrp) {
  this.message = legPhysicalSettlTermGrp;
}

/* group */

/* component */
LegPhysicalSettlTermGrp.prototype.legPhysicalSettlDeliverableObligationGrp = function () {
  return this.message.groups[LegPhysicalSettlDeliverableObligationGrp.Tag]
    .map(function (legPhysicalSettlDeliverableObligationGrp) {
      return new LegPhysicalSettlDeliverableObligationGrp(legPhysicalSettlDeliverableObligationGrp);
  });
};

/* field */
LegPhysicalSettlTermGrp.prototype.legPhysicalSettlCurency = function () {
  return new LegPhysicalSettlCurency(this.message.tags[LegPhysicalSettlCurency.Tag]);
};

/* field */
LegPhysicalSettlTermGrp.prototype.legPhysicalSettlBusinessDays = function () {
  return new LegPhysicalSettlBusinessDays(this.message.tags[LegPhysicalSettlBusinessDays.Tag]);
};

/* field */
LegPhysicalSettlTermGrp.prototype.legPhysicalSettlMaximumBusinessDays = function () {
  return new LegPhysicalSettlMaximumBusinessDays(this.message.tags[LegPhysicalSettlMaximumBusinessDays.Tag]);
};

/* field */
LegPhysicalSettlTermGrp.prototype.legPhysicalSettlTermXid = function () {
  return new LegPhysicalSettlTermXID(this.message.tags[LegPhysicalSettlTermXID.Tag]);
};

/* end group */

LegPhysicalSettlTermGrp.Tag = '41599';

module.exports = LegPhysicalSettlTermGrp;