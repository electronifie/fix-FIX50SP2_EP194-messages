var NoUnderlyingProtectionTermObligations = require('../fields/NoUnderlyingProtectionTermObligations');
var UnderlyingProtectionTermObligationType = require('../fields/UnderlyingProtectionTermObligationType');
var UnderlyingProtectionTermObligationValue = require('../fields/UnderlyingProtectionTermObligationValue');

function UnderlyingProtectionTermObligationGrp (underlyingProtectionTermObligationGrp) {
  this.message = underlyingProtectionTermObligationGrp;
}

/* group */

/* field */
UnderlyingProtectionTermObligationGrp.prototype.underlyingProtectionTermObligationType = function () {
  return new UnderlyingProtectionTermObligationType(this.message.tags[UnderlyingProtectionTermObligationType.Tag]);
};

/* field */
UnderlyingProtectionTermObligationGrp.prototype.underlyingProtectionTermObligationValue = function () {
  return new UnderlyingProtectionTermObligationValue(this.message.tags[UnderlyingProtectionTermObligationValue.Tag]);
};

/* end group */

UnderlyingProtectionTermObligationGrp.Tag = '42087';

module.exports = UnderlyingProtectionTermObligationGrp;