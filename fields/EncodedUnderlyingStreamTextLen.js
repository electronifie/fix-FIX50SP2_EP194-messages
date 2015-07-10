var invert = require('invert-obj');

function EncodedUnderlyingStreamTextLen (encodedUnderlyingStreamTextLen) {
  this.message = encodedUnderlyingStreamTextLen;
}

EncodedUnderlyingStreamTextLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingStreamTextLen.Tag = '40988';

EncodedUnderlyingStreamTextLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingStreamTextLen;