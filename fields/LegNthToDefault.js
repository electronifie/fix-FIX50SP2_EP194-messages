var invert = require('invert-obj');

function LegNthToDefault (legNthToDefault) {
  this.message = legNthToDefault;
}

LegNthToDefault.prototype.value = function () {
  return this.message;
};

LegNthToDefault.Tag = '2157';

LegNthToDefault.Type = 'INT';

module.exports = LegNthToDefault;