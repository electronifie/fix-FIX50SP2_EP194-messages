var NoLegFinancingTermSupplements = require('../fields/NoLegFinancingTermSupplements');
var LegFinancingTermSupplementDesc = require('../fields/LegFinancingTermSupplementDesc');
var LegFinancingTermSupplementDate = require('../fields/LegFinancingTermSupplementDate');

function LegFinancingTermSupplementGrp (legFinancingTermSupplementGrp) {
  this.message = legFinancingTermSupplementGrp;
}

/* group */

/* field */
LegFinancingTermSupplementGrp.prototype.legFinancingTermSupplementDesc = function () {
  return new LegFinancingTermSupplementDesc(this.message.tags[LegFinancingTermSupplementDesc.Tag]);
};

/* field */
LegFinancingTermSupplementGrp.prototype.legFinancingTermSupplementDate = function () {
  return new LegFinancingTermSupplementDate(this.message.tags[LegFinancingTermSupplementDate.Tag]);
};

/* end group */

LegFinancingTermSupplementGrp.Tag = '42200';

module.exports = LegFinancingTermSupplementGrp;