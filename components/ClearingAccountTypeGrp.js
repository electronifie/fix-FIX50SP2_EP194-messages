var NoClearingAccountTypes = require('../fields/NoClearingAccountTypes');
var ClearingAccountType = require('../fields/ClearingAccountType');

function ClearingAccountTypeGrp (clearingAccountTypeGrp) {
  this.message = clearingAccountTypeGrp;
}

/* group */

/* field */
ClearingAccountTypeGrp.prototype.clearingAccountType = function () {
  return new ClearingAccountType(this.message.tags[ClearingAccountType.Tag]);
};

/* end group */

ClearingAccountTypeGrp.Tag = '1918';

module.exports = ClearingAccountTypeGrp;