var invert = require('invert-obj');

function MDImplicitDelete (mdimplicitDelete) {
  this.message = mdimplicitDelete;
}

MDImplicitDelete.prototype.value = function () {
  return this.message;
};


MDImplicitDelete.Keys = {
  SERVER_MUST_SEND_AN_EXPLICIT_DELETE_FOR_BIDS_OR_OFFERS_FALLING_OUTSIDE_THE_REQUESTED_MARKETDEPTH_OF_THE_REQUEST: 'N',
  CLIENT_HAS_RESPONSIBILITY_FOR_IMPLICITLY_DELETING_BIDS_OR_OFFERS_FALLING_OUTSIDE_THE_MARKETDEPTH_OF_THE_REQUEST: 'Y',
};

MDImplicitDelete.Tag = '547';

MDImplicitDelete.Type = 'BOOLEAN';

MDImplicitDelete.Values = invert(MDImplicitDelete.Keys);

module.exports = MDImplicitDelete;