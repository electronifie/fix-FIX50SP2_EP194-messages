var invert = require('invert-obj');

function LegFlexibleIndicator (legFlexibleIndicator) {
  this.message = legFlexibleIndicator;
}

LegFlexibleIndicator.prototype.value = function () {
  return this.message;
};

LegFlexibleIndicator.Tag = '2202';

LegFlexibleIndicator.Type = 'BOOLEAN';

module.exports = LegFlexibleIndicator;