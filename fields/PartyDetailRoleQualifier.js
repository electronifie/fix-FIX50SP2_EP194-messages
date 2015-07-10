var invert = require('invert-obj');

function PartyDetailRoleQualifier (partyDetailRoleQualifier) {
  this.message = partyDetailRoleQualifier;
}

PartyDetailRoleQualifier.prototype.value = function () {
  return this.message;
};


PartyDetailRoleQualifier.Keys = {
  AGENCY: '0',
  PRINCIPAL: '1',
  PREFERRED_MARKET_MAKER: '5',
  RISKLESS_PRINCIPAL: '2',
  DIRECTED_MARKET_MAKER: '6',
  GENERAL_CLEARING_MEMBER: '3',
  INDIVIDUAL_CLEARING_MEMBER: '4',
  BANK: '7',
  HUB: '8',
  PRIMARY_TRADE_REPOSITORY: '9',
  ORIGINAL_TRADE_REPOSITORY: '10',
  ADDITIONAL_INTERNATIONAL_TRADE_REPOSITORY: '11',
  ADDITIONAL_DOMESTIC_TRADE_REPOSITORY: '12',
};

PartyDetailRoleQualifier.Tag = '1674';

PartyDetailRoleQualifier.Type = 'INT';

PartyDetailRoleQualifier.Values = invert(PartyDetailRoleQualifier.Keys);

module.exports = PartyDetailRoleQualifier;