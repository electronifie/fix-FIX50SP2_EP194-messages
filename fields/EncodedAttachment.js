var invert = require('invert-obj');

function EncodedAttachment (encodedAttachment) {
  this.message = encodedAttachment;
}

EncodedAttachment.prototype.value = function () {
  return this.message;
};

EncodedAttachment.Tag = '2112';

EncodedAttachment.Type = 'DATA';

module.exports = EncodedAttachment;