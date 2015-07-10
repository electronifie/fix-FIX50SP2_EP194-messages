var invert = require('invert-obj');

function LegIndexAnnexDate (legIndexAnnexDate) {
  this.message = legIndexAnnexDate;
}

LegIndexAnnexDate.prototype.value = function () {
  return this.message;
};

LegIndexAnnexDate.Tag = '2174';

LegIndexAnnexDate.Type = 'LOCALMKTDATE';

module.exports = LegIndexAnnexDate;