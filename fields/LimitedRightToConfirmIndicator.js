var invert = require('invert-obj');

function LimitedRightToConfirmIndicator (limitedRightToConfirmIndicator) {
  this.message = limitedRightToConfirmIndicator;
}

LimitedRightToConfirmIndicator.prototype.value = function () {
  return this.message;
};

LimitedRightToConfirmIndicator.Tag = '41114';

LimitedRightToConfirmIndicator.Type = 'BOOLEAN';

module.exports = LimitedRightToConfirmIndicator;