var invert = require('invert-obj');

function LegExecID (legExecId) {
  this.message = legExecId;
}

LegExecID.prototype.value = function () {
  return this.message;
};

LegExecID.Tag = '1893';

LegExecID.Type = 'STRING';

module.exports = LegExecID;