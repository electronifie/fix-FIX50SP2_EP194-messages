var invert = require('invert-obj');

function UnderlyingComplexEventRateSource (underlyingComplexEventRateSource) {
  this.message = underlyingComplexEventRateSource;
}

UnderlyingComplexEventRateSource.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventRateSource.Tag = '41733';

UnderlyingComplexEventRateSource.Type = 'INT';

module.exports = UnderlyingComplexEventRateSource;