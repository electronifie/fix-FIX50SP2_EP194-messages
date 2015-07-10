var invert = require('invert-obj');

function EncodedLegStreamTextLen (encodedLegStreamTextLen) {
  this.message = encodedLegStreamTextLen;
}

EncodedLegStreamTextLen.prototype.value = function () {
  return this.message;
};

EncodedLegStreamTextLen.Tag = '40978';

EncodedLegStreamTextLen.Type = 'LENGTH';

module.exports = EncodedLegStreamTextLen;