var invert = require('invert-obj');

function EncodedLegAdditionalTermBondDesc (encodedLegAdditionalTermBondDesc) {
  this.message = encodedLegAdditionalTermBondDesc;
}

EncodedLegAdditionalTermBondDesc.prototype.value = function () {
  return this.message;
};

EncodedLegAdditionalTermBondDesc.Tag = '41321';

EncodedLegAdditionalTermBondDesc.Type = 'DATA';

module.exports = EncodedLegAdditionalTermBondDesc;