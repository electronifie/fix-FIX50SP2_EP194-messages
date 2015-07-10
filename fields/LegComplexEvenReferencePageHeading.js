var invert = require('invert-obj');

function LegComplexEvenReferencePageHeading (legComplexEvenReferencePageHeading) {
  this.message = legComplexEvenReferencePageHeading;
}

LegComplexEvenReferencePageHeading.prototype.value = function () {
  return this.message;
};

LegComplexEvenReferencePageHeading.Tag = '41386';

LegComplexEvenReferencePageHeading.Type = 'STRING';

module.exports = LegComplexEvenReferencePageHeading;