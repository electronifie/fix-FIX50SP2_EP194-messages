var invert = require('invert-obj');

function ComplexEventReferencePage (complexEventReferencePage) {
  this.message = complexEventReferencePage;
}

ComplexEventReferencePage.prototype.value = function () {
  return this.message;
};

ComplexEventReferencePage.Tag = '41016';

ComplexEventReferencePage.Type = 'STRING';

module.exports = ComplexEventReferencePage;