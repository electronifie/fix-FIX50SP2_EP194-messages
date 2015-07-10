var invert = require('invert-obj');

function InternationalSwapIndicator (internationalSwapIndicator) {
  this.message = internationalSwapIndicator;
}

InternationalSwapIndicator.prototype.value = function () {
  return this.message;
};

InternationalSwapIndicator.Tag = '2526';

InternationalSwapIndicator.Type = 'BOOLEAN';

module.exports = InternationalSwapIndicator;