var invert = require('invert-obj');

function NoMandatoryClearingJurisdictions (noMandatoryClearingJurisdictions) {
  this.message = noMandatoryClearingJurisdictions;
}

NoMandatoryClearingJurisdictions.prototype.value = function () {
  return this.message;
};

NoMandatoryClearingJurisdictions.Tag = '41312';

NoMandatoryClearingJurisdictions.Type = 'NUMINGROUP';

module.exports = NoMandatoryClearingJurisdictions;