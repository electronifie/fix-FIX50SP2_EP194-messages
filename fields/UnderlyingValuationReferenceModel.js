var invert = require('invert-obj');

function UnderlyingValuationReferenceModel (underlyingValuationReferenceModel) {
  this.message = underlyingValuationReferenceModel;
}

UnderlyingValuationReferenceModel.prototype.value = function () {
  return this.message;
};

UnderlyingValuationReferenceModel.Tag = '2294';

UnderlyingValuationReferenceModel.Type = 'STRING';

module.exports = UnderlyingValuationReferenceModel;