var ThrottleInst = require('../fields/ThrottleInst');
var ThrottleStatus = require('../fields/ThrottleStatus');
var ThrottleCountIndicator = require('../fields/ThrottleCountIndicator');

function ThrottleResponse (throttleResponse) {
  this.message = throttleResponse;
}
/* field */
ThrottleResponse.prototype.throttleInst = function () {
  return new ThrottleInst(this.message.tags[ThrottleInst.Tag]);
};

/* field */
ThrottleResponse.prototype.throttleStatus = function () {
  return new ThrottleStatus(this.message.tags[ThrottleStatus.Tag]);
};

/* field */
ThrottleResponse.prototype.throttleCountIndicator = function () {
  return new ThrottleCountIndicator(this.message.tags[ThrottleCountIndicator.Tag]);
};



ThrottleResponse.Tag = '1685';

module.exports = ThrottleResponse;