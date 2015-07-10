var invert = require('invert-obj');

function EncodedMDStatisticDescLen (encodedMdstatisticDescLen) {
  this.message = encodedMdstatisticDescLen;
}

EncodedMDStatisticDescLen.prototype.value = function () {
  return this.message;
};

EncodedMDStatisticDescLen.Tag = '2481';

EncodedMDStatisticDescLen.Type = 'LENGTH';

module.exports = EncodedMDStatisticDescLen;