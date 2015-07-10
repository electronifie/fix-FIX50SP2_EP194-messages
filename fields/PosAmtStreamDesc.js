var invert = require('invert-obj');

function PosAmtStreamDesc (posAmtStreamDesc) {
  this.message = posAmtStreamDesc;
}

PosAmtStreamDesc.prototype.value = function () {
  return this.message;
};

PosAmtStreamDesc.Tag = '2096';

PosAmtStreamDesc.Type = 'STRING';

module.exports = PosAmtStreamDesc;