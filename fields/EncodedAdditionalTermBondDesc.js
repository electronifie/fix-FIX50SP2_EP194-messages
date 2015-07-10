var invert = require('invert-obj');

function EncodedAdditionalTermBondDesc (encodedAdditionalTermBondDesc) {
  this.message = encodedAdditionalTermBondDesc;
}

EncodedAdditionalTermBondDesc.prototype.value = function () {
  return this.message;
};

EncodedAdditionalTermBondDesc.Tag = '40005';

EncodedAdditionalTermBondDesc.Type = 'DATA';

module.exports = EncodedAdditionalTermBondDesc;