var invert = require('invert-obj');

function NotAffSecondaryOrderID (notAffSecondaryOrderId) {
  this.message = notAffSecondaryOrderId;
}

NotAffSecondaryOrderID.prototype.value = function () {
  return this.message;
};

NotAffSecondaryOrderID.Tag = '1825';

NotAffSecondaryOrderID.Type = 'STRING';

module.exports = NotAffSecondaryOrderID;