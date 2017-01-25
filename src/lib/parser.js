// @

import YAML from 'yamljs';
import INI from 'utils-ini-parse';

export default (extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return YAML.parse;
    case '.ini':
      return INI;
    default:
      return undefined;
  }
};

