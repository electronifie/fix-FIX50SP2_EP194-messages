var invert = require('invert-obj');

function ReferencePage (referencePage) {
  this.message = referencePage;
}

ReferencePage.prototype.value = function () {
  return this.message;
};

ReferencePage.Tag = '1448';

ReferencePage.Type = 'STRING';

module.exports = ReferencePage;