var invert = require('invert-obj');

function MDStatisticStatus (mdstatisticStatus) {
  this.message = mdstatisticStatus;
}

MDStatisticStatus.prototype.value = function () {
  return this.message;
};


MDStatisticStatus.Keys = {
  'ACTIVE': '1',
  'INACTIVE': '2',
};

MDStatisticStatus.Tag = '2477';

MDStatisticStatus.Type = 'INT';

MDStatisticStatus.Values = invert(MDStatisticStatus.Keys);

module.exports = MDStatisticStatus;