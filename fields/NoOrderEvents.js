var invert = require('invert-obj');

function NoOrderEvents (noOrderEvents) {
  this.message = noOrderEvents;
}

NoOrderEvents.prototype.value = function () {
  return this.message;
};

NoOrderEvents.Tag = '1795';

NoOrderEvents.Type = 'NUMINGROUP';

module.exports = NoOrderEvents;