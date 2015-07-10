var NoStreamTerminationDateBusinessCenters = require('../fields/NoStreamTerminationDateBusinessCenters');
var StreamTerminationDateBusinessCenter = require('../fields/StreamTerminationDateBusinessCenter');

function StreamTerminationDateBusinessCenterGrp (streamTerminationDateBusinessCenterGrp) {
  this.message = streamTerminationDateBusinessCenterGrp;
}

/* group */

/* field */
StreamTerminationDateBusinessCenterGrp.prototype.streamTerminationDateBusinessCenter = function () {
  return new StreamTerminationDateBusinessCenter(this.message.tags[StreamTerminationDateBusinessCenter.Tag]);
};

/* end group */

StreamTerminationDateBusinessCenterGrp.Tag = '40961';

module.exports = StreamTerminationDateBusinessCenterGrp;