
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/RCS/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/RCS"
  },
  {
    "renderMode": 2,
    "route": "/RCS/about-us"
  },
  {
    "renderMode": 2,
    "route": "/RCS/contact"
  },
  {
    "renderMode": 2,
    "route": "/RCS/career"
  },
  {
    "renderMode": 2,
    "route": "/RCS/digital-engineering"
  },
  {
    "renderMode": 2,
    "route": "/RCS/software-engineering"
  },
  {
    "renderMode": 2,
    "route": "/RCS/product-engineering"
  },
  {
    "renderMode": 2,
    "route": "/RCS/consulting"
  },
  {
    "renderMode": 2,
    "route": "/RCS/industries"
  },
  {
    "renderMode": 2,
    "redirectTo": "/RCS",
    "route": "/RCS/**"
  }
],
  assets: {
    'index.csr.html': {size: 5830, hash: 'd91f25e70383c59e6ae6b7de1d47020966c362dbc38bf701d282dd248bb9c22e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: '4a2d66783d0b6cd90eee9c56b2c5ab10dbdf5a1da08b88bfc09df0479a6873f0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 45161, hash: '315101ac2bbe04092710329f22e9959eb9998c6a2bf8a59117f948892c6eb27d', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 44938, hash: 'e3b0015c820aed2a9489830f63007c8f814e75c057b9cfd6e191f62d66a7c66a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 59695, hash: '909f4f88396cab79cfa82a7018156a2bcbe152b3c6577c8459a4f7e17e5feecd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 42381, hash: '8fc10d37d69edd6d3325b99fec56df63df388bc7e7cb81fdff780ed2945066aa', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 47788, hash: '84e1406ac79a3afdb59b7e3efeb8cc6b94e7a37cb15488c99c8177f2d8213cc8', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 43926, hash: '7910b4576428b5b58e0a48a84f5cff4f607f082f2b027383d54c5fc2794d1f0a', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 48070, hash: 'dcdd27914c33ce09663cfd55e076deeaac6cde339e87b4405413ddefdab5332e', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 43489, hash: '7aaa503ee3edd7c68658a08ed31520ae34833de9bf03cbb9d444f1b0faf5ae69', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 44299, hash: 'cb08557736d4b35bdacc5b612322092e4d263558a149b7a3c57d2d0755172813', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'styles-TXAQJSFE.css': {size: 229376, hash: 'ucSHLaR3Xbw', text: () => import('./assets-chunks/styles-TXAQJSFE_css.mjs').then(m => m.default)}
  },
};
