if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const n=e=>d(e,c),l={module:{uri:c},exports:r,require:n};i[c]=Promise.all(a.map((e=>l[e]||n(e)))).then((e=>(s(...e),r)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"14ea4b0a40e57c2687d5e6c850477ee5"},{url:"7f185260.html",revision:"9d2ed22ffe16d9ca638a8b237f5a5c84"},{url:"about/index.html",revision:"2475876f4a224608663d7465565a2355"},{url:"archives/2022/04/index.html",revision:"2eefd84fd73dd4b0a9d40a1ecad84cd4"},{url:"archives/2022/index.html",revision:"c6a5069d406736debac6264a097a449f"},{url:"archives/index.html",revision:"05e1d45bf91753952aa0958602580659"},{url:"categories/index.html",revision:"6027a439b4158bbb2dad043e1367ae0d"},{url:"categories/Java并发实现原理/index.html",revision:"9c8f1dd77ef0124adc6c02bdb79ab76a"},{url:"css/index.css",revision:"090251268acf41c72426e09b2b7d1de8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fafa8499.html",revision:"903e38a30e4f3f632915e7288244bbef"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"index.html",revision:"ae0bb5c3a11c8df3f6a97f7d1f48dd39"},{url:"js/main.js",revision:"c6c7244917621228ebccbc3a5c60b0fc"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"5aa4f2b916f274dd038ffa72342417cc"},{url:"movies/index.html",revision:"bb099d611ff978add89b24a6517c1b49"},{url:"music/index.html",revision:"ae8a10b1b24efe2503e60cd74263cade"},{url:"self/custom.css",revision:"ae89caee9d82ade28b645686015616a4"},{url:"self/duotone.css",revision:"29a29602ea7119362d963ef71bb07a13"},{url:"self/Kimbiedark.css",revision:"0897a9a533d730e50b6471fd1f93deb2"},{url:"tags/index.html",revision:"4f1a914e1ea0e9314d18f833c39df763"},{url:"tags/Java多线程/index.html",revision:"d48dfef5193ba0d57455558fdcc62f5c"},{url:"tags/Java并发实现原理/index.html",revision:"460050d2400a3c568aba2a29dedc4fc1"}],{}),e.registerRoute("https://blog.nesive.com",new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
