var NoUnderlyingStreamTerminationDateBusinessCenters = require('../fields/NoUnderlyingStreamTerminationDateBusinessCenters');
var UnderlyingStreamTerminationDateBusinessCenter = require('../fields/UnderlyingStreamTerminationDateBusinessCenter');

function UnderlyingStreamTerminationDateBusinessCenterGrp (underlyingStreamTerminationDateBusinessCenterGrp) {
  this.message = underlyingStreamTerminationDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingStreamTerminationDateBusinessCenterGrp.prototype.underlyingStreamTerminationDateBusinessCenter = function () {
  return new UnderlyingStreamTerminationDateBusinessCenter(this.message.tags[UnderlyingStreamTerminationDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingStreamTerminationDateBusinessCenterGrp.Tag = '40976';

module.exports = UnderlyingStreamTerminationDateBusinessCenterGrp;