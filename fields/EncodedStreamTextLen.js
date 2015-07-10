var invert = require('invert-obj');

function EncodedStreamTextLen (encodedStreamTextLen) {
  this.message = encodedStreamTextLen;
}

EncodedStreamTextLen.prototype.value = function () {
  return this.message;
};

EncodedStreamTextLen.Tag = '40982';

EncodedStreamTextLen.Type = 'LENGTH';

module.exports = EncodedStreamTextLen;