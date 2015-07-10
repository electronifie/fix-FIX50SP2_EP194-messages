var invert = require('invert-obj');

function EncodedUnderlyingOptionExpirationDescLen (encodedUnderlyingOptionExpirationDescLen) {
  this.message = encodedUnderlyingOptionExpirationDescLen;
}

EncodedUnderlyingOptionExpirationDescLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingOptionExpirationDescLen.Tag = '2287';

EncodedUnderlyingOptionExpirationDescLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingOptionExpirationDescLen;