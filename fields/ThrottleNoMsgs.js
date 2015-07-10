var invert = require('invert-obj');

function ThrottleNoMsgs (throttleNoMsgs) {
  this.message = throttleNoMsgs;
}

ThrottleNoMsgs.prototype.value = function () {
  return this.message;
};

ThrottleNoMsgs.Tag = '1613';

ThrottleNoMsgs.Type = 'INT';

module.exports = ThrottleNoMsgs;