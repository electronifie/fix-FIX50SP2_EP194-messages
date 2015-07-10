var invert = require('invert-obj');

function UnderlyingComplexEventReferencePageHeading (underlyingComplexEventReferencePageHeading) {
  this.message = underlyingComplexEventReferencePageHeading;
}

UnderlyingComplexEventReferencePageHeading.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventReferencePageHeading.Tag = '41736';

UnderlyingComplexEventReferencePageHeading.Type = 'STRING';

module.exports = UnderlyingComplexEventReferencePageHeading;