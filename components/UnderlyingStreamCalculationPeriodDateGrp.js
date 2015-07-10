var NoUnderlyingStreamCalculationPeriodDates = require('../fields/NoUnderlyingStreamCalculationPeriodDates');
var UnderlyingStreamCalculationPeriodDate = require('../fields/UnderlyingStreamCalculationPeriodDate');
var UnderlyingStreamCalculationPeriodDateType = require('../fields/UnderlyingStreamCalculationPeriodDateType');

function UnderlyingStreamCalculationPeriodDateGrp (underlyingStreamCalculationPeriodDateGrp) {
  this.message = underlyingStreamCalculationPeriodDateGrp;
}

/* group */

/* field */
UnderlyingStreamCalculationPeriodDateGrp.prototype.underlyingStreamCalculationPeriodDate = function () {
  return new UnderlyingStreamCalculationPeriodDate(this.message.tags[UnderlyingStreamCalculationPeriodDate.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDateGrp.prototype.underlyingStreamCalculationPeriodDateType = function () {
  return new UnderlyingStreamCalculationPeriodDateType(this.message.tags[UnderlyingStreamCalculationPeriodDateType.Tag]);
};

/* end group */

UnderlyingStreamCalculationPeriodDateGrp.Tag = '41954';

module.exports = UnderlyingStreamCalculationPeriodDateGrp;