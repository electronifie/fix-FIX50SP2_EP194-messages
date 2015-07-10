var invert = require('invert-obj');

function LegMasterConfirmationDesc (legMasterConfirmationDesc) {
  this.message = legMasterConfirmationDesc;
}

LegMasterConfirmationDesc.prototype.value = function () {
  return this.message;
};

LegMasterConfirmationDesc.Tag = '2511';

LegMasterConfirmationDesc.Type = 'STRING';

module.exports = LegMasterConfirmationDesc;