var invert = require('invert-obj');

function CollateralRequestLinkID (collateralRequestLinkId) {
  this.message = collateralRequestLinkId;
}

CollateralRequestLinkID.prototype.value = function () {
  return this.message;
};

CollateralRequestLinkID.Tag = '2517';

CollateralRequestLinkID.Type = 'STRING';

module.exports = CollateralRequestLinkID;