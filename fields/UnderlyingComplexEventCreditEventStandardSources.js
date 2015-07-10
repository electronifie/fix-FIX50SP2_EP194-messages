var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventStandardSources (underlyingComplexEventCreditEventStandardSources) {
  this.message = underlyingComplexEventCreditEventStandardSources;
}

UnderlyingComplexEventCreditEventStandardSources.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventStandardSources.Tag = '2280';

UnderlyingComplexEventCreditEventStandardSources.Type = 'BOOLEAN';

module.exports = UnderlyingComplexEventCreditEventStandardSources;