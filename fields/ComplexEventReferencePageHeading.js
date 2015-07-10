var invert = require('invert-obj');

function ComplexEventReferencePageHeading (complexEventReferencePageHeading) {
  this.message = complexEventReferencePageHeading;
}

ComplexEventReferencePageHeading.prototype.value = function () {
  return this.message;
};

ComplexEventReferencePageHeading.Tag = '41017';

ComplexEventReferencePageHeading.Type = 'STRING';

module.exports = ComplexEventReferencePageHeading;