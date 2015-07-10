var NoUnderlyingStreamFirstPeriodStartDateBusinessCenters = require('../fields/NoUnderlyingStreamFirstPeriodStartDateBusinessCenters');
var UnderlyingStreamFirstPeriodStartDateBusinessCenter = require('../fields/UnderlyingStreamFirstPeriodStartDateBusinessCenter');

function UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp (underlyingStreamFirstPeriodStartDateBusinessCenterGrp) {
  this.message = underlyingStreamFirstPeriodStartDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp.prototype.underlyingStreamFirstPeriodStartDateBusinessCenter = function () {
  return new UnderlyingStreamFirstPeriodStartDateBusinessCenter(this.message.tags[UnderlyingStreamFirstPeriodStartDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp.Tag = '40974';

module.exports = UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp;