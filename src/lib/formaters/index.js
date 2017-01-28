// @flow

import toPlain from './toPlain';
import toJson from './toJson';
import toString from './toString';

export default (format) => {
  switch (format) {
    case 'plain':
      return toPlain;
    case 'json':
      return toJson;
    default:
      return toString;
  }
};
