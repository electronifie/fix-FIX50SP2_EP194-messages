var invert = require('invert-obj');

function UnderlyingLienSeniority (underlyingLienSeniority) {
  this.message = underlyingLienSeniority;
}

UnderlyingLienSeniority.prototype.value = function () {
  return this.message;
};

UnderlyingLienSeniority.Tag = '1998';

UnderlyingLienSeniority.Type = 'INT';

module.exports = UnderlyingLienSeniority;