var invert = require('invert-obj');

function MDStatisticTime (mdstatisticTime) {
  this.message = mdstatisticTime;
}

MDStatisticTime.prototype.value = function () {
  return this.message;
};

MDStatisticTime.Tag = '2476';

MDStatisticTime.Type = 'UTCTIMESTAMP';

module.exports = MDStatisticTime;