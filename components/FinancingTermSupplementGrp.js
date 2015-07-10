var NoFinancingTermSupplements = require('../fields/NoFinancingTermSupplements');
var FinancingTermSupplementDesc = require('../fields/FinancingTermSupplementDesc');
var FinancingTermSupplementDate = require('../fields/FinancingTermSupplementDate');

function FinancingTermSupplementGrp (financingTermSupplementGrp) {
  this.message = financingTermSupplementGrp;
}

/* group */

/* field */
FinancingTermSupplementGrp.prototype.financingTermSupplementDesc = function () {
  return new FinancingTermSupplementDesc(this.message.tags[FinancingTermSupplementDesc.Tag]);
};

/* field */
FinancingTermSupplementGrp.prototype.financingTermSupplementDate = function () {
  return new FinancingTermSupplementDate(this.message.tags[FinancingTermSupplementDate.Tag]);
};

/* end group */

FinancingTermSupplementGrp.Tag = '40046';

module.exports = FinancingTermSupplementGrp;