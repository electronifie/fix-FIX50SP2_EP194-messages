var invert = require('invert-obj');

function RestructuringType (restructuringType) {
  this.message = restructuringType;
}

RestructuringType.prototype.value = function () {
  return this.message;
};


RestructuringType.Keys = {
  FULL_RESTRUCTURING: 'FR',
  MODIFIED_RESTRUCTURING: 'MR',
  MODIFIED_MOD_RESTRUCTURING: 'MM',
  NO_RESTRUCTURING_SPECIFIED: 'XR',
};

RestructuringType.Tag = '1449';

RestructuringType.Type = 'STRING';

RestructuringType.Values = invert(RestructuringType.Keys);

module.exports = RestructuringType;