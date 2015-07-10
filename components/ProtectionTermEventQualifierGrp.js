var NoProtectionTermEventQualifiers = require('../fields/NoProtectionTermEventQualifiers');
var ProtectionTermEventQualifier = require('../fields/ProtectionTermEventQualifier');

function ProtectionTermEventQualifierGrp (protectionTermEventQualifierGrp) {
  this.message = protectionTermEventQualifierGrp;
}

/* group */

/* field */
ProtectionTermEventQualifierGrp.prototype.protectionTermEventQualifier = function () {
  return new ProtectionTermEventQualifier(this.message.tags[ProtectionTermEventQualifier.Tag]);
};

/* end group */

ProtectionTermEventQualifierGrp.Tag = '40199';

module.exports = ProtectionTermEventQualifierGrp;