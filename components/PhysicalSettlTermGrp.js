var NoPhysicalSettlTerms = require('../fields/NoPhysicalSettlTerms');
var PhysicalSettlDeliverableObligationGrp = require('../components/PhysicalSettlDeliverableObligationGrp');
var PhysicalSettlCurrency = require('../fields/PhysicalSettlCurrency');
var PhysicalSettlBusinessDays = require('../fields/PhysicalSettlBusinessDays');
var PhysicalSettlMaximumBusinessDays = require('../fields/PhysicalSettlMaximumBusinessDays');
var PhysicalSettlTermXID = require('../fields/PhysicalSettlTermXID');

function PhysicalSettlTermGrp (physicalSettlTermGrp) {
  this.message = physicalSettlTermGrp;
}

/* group */

/* component */
PhysicalSettlTermGrp.prototype.physicalSettlDeliverableObligationGrp = function () {
  return this.message.groups[PhysicalSettlDeliverableObligationGrp.Tag]
    .map(function (physicalSettlDeliverableObligationGrp) {
      return new PhysicalSettlDeliverableObligationGrp(physicalSettlDeliverableObligationGrp);
  });
};

/* field */
PhysicalSettlTermGrp.prototype.physicalSettlCurrency = function () {
  return new PhysicalSettlCurrency(this.message.tags[PhysicalSettlCurrency.Tag]);
};

/* field */
PhysicalSettlTermGrp.prototype.physicalSettlBusinessDays = function () {
  return new PhysicalSettlBusinessDays(this.message.tags[PhysicalSettlBusinessDays.Tag]);
};

/* field */
PhysicalSettlTermGrp.prototype.physicalSettlMaximumBusinessDays = function () {
  return new PhysicalSettlMaximumBusinessDays(this.message.tags[PhysicalSettlMaximumBusinessDays.Tag]);
};

/* field */
PhysicalSettlTermGrp.prototype.physicalSettlTermXid = function () {
  return new PhysicalSettlTermXID(this.message.tags[PhysicalSettlTermXID.Tag]);
};

/* end group */

PhysicalSettlTermGrp.Tag = '40204';

module.exports = PhysicalSettlTermGrp;