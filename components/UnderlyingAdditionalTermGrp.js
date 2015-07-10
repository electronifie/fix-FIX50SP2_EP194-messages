var NoUnderlyingAdditionalTerms = require('../fields/NoUnderlyingAdditionalTerms');
var UnderlyingAdditionalTermBondRefGrp = require('../components/UnderlyingAdditionalTermBondRefGrp');
var UnderlyingAdditionalTermConditionPrecedentBondIndicator = require('../fields/UnderlyingAdditionalTermConditionPrecedentBondIndicator');
var UnderlyingAdditionalTermDiscrepancyClauseIndicator = require('../fields/UnderlyingAdditionalTermDiscrepancyClauseIndicator');

function UnderlyingAdditionalTermGrp (underlyingAdditionalTermGrp) {
  this.message = underlyingAdditionalTermGrp;
}

/* group */

/* component */
UnderlyingAdditionalTermGrp.prototype.underlyingAdditionalTermBondRefGrp = function () {
  return this.message.groups[UnderlyingAdditionalTermBondRefGrp.Tag]
    .map(function (underlyingAdditionalTermBondRefGrp) {
      return new UnderlyingAdditionalTermBondRefGrp(underlyingAdditionalTermBondRefGrp);
  });
};

/* field */
UnderlyingAdditionalTermGrp.prototype.underlyingAdditionalTermConditionPrecedentBondIndicator = function () {
  return new UnderlyingAdditionalTermConditionPrecedentBondIndicator(this.message.tags[UnderlyingAdditionalTermConditionPrecedentBondIndicator.Tag]);
};

/* field */
UnderlyingAdditionalTermGrp.prototype.underlyingAdditionalTermDiscrepancyClauseIndicator = function () {
  return new UnderlyingAdditionalTermDiscrepancyClauseIndicator(this.message.tags[UnderlyingAdditionalTermDiscrepancyClauseIndicator.Tag]);
};

/* end group */

UnderlyingAdditionalTermGrp.Tag = '42036';

module.exports = UnderlyingAdditionalTermGrp;