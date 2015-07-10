var invert = require('invert-obj');

function MDStatisticDelayPeriod (mdstatisticDelayPeriod) {
  this.message = mdstatisticDelayPeriod;
}

MDStatisticDelayPeriod.prototype.value = function () {
  return this.message;
};

MDStatisticDelayPeriod.Tag = '2462';

MDStatisticDelayPeriod.Type = 'INT';

module.exports = MDStatisticDelayPeriod;