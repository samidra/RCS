
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
    'index.csr.html': {size: 5568, hash: '6e3255c509969ca3ed9d79ec0ada831992067b2a7adf6c99af4885b175c01e52', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: '8b9e18cf68a6aae42de53f5a9d13c66e434ba23787231f7fda3eb1608b575896', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 47803, hash: '923c979ed2bb78fd70e02d74d62f8628939d023d41b8208dd353e64f865a331e', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 47238, hash: 'f2861e58c99d6570e73c9e61db3aca33f1a0f33407c85f8de9f09f163fa9e05c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 52034, hash: '7725557f96174260764e9ce04433d2e4ce9962adc0d69497649c862843caf21b', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'index.html': {size: 58837, hash: '909fa55b158245a0c44c2bbfdb03968ef8c9cd4f47b11b9a7607124090b31ceb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 47332, hash: '5c6f0abf9493c4abdb2b16c4b5ce862532f5bd1950bd3fad1a0ad17d0b950359', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 51624, hash: 'ddcec27f502028fc8ecfcafa39efd4a93582abaac9d237cfd949f2611d471c08', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 47326, hash: 'f467b2ee45e1bf6472c409a944ff3c0d910947070290789186019904460fbfd2', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 48094, hash: '1fcddca952c3c1a03f58407c2890456df7f87b72c0b0e06f9768b34df3f22c06', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 53716, hash: '679386cf48ace62026ff426a076730b8a0b45cc644cce8de5b0154f873d23a21', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'styles-AK4FBQHJ.css': {size: 230061, hash: 'tilQB+Rs1zM', text: () => import('./assets-chunks/styles-AK4FBQHJ_css.mjs').then(m => m.default)}
  },
};
