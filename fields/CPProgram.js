var invert = require('invert-obj');

function CPProgram (cpprogram) {
  this.message = cpprogram;
}

CPProgram.prototype.value = function () {
  return this.message;
};


CPProgram.Keys = {
  _3: '1',
  _4: '2',
  OTHER: '99',
};

CPProgram.Tag = '875';

CPProgram.Type = 'INT';

CPProgram.Values = invert(CPProgram.Keys);

module.exports = CPProgram;