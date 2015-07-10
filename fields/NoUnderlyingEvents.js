var invert = require('invert-obj');

function NoUnderlyingEvents (noUnderlyingEvents) {
  this.message = noUnderlyingEvents;
}

NoUnderlyingEvents.prototype.value = function () {
  return this.message;
};

NoUnderlyingEvents.Tag = '1981';

NoUnderlyingEvents.Type = 'NUMINGROUP';

module.exports = NoUnderlyingEvents;