var invert = require('invert-obj');

function OffsetInstruction (offsetInstruction) {
  this.message = offsetInstruction;
}

OffsetInstruction.prototype.value = function () {
  return this.message;
};


OffsetInstruction.Keys = {
  OFFSET: '0',
  ONSET: '1',
};

OffsetInstruction.Tag = '1849';

OffsetInstruction.Type = 'INT';

OffsetInstruction.Values = invert(OffsetInstruction.Keys);

module.exports = OffsetInstruction;