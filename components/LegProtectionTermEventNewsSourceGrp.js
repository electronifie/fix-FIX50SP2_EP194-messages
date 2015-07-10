var NoLegProtectionTermEventNewsSources = require('../fields/NoLegProtectionTermEventNewsSources');
var LegProtectionTermEventNewsSource = require('../fields/LegProtectionTermEventNewsSource');

function LegProtectionTermEventNewsSourceGrp (legProtectionTermEventNewsSourceGrp) {
  this.message = legProtectionTermEventNewsSourceGrp;
}

/* group */

/* field */
LegProtectionTermEventNewsSourceGrp.prototype.legProtectionTermEventNewsSource = function () {
  return new LegProtectionTermEventNewsSource(this.message.tags[LegProtectionTermEventNewsSource.Tag]);
};

/* end group */

LegProtectionTermEventNewsSourceGrp.Tag = '41614';

module.exports = LegProtectionTermEventNewsSourceGrp;