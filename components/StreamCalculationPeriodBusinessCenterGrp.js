var NoStreamCalculationPeriodBusinessCenters = require('../fields/NoStreamCalculationPeriodBusinessCenters');
var StreamCalculationPeriodBusinessCenter = require('../fields/StreamCalculationPeriodBusinessCenter');

function StreamCalculationPeriodBusinessCenterGrp (streamCalculationPeriodBusinessCenterGrp) {
  this.message = streamCalculationPeriodBusinessCenterGrp;
}

/* group */

/* field */
StreamCalculationPeriodBusinessCenterGrp.prototype.streamCalculationPeriodBusinessCenter = function () {
  return new StreamCalculationPeriodBusinessCenter(this.message.tags[StreamCalculationPeriodBusinessCenter.Tag]);
};

/* end group */

StreamCalculationPeriodBusinessCenterGrp.Tag = '40958';

module.exports = StreamCalculationPeriodBusinessCenterGrp;