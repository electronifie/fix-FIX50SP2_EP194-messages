var invert = require('invert-obj');

function LegStreamTerminationDateRelativeTo (legStreamTerminationDateRelativeTo) {
  this.message = legStreamTerminationDateRelativeTo;
}

LegStreamTerminationDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegStreamTerminationDateRelativeTo.Tag = '40260';

LegStreamTerminationDateRelativeTo.Type = 'INT';

module.exports = LegStreamTerminationDateRelativeTo;