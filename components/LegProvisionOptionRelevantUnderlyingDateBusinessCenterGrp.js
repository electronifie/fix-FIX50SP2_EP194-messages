var NoLegProvisionOptionRelevantUnderlyingDateBusinessCenters = require('../fields/NoLegProvisionOptionRelevantUnderlyingDateBusinessCenters');
var LegProvisionOptionRelevantUnderlyingDateBusinessCenter = require('../fields/LegProvisionOptionRelevantUnderlyingDateBusinessCenter');

function LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp (legProvisionOptionRelevantUnderlyingDateBusinessCenterGrp) {
  this.message = legProvisionOptionRelevantUnderlyingDateBusinessCenterGrp;
}

/* group */

/* field */
LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp.prototype.legProvisionOptionRelevantUnderlyingDateBusinessCenter = function () {
  return new LegProvisionOptionRelevantUnderlyingDateBusinessCenter(this.message.tags[LegProvisionOptionRelevantUnderlyingDateBusinessCenter.Tag]);
};

/* end group */

LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp.Tag = '40938';

module.exports = LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp;