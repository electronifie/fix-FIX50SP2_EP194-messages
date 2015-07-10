var invert = require('invert-obj');

function LegMarginRatio (legMarginRatio) {
  this.message = legMarginRatio;
}

LegMarginRatio.prototype.value = function () {
  return this.message;
};

LegMarginRatio.Tag = '2508';

LegMarginRatio.Type = 'PERCENTAGE';

module.exports = LegMarginRatio;