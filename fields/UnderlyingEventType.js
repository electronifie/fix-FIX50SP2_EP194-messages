var invert = require('invert-obj');

function UnderlyingEventType (underlyingEventType) {
  this.message = underlyingEventType;
}

UnderlyingEventType.prototype.value = function () {
  return this.message;
};

UnderlyingEventType.Tag = '1982';

UnderlyingEventType.Type = 'INT';

module.exports = UnderlyingEventType;