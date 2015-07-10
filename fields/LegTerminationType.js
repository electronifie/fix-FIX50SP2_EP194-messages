var invert = require('invert-obj');

function LegTerminationType (legTerminationType) {
  this.message = legTerminationType;
}

LegTerminationType.prototype.value = function () {
  return this.message;
};

LegTerminationType.Tag = '2514';

LegTerminationType.Type = 'INT';

module.exports = LegTerminationType;