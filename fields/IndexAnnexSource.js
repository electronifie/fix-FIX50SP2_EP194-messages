var invert = require('invert-obj');

function IndexAnnexSource (indexAnnexSource) {
  this.message = indexAnnexSource;
}

IndexAnnexSource.prototype.value = function () {
  return this.message;
};

IndexAnnexSource.Tag = '1960';

IndexAnnexSource.Type = 'STRING';

module.exports = IndexAnnexSource;