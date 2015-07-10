var invert = require('invert-obj');

function NoRiskWarningLevels (noRiskWarningLevels) {
  this.message = noRiskWarningLevels;
}

NoRiskWarningLevels.prototype.value = function () {
  return this.message;
};

NoRiskWarningLevels.Tag = '1559';

NoRiskWarningLevels.Type = 'NUMINGROUP';

module.exports = NoRiskWarningLevels;