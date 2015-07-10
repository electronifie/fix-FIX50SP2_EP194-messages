var invert = require('invert-obj');

function EncodedLegAdditionalTermBondDescLen (encodedLegAdditionalTermBondDescLen) {
  this.message = encodedLegAdditionalTermBondDescLen;
}

EncodedLegAdditionalTermBondDescLen.prototype.value = function () {
  return this.message;
};

EncodedLegAdditionalTermBondDescLen.Tag = '41320';

EncodedLegAdditionalTermBondDescLen.Type = 'LENGTH';

module.exports = EncodedLegAdditionalTermBondDescLen;