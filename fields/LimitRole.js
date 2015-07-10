var invert = require('invert-obj');

function LimitRole (limitRole) {
  this.message = limitRole;
}

LimitRole.prototype.value = function () {
  return this.message;
};

LimitRole.Tag = '2396';

LimitRole.Type = 'INT';

module.exports = LimitRole;