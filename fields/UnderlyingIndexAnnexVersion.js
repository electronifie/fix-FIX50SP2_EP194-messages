var invert = require('invert-obj');

function UnderlyingIndexAnnexVersion (underlyingIndexAnnexVersion) {
  this.message = underlyingIndexAnnexVersion;
}

UnderlyingIndexAnnexVersion.prototype.value = function () {
  return this.message;
};

UnderlyingIndexAnnexVersion.Tag = '2004';

UnderlyingIndexAnnexVersion.Type = 'INT';

module.exports = UnderlyingIndexAnnexVersion;