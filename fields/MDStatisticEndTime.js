var invert = require('invert-obj');

function MDStatisticEndTime (mdstatisticEndTime) {
  this.message = mdstatisticEndTime;
}

MDStatisticEndTime.prototype.value = function () {
  return this.message;
};

MDStatisticEndTime.Tag = '2471';

MDStatisticEndTime.Type = 'UTCTIMEONLY';

module.exports = MDStatisticEndTime;