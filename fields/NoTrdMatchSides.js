var invert = require('invert-obj');

function NoTrdMatchSides (noTrdMatchSides) {
  this.message = noTrdMatchSides;
}

NoTrdMatchSides.prototype.value = function () {
  return this.message;
};

NoTrdMatchSides.Tag = '1890';

NoTrdMatchSides.Type = 'NUMINGROUP';

module.exports = NoTrdMatchSides;