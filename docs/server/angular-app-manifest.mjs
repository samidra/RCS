
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
    'index.csr.html': {size: 5830, hash: 'ae3f24a837ad1783f7aa54f96ffc6965888f64d8fc1212441d925a99b552ebc1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: '85469d8ba933f41c3f12a1f2504cd72f0b88a082fb66de7fcef021632d1b284d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 59695, hash: 'c91480594dae8ee0d3622677a54dcc805ce87ca6ad257fc998993698c22d6ff5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 45161, hash: '20a4628e2726c87af51585c01b1f8180de21b72f84396a07aa579d6fb782bac2', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 44938, hash: 'd4b1c142ebe0bca72abcf363fba7259fea3762735b6bb0fa8f9005f9f2122ab9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 47788, hash: '6925fec6bfa1611677b2931215ed114fda5b2f05235d0349515db9df4dcb04f3', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 43926, hash: '60c63eaeaea28f19052c0771c08f151a21eadadc02ae3aeaf11e3b50e868e088', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 42385, hash: 'd79480cd50ec3a5c8605bbf96f60ead734b2e315d724aeb9eb0d76c36b92c89d', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 43489, hash: '8cf750395d5ee69cd93c34e25ffeacb05785e7c83c0f21da3fe084fe191d0a6d', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 44299, hash: 'd4b63646b31e546f180f66c23172a74aa3a4aa5d1721165a9083e66fbb59bffd', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 49956, hash: '36510d83ec57876308db524c5cee5ee9c0ee8932401412ca3c2a4f062c261f43', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'styles-TXAQJSFE.css': {size: 229376, hash: 'ucSHLaR3Xbw', text: () => import('./assets-chunks/styles-TXAQJSFE_css.mjs').then(m => m.default)}
  },
};
