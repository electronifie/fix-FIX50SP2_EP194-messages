var invert = require('invert-obj');

function MDStatisticValue (mdstatisticValue) {
  this.message = mdstatisticValue;
}

MDStatisticValue.prototype.value = function () {
  return this.message;
};

MDStatisticValue.Tag = '2478';

MDStatisticValue.Type = 'FLOAT';

module.exports = MDStatisticValue;