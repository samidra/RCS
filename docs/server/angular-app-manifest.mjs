
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
    'index.csr.html': {size: 5568, hash: '91c123387d6de2dd55f5ff48de8940e6ac8f21b3d13b236e95303e2aaa1f1e07', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: '6165a1bc9e8df8ee733d188579966a3404157b34fe8e83b25290f87e77c74761', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 44064, hash: '895c7ae5bc1705318000692285260e44f5dac07b8db84ab9dadb6c64d7141f83', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 44340, hash: '2e563e31cb155bf182c5d423b2c4de9f5886a6e9ee84483f38afaea0f733c7d1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 58534, hash: 'a581d15cbe62190db5ab9bbb4988c4f7a1eb41160ef1c69b650e3551ef079aaa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'digital-engineering/index.html': {size: 44284, hash: '82b8c897d396321618f7595394c93afcb121184e27bc1b0ae56be1f610cfe304', text: () => import('./assets-chunks/digital-engineering_index_html.mjs').then(m => m.default)},
    'software-engineering/index.html': {size: 48363, hash: 'b0b3819ae1e0f579ed03408cbb5906294fbc7840808b4c4f97b285efb34feb50', text: () => import('./assets-chunks/software-engineering_index_html.mjs').then(m => m.default)},
    'career/index.html': {size: 44656, hash: '1611dea688120f6e198468de4f17f8b51895a7e7a96c0dfadf1c70f35c3d5336', text: () => import('./assets-chunks/career_index_html.mjs').then(m => m.default)},
    'consulting/index.html': {size: 44846, hash: 'c9cb9069e41f4b1d243fdcf94315577b81274626b16f89844721f01940d42d7f', text: () => import('./assets-chunks/consulting_index_html.mjs').then(m => m.default)},
    'product-engineering/index.html': {size: 43949, hash: '80938a0e03ec9639df2e40eed0d474ef96c90e924bdc5d4fdf4cccda5e0600fc', text: () => import('./assets-chunks/product-engineering_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 50896, hash: '948a6e086c6931b62e382dbd268c13457af71c9f696259e2a876d765a45a34fe', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'styles-CLATAKFU.css': {size: 229352, hash: 'FN3C13MlVy0', text: () => import('./assets-chunks/styles-CLATAKFU_css.mjs').then(m => m.default)}
  },
};
