var NoLegProvisionDateBusinessCenters = require('../fields/NoLegProvisionDateBusinessCenters');
var LegProvisionDateBusinessCenter = require('../fields/LegProvisionDateBusinessCenter');

function LegProvisionDateBusinessCenterGrp (legProvisionDateBusinessCenterGrp) {
  this.message = legProvisionDateBusinessCenterGrp;
}

/* group */

/* field */
LegProvisionDateBusinessCenterGrp.prototype.legProvisionDateBusinessCenter = function () {
  return new LegProvisionDateBusinessCenter(this.message.tags[LegProvisionDateBusinessCenter.Tag]);
};

/* end group */

LegProvisionDateBusinessCenterGrp.Tag = '40939';

module.exports = LegProvisionDateBusinessCenterGrp;