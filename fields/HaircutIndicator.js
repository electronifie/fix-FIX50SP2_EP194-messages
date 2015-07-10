var invert = require('invert-obj');

function HaircutIndicator (haircutIndicator) {
  this.message = haircutIndicator;
}

HaircutIndicator.prototype.value = function () {
  return this.message;
};

HaircutIndicator.Tag = '1902';

HaircutIndicator.Type = 'BOOLEAN';

module.exports = HaircutIndicator;