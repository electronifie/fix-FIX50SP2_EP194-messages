var invert = require('invert-obj');

function GoverningLaw (governingLaw) {
  this.message = governingLaw;
}

GoverningLaw.prototype.value = function () {
  return this.message;
};

GoverningLaw.Tag = '1970';

GoverningLaw.Type = 'STRING';

module.exports = GoverningLaw;