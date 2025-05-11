
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
    'index.csr.html': {size: 5640, hash: 'bcae97bc537d820e48bdbafcd8d6257d1c30aa9e030b8ea774682ecca57e0641', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1267, hash: 'fd7efaf2b396ebfe648cd6f4581c3ab8efc531d09a6e2a54e32eb0b36b80045d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 59872, hash: '544b0b7711f085e6953fb07a72c98c740e947d41dbe65845eb16d7d6923112ea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 47860, hash: 'fc840d863a8cc986c17a0221d8a9cd6a79a956088b4fa424bd87fbea3634a431', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 52131, hash: '49ee88f1c53c85a13e2e76652f9e13c1b9b2fd797f4941ee88ed9146b69b566b', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 47390, hash: '76f67f365f4e8bc3422e1df7390934bee1cfdd331a104d7b3031a379798a138a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 47437, hash: '4df671f065ba74e1770861a56a785c35aabeee7138af27a78248c99ac00a596b', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 48190, hash: '34278ce27457d7abca6ec65a763d7d90c4be2f43f5310d18b3f08165ab8de8dd', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 51730, hash: '51015a37b7377d3030d020a46754fc4ff6d8ac1918fbcc293629796c46a5d275', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 47431, hash: 'a7b4144234e0c4ecb3ec546b340ed3e77e0daba3103b3efdca7b0a53fc10aedb', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 53812, hash: 'fbb4ebcda30b97850e1412eac14dcf8eb63af47912bba706904dc0a01fd48f75', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'styles-AK4FBQHJ.css': {size: 230061, hash: 'tilQB+Rs1zM', text: () => import('./assets-chunks/styles-AK4FBQHJ_css.mjs').then(m => m.default)}
  },
};
