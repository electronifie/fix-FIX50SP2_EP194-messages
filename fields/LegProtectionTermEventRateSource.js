var invert = require('invert-obj');

function LegProtectionTermEventRateSource (legProtectionTermEventRateSource) {
  this.message = legProtectionTermEventRateSource;
}

LegProtectionTermEventRateSource.prototype.value = function () {
  return this.message;
};

LegProtectionTermEventRateSource.Tag = '41632';

LegProtectionTermEventRateSource.Type = 'STRING';

module.exports = LegProtectionTermEventRateSource;