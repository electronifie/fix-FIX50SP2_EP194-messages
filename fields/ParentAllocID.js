var invert = require('invert-obj');

function ParentAllocID (parentAllocId) {
  this.message = parentAllocId;
}

ParentAllocID.prototype.value = function () {
  return this.message;
};

ParentAllocID.Tag = '1593';

ParentAllocID.Type = 'STRING';

module.exports = ParentAllocID;