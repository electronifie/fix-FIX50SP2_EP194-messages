var invert = require('invert-obj');

function LegIndexAnnexSource (legIndexAnnexSource) {
  this.message = legIndexAnnexSource;
}

LegIndexAnnexSource.prototype.value = function () {
  return this.message;
};

LegIndexAnnexSource.Tag = '2175';

LegIndexAnnexSource.Type = 'STRING';

module.exports = LegIndexAnnexSource;