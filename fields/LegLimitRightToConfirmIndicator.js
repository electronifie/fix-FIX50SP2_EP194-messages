var invert = require('invert-obj');

function LegLimitRightToConfirmIndicator (legLimitRightToConfirmIndicator) {
  this.message = legLimitRightToConfirmIndicator;
}

LegLimitRightToConfirmIndicator.prototype.value = function () {
  return this.message;
};

LegLimitRightToConfirmIndicator.Tag = '41489';

LegLimitRightToConfirmIndicator.Type = 'BOOLEAN';

module.exports = LegLimitRightToConfirmIndicator;