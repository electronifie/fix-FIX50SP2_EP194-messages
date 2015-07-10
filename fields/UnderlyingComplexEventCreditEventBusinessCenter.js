var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventBusinessCenter (underlyingComplexEventCreditEventBusinessCenter) {
  this.message = underlyingComplexEventCreditEventBusinessCenter;
}

UnderlyingComplexEventCreditEventBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventBusinessCenter.Tag = '2279';

UnderlyingComplexEventCreditEventBusinessCenter.Type = 'STRING';

module.exports = UnderlyingComplexEventCreditEventBusinessCenter;