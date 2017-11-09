// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const  HPO_API_BASE_URL = '../api/hpo/';
export const environment = {
  production: false,

  // HPO API environment variables
  HPO_API_SEARCH_URL:  HPO_API_BASE_URL + 'search',
  HPO_API_TERM_SEARCH_URL: HPO_API_BASE_URL + 'search/term',
  HPO_API_GENE_SEARCH_URL: HPO_API_BASE_URL + 'search/term',
  HPO_API_DISEASE_SEARCH_URL: HPO_API_BASE_URL + 'search/disease',

  //ENTREZ external URL
  HPO_ENTREZ_SEARCH_URL: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi'
};
