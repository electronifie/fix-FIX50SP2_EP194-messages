var invert = require('invert-obj');

function EncodedMDStatisticDesc (encodedMdstatisticDesc) {
  this.message = encodedMdstatisticDesc;
}

EncodedMDStatisticDesc.prototype.value = function () {
  return this.message;
};

EncodedMDStatisticDesc.Tag = '2482';

EncodedMDStatisticDesc.Type = 'DATA';

module.exports = EncodedMDStatisticDesc;