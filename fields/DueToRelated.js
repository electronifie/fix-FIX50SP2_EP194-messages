var invert = require('invert-obj');

function DueToRelated (dueToRelated) {
  this.message = dueToRelated;
}

DueToRelated.prototype.value = function () {
  return this.message;
};


DueToRelated.Keys = {
  HALT_WAS_NOT_RELATED_TO_A_HALT_OF_THE_RELATED_SECURITY: 'N',
  HALT_WAS_DUE_TO_RELATED_SECURITY_BEING_HALTED: 'Y',
};

DueToRelated.Tag = '329';

DueToRelated.Type = 'BOOLEAN';

DueToRelated.Values = invert(DueToRelated.Keys);

module.exports = DueToRelated;