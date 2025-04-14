
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
    'index.csr.html': {size: 5568, hash: '87065292acb10f4e65fb69cb83fa91718e7c9041494dee1801f51313fed9e93a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: 'd1bb3d775cce829427b31459913c5cbcbe8d8a73c9e133f06c53c7786ed3620d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 43963, hash: 'f8396308b32a8abb1e42d58f5acff695aab2d57d1bf69600da7df4117f0e263e', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 44402, hash: 'fed105d0ed324d617d1a8cf1881130188b17655277580362c3072630dfca2621', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 59111, hash: 'a93aa29e285725004ce65b5d066e805aead871adf9b7ece1d1b063dc0bf145f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 43390, hash: '8b53cc8a51b75f820f6e409b51f97aeeb6c92cca70ad7c4344dcfa2ea6beb328', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 41843, hash: '7d053f9410089860c5f4d4314a868935d2bc44e394cb7c62a6999b6ad7b8ce77', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 47337, hash: 'b2d4411b0dc6641c08ac4014571fb79ab0eb13aba686731a6c15bb351e8b847a', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 43034, hash: 'c65ef7904374b4b8fe2ae78ee416508ef010e3b96a4d6b9d1d0087f60cba79b0', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 43848, hash: '9710372f9e4fd86a68320ba45c3df5b50e2eaba570cec3607cb58b5a9b8d5469', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 49711, hash: '3f344a4f450f84254878166d2aded69d013c6c06f171fd8a137a0e906a186346', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'styles-BVAN7FXY.css': {size: 229332, hash: 'AZZgGw6caT8', text: () => import('./assets-chunks/styles-BVAN7FXY_css.mjs').then(m => m.default)}
  },
};
