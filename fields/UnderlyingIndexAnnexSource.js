var invert = require('invert-obj');

function UnderlyingIndexAnnexSource (underlyingIndexAnnexSource) {
  this.message = underlyingIndexAnnexSource;
}

UnderlyingIndexAnnexSource.prototype.value = function () {
  return this.message;
};

UnderlyingIndexAnnexSource.Tag = '2006';

UnderlyingIndexAnnexSource.Type = 'STRING';

module.exports = UnderlyingIndexAnnexSource;