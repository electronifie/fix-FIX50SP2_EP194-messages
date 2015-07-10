var invert = require('invert-obj');

function SideTrdSubTyp (sideTrdSubTyp) {
  this.message = sideTrdSubTyp;
}

SideTrdSubTyp.prototype.value = function () {
  return this.message;
};

SideTrdSubTyp.Tag = '1008';

SideTrdSubTyp.Type = 'INT';

module.exports = SideTrdSubTyp;