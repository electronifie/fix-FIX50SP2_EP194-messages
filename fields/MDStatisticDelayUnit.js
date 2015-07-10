var invert = require('invert-obj');

function MDStatisticDelayUnit (mdstatisticDelayUnit) {
  this.message = mdstatisticDelayUnit;
}

MDStatisticDelayUnit.prototype.value = function () {
  return this.message;
};

MDStatisticDelayUnit.Tag = '2463';

MDStatisticDelayUnit.Type = 'INT';

module.exports = MDStatisticDelayUnit;