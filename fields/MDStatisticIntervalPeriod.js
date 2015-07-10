var invert = require('invert-obj');

function MDStatisticIntervalPeriod (mdstatisticIntervalPeriod) {
  this.message = mdstatisticIntervalPeriod;
}

MDStatisticIntervalPeriod.prototype.value = function () {
  return this.message;
};

MDStatisticIntervalPeriod.Tag = '2466';

MDStatisticIntervalPeriod.Type = 'INT';

module.exports = MDStatisticIntervalPeriod;