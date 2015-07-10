var invert = require('invert-obj');

function LegExecRefID (legExecRefId) {
  this.message = legExecRefId;
}

LegExecRefID.prototype.value = function () {
  return this.message;
};

LegExecRefID.Tag = '1901';

LegExecRefID.Type = 'STRING';

module.exports = LegExecRefID;