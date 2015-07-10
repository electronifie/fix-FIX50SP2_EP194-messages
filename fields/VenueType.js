var invert = require('invert-obj');

function VenueType (venueType) {
  this.message = venueType;
}

VenueType.prototype.value = function () {
  return this.message;
};


VenueType.Keys = {
  ELECTRONIC_EXCHANGE: 'E',
  PIT: 'P',
  EX_PIT: 'X',
  CLEARINGHOUSE: 'C',
  REGISTERED_MARKET: 'R',
  OFF_MARKET: 'O',
  CENTRAL_LIMIT_ORDER_BOOK: 'B',
  QUOTE_DRIVEN_MARKET: 'Q',
  DARK_ORDER_BOOK: 'D',
};

VenueType.Tag = '1430';

VenueType.Type = 'CHAR';

VenueType.Values = invert(VenueType.Keys);

module.exports = VenueType;