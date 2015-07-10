var invert = require('invert-obj');

function MDStatisticName (mdstatisticName) {
  this.message = mdstatisticName;
}

MDStatisticName.prototype.value = function () {
  return this.message;
};

MDStatisticName.Tag = '2454';

MDStatisticName.Type = 'STRING';

module.exports = MDStatisticName;