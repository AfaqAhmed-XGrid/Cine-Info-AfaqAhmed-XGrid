/*
Copyright (c) 2023, Xgrid Inc, http://xgrid.co

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'rules': {
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'no-param-reassign': 0,
    'prefer-promise-reject-errors': 1,
    'import/no-unresolved': 0,
    'no-await-in-loop': 0,
    'new-cap': 0,
    'max-len': ['error', { 'code': 250 }],
    'linebreak-style': 'off',
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 0 }],
  },
};
