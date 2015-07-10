var invert = require('invert-obj');

function SideVenueType (sideVenueType) {
  this.message = sideVenueType;
}

SideVenueType.prototype.value = function () {
  return this.message;
};

SideVenueType.Tag = '1899';

SideVenueType.Type = 'CHAR';

module.exports = SideVenueType;