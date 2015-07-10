var NoLegProtectionTermEventQualifiers = require('../fields/NoLegProtectionTermEventQualifiers');
var LegProtectionTermEventQualifier = require('../fields/LegProtectionTermEventQualifier');

function LegProtectionTermEventQualifierGrp (legProtectionTermEventQualifierGrp) {
  this.message = legProtectionTermEventQualifierGrp;
}

/* group */

/* field */
LegProtectionTermEventQualifierGrp.prototype.legProtectionTermEventQualifier = function () {
  return new LegProtectionTermEventQualifier(this.message.tags[LegProtectionTermEventQualifier.Tag]);
};

/* end group */

LegProtectionTermEventQualifierGrp.Tag = '41633';

module.exports = LegProtectionTermEventQualifierGrp;