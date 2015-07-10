var invert = require('invert-obj');

function IndexAnnexDate (indexAnnexDate) {
  this.message = indexAnnexDate;
}

IndexAnnexDate.prototype.value = function () {
  return this.message;
};

IndexAnnexDate.Tag = '1959';

IndexAnnexDate.Type = 'LOCALMKTDATE';

module.exports = IndexAnnexDate;