var NoUnderlyingComplexEventPeriodDateTimes = require('../fields/NoUnderlyingComplexEventPeriodDateTimes');
var UnderlyingComplexEventPeriodDate = require('../fields/UnderlyingComplexEventPeriodDate');
var UnderlyingComplexEventPeriodTime = require('../fields/UnderlyingComplexEventPeriodTime');

function UnderlyingComplexEventPeriodDateGrp (underlyingComplexEventPeriodDateGrp) {
  this.message = underlyingComplexEventPeriodDateGrp;
}

/* group */

/* field */
UnderlyingComplexEventPeriodDateGrp.prototype.underlyingComplexEventPeriodDate = function () {
  return new UnderlyingComplexEventPeriodDate(this.message.tags[UnderlyingComplexEventPeriodDate.Tag]);
};

/* field */
UnderlyingComplexEventPeriodDateGrp.prototype.underlyingComplexEventPeriodTime = function () {
  return new UnderlyingComplexEventPeriodTime(this.message.tags[UnderlyingComplexEventPeriodTime.Tag]);
};

/* end group */

UnderlyingComplexEventPeriodDateGrp.Tag = '41726';

module.exports = UnderlyingComplexEventPeriodDateGrp;