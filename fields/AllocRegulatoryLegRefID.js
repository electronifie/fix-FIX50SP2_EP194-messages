var invert = require('invert-obj');

function AllocRegulatoryLegRefID (allocRegulatoryLegRefId) {
  this.message = allocRegulatoryLegRefId;
}

AllocRegulatoryLegRefID.prototype.value = function () {
  return this.message;
};

AllocRegulatoryLegRefID.Tag = '2406';

AllocRegulatoryLegRefID.Type = 'STRING';

module.exports = AllocRegulatoryLegRefID;