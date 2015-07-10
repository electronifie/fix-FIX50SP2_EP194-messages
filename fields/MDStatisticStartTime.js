var invert = require('invert-obj');

function MDStatisticStartTime (mdstatisticStartTime) {
  this.message = mdstatisticStartTime;
}

MDStatisticStartTime.prototype.value = function () {
  return this.message;
};

MDStatisticStartTime.Tag = '2470';

MDStatisticStartTime.Type = 'UTCTIMEONLY';

module.exports = MDStatisticStartTime;