var NoBusinessCenters = require('../fields/NoBusinessCenters');
var BusinessCenter = require('../fields/BusinessCenter');

function BusinessCenterGrp (businessCenterGrp) {
  this.message = businessCenterGrp;
}

/* group */

/* field */
BusinessCenterGrp.prototype.businessCenter = function () {
  return new BusinessCenter(this.message.tags[BusinessCenter.Tag]);
};

/* end group */

BusinessCenterGrp.Tag = '40278';

module.exports = BusinessCenterGrp;