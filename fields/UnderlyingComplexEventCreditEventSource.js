var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventSource (underlyingComplexEventCreditEventSource) {
  this.message = underlyingComplexEventCreditEventSource;
}

UnderlyingComplexEventCreditEventSource.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventSource.Tag = '41749';

UnderlyingComplexEventCreditEventSource.Type = 'STRING';

module.exports = UnderlyingComplexEventCreditEventSource;