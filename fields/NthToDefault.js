var invert = require('invert-obj');

function NthToDefault (nthToDefault) {
  this.message = nthToDefault;
}

NthToDefault.prototype.value = function () {
  return this.message;
};

NthToDefault.Tag = '1942';

NthToDefault.Type = 'INT';

module.exports = NthToDefault;