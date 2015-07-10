var invert = require('invert-obj');

function LegID (legId) {
  this.message = legId;
}

LegID.prototype.value = function () {
  return this.message;
};

LegID.Tag = '1788';

LegID.Type = 'STRING';

module.exports = LegID;