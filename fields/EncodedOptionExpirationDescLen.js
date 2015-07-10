var invert = require('invert-obj');

function EncodedOptionExpirationDescLen (encodedOptionExpirationDescLen) {
  this.message = encodedOptionExpirationDescLen;
}

EncodedOptionExpirationDescLen.prototype.value = function () {
  return this.message;
};

EncodedOptionExpirationDescLen.Tag = '1678';

EncodedOptionExpirationDescLen.Type = 'LENGTH';

module.exports = EncodedOptionExpirationDescLen;