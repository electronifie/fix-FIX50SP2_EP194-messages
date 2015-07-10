var invert = require('invert-obj');

function UnderlyingEventText (underlyingEventText) {
  this.message = underlyingEventText;
}

UnderlyingEventText.prototype.value = function () {
  return this.message;
};

UnderlyingEventText.Tag = '2071';

UnderlyingEventText.Type = 'STRING';

module.exports = UnderlyingEventText;