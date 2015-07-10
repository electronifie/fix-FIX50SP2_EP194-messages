var invert = require('invert-obj');

function EncodedLegOptionExpirationDescLen (encodedLegOptionExpirationDescLen) {
  this.message = encodedLegOptionExpirationDescLen;
}

EncodedLegOptionExpirationDescLen.prototype.value = function () {
  return this.message;
};

EncodedLegOptionExpirationDescLen.Tag = '2179';

EncodedLegOptionExpirationDescLen.Type = 'LENGTH';

module.exports = EncodedLegOptionExpirationDescLen;