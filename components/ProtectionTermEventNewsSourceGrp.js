var NoProtectionTermEventNewsSources = require('../fields/NoProtectionTermEventNewsSources');
var ProtectionTermEventNewsSource = require('../fields/ProtectionTermEventNewsSource');

function ProtectionTermEventNewsSourceGrp (protectionTermEventNewsSourceGrp) {
  this.message = protectionTermEventNewsSourceGrp;
}

/* group */

/* field */
ProtectionTermEventNewsSourceGrp.prototype.protectionTermEventNewsSource = function () {
  return new ProtectionTermEventNewsSource(this.message.tags[ProtectionTermEventNewsSource.Tag]);
};

/* end group */

ProtectionTermEventNewsSourceGrp.Tag = '40951';

module.exports = ProtectionTermEventNewsSourceGrp;