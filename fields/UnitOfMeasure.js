var invert = require('invert-obj');

function UnitOfMeasure (unitOfMeasure) {
  this.message = unitOfMeasure;
}

UnitOfMeasure.prototype.value = function () {
  return this.message;
};


UnitOfMeasure.Keys = {
  BILLION_CUBIC_FEET: 'Bcf',
  ALLOWANCES: 'Alw',
  BARRELS: 'Bbl',
  CUBIC_METERS: 'CBM',
  BOARD_FEET: 'BDFT',
  GIGAJOULES: 'GJ',
  BUSHELS: 'Bu',
  KILOWATT_HOURS: 'kWh',
  ONE_MILLION_BTU: 'MMBtu',
  AMOUNT_OF_CURRENCY: 'Ccy',
  MEGAWATT_HOURS: 'MWh',
  COOLING_DEGREE_DAY: 'CDD',
  CERTIFIED_EMISSIONS_REDUCTION: 'CER',
  THERMS: 'thm',
  CRITICAL_PRECIPITATION_DAY: 'CPD',
  CLIMATE_RESERVE_TONNES: 'CRT',
  HUNDREDWEIGHT: 'cwt',
  DAYS: 'day',
  DRY_METRIC_TONS: 'dt',
  ENVIRONMENTAL_ALLOWANCE_CERTIFICATES: 'EnvAllwnc',
  ENVIRONMENTAL_CREDIT: 'EnvCrd',
  ENVIRONMENTAL_OFFSET: 'EnvOfst',
  GRAMS: 'g',
  GALLONS: 'Gal',
  GROSS_TONS: 'GT',
  HEATING_DEGREE_DAY: 'HDD',
  INDEX_POINT: 'IPNT',
  KILOGRAMS: 'kg',
  KILOLITERS: 'kL',
  KILOWATT_YEAR: 'kW-a',
  KILOWATT_DAY: 'kW-d',
  KILOWATT_HOUR: 'kW-h',
  KILOWATT_MONTH: 'kW-M',
  KILOWATT_MINUTE: 'kW-min ',
  LITERS: 'L',
  POUNDS: 'lbs',
  MEGAWATT_YEAR: 'MW-a',
  MEGAWATT_DAY: 'MW-d',
  MEGAWATT_HOUR: 'MW-h',
  MEGAWATT_MONTH: 'MW-M',
  MEGAWATT_MINUTE: 'MW-min',
  TROY_OUNCES: 'oz_tr',
  PRINCIPAL_WITH_RELATION_TO_DEBT_INSTRUMENT: 'PRINC',
  METRIC_TONS: 't',
  TONS: 'tn',
  MILLION_BARRELS: 'MMbbl',
  US_DOLLARS: 'USD',
};

UnitOfMeasure.Tag = '996';

UnitOfMeasure.Type = 'STRING';

UnitOfMeasure.Values = invert(UnitOfMeasure.Keys);

module.exports = UnitOfMeasure;