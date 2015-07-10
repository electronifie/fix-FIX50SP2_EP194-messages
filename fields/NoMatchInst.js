var invert = require('invert-obj');

function NoMatchInst (noMatchInst) {
  this.message = noMatchInst;
}

NoMatchInst.prototype.value = function () {
  return this.message;
};

NoMatchInst.Tag = '1624';

NoMatchInst.Type = 'NUMINGROUP';

module.exports = NoMatchInst;