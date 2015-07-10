var invert = require('invert-obj');

function EncodedLegOptionExpirationDesc (encodedLegOptionExpirationDesc) {
  this.message = encodedLegOptionExpirationDesc;
}

EncodedLegOptionExpirationDesc.prototype.value = function () {
  return this.message;
};

EncodedLegOptionExpirationDesc.Tag = '2180';

EncodedLegOptionExpirationDesc.Type = 'DATA';

module.exports = EncodedLegOptionExpirationDesc;