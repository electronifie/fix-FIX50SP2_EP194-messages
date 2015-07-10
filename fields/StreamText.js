var invert = require('invert-obj');

function StreamText (streamText) {
  this.message = streamText;
}

StreamText.prototype.value = function () {
  return this.message;
};

StreamText.Tag = '40056';

StreamText.Type = 'STRING';

module.exports = StreamText;