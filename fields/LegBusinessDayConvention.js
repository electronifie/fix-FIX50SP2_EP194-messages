var invert = require('invert-obj');

function LegBusinessDayConvention (legBusinessDayConvention) {
  this.message = legBusinessDayConvention;
}

LegBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegBusinessDayConvention.Tag = '40925';

LegBusinessDayConvention.Type = 'INT';

module.exports = LegBusinessDayConvention;