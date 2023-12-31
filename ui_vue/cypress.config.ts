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

// Import packages
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'baseUrl',
    experimentalModifyObstructiveThirdPartyCode: true,
  },
  env: {
    'GITHUB_ACCESS_CODE': 'GITHUB_ACCESS_CODE',
    'VITE_API_GOOGLE_CLIENT_SECRET': 'VITE_API_GOOGLE_CLIENT_SECRET',
    'VITE_API_GOOGLE_CLIENT_ID': 'VITE_API_GOOGLE_CLIENT_ID',
    'VITE_API_GOOGLE_REFRESH_TOKEN': 'VITE_API_GOOGLE_REFRESH_TOKEN',
    'VITE_API_GOOGLE_CALLBACK_URL': 'VITE_API_GOOGLE_CALLBACK_URL',
    'VITE_API_GITHUB_CLIENT_ID': 'VITE_API_GITHUB_CLIENT_ID',
    'VITE_API_GITHUB_CLIENT_SECRET': 'VITE_API_GITHUB_CLIENT_SECRET',
    'VITE_API_GITHUB_CALLBACK_URL': 'VITE_API_GITHUB_CALLBACK_URL'
  }
});
