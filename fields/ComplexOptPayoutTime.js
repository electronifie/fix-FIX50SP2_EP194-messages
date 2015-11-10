var invert = require('invert-obj');

function ComplexOptPayoutTime (complexOptPayoutTime) {
  this.message = complexOptPayoutTime;
}

ComplexOptPayoutTime.prototype.value = function () {
  return this.message;
};


ComplexOptPayoutTime.Keys = {
  'CLOSE': '0',
  'OPEN': '1',
  'OFFICIAL_SETTLEMENT': '2',
  'VALUATION_TIME': '3',
  'EXCHANGE_SETTLEMENT_TIME': '4',
  'DERIVATIVES_CLOSE': '5',
  'AS_SPECIFIED_IN_MASTER_CONFIRMATION': '6',
};

ComplexOptPayoutTime.Tag = '2121';

ComplexOptPayoutTime.Type = 'INT';

ComplexOptPayoutTime.Values = invert(ComplexOptPayoutTime.Keys);

module.exports = ComplexOptPayoutTime;