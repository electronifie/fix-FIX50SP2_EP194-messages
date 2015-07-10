var invert = require('invert-obj');

function NoNewsRefIDs (noNewsRefIds) {
  this.message = noNewsRefIds;
}

NoNewsRefIDs.prototype.value = function () {
  return this.message;
};

NoNewsRefIDs.Tag = '1475';

NoNewsRefIDs.Type = 'NUMINGROUP';

module.exports = NoNewsRefIDs;