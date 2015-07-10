var invert = require('invert-obj');

function EncodedUnderlyingAdditionalTermBondDescLen (encodedUnderlyingAdditionalTermBondDescLen) {
  this.message = encodedUnderlyingAdditionalTermBondDescLen;
}

EncodedUnderlyingAdditionalTermBondDescLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingAdditionalTermBondDescLen.Tag = '41710';

EncodedUnderlyingAdditionalTermBondDescLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingAdditionalTermBondDescLen;