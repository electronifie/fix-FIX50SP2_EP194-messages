var NoStreamFirstPeriodStartDateBusinessCenters = require('../fields/NoStreamFirstPeriodStartDateBusinessCenters');
var StreamFirstPeriodStartDateBusinessCenter = require('../fields/StreamFirstPeriodStartDateBusinessCenter');

function StreamFirstPeriodStartDateBusinessCenterGrp (streamFirstPeriodStartDateBusinessCenterGrp) {
  this.message = streamFirstPeriodStartDateBusinessCenterGrp;
}

/* group */

/* field */
StreamFirstPeriodStartDateBusinessCenterGrp.prototype.streamFirstPeriodStartDateBusinessCenter = function () {
  return new StreamFirstPeriodStartDateBusinessCenter(this.message.tags[StreamFirstPeriodStartDateBusinessCenter.Tag]);
};

/* end group */

StreamFirstPeriodStartDateBusinessCenterGrp.Tag = '40959';

module.exports = StreamFirstPeriodStartDateBusinessCenterGrp;