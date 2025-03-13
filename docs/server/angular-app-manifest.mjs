
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
    'index.csr.html': {size: 13611, hash: 'a5e288edcc7031be1364471e51a96923a7bf8a8a30097a8bbe894bf99394c9ac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: '481662216819fc971f29c9260ef1b11d20138d58a1478d8c8a344f3035b9861d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 52545, hash: 'e46780e20bfdd06931a6751e3b205f540e3f71bca029ecc029a8a0cc425c20dd', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 67079, hash: '10e2026c0620baa186e20a4fe24d247b450e6378b85e2338f1e96fe3c55e6a4e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 52322, hash: '99101cedadcb64a91612d431399f9c62c2f650d25e0fbc0d52aa11865e574a13', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 49765, hash: 'eb6eeef39e929907a26743db1b7717dfd680f6231c68750411c5ba726898d168', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 51310, hash: 'fd1e423aba4018d8edb8b427233b8d52ba49f4441fa285f72829a5e066fd8737', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 55172, hash: '8d5ee8fd6ea3a15620f1c1393c053d71dfea75ddaa82c645012f18763b19c739', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 50873, hash: 'ad647f30fd2a938bf87d2ee423288a44a6f7a900c13b575c1d91b76140cafd1d', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 55454, hash: 'ec618176865222752c60d069e1428499cde735f553b05c313cdd6d9199a95050', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 51683, hash: 'ca72d1f1cb9c63343f015d73729a952969d0244ffca9e998331fea4175b18ca1', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'styles-2UUXBMJI.css': {size: 237157, hash: '164Ih8QeP6k', text: () => import('./assets-chunks/styles-2UUXBMJI_css.mjs').then(m => m.default)}
  },
};
