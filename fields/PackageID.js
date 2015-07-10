var invert = require('invert-obj');

function PackageID (packageId) {
  this.message = packageId;
}

PackageID.prototype.value = function () {
  return this.message;
};

PackageID.Tag = '2489';

PackageID.Type = 'STRING';

module.exports = PackageID;