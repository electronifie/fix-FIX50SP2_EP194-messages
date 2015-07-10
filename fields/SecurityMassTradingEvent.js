var invert = require('invert-obj');

function SecurityMassTradingEvent (securityMassTradingEvent) {
  this.message = securityMassTradingEvent;
}

SecurityMassTradingEvent.prototype.value = function () {
  return this.message;
};

SecurityMassTradingEvent.Tag = '1680';

SecurityMassTradingEvent.Type = 'INT';

module.exports = SecurityMassTradingEvent;