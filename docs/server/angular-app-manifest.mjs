
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
    'index.csr.html': {size: 5568, hash: '00cfdf678765b3bfcfa6113166041f7fde21240b145bf07764014d1d83f09cc5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: 'de8a793026ca65e4e34a86ef6c785a5668a0fcd619c335d9d0c4159cd2a4d2df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 43983, hash: 'aac6c2bb62ba1c50551ea96a8c7c903eb36d58ccd76fab1d88f904b1b5de9b41', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 44449, hash: 'abe81581a9a6eaa56abbed30e22990449d36117ddace7a745eaa900191b3f674', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 58492, hash: '5ccd7e9f8b698f27e04892beb02ba143ffd8c7d36253fab7d504b5774f91cf5d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 48225, hash: '55510c3f7984de2f6a8ec4446e59d1d44cce7e7a268146b1bbd95ffe8fbc79e1', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 44183, hash: '443dcb0cc85655c0beea2d7fb89859b0d2b562352b793584606c80b17e5591d1', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 41890, hash: '6b826c4c02a18afc883b888547bc6d8790edf7932205b4eddac0b689dd57fa3a', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 50504, hash: '9dee4a763f37b837205143bc5e74e19139e84a45fc1aec7d6be201ec48b0c20a', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 43811, hash: '58e268bf1399f62e8640fb262fadbb9948b0f600b69994788c4c87acc007a401', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 44708, hash: '7b8d1f6335bbd1ace9481969f116850d6d83ea9e2f7e352b6b2f00ca088821e1', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'styles-CLATAKFU.css': {size: 229352, hash: 'FN3C13MlVy0', text: () => import('./assets-chunks/styles-CLATAKFU_css.mjs').then(m => m.default)}
  },
};
