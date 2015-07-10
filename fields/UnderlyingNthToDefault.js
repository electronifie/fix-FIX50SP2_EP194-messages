var invert = require('invert-obj');

function UnderlyingNthToDefault (underlyingNthToDefault) {
  this.message = underlyingNthToDefault;
}

UnderlyingNthToDefault.prototype.value = function () {
  return this.message;
};

UnderlyingNthToDefault.Tag = '2017';

UnderlyingNthToDefault.Type = 'INT';

module.exports = UnderlyingNthToDefault;