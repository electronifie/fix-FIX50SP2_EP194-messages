var invert = require('invert-obj');

function IndexAnnexVersion (indexAnnexVersion) {
  this.message = indexAnnexVersion;
}

IndexAnnexVersion.prototype.value = function () {
  return this.message;
};

IndexAnnexVersion.Tag = '1958';

IndexAnnexVersion.Type = 'INT';

module.exports = IndexAnnexVersion;