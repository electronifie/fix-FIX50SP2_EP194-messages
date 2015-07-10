var invert = require('invert-obj');

function LegCPProgram (legCpprogram) {
  this.message = legCpprogram;
}

LegCPProgram.prototype.value = function () {
  return this.message;
};

LegCPProgram.Tag = '2207';

LegCPProgram.Type = 'INT';

module.exports = LegCPProgram;