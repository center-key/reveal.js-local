// reveal.js-local

// Imports
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
import fs from 'node:fs';

////////////////////////////////////////////////////////////////////////////////
describe('The "dist" folder', () => {

   it('contains the correct files', () => {
      const actual = fs.readdirSync('dist').sort();
      const expected = [
         'presentation-template.html',
         'reveal.js-local.css',
         'reveal.js-local.js',
         ];
      assertDeepStrictEqual(actual, expected);
      });

   });
