var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventRateSource (underlyingComplexEventCreditEventRateSource) {
  this.message = underlyingComplexEventCreditEventRateSource;
}

UnderlyingComplexEventCreditEventRateSource.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventRateSource.Tag = '41723';

UnderlyingComplexEventCreditEventRateSource.Type = 'INT';

module.exports = UnderlyingComplexEventCreditEventRateSource;