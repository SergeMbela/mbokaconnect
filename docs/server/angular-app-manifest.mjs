
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/construction"
  },
  {
    "renderMode": 2,
    "route": "/agriculture"
  },
  {
    "renderMode": 2,
    "route": "/automobile"
  },
  {
    "renderMode": 2,
    "route": "/education"
  },
  {
    "renderMode": 2,
    "route": "/partenaire"
  },
  {
    "renderMode": 2,
    "route": "/communaute"
  },
  {
    "renderMode": 2,
    "route": "/comparateur"
  },
  {
    "renderMode": 2,
    "route": "/account"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12046, hash: 'f47d5c79c4d32aae9e6b622cd883eb0f6f59caac6cfc5550c598ecd7fe656237', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: '4f733bdd7904670ba1d260f7945ea53981b74236028a52cc476dc32a30877f50', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 29554, hash: 'd54f27a6458d3cfd2ad3001089d6be4961ac73c6234462a2640ac135817dfaed', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'construction/index.html': {size: 36993, hash: '22348a57403fdbfe65f9adce7b23d0ca863e807339fde88a27328bbac390c61e', text: () => import('./assets-chunks/construction_index_html.mjs').then(m => m.default)},
    'index.html': {size: 35019, hash: '1d5bf3319e8a9ba8d92c93641add2af918845452aec5eba9cdfec79ae3cdabfe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'automobile/index.html': {size: 38904, hash: '7f8a2458f74419ec73a96d043edc9f27dc168f7be29dfaef51936fb7aa0ff945', text: () => import('./assets-chunks/automobile_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 39626, hash: 'dd9dfcb33f47a03b8e3348f525ba2160784dcaea521930371e97dc7020bb11d9', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'communaute/index.html': {size: 29566, hash: '3c257f1bd7fd473cf09b524e56a9b733811da1d8ef42785ca24328bc13458e60', text: () => import('./assets-chunks/communaute_index_html.mjs').then(m => m.default)},
    'partenaire/index.html': {size: 29563, hash: '45bf224ad8db88afe9983bbbdd5bf56173cb6e90f6767f6ad9725aec27b48a94', text: () => import('./assets-chunks/partenaire_index_html.mjs').then(m => m.default)},
    'comparateur/index.html': {size: 29566, hash: 'a53e1d9123130713807e0461ac98ce72a4229811ac37c49cc1802e2eb1d19ac2', text: () => import('./assets-chunks/comparateur_index_html.mjs').then(m => m.default)},
    'account/index.html': {size: 45976, hash: '4a989e8e0f25ab8bb5eb63c5c9addfaffe63c9b2ca3f95e1c2e0fcd4f296ce96', text: () => import('./assets-chunks/account_index_html.mjs').then(m => m.default)},
    'agriculture/index.html': {size: 37542, hash: 'e121885dac12f22dfc66c425ce70094923e35199a829e2ef9ad24674cb985ebf', text: () => import('./assets-chunks/agriculture_index_html.mjs').then(m => m.default)},
    'styles-NHG4YJ5Z.css': {size: 28455, hash: 'l0M7Npd62KA', text: () => import('./assets-chunks/styles-NHG4YJ5Z_css.mjs').then(m => m.default)}
  },
};
