var invert = require('invert-obj');

function PartyRelationship (partyRelationship) {
  this.message = partyRelationship;
}

PartyRelationship.prototype.value = function () {
  return this.message;
};


PartyRelationship.Keys = {
  'IS_ALSO': '0',
  'CLEARS_FOR': '1',
  'CLEARS_THROUGH': '2',
  'TRADES_FOR': '3',
  'TRADES_THROUGH': '4',
  'SPONSORS': '5',
  'SPONSORED_THROUGH': '6',
  'PROVIDES_GUARANTEE_FOR': '7',
  'IS_GUARANTEED_BY': '8',
  'MEMBER_OF': '9',
  'HAS_MEMBERS': '10',
  'PROVIDES_MARKETPLACE_FOR': '11',
  'PARTICIPANT_OF_MARKETPLACE': '12',
  'CARRIES_POSITIONS_FOR': '13',
  'POSTS_TRADES_TO': '14',
  'ENTERS_TRADES_FOR': '15',
  'ENTERS_TRADES_THROUGH': '16',
  'PROVIDES_QUOTES_TO': '17',
  'REQUESTS_QUOTES_FROM': '18',
  'INVESTS_FOR': '19',
  'INVESTS_THROUGH': '20',
  'BROKERS_TRADES_FOR': '21',
  'BROKERS_TRADES_THROUGH': '22',
  'PROVIDES_TRADING_SERVICES_FOR': '23',
  'USES_TRADING_SERVICES_OF': '24',
  'APPROVES_OF': '25',
  'APPROVED_BY': '26',
  'PARENT_FIRM_FOR': '27',
  'SUBSIDIARY_OF': '28',
  'REGULATORY_OWNER_OF': '29',
  'OWNED_BY': '30',
  'CONTROLS': '31',
  'IS_CONTROLLED_BY': '32',
  'LEGAL_TITLED_OWNER_OF': '33',
  'OWNED_BY_1': '34',
  'BENEFICIAL_OWNER_OF': '35',
  'OWNED_BY_1': '36',
  'SETTLES_FOR': '37',
  'SETTLES_THROUGH': '38',
};

PartyRelationship.Tag = '1515';

PartyRelationship.Type = 'INT';

PartyRelationship.Values = invert(PartyRelationship.Keys);

module.exports = PartyRelationship;