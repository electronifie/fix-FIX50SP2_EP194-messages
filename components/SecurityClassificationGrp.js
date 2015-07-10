var NoSecurityClassifications = require('../fields/NoSecurityClassifications');
var SecurityClassificationReason = require('../fields/SecurityClassificationReason');
var SecurityClassificationValue = require('../fields/SecurityClassificationValue');

function SecurityClassificationGrp (securityClassificationGrp) {
  this.message = securityClassificationGrp;
}

/* group */

/* field */
SecurityClassificationGrp.prototype.securityClassificationReason = function () {
  return new SecurityClassificationReason(this.message.tags[SecurityClassificationReason.Tag]);
};

/* field */
SecurityClassificationGrp.prototype.securityClassificationValue = function () {
  return new SecurityClassificationValue(this.message.tags[SecurityClassificationValue.Tag]);
};

/* end group */

SecurityClassificationGrp.Tag = '1582';

module.exports = SecurityClassificationGrp;