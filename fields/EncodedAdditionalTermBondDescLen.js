var invert = require('invert-obj');

function EncodedAdditionalTermBondDescLen (encodedAdditionalTermBondDescLen) {
  this.message = encodedAdditionalTermBondDescLen;
}

EncodedAdditionalTermBondDescLen.prototype.value = function () {
  return this.message;
};

EncodedAdditionalTermBondDescLen.Tag = '40004';

EncodedAdditionalTermBondDescLen.Type = 'LENGTH';

module.exports = EncodedAdditionalTermBondDescLen;