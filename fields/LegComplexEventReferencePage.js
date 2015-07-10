var invert = require('invert-obj');

function LegComplexEventReferencePage (legComplexEventReferencePage) {
  this.message = legComplexEventReferencePage;
}

LegComplexEventReferencePage.prototype.value = function () {
  return this.message;
};

LegComplexEventReferencePage.Tag = '41385';

LegComplexEventReferencePage.Type = 'STRING';

module.exports = LegComplexEventReferencePage;