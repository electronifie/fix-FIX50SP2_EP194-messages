var invert = require('invert-obj');

function MDStatisticIntervalTypeUnit (mdstatisticIntervalTypeUnit) {
  this.message = mdstatisticIntervalTypeUnit;
}

MDStatisticIntervalTypeUnit.prototype.value = function () {
  return this.message;
};

MDStatisticIntervalTypeUnit.Tag = '2465';

MDStatisticIntervalTypeUnit.Type = 'STRING';

module.exports = MDStatisticIntervalTypeUnit;