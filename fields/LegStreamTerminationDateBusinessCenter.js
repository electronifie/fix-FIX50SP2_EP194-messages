var invert = require('invert-obj');

function LegStreamTerminationDateBusinessCenter (legStreamTerminationDateBusinessCenter) {
  this.message = legStreamTerminationDateBusinessCenter;
}

LegStreamTerminationDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegStreamTerminationDateBusinessCenter.Tag = '40259';

LegStreamTerminationDateBusinessCenter.Type = 'STRING';

module.exports = LegStreamTerminationDateBusinessCenter;