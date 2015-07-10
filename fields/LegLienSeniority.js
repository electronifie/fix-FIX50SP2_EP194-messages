var invert = require('invert-obj');

function LegLienSeniority (legLienSeniority) {
  this.message = legLienSeniority;
}

LegLienSeniority.prototype.value = function () {
  return this.message;
};

LegLienSeniority.Tag = '2169';

LegLienSeniority.Type = 'INT';

module.exports = LegLienSeniority;