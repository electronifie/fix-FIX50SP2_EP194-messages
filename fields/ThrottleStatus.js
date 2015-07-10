var invert = require('invert-obj');

function ThrottleStatus (throttleStatus) {
  this.message = throttleStatus;
}

ThrottleStatus.prototype.value = function () {
  return this.message;
};


ThrottleStatus.Keys = {
  THROTTLE_LIMIT_NOT_EXCEEDED_NOT_QUEUED: '0',
  QUEUED_DUE_TO_THROTTLE_LIMIT_EXCEEDED: '1',
};

ThrottleStatus.Tag = '1609';

ThrottleStatus.Type = 'INT';

ThrottleStatus.Values = invert(ThrottleStatus.Keys);

module.exports = ThrottleStatus;