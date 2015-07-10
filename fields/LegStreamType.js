var invert = require('invert-obj');

function LegStreamType (legStreamType) {
  this.message = legStreamType;
}

LegStreamType.prototype.value = function () {
  return this.message;
};

LegStreamType.Tag = '40242';

LegStreamType.Type = 'INT';

module.exports = LegStreamType;