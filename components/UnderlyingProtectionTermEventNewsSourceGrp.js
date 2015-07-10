var NoUnderlyingProtectionTermEventNewsSources = require('../fields/NoUnderlyingProtectionTermEventNewsSources');
var UnderlyingProtectionTermEventNewsSource = require('../fields/UnderlyingProtectionTermEventNewsSource');

function UnderlyingProtectionTermEventNewsSourceGrp (underlyingProtectionTermEventNewsSourceGrp) {
  this.message = underlyingProtectionTermEventNewsSourceGrp;
}

/* group */

/* field */
UnderlyingProtectionTermEventNewsSourceGrp.prototype.underlyingProtectionTermEventNewsSource = function () {
  return new UnderlyingProtectionTermEventNewsSource(this.message.tags[UnderlyingProtectionTermEventNewsSource.Tag]);
};

/* end group */

UnderlyingProtectionTermEventNewsSourceGrp.Tag = '42090';

module.exports = UnderlyingProtectionTermEventNewsSourceGrp;