var invert = require('invert-obj');

function UnderlyingIndexSeries (underlyingIndexSeries) {
  this.message = underlyingIndexSeries;
}

UnderlyingIndexSeries.prototype.value = function () {
  return this.message;
};

UnderlyingIndexSeries.Tag = '2003';

UnderlyingIndexSeries.Type = 'INT';

module.exports = UnderlyingIndexSeries;