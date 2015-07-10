var invert = require('invert-obj');

function UnderlyingProtectionTermEventRateSource (underlyingProtectionTermEventRateSource) {
  this.message = underlyingProtectionTermEventRateSource;
}

UnderlyingProtectionTermEventRateSource.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermEventRateSource.Tag = '42084';

UnderlyingProtectionTermEventRateSource.Type = 'STRING';

module.exports = UnderlyingProtectionTermEventRateSource;