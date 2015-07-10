var invert = require('invert-obj');

function NoThrottleMsgType (noThrottleMsgType) {
  this.message = noThrottleMsgType;
}

NoThrottleMsgType.prototype.value = function () {
  return this.message;
};

NoThrottleMsgType.Tag = '1618';

NoThrottleMsgType.Type = 'NUMINGROUP';

module.exports = NoThrottleMsgType;