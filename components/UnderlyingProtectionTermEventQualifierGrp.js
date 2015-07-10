var NoUnderlyingProtectionTermEventQualifiers = require('../fields/NoUnderlyingProtectionTermEventQualifiers');
var UnderlyingProtectionTermEventQualifier = require('../fields/UnderlyingProtectionTermEventQualifier');

function UnderlyingProtectionTermEventQualifierGrp (underlyingProtectionTermEventQualifierGrp) {
  this.message = underlyingProtectionTermEventQualifierGrp;
}

/* group */

/* field */
UnderlyingProtectionTermEventQualifierGrp.prototype.underlyingProtectionTermEventQualifier = function () {
  return new UnderlyingProtectionTermEventQualifier(this.message.tags[UnderlyingProtectionTermEventQualifier.Tag]);
};

/* end group */

UnderlyingProtectionTermEventQualifierGrp.Tag = '42085';

module.exports = UnderlyingProtectionTermEventQualifierGrp;