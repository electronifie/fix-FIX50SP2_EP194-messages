var invert = require('invert-obj');

function UnderlyingFlexibleIndicator (underlyingFlexibleIndicator) {
  this.message = underlyingFlexibleIndicator;
}

UnderlyingFlexibleIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingFlexibleIndicator.Tag = '2035';

UnderlyingFlexibleIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingFlexibleIndicator;