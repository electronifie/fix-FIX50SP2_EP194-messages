var invert = require('invert-obj');

function MDStatisticEndDate (mdstatisticEndDate) {
  this.message = mdstatisticEndDate;
}

MDStatisticEndDate.prototype.value = function () {
  return this.message;
};

MDStatisticEndDate.Tag = '2469';

MDStatisticEndDate.Type = 'UTCTIMESTAMP';

module.exports = MDStatisticEndDate;