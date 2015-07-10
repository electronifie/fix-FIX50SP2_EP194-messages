var invert = require('invert-obj');

function LegComplexEventDateBusinessCenter (legComplexEventDateBusinessCenter) {
  this.message = legComplexEventDateBusinessCenter;
}

LegComplexEventDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegComplexEventDateBusinessCenter.Tag = '41388';

LegComplexEventDateBusinessCenter.Type = 'STRING';

module.exports = LegComplexEventDateBusinessCenter;