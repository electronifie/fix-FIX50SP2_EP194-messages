var invert = require('invert-obj');

function LegIndexSeries (legIndexSeries) {
  this.message = legIndexSeries;
}

LegIndexSeries.prototype.value = function () {
  return this.message;
};

LegIndexSeries.Tag = '2172';

LegIndexSeries.Type = 'INT';

module.exports = LegIndexSeries;