var invert = require('invert-obj');

function ShortMarkingExemptIndicator (shortMarkingExemptIndicator) {
  this.message = shortMarkingExemptIndicator;
}

ShortMarkingExemptIndicator.prototype.value = function () {
  return this.message;
};

ShortMarkingExemptIndicator.Tag = '2102';

ShortMarkingExemptIndicator.Type = 'BOOLEAN';

module.exports = ShortMarkingExemptIndicator;