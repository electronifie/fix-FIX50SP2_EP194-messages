var NoUnderlyingStreamCalculationPeriodBusinessCenters = require('../fields/NoUnderlyingStreamCalculationPeriodBusinessCenters');
var UnderlyingStreamCalculationPeriodBusinessCenter = require('../fields/UnderlyingStreamCalculationPeriodBusinessCenter');

function UnderlyingStreamCalculationPeriodBusinessCenterGrp (underlyingStreamCalculationPeriodBusinessCenterGrp) {
  this.message = underlyingStreamCalculationPeriodBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingStreamCalculationPeriodBusinessCenterGrp.prototype.underlyingStreamCalculationPeriodBusinessCenter = function () {
  return new UnderlyingStreamCalculationPeriodBusinessCenter(this.message.tags[UnderlyingStreamCalculationPeriodBusinessCenter.Tag]);
};

/* end group */

UnderlyingStreamCalculationPeriodBusinessCenterGrp.Tag = '40973';

module.exports = UnderlyingStreamCalculationPeriodBusinessCenterGrp;