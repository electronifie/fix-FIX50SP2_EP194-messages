var invert = require('invert-obj');

function FillYieldType (fillYieldType) {
  this.message = fillYieldType;
}

FillYieldType.prototype.value = function () {
  return this.message;
};

FillYieldType.Tag = '1622';

FillYieldType.Type = 'STRING';

module.exports = FillYieldType;