var invert = require('invert-obj');

function ValuationReferenceModel (valuationReferenceModel) {
  this.message = valuationReferenceModel;
}

ValuationReferenceModel.prototype.value = function () {
  return this.message;
};

ValuationReferenceModel.Tag = '2140';

ValuationReferenceModel.Type = 'STRING';

module.exports = ValuationReferenceModel;