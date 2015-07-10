var invert = require('invert-obj');

function MDStatisticValueUnit (mdstatisticValueUnit) {
  this.message = mdstatisticValueUnit;
}

MDStatisticValueUnit.prototype.value = function () {
  return this.message;
};

MDStatisticValueUnit.Tag = '2480';

MDStatisticValueUnit.Type = 'STRING';

module.exports = MDStatisticValueUnit;