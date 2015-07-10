var invert = require('invert-obj');

function LegIndexAnnexVersion (legIndexAnnexVersion) {
  this.message = legIndexAnnexVersion;
}

LegIndexAnnexVersion.prototype.value = function () {
  return this.message;
};

LegIndexAnnexVersion.Tag = '2173';

LegIndexAnnexVersion.Type = 'INT';

module.exports = LegIndexAnnexVersion;