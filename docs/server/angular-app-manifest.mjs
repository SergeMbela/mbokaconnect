
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mbokaconnect/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mbokaconnect"
  },
  {
    "renderMode": 2,
    "route": "/mbokaconnect/contact"
  },
  {
    "renderMode": 2,
    "route": "/mbokaconnect/construction"
  },
  {
    "renderMode": 2,
    "route": "/mbokaconnect/agriculture"
  },
  {
    "renderMode": 2,
    "route": "/mbokaconnect/automobile"
  },
  {
    "renderMode": 2,
    "route": "/mbokaconnect/education"
  },
  {
    "renderMode": 2,
    "route": "/mbokaconnect/partenaire"
  },
  {
    "renderMode": 2,
    "route": "/mbokaconnect/communaute"
  },
  {
    "renderMode": 2,
    "route": "/mbokaconnect/comparateur"
  },
  {
    "renderMode": 2,
    "route": "/mbokaconnect/account"
  },
  {
    "renderMode": 2,
    "redirectTo": "/mbokaconnect",
    "route": "/mbokaconnect/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12059, hash: 'fc320e0b4618ed1db10e982b9d5bcfebd103de68d324b20a3f9a836534c225a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: 'bc9d90f540827d8d1194c1779fc59f5a0773663507b058aecd6bbd532eced9c8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 29853, hash: '99b977616392546ad6c9382a106e9c57f07166c990e723168c49443cd64582f7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 35318, hash: 'd787da0748d9110b484643bc9b8cba976c65b13b789e4d1a2776c9c71255afd4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'construction/index.html': {size: 37292, hash: '424f87ee2276a35109a151929032c3be81b8c42375daacb77ed0665070505f65', text: () => import('./assets-chunks/construction_index_html.mjs').then(m => m.default)},
    'agriculture/index.html': {size: 37841, hash: 'd60991d9bea06faaaa7aae3fe3f5a38db934661e0af533f77ece8dc8b3e32227', text: () => import('./assets-chunks/agriculture_index_html.mjs').then(m => m.default)},
    'partenaire/index.html': {size: 29862, hash: '36eb6670deef3ca11a64f1af15ad3bfbdb320f05a72fc4949f2b05584f0c646b', text: () => import('./assets-chunks/partenaire_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 39923, hash: '02cd3052cf389f493370fbf69613f5249c7abfc6df52022e3976733b6d0eba5c', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'automobile/index.html': {size: 39203, hash: '2859456ab83605ab7cc69853de60248244df5a1dfab9c78b1d5f3da620d1a49d', text: () => import('./assets-chunks/automobile_index_html.mjs').then(m => m.default)},
    'communaute/index.html': {size: 29865, hash: '06c18b6cf2b14035af2efa5a0a86330fc3f5035b7f04e68c11e754619ea0564f', text: () => import('./assets-chunks/communaute_index_html.mjs').then(m => m.default)},
    'comparateur/index.html': {size: 29865, hash: '6aee024d4837793db42cf1c8fc4c956ab208745923ffda6320df429cce00926c', text: () => import('./assets-chunks/comparateur_index_html.mjs').then(m => m.default)},
    'account/index.html': {size: 46275, hash: '71b0c0031b60b1c7c1cf1bf695e6d5185ddf98aa553d18719f53651f02f63f25', text: () => import('./assets-chunks/account_index_html.mjs').then(m => m.default)},
    'styles-NHG4YJ5Z.css': {size: 28455, hash: 'l0M7Npd62KA', text: () => import('./assets-chunks/styles-NHG4YJ5Z_css.mjs').then(m => m.default)}
  },
};
