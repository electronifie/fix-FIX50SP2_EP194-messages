var NoAdditionalTerms = require('../fields/NoAdditionalTerms');
var AdditionalTermBondRefGrp = require('../components/AdditionalTermBondRefGrp');
var AdditionalTermConditionPrecedentBondIndicator = require('../fields/AdditionalTermConditionPrecedentBondIndicator');
var AdditionalTermDiscrepancyClauseIndicator = require('../fields/AdditionalTermDiscrepancyClauseIndicator');

function AdditionalTermGrp (additionalTermGrp) {
  this.message = additionalTermGrp;
}

/* group */

/* component */
AdditionalTermGrp.prototype.additionalTermBondRefGrp = function () {
  return this.message.groups[AdditionalTermBondRefGrp.Tag]
    .map(function (additionalTermBondRefGrp) {
      return new AdditionalTermBondRefGrp(additionalTermBondRefGrp);
  });
};

/* field */
AdditionalTermGrp.prototype.additionalTermConditionPrecedentBondIndicator = function () {
  return new AdditionalTermConditionPrecedentBondIndicator(this.message.tags[AdditionalTermConditionPrecedentBondIndicator.Tag]);
};

/* field */
AdditionalTermGrp.prototype.additionalTermDiscrepancyClauseIndicator = function () {
  return new AdditionalTermDiscrepancyClauseIndicator(this.message.tags[AdditionalTermDiscrepancyClauseIndicator.Tag]);
};

/* end group */

AdditionalTermGrp.Tag = '40019';

module.exports = AdditionalTermGrp;