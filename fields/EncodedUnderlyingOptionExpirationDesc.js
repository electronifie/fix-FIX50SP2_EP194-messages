var invert = require('invert-obj');

function EncodedUnderlyingOptionExpirationDesc (encodedUnderlyingOptionExpirationDesc) {
  this.message = encodedUnderlyingOptionExpirationDesc;
}

EncodedUnderlyingOptionExpirationDesc.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingOptionExpirationDesc.Tag = '2288';

EncodedUnderlyingOptionExpirationDesc.Type = 'DATA';

module.exports = EncodedUnderlyingOptionExpirationDesc;