var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventUnit (underlyingComplexEventCreditEventUnit) {
  this.message = underlyingComplexEventCreditEventUnit;
}

UnderlyingComplexEventCreditEventUnit.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventUnit.Tag = '41721';

UnderlyingComplexEventCreditEventUnit.Type = 'STRING';

module.exports = UnderlyingComplexEventCreditEventUnit;