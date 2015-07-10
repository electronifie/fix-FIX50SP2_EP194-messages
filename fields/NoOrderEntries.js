var invert = require('invert-obj');

function NoOrderEntries (noOrderEntries) {
  this.message = noOrderEntries;
}

NoOrderEntries.prototype.value = function () {
  return this.message;
};

NoOrderEntries.Tag = '2428';

NoOrderEntries.Type = 'NUMINGROUP';

module.exports = NoOrderEntries;