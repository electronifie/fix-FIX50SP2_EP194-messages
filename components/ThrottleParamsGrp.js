var NoThrottles = require('../fields/NoThrottles');
var ThrottleMsgTypeGrp = require('../components/ThrottleMsgTypeGrp');
var ThrottleAction = require('../fields/ThrottleAction');
var ThrottleType = require('../fields/ThrottleType');
var ThrottleNoMsgs = require('../fields/ThrottleNoMsgs');
var ThrottleTimeInterval = require('../fields/ThrottleTimeInterval');
var ThrottleTimeUnit = require('../fields/ThrottleTimeUnit');

function ThrottleParamsGrp (throttleParamsGrp) {
  this.message = throttleParamsGrp;
}

/* group */

/* component */
ThrottleParamsGrp.prototype.throttleMsgTypeGrp = function () {
  return this.message.groups[ThrottleMsgTypeGrp.Tag]
    .map(function (throttleMsgTypeGrp) {
      return new ThrottleMsgTypeGrp(throttleMsgTypeGrp);
  });
};

/* field */
ThrottleParamsGrp.prototype.throttleAction = function () {
  return new ThrottleAction(this.message.tags[ThrottleAction.Tag]);
};

/* field */
ThrottleParamsGrp.prototype.throttleType = function () {
  return new ThrottleType(this.message.tags[ThrottleType.Tag]);
};

/* field */
ThrottleParamsGrp.prototype.throttleNoMsgs = function () {
  return new ThrottleNoMsgs(this.message.tags[ThrottleNoMsgs.Tag]);
};

/* field */
ThrottleParamsGrp.prototype.throttleTimeInterval = function () {
  return new ThrottleTimeInterval(this.message.tags[ThrottleTimeInterval.Tag]);
};

/* field */
ThrottleParamsGrp.prototype.throttleTimeUnit = function () {
  return new ThrottleTimeUnit(this.message.tags[ThrottleTimeUnit.Tag]);
};

/* end group */

ThrottleParamsGrp.Tag = '1610';

module.exports = ThrottleParamsGrp;