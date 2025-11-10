
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/missions/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/missions"
  },
  {
    "renderMode": 2,
    "route": "/missions/contact"
  },
  {
    "renderMode": 2,
    "route": "/missions/construction"
  },
  {
    "renderMode": 2,
    "route": "/missions/agriculture"
  },
  {
    "renderMode": 2,
    "route": "/missions/automobile"
  },
  {
    "renderMode": 2,
    "route": "/missions/education"
  },
  {
    "renderMode": 2,
    "route": "/missions/partenaire"
  },
  {
    "renderMode": 2,
    "route": "/missions/communaute"
  },
  {
    "renderMode": 2,
    "route": "/missions/comparateur"
  },
  {
    "renderMode": 2,
    "route": "/missions/account"
  },
  {
    "renderMode": 2,
    "redirectTo": "/missions",
    "route": "/missions/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12055, hash: '7460ab863707d21cccea1008e5d01354600a769345983275cd1ed05069ab3a5c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: 'cc37f080954ab44fbe800b40dce5eed22eb1b887f8fa8b838b2bce39e747b095', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 29761, hash: '2716ae7f61a102b5edfc1e248a99a34578abfa99e1828b84dcbbde87a9c5e3f4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'automobile/index.html': {size: 39111, hash: '0c89bec30fafcc47130fb5746d98a74f5eaaa5a57da64ec257727a48eeb04500', text: () => import('./assets-chunks/automobile_index_html.mjs').then(m => m.default)},
    'index.html': {size: 35226, hash: '7944f44103e9486af7e412e5c1355171a819d2620cabe476d1d5c53cb7fd6c8d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'construction/index.html': {size: 37200, hash: 'c559f2f18c4b2e1bc5d16620af0c8dccdb80e45a561a1782ffb479a90a571036', text: () => import('./assets-chunks/construction_index_html.mjs').then(m => m.default)},
    'partenaire/index.html': {size: 29770, hash: '59bfdfc0ca88276fe52e1ab1c2f390e2a0aea4e5fb626bd09dc743505e1b9859', text: () => import('./assets-chunks/partenaire_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 39835, hash: '46afbadba86bf724d6ccf1f1c56c9ebfd140733846ba4c66c10aad28828f4fb9', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'communaute/index.html': {size: 29773, hash: 'd74f02812444ea85ceae854211531a4747a240672963b3fcaa84f2fef4dd6eab', text: () => import('./assets-chunks/communaute_index_html.mjs').then(m => m.default)},
    'comparateur/index.html': {size: 29773, hash: '44fb5f6908fc96051b8a905f1712e88f2ae6259055856d52ca299212adcf7a6b', text: () => import('./assets-chunks/comparateur_index_html.mjs').then(m => m.default)},
    'account/index.html': {size: 46185, hash: '87fd4395ca62b08537b00b176dd7452b192a0d3c0bf8e7773b0003fc09808d65', text: () => import('./assets-chunks/account_index_html.mjs').then(m => m.default)},
    'agriculture/index.html': {size: 37749, hash: 'ced170c7848e200c7b3c992808c6a45a9c0b26c37408a39a3cd4916d725f3d4b', text: () => import('./assets-chunks/agriculture_index_html.mjs').then(m => m.default)},
    'styles-NHG4YJ5Z.css': {size: 28455, hash: 'l0M7Npd62KA', text: () => import('./assets-chunks/styles-NHG4YJ5Z_css.mjs').then(m => m.default)}
  },
};
