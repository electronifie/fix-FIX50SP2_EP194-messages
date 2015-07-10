var invert = require('invert-obj');

function UnderlyingIndexAnnexDate (underlyingIndexAnnexDate) {
  this.message = underlyingIndexAnnexDate;
}

UnderlyingIndexAnnexDate.prototype.value = function () {
  return this.message;
};

UnderlyingIndexAnnexDate.Tag = '2005';

UnderlyingIndexAnnexDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingIndexAnnexDate;