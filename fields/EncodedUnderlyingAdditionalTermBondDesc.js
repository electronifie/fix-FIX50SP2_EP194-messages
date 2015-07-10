var invert = require('invert-obj');

function EncodedUnderlyingAdditionalTermBondDesc (encodedUnderlyingAdditionalTermBondDesc) {
  this.message = encodedUnderlyingAdditionalTermBondDesc;
}

EncodedUnderlyingAdditionalTermBondDesc.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingAdditionalTermBondDesc.Tag = '41711';

EncodedUnderlyingAdditionalTermBondDesc.Type = 'DATA';

module.exports = EncodedUnderlyingAdditionalTermBondDesc;