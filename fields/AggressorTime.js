var invert = require('invert-obj');

function AggressorTime (aggressorTime) {
  this.message = aggressorTime;
}

AggressorTime.prototype.value = function () {
  return this.message;
};

AggressorTime.Tag = '2445';

AggressorTime.Type = 'UTCTIMESTAMP';

module.exports = AggressorTime;