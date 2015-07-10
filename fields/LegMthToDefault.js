var invert = require('invert-obj');

function LegMthToDefault (legMthToDefault) {
  this.message = legMthToDefault;
}

LegMthToDefault.prototype.value = function () {
  return this.message;
};

LegMthToDefault.Tag = '2158';

LegMthToDefault.Type = 'INT';

module.exports = LegMthToDefault;