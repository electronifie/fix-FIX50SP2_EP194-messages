var invert = require('invert-obj');

function UnderlyingEventPx (underlyingEventPx) {
  this.message = underlyingEventPx;
}

UnderlyingEventPx.prototype.value = function () {
  return this.message;
};

UnderlyingEventPx.Tag = '1987';

UnderlyingEventPx.Type = 'PRICE';

module.exports = UnderlyingEventPx;