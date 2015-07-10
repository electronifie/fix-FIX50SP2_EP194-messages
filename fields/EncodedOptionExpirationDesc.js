var invert = require('invert-obj');

function EncodedOptionExpirationDesc (encodedOptionExpirationDesc) {
  this.message = encodedOptionExpirationDesc;
}

EncodedOptionExpirationDesc.prototype.value = function () {
  return this.message;
};

EncodedOptionExpirationDesc.Tag = '1697';

EncodedOptionExpirationDesc.Type = 'DATA';

module.exports = EncodedOptionExpirationDesc;