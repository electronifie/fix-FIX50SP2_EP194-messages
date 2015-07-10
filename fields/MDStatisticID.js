var invert = require('invert-obj');

function MDStatisticID (mdstatisticId) {
  this.message = mdstatisticId;
}

MDStatisticID.prototype.value = function () {
  return this.message;
};

MDStatisticID.Tag = '2475';

MDStatisticID.Type = 'STRING';

module.exports = MDStatisticID;