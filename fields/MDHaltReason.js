var invert = require('invert-obj');

function MDHaltReason (mdhaltReason) {
  this.message = mdhaltReason;
}

MDHaltReason.prototype.value = function () {
  return this.message;
};

MDHaltReason.Tag = '1684';

MDHaltReason.Type = 'INT';

module.exports = MDHaltReason;