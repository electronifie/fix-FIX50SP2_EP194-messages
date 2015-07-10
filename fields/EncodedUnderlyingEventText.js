var invert = require('invert-obj');

function EncodedUnderlyingEventText (encodedUnderlyingEventText) {
  this.message = encodedUnderlyingEventText;
}

EncodedUnderlyingEventText.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingEventText.Tag = '2073';

EncodedUnderlyingEventText.Type = 'DATA';

module.exports = EncodedUnderlyingEventText;