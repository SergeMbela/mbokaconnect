
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
    'index.csr.html': {size: 12059, hash: 'fc7cb1e5fce968db923f78f036a68de3106639759f56fc6c3a2ce0955a2b588e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: 'fb2e00df4dfdd1c43be67833a65e5a71125fe18421cf49d7a25618386baa46cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 29853, hash: '79bbc7336929333c60cb7cb51524236e4c8ab7c2032eb3cd7c303450f3e98acd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'construction/index.html': {size: 37292, hash: '7da7c6fb3c197c25f94720dbf7c1f831743fa7bd75387601af51ac6e5e1106fb', text: () => import('./assets-chunks/construction_index_html.mjs').then(m => m.default)},
    'automobile/index.html': {size: 39203, hash: 'c372066ca16855cf6ac988039c3bc97bff6795658f612113e412f17cd1aa3e12', text: () => import('./assets-chunks/automobile_index_html.mjs').then(m => m.default)},
    'agriculture/index.html': {size: 37841, hash: '357ec380668c4073e50d86e39d9f70f24511ce57ca1a7f8e07f81a6a4c10f932', text: () => import('./assets-chunks/agriculture_index_html.mjs').then(m => m.default)},
    'index.html': {size: 35394, hash: '2dd89bd6ad6c4bc9236a63ecae536d7d8d91ae9a46b8ecb8dd1e0eb2e3e6b908', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'communaute/index.html': {size: 29865, hash: 'bf1f6c657282b7558dca4932bf53eeca85f044d4c6b8b5668a3e872261b91450', text: () => import('./assets-chunks/communaute_index_html.mjs').then(m => m.default)},
    'partenaire/index.html': {size: 29862, hash: '3fb8cc02c8852926ac2942b9a5324acfc828d905c6572242d0e9e9cb27c000e3', text: () => import('./assets-chunks/partenaire_index_html.mjs').then(m => m.default)},
    'comparateur/index.html': {size: 29865, hash: '027dfd0cdee2e7afe0e4a76f82d7435f90a6fa88dd801d70eac8700c554d6391', text: () => import('./assets-chunks/comparateur_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 39925, hash: '05237ab08db3cd30e867e277656b5d935c6ddc13f8cebdaaf07311a2a0390511', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'account/index.html': {size: 46275, hash: 'abd3c40f1cef608e2f845e1380f3d19107062749cbe9ea29087d2d37a9f2368f', text: () => import('./assets-chunks/account_index_html.mjs').then(m => m.default)},
    'styles-IMBS7MOC.css': {size: 28518, hash: 'pN5DAB6/XF0', text: () => import('./assets-chunks/styles-IMBS7MOC_css.mjs').then(m => m.default)}
  },
};
