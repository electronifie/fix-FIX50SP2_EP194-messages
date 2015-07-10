var invert = require('invert-obj');

function ThrottleMsgType (throttleMsgType) {
  this.message = throttleMsgType;
}

ThrottleMsgType.prototype.value = function () {
  return this.message;
};

ThrottleMsgType.Tag = '1619';

ThrottleMsgType.Type = 'STRING';

module.exports = ThrottleMsgType;