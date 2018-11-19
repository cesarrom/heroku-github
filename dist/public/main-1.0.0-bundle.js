!function(e){function t(t){for(var n,u,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)u=i[d],a[u]&&p.push(a[u][0]),a[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={1:0},o=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/public/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=l;o.push([853,0]),r()}({224:function(e,t,r){e.exports=r.p+"9a2967665e5fc0a1e6136325964e38ad.png"},366:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(92),a=r(2);t.User=function(e){return a.createElement(n.Card,null,a.createElement(n.CardHeader,{title:"User: "+e.user.userName}),a.createElement(n.CardContent,null,a.createElement(n.Typography,{variant:"subheading"},"Id: ",e.user.userId),a.createElement(n.Typography,{variant:"subheading"},"Image Url: ",e.user.imageUrl)))}},387:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(386);t.loadUsersAPI=function(){return n.default.get("/api/users").then(function(e){return e.data})}},388:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(223),a=r(92),o=r(2),u=r(109),i=r(387),l=r(366),c=function(e){function t(t){var r=e.call(this,t)||this;return r.state={users:[],isLoading:!0},r}return n.__extends(t,e),t.prototype.render=function(){var e=this;return this.state.isLoading?o.createElement("div",null,"Loading..."):o.createElement(o.Fragment,null,o.createElement(a.Grid,{item:!0,xs:12},o.createElement(a.Card,null,o.createElement(a.CardHeader,{title:"Users List"}),o.createElement(a.CardContent,null,o.createElement(a.List,null,this.state.users.map(function(e){return o.createElement(a.ListItem,{key:e.userId},o.createElement(u.NavLink,{to:"/users-list/"+e.userId},e.userName))}))))),o.createElement(a.Grid,{item:!0,xs:12},o.createElement(u.Route,{exact:!0,path:"/users-list/:userId",render:function(t){return o.createElement(l.User,{user:e.getUserById(t.match.params.userId)})}})))},t.prototype.componentDidMount=function(){return n.__awaiter(this,void 0,void 0,function(){var e;return n.__generator(this,function(t){switch(t.label){case 0:return[4,i.loadUsersAPI()];case 1:return e=t.sent(),this.setState({users:e,isLoading:!1}),[2]}})})},t.prototype.getUserById=function(e){return this.state.users.find(function(t){return t.userId===e})},t}(o.Component);t.UsersList=c},392:function(e,t,r){(t=e.exports=r(391)(!1)).push([e.i,"._3rhdG1zOavj_tpC7k2ELY{background-color:bisque}._3dU5Kg4JgkBi9iI2r9Yyqo{width:150px;padding-bottom:25px}",""]),t.locals={title:"_3rhdG1zOavj_tpC7k2ELY",logo:"_3dU5Kg4JgkBi9iI2r9Yyqo"}},393:function(e,t,r){var n=r(392);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(390)(n,a);n.locals&&(e.exports=n.locals)},394:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(92),a=r(2),o=r(109),u=r(393),i=r(224);t.Home=function(){return a.createElement(n.Grid,{item:!0,xs:12},a.createElement(n.Card,null,a.createElement(n.CardHeader,{title:"FullStack React with TypeScript"}),a.createElement(n.CardContent,null,a.createElement("img",{src:i,className:u.logo}),a.createElement(n.Typography,{variant:"subheading"},"This is a starter kit to get you up and running with React & TypeScript on top of material-ui."),a.createElement(n.Typography,{variant:"subheading",gutterBottom:!0},"An example for client/server shared code can be found at `",a.createElement(o.Link,{to:"/users-list"},"Example Users List")," tab"),a.createElement(n.Typography,null,"You can read more about how to share code between the client and the server at my ",a.createElement("a",{href:"https://medium.com/front-end-hacking/client-server-and-shared-code-846097c5260e"},"medium blog post"),"."))))}},395:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(223),a=r(92),o=r(2),u=r(109);t.Header=function(){return o.createElement(a.AppBar,{position:"static",color:"default"},o.createElement(a.Toolbar,null,o.createElement(a.Button,{color:"primary",component:function(e){return o.createElement(u.Link,n.__assign({to:"/"},e))}},"Home"),o.createElement(a.Button,{color:"primary",component:function(e){return o.createElement(u.Link,n.__assign({to:"/users-list"},e))}},"Example Users List"),o.createElement(a.Button,{color:"primary",component:function(e){return o.createElement(u.Link,n.__assign({to:"/about"},e))}},"About")))}},396:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(92),a=r(2);r(224);t.About=function(){return a.createElement(n.Grid,{item:!0,xs:12},a.createElement(n.Card,null,a.createElement(n.CardHeader,{title:"Created by Gil Amran."}),a.createElement(n.CardContent,null,a.createElement(n.Typography,{variant:"subheading"},"You can find information at ",a.createElement("a",{href:"http://github.com/gilamran/fullstack-typescript"},"github")))))}},642:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(92),a=r(2),o=r(109),u=r(396),i=r(395),l=r(394),c=r(388);t.App=function(){return a.createElement(o.BrowserRouter,null,a.createElement("div",null,a.createElement(n.Grid,{container:!0,spacing:24},a.createElement(i.Header,null),a.createElement(o.Switch,null,a.createElement(o.Route,{exact:!0,path:"/",component:l.Home}),a.createElement(o.Route,{path:"/about",component:u.About}),a.createElement(o.Route,{path:"/users-list",component:c.UsersList})))))}},650:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=r(29),o=r(642);a.render(n.createElement(o.App,null),document.getElementById("app"))},853:function(e,t,r){r(852),e.exports=r(650)}});