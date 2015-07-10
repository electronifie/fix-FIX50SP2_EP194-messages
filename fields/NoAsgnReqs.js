var invert = require('invert-obj');

function NoAsgnReqs (noAsgnReqs) {
  this.message = noAsgnReqs;
}

NoAsgnReqs.prototype.value = function () {
  return this.message;
};

NoAsgnReqs.Tag = '1499';

NoAsgnReqs.Type = 'NUMINGROUP';

module.exports = NoAsgnReqs;