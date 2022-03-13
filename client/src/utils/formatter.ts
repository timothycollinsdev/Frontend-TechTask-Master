import { INTL_NUMBER_FORMAT_VALUES } from 'constants/index';

export const formatter = new Intl.NumberFormat(INTL_NUMBER_FORMAT_VALUES[0], {
  style: INTL_NUMBER_FORMAT_VALUES[1],
  currency: INTL_NUMBER_FORMAT_VALUES[2],
});
