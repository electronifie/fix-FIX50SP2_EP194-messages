var invert = require('invert-obj');

function UnderlyingPaymentStreamReferenceLevelUnitOfMeasure (underlyingPaymentStreamReferenceLevelUnitOfMeasure) {
  this.message = underlyingPaymentStreamReferenceLevelUnitOfMeasure;
}

UnderlyingPaymentStreamReferenceLevelUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamReferenceLevelUnitOfMeasure.Tag = '41918';

UnderlyingPaymentStreamReferenceLevelUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingPaymentStreamReferenceLevelUnitOfMeasure;