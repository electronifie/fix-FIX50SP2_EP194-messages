var invert = require('invert-obj');

function ThrottleInst (throttleInst) {
  this.message = throttleInst;
}

ThrottleInst.prototype.value = function () {
  return this.message;
};


ThrottleInst.Keys = {
  'REJECT_IF_THROTTLE_LIMIT_EXCEEDED': '0',
  'QUEUE_IF_THROTTLE_LIMIT_EXCEEDED': '1',
};

ThrottleInst.Tag = '1685';

ThrottleInst.Type = 'INT';

ThrottleInst.Values = invert(ThrottleInst.Keys);

module.exports = ThrottleInst;