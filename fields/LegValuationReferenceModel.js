var invert = require('invert-obj');

function LegValuationReferenceModel (legValuationReferenceModel) {
  this.message = legValuationReferenceModel;
}

LegValuationReferenceModel.prototype.value = function () {
  return this.message;
};

LegValuationReferenceModel.Tag = '2198';

LegValuationReferenceModel.Type = 'STRING';

module.exports = LegValuationReferenceModel;