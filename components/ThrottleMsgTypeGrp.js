var NoThrottleMsgType = require('../fields/NoThrottleMsgType');
var ThrottleMsgType = require('../fields/ThrottleMsgType');

function ThrottleMsgTypeGrp (throttleMsgTypeGrp) {
  this.message = throttleMsgTypeGrp;
}

/* group */

/* field */
ThrottleMsgTypeGrp.prototype.throttleMsgType = function () {
  return new ThrottleMsgType(this.message.tags[ThrottleMsgType.Tag]);
};

/* end group */

ThrottleMsgTypeGrp.Tag = '1618';

module.exports = ThrottleMsgTypeGrp;