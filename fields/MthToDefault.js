var invert = require('invert-obj');

function MthToDefault (mthToDefault) {
  this.message = mthToDefault;
}

MthToDefault.prototype.value = function () {
  return this.message;
};

MthToDefault.Tag = '1943';

MthToDefault.Type = 'INT';

module.exports = MthToDefault;