var invert = require('invert-obj');

function MDStatisticStartDate (mdstatisticStartDate) {
  this.message = mdstatisticStartDate;
}

MDStatisticStartDate.prototype.value = function () {
  return this.message;
};

MDStatisticStartDate.Tag = '2468';

MDStatisticStartDate.Type = 'UTCTIMESTAMP';

module.exports = MDStatisticStartDate;