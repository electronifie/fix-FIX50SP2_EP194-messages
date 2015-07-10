var invert = require('invert-obj');

function SideRegulatoryLegRefID (sideRegulatoryLegRefId) {
  this.message = sideRegulatoryLegRefId;
}

SideRegulatoryLegRefID.prototype.value = function () {
  return this.message;
};

SideRegulatoryLegRefID.Tag = '2416';

SideRegulatoryLegRefID.Type = 'STRING';

module.exports = SideRegulatoryLegRefID;