var invert = require('invert-obj');

function MasterConfirmationDesc (masterConfirmationDesc) {
  this.message = masterConfirmationDesc;
}

MasterConfirmationDesc.prototype.value = function () {
  return this.message;
};

MasterConfirmationDesc.Tag = '1962';

MasterConfirmationDesc.Type = 'STRING';

module.exports = MasterConfirmationDesc;