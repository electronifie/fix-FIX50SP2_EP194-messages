var invert = require('invert-obj');

function NoLegEvents (noLegEvents) {
  this.message = noLegEvents;
}

NoLegEvents.prototype.value = function () {
  return this.message;
};

NoLegEvents.Tag = '2059';

NoLegEvents.Type = 'NUMINGROUP';

module.exports = NoLegEvents;