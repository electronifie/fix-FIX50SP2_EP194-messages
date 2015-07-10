var NoLegAdditionalTerms = require('../fields/NoLegAdditionalTerms');
var LegAdditionalTermBondRefGrp = require('../components/LegAdditionalTermBondRefGrp');
var LegAdditionalTermConditionPrecedentBondIndicator = require('../fields/LegAdditionalTermConditionPrecedentBondIndicator');
var LegAdditionalTermDiscrepancyClauseIndicator = require('../fields/LegAdditionalTermDiscrepancyClauseIndicator');

function LegAdditionalTermGrp (legAdditionalTermGrp) {
  this.message = legAdditionalTermGrp;
}

/* group */

/* component */
LegAdditionalTermGrp.prototype.legAdditionalTermBondRefGrp = function () {
  return this.message.groups[LegAdditionalTermBondRefGrp.Tag]
    .map(function (legAdditionalTermBondRefGrp) {
      return new LegAdditionalTermBondRefGrp(legAdditionalTermBondRefGrp);
  });
};

/* field */
LegAdditionalTermGrp.prototype.legAdditionalTermConditionPrecedentBondIndicator = function () {
  return new LegAdditionalTermConditionPrecedentBondIndicator(this.message.tags[LegAdditionalTermConditionPrecedentBondIndicator.Tag]);
};

/* field */
LegAdditionalTermGrp.prototype.legAdditionalTermDiscrepancyClauseIndicator = function () {
  return new LegAdditionalTermDiscrepancyClauseIndicator(this.message.tags[LegAdditionalTermDiscrepancyClauseIndicator.Tag]);
};

/* end group */

LegAdditionalTermGrp.Tag = '41335';

module.exports = LegAdditionalTermGrp;