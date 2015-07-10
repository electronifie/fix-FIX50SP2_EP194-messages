var invert = require('invert-obj');

function LegComplexEventCreditEventRateSource (legComplexEventCreditEventRateSource) {
  this.message = legComplexEventCreditEventRateSource;
}

LegComplexEventCreditEventRateSource.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventRateSource.Tag = '41373';

LegComplexEventCreditEventRateSource.Type = 'INT';

module.exports = LegComplexEventCreditEventRateSource;