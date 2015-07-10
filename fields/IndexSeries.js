var invert = require('invert-obj');

function IndexSeries (indexSeries) {
  this.message = indexSeries;
}

IndexSeries.prototype.value = function () {
  return this.message;
};

IndexSeries.Tag = '1957';

IndexSeries.Type = 'INT';

module.exports = IndexSeries;