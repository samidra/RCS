
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
    'index.csr.html': {size: 5568, hash: '3fae6d832dcd6224fd949b85e87422b47e52999c12c489d242e04b411c7d095c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: 'd552e936c79ba7eab9f073767ae4b813c0864afec297a7697e0de54e89ae2ebf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 47347, hash: '8537cb89e725f47db84a42ce8279218d1264a45ee1149270c6122996eb7277d2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 59144, hash: '431554e0fee742cad38e2890f9a1d30b3a7549be1ea0e957036c05a3fc2044cd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 47860, hash: '67a1082b44d5d117d561a0b74e2a541359aac125414b19ef5ae847826318a11b', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 47389, hash: '042d8fb24f6bbd68bb7a2bfafdba690a9b0ff9f45b5f3bcabd5c91945bb00103', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 52093, hash: 'ba6ac33a9f0a84ad2fb4e6c28d3c8cd1186b92d6829e4e1fcfead2329f5ec3dc', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 51681, hash: 'c0939a9a24d42eeacf0551cf22e4df957e980aa048ce131a66a61a1df71f68b8', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 47383, hash: '64fcbc8988309b07db67119a60371ecf8b5a47fe59c2abdc32203bb4bd678178', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 48151, hash: '88fd5b0ce67b4bfa586e49e568669d984f0c583b5bfddf2b86e04f5daf3f7ff7', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 53773, hash: '5d22609f5c54acb33a4aa8da046c62baa3a87490e754c57eca36d09ab4d0eb41', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'styles-AK4FBQHJ.css': {size: 230061, hash: 'tilQB+Rs1zM', text: () => import('./assets-chunks/styles-AK4FBQHJ_css.mjs').then(m => m.default)}
  },
};
