var NoStreamCalculationPeriodDates = require('../fields/NoStreamCalculationPeriodDates');
var StreamCalculationPeriodDate = require('../fields/StreamCalculationPeriodDate');
var StreamCalculationPeriodDateType = require('../fields/StreamCalculationPeriodDateType');

function StreamCalculationPeriodDateGrp (streamCalculationPeriodDateGrp) {
  this.message = streamCalculationPeriodDateGrp;
}

/* group */

/* field */
StreamCalculationPeriodDateGrp.prototype.streamCalculationPeriodDate = function () {
  return new StreamCalculationPeriodDate(this.message.tags[StreamCalculationPeriodDate.Tag]);
};

/* field */
StreamCalculationPeriodDateGrp.prototype.streamCalculationPeriodDateType = function () {
  return new StreamCalculationPeriodDateType(this.message.tags[StreamCalculationPeriodDateType.Tag]);
};

/* end group */

StreamCalculationPeriodDateGrp.Tag = '41241';

module.exports = StreamCalculationPeriodDateGrp;