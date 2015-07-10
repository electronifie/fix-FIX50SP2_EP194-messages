var invert = require('invert-obj');

function ApplTestMessageIndicator (applTestMessageIndicator) {
  this.message = applTestMessageIndicator;
}

ApplTestMessageIndicator.prototype.value = function () {
  return this.message;
};

ApplTestMessageIndicator.Tag = '2330';

ApplTestMessageIndicator.Type = 'BOOLEAN';

module.exports = ApplTestMessageIndicator;