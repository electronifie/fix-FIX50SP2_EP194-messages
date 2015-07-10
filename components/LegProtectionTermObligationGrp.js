var NoLegProtectionTermObligations = require('../fields/NoLegProtectionTermObligations');
var LegProtectionTermObligationType = require('../fields/LegProtectionTermObligationType');
var LegProtectionTermObligationValue = require('../fields/LegProtectionTermObligationValue');

function LegProtectionTermObligationGrp (legProtectionTermObligationGrp) {
  this.message = legProtectionTermObligationGrp;
}

/* group */

/* field */
LegProtectionTermObligationGrp.prototype.legProtectionTermObligationType = function () {
  return new LegProtectionTermObligationType(this.message.tags[LegProtectionTermObligationType.Tag]);
};

/* field */
LegProtectionTermObligationGrp.prototype.legProtectionTermObligationValue = function () {
  return new LegProtectionTermObligationValue(this.message.tags[LegProtectionTermObligationValue.Tag]);
};

/* end group */

LegProtectionTermObligationGrp.Tag = '41635';

module.exports = LegProtectionTermObligationGrp;