
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
    'index.csr.html': {size: 5568, hash: '897574de4eb961eb269a62ad984c5e32283cede62219e8719413cff33cfe6a67', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: '94be4e16df801f09e5a5a25e3dd7a3586fbbe56cf92a6ca28ab662e9650f89c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 45743, hash: '0036a8ff174b3f10a2e5203eb48c4a23d5703954ccf5187c829bde801dc370ed', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 44499, hash: '6b979c255222f54de2ddfd55d426e0bbf64a2265e49e144dd3f76877bb508e01', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57833, hash: '0d83bdd0ee3114cb59b176eabfdaebbf6c9f1b2a63e765c5a1be35c20838a496', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 47578, hash: '92e8c8e5fcdc72f10d735647e59bd5af3a2d42347d3195bd214bd8dc98224245', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 45377, hash: '00c5ae6f471c71137cae527a94eca550436118ee6769e262dbbb36172cee95f2', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 49596, hash: '13a5a27a1fcfc0f7431f9821e8645e139d1c18fb121dfd2ad77d9cf22e4a747a', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 45185, hash: 'fe8626543d1792cea0a0585698bbd39cec76b95a1b4504f6af3482e745763a85', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 46029, hash: '183dda7d5b8a496d9b59bf05431bf747835231f1b640fee0227fed4dbd08b73f', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 51688, hash: '7abac7c1b57836df56ef1ea7d41caaed0180a36785e04b5c89865b1d0e809dbf', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'styles-OEX5KSEW.css': {size: 229774, hash: 'dqa3A4e3g0E', text: () => import('./assets-chunks/styles-OEX5KSEW_css.mjs').then(m => m.default)}
  },
};
