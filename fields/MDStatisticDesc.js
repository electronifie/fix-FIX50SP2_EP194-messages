var invert = require('invert-obj');

function MDStatisticDesc (mdstatisticDesc) {
  this.message = mdstatisticDesc;
}

MDStatisticDesc.prototype.value = function () {
  return this.message;
};

MDStatisticDesc.Tag = '2455';

MDStatisticDesc.Type = 'STRING';

module.exports = MDStatisticDesc;