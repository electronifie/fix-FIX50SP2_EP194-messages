var invert = require('invert-obj');

function LegComplexEventDateBusinessDayConvention (legComplexEventDateBusinessDayConvention) {
  this.message = legComplexEventDateBusinessDayConvention;
}

LegComplexEventDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegComplexEventDateBusinessDayConvention.Tag = '41394';

LegComplexEventDateBusinessDayConvention.Type = 'INT';

module.exports = LegComplexEventDateBusinessDayConvention;