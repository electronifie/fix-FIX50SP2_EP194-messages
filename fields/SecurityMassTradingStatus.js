var invert = require('invert-obj');

function SecurityMassTradingStatus (securityMassTradingStatus) {
  this.message = securityMassTradingStatus;
}

SecurityMassTradingStatus.prototype.value = function () {
  return this.message;
};

SecurityMassTradingStatus.Tag = '1679';

SecurityMassTradingStatus.Type = 'INT';

module.exports = SecurityMassTradingStatus;