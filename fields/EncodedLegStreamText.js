var invert = require('invert-obj');

function EncodedLegStreamText (encodedLegStreamText) {
  this.message = encodedLegStreamText;
}

EncodedLegStreamText.prototype.value = function () {
  return this.message;
};

EncodedLegStreamText.Tag = '40979';

EncodedLegStreamText.Type = 'DATA';

module.exports = EncodedLegStreamText;