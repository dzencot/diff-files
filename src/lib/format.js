// @flow

import plain from './plain';
import toJson from './toJson';

export default (format) => {
  switch (format) {
    case 'plain':
      return plain;
    case 'json':
      return toJson;
    default:
      return obj => JSON.stringify(obj, null, 2).replace(/,/g, '');
  }
};
