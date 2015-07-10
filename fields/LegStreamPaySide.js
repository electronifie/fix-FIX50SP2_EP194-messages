var invert = require('invert-obj');

function LegStreamPaySide (legStreamPaySide) {
  this.message = legStreamPaySide;
}

LegStreamPaySide.prototype.value = function () {
  return this.message;
};

LegStreamPaySide.Tag = '40244';

LegStreamPaySide.Type = 'INT';

module.exports = LegStreamPaySide;