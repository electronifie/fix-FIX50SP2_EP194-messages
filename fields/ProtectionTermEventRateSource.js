var invert = require('invert-obj');

function ProtectionTermEventRateSource (protectionTermEventRateSource) {
  this.message = protectionTermEventRateSource;
}

ProtectionTermEventRateSource.prototype.value = function () {
  return this.message;
};

ProtectionTermEventRateSource.Tag = '40198';

ProtectionTermEventRateSource.Type = 'STRING';

module.exports = ProtectionTermEventRateSource;