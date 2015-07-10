var invert = require('invert-obj');

function ThrottleAction (throttleAction) {
  this.message = throttleAction;
}

ThrottleAction.prototype.value = function () {
  return this.message;
};


ThrottleAction.Keys = {
  QUEUE_INBOUND: '0',
  QUEUE_OUTBOUND: '1',
  REJECT: '2',
  DISCONNECT: '3',
  WARNING: '4',
};

ThrottleAction.Tag = '1611';

ThrottleAction.Type = 'INT';

ThrottleAction.Values = invert(ThrottleAction.Keys);

module.exports = ThrottleAction;