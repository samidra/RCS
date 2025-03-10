
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
    'index.csr.html': {size: 13611, hash: '8c87fc152fdfbd581f47bc33f793de574a026396282c5288adb86411ff4ebff9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: 'dd5e022ec5a810f78dc43d65a97b97a4a47d0d18429d2e2ef3606fbd0398e15d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 53876, hash: 'ddedcd3383c0eb7e09ed0af467b7205d93e92af98d73e719a2fa2fbe4cb06c09', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 69051, hash: 'eda43ce133e201aa95999c64525fa04da2dea85ecd76c9980fa31abdff8a5549', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 52990, hash: '00aaf48f033a605d63e398117c44f8e9ca2096929256219ae6f8f0b89b82ef2e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 50280, hash: '3dd98a842a1de0457eb7266c3464c5772d799515d474d7e46ae22a2f605b05d2', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 52115, hash: 'de5c741d48357d4f7d27d343de128ec3acf40a64d7fe9ec49e08af80ddc80d7e', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 52262, hash: 'd05c76101cdfd8faa480f5368000fe2bc8a8ea6a1d2899ed7ecbba7e3f829724', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 56318, hash: 'f5efebf2d58b447303715b41ab4a54d38dda8ea7fd999ae482d2e5667513c107', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 47526, hash: 'a6bd2460f43d592d9deae4cf84d047446b01dbfa2595742f1f32d452f2dbf71c', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 56522, hash: '733f0c21fe3243d9c352f927c0682b3716e1d2fa9bb09792b64385e7679a49bb', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'styles-4VCE2UXC.css': {size: 236285, hash: 'zYB5Hzz7ui0', text: () => import('./assets-chunks/styles-4VCE2UXC_css.mjs').then(m => m.default)}
  },
};
