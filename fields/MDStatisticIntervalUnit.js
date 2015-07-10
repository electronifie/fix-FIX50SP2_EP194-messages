var invert = require('invert-obj');

function MDStatisticIntervalUnit (mdstatisticIntervalUnit) {
  this.message = mdstatisticIntervalUnit;
}

MDStatisticIntervalUnit.prototype.value = function () {
  return this.message;
};

MDStatisticIntervalUnit.Tag = '2467';

MDStatisticIntervalUnit.Type = 'INT';

module.exports = MDStatisticIntervalUnit;