var invert = require('invert-obj');

function UnderlyingStreamText (underlyingStreamText) {
  this.message = underlyingStreamText;
}

UnderlyingStreamText.prototype.value = function () {
  return this.message;
};

UnderlyingStreamText.Tag = '40547';

UnderlyingStreamText.Type = 'STRING';

module.exports = UnderlyingStreamText;