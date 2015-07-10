var invert = require('invert-obj');

function EncodedEventText (encodedEventText) {
  this.message = encodedEventText;
}

EncodedEventText.prototype.value = function () {
  return this.message;
};

EncodedEventText.Tag = '1579';

EncodedEventText.Type = 'DATA';

module.exports = EncodedEventText;