
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
    'index.csr.html': {size: 5568, hash: '4f1e07a33277c76f2416eb89adb390f71539224638ab2872bfa097bb9f3c5581', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: 'f135dcaa08e6f4702d4d25ed5ab8d0c2477a1671c54625113daa9602ae35a987', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 46854, hash: 'ed14dc4eb656abbd46ad43e947009d69aae47ae9e12488c67218baa30badc669', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 47419, hash: '97c273abf59c7a586f836fb89507e07ad4200d7ff0f4db347a6150c27bfb0e7d', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 58454, hash: '11fd3980c5e6ee0182f2c963e191cf947fff984f0ea5fdc4b853d007e730acd4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 46948, hash: '0b5eec8b49298b54ee4aa00184557b3320ae422657c110fe5e4cf2f209239547', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 51240, hash: 'ecd0e422ca88e4678c64da13ff69926669b46540691b2d719f3b73e513cda83e', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 51652, hash: 'ad665c7288d0a95ab441e4bdb946acd9d8f484d3057c3a1669114f968bc76fc6', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 46942, hash: 'b07f99548ebedd89f119d113012d4e95a41e4d732d73d8a1f393334c6bda4631', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 47710, hash: '129059d2a5946e5aab300e572e9262d03f7167566f3c5e0ab9de8788f43d3dc5', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 53332, hash: 'e8e16565d58961014fb76ff1b67c0d2a4add94b68ac1b27903de82e468c5308b', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'styles-AK4FBQHJ.css': {size: 230061, hash: 'tilQB+Rs1zM', text: () => import('./assets-chunks/styles-AK4FBQHJ_css.mjs').then(m => m.default)}
  },
};
