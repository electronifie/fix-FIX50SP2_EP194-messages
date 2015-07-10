var invert = require('invert-obj');

function UnderlyingMthToDefault (underlyingMthToDefault) {
  this.message = underlyingMthToDefault;
}

UnderlyingMthToDefault.prototype.value = function () {
  return this.message;
};

UnderlyingMthToDefault.Tag = '2018';

UnderlyingMthToDefault.Type = 'INT';

module.exports = UnderlyingMthToDefault;