var NoProtectionTermObligations = require('../fields/NoProtectionTermObligations');
var ProtectionTermObligationType = require('../fields/ProtectionTermObligationType');
var ProtectionTermObligationValue = require('../fields/ProtectionTermObligationValue');

function ProtectionTermObligationGrp (protectionTermObligationGrp) {
  this.message = protectionTermObligationGrp;
}

/* group */

/* field */
ProtectionTermObligationGrp.prototype.protectionTermObligationType = function () {
  return new ProtectionTermObligationType(this.message.tags[ProtectionTermObligationType.Tag]);
};

/* field */
ProtectionTermObligationGrp.prototype.protectionTermObligationValue = function () {
  return new ProtectionTermObligationValue(this.message.tags[ProtectionTermObligationValue.Tag]);
};

/* end group */

ProtectionTermObligationGrp.Tag = '40201';

module.exports = ProtectionTermObligationGrp;