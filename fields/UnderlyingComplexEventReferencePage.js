var invert = require('invert-obj');

function UnderlyingComplexEventReferencePage (underlyingComplexEventReferencePage) {
  this.message = underlyingComplexEventReferencePage;
}

UnderlyingComplexEventReferencePage.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventReferencePage.Tag = '41735';

UnderlyingComplexEventReferencePage.Type = 'STRING';

module.exports = UnderlyingComplexEventReferencePage;