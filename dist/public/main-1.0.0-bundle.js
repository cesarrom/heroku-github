!function(e){function t(t){for(var n,i,u=t[0],s=t[1],l=t[2],d=0,p=[];d<u.length;d++)i=u[d],a[i]&&p.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);p.length;)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={1:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/public/";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=s;o.push([853,0]),r()}({224:function(e,t,r){e.exports=r.p+"9a2967665e5fc0a1e6136325964e38ad.png"},366:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(92),a=r(2);t.User=function(e){return a.createElement(n.Card,null,a.createElement(n.CardHeader,{title:"User: "+e.user.userName}),a.createElement(n.CardContent,null,a.createElement(n.Typography,{variant:"subheading"},"Id: ",e.user.userId),a.createElement(n.Typography,{variant:"subheading"},"Image Url: ",e.user.imageUrl)))}},387:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(386);t.loadUsersAPI=function(){return n.default.get("/api/users").then(function(e){return e.data})}},388:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(223),a=r(92),o=r(2),i=r(109),u=r(387),s=r(366),l=function(e){function t(t){var r=e.call(this,t)||this;return r.state={users:[],isLoading:!0},r}return n.__extends(t,e),t.prototype.render=function(){var e=this;return this.state.isLoading?o.createElement("div",null,"Loading..."):o.createElement(o.Fragment,null,o.createElement(a.Grid,{item:!0,xs:12},o.createElement(a.Card,null,o.createElement(a.CardHeader,{title:"Users List"}),o.createElement(a.CardContent,null,o.createElement(a.List,null,this.state.users.map(function(e){return o.createElement(a.ListItem,{key:e.userId},o.createElement(i.NavLink,{to:"/users-list/"+e.userId},e.userName))}))))),o.createElement(a.Grid,{item:!0,xs:12},o.createElement(i.Route,{exact:!0,path:"/users-list/:userId",render:function(t){return o.createElement(s.User,{user:e.getUserById(t.match.params.userId)})}})))},t.prototype.componentDidMount=function(){return n.__awaiter(this,void 0,void 0,function(){var e;return n.__generator(this,function(t){switch(t.label){case 0:return[4,u.loadUsersAPI()];case 1:return e=t.sent(),this.setState({users:e,isLoading:!1}),[2]}})})},t.prototype.getUserById=function(e){return this.state.users.find(function(t){return t.userId===e})},t}(o.Component);t.UsersList=l},392:function(e,t,r){(t=e.exports=r(391)(!0)).push([e.i,"._3rhdG1zOavj_tpC7k2ELY {\n    background-color: bisque;\n}\n\n._3dU5Kg4JgkBi9iI2r9Yyqo {\n    width: 150px;\n    padding-bottom: 25px;\n}","",{version:3,sources:["C:/Users/LENOVO/gmaster/heroku-github/src/client/components/Home/Home.css"],names:[],mappings:"AAAA;IACI,yBAAyB;CAC5B;;AAED;IACI,aAAa;IACb,qBAAqB;CACxB",file:"Home.css",sourcesContent:[".title {\n    background-color: bisque;\n}\n\n.logo {\n    width: 150px;\n    padding-bottom: 25px;\n}"],sourceRoot:""}]),t.locals={title:"_3rhdG1zOavj_tpC7k2ELY",logo:"_3dU5Kg4JgkBi9iI2r9Yyqo"}},393:function(e,t,r){var n=r(392);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(390)(n,a);n.locals&&(e.exports=n.locals)},394:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(92),a=r(2),o=r(109),i=r(393),u=r(224);t.Home=function(){return a.createElement(n.Grid,{item:!0,xs:12},a.createElement(n.Card,null,a.createElement(n.CardHeader,{title:"FullStack React with TypeScript"}),a.createElement(n.CardContent,null,a.createElement("img",{src:u,className:i.logo}),a.createElement(n.Typography,{variant:"subheading"},"This is a starter kit to get you up and running with React & TypeScript on top of material-ui."),a.createElement(n.Typography,{variant:"subheading",gutterBottom:!0},"An example for client/server shared code can be found at `",a.createElement(o.Link,{to:"/users-list"},"Example Users List")," tab"),a.createElement(n.Typography,null,"You can read more about how to share code between the client and the server at my ",a.createElement("a",{href:"https://medium.com/front-end-hacking/client-server-and-shared-code-846097c5260e"},"medium blog post"),"."))))}},395:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(223),a=r(92),o=r(2),i=r(109);t.Header=function(){return o.createElement(a.AppBar,{position:"static",color:"default"},o.createElement(a.Toolbar,null,o.createElement(a.Button,{color:"primary",component:function(e){return o.createElement(i.Link,n.__assign({to:"/"},e))}},"Home"),o.createElement(a.Button,{color:"primary",component:function(e){return o.createElement(i.Link,n.__assign({to:"/users-list"},e))}},"Example Users List"),o.createElement(a.Button,{color:"primary",component:function(e){return o.createElement(i.Link,n.__assign({to:"/about"},e))}},"About")))}},396:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(92),a=r(2);r(224);t.About=function(){return a.createElement(n.Grid,{item:!0,xs:12},a.createElement(n.Card,null,a.createElement(n.CardHeader,{title:"Created by Gil Amran."}),a.createElement(n.CardContent,null,a.createElement(n.Typography,{variant:"subheading"},"You can find information at ",a.createElement("a",{href:"http://github.com/gilamran/fullstack-typescript"},"github")))))}},642:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(92),a=r(2),o=r(109),i=r(396),u=r(395),s=r(394),l=r(388);t.App=function(){return a.createElement(o.BrowserRouter,null,a.createElement("div",null,a.createElement(n.Grid,{container:!0,spacing:24},a.createElement(u.Header,null),a.createElement(o.Switch,null,a.createElement(o.Route,{exact:!0,path:"/",component:s.Home}),a.createElement(o.Route,{path:"/about",component:i.About}),a.createElement(o.Route,{path:"/users-list",component:l.UsersList})))))}},650:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=r(29),o=r(642);a.render(n.createElement(o.App,null),document.getElementById("app"))},853:function(e,t,r){r(852),e.exports=r(650)}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0xFTk9WTy9nbWFzdGVyL2hlcm9rdS1naXRodWIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIvVXNlci50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpLWZhY2FkZS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJzTGlzdC9Vc2Vyc0xpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Ib21lLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSG9tZS5jc3M/ZTkxNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0L0Fib3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC50c3giXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCIxIiwiZXhwb3J0cyIsIm1vZHVsZSIsImwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicCIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJjb3JlXzEiLCJSZWFjdCIsIlVzZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJDYXJkIiwiQ2FyZEhlYWRlciIsInRpdGxlIiwidXNlciIsInVzZXJOYW1lIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwidmFyaWFudCIsInVzZXJJZCIsImltYWdlVXJsIiwiYXhpb3NfMSIsImxvYWRVc2Vyc0FQSSIsImRlZmF1bHQiLCJ0aGVuIiwicmVzIiwicmVhY3Rfcm91dGVyX2RvbV8xIiwiYXBpX2ZhY2FkZV8xIiwiVXNlcl8xIiwiVXNlcnNMaXN0IiwiX3N1cGVyIiwiX3RoaXMiLCJ0aGlzIiwic3RhdGUiLCJ1c2VycyIsImlzTG9hZGluZyIsInRzbGliXzEiLCJfX2V4dGVuZHMiLCJyZW5kZXIiLCJGcmFnbWVudCIsIkdyaWQiLCJpdGVtIiwieHMiLCJMaXN0IiwibWFwIiwiTGlzdEl0ZW0iLCJOYXZMaW5rIiwidG8iLCJSb3V0ZSIsImV4YWN0IiwicGF0aCIsImdldFVzZXJCeUlkIiwibWF0Y2giLCJwYXJhbXMiLCJjb21wb25lbnREaWRNb3VudCIsIl9hIiwic2VudCIsInNldFN0YXRlIiwiZmluZCIsInUiLCJDb21wb25lbnQiLCJ2ZXJzaW9uIiwic291cmNlcyIsIm5hbWVzIiwibWFwcGluZ3MiLCJmaWxlIiwic291cmNlc0NvbnRlbnQiLCJzb3VyY2VSb290IiwibG9jYWxzIiwibG9nbyIsImNvbnRlbnQiLCJvcHRpb25zIiwiaG1yIiwidHJhbnNmb3JtIiwiaW5zZXJ0SW50byIsInVuZGVmaW5lZCIsImNzcyIsImxvZ29JbWciLCJIb21lIiwic3JjIiwiY2xhc3NOYW1lIiwiZ3V0dGVyQm90dG9tIiwiTGluayIsImhyZWYiLCJIZWFkZXIiLCJBcHBCYXIiLCJwb3NpdGlvbiIsImNvbG9yIiwiVG9vbGJhciIsIkJ1dHRvbiIsImNvbXBvbmVudCIsIl9fYXNzaWduIiwiQWJvdXQiLCJBYm91dF8xIiwiSGVhZGVyXzEiLCJIb21lXzEiLCJVc2Vyc0xpc3RfMSIsIkFwcCIsIkJyb3dzZXJSb3V0ZXIiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiU3dpdGNoIiwiUmVhY3RET00iLCJBcHBfMSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJhQUNBLFNBQUFBLEVBQUFDLEdBUUEsSUFQQSxJQU1BQyxFQUFBQyxFQU5BQyxFQUFBSCxFQUFBLEdBQ0FJLEVBQUFKLEVBQUEsR0FDQUssRUFBQUwsRUFBQSxHQUlBTSxFQUFBLEVBQUFDLEtBQ1FELEVBQUFILEVBQUFLLE9BQW9CRixJQUM1QkosRUFBQUMsRUFBQUcsR0FDQUcsRUFBQVAsSUFDQUssRUFBQUcsS0FBQUQsRUFBQVAsR0FBQSxJQUVBTyxFQUFBUCxHQUFBLEVBRUEsSUFBQUQsS0FBQUcsRUFDQU8sT0FBQUMsVUFBQUMsZUFBQUMsS0FBQVYsRUFBQUgsS0FDQWMsRUFBQWQsR0FBQUcsRUFBQUgsSUFLQSxJQUZBZSxLQUFBaEIsR0FFQU8sRUFBQUMsUUFDQUQsRUFBQVUsT0FBQVYsR0FPQSxPQUhBVyxFQUFBUixLQUFBUyxNQUFBRCxFQUFBYixPQUdBZSxJQUVBLFNBQUFBLElBRUEsSUFEQSxJQUFBQyxFQUNBZixFQUFBLEVBQWlCQSxFQUFBWSxFQUFBVixPQUE0QkYsSUFBQSxDQUc3QyxJQUZBLElBQUFnQixFQUFBSixFQUFBWixHQUNBaUIsR0FBQSxFQUNBQyxFQUFBLEVBQWtCQSxFQUFBRixFQUFBZCxPQUEyQmdCLElBQUEsQ0FDN0MsSUFBQUMs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T05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wdWJsaWMvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFs4NTMsMF0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5YTI5Njc2NjVlNWZjMGExZTYxMzYzMjU5NjRlMzhhZC5wbmdcIjsiLCJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElVc2VyRFRPIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL0lVc2VyRFRPJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHVzZXI6IElVc2VyRFRPO1xufVxuXG5leHBvcnQgY29uc3QgVXNlcjogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElQcm9wcz4gPSAocHJvcHM6IElQcm9wcykgPT4gKFxuICA8Q2FyZD5cbiAgICA8Q2FyZEhlYWRlciB0aXRsZT17YFVzZXI6ICR7cHJvcHMudXNlci51c2VyTmFtZX1gfSAvPlxuICAgIDxDYXJkQ29udGVudD5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YmhlYWRpbmcnPklkOiB7cHJvcHMudXNlci51c2VySWR9PC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3ViaGVhZGluZyc+SW1hZ2UgVXJsOiB7cHJvcHMudXNlci5pbWFnZVVybH08L1R5cG9ncmFwaHk+XG4gICAgPC9DYXJkQ29udGVudD5cbiAgPC9DYXJkPlxuKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBJVXNlckRUTyB9IGZyb20gJy4uLy4uL3NoYXJlZC9JVXNlckRUTyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlcnNBUEkoKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvdXNlcnNgKS50aGVuKHJlcyA9PiByZXMuZGF0YSBhcyBJVXNlckRUT1tdKTtcbn0iLCJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgR3JpZCwgTGlzdCwgTGlzdEl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgSVVzZXJEVE8gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvSVVzZXJEVE8nO1xuaW1wb3J0IHsgbG9hZFVzZXJzQVBJIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWZhY2FkZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vVXNlci9Vc2VyJztcblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHVzZXJzOiBJVXNlckRUT1tdO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBVc2Vyc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBJU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJzOiBbXSxcbiAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9J1VzZXJzIExpc3QnIC8+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZXJzLm1hcCh1c2VyID0+XG4gICAgICAgICAgICAgICAgICAoPExpc3RJdGVtIGtleT17dXNlci51c2VySWR9PlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC91c2Vycy1saXN0LyR7dXNlci51c2VySWR9YH0+e3VzZXIudXNlck5hbWV9PC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4pXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvdXNlcnMtbGlzdC86dXNlcklkJ1xuICAgICAgICAgICAgcmVuZGVyPXtwcm9wcyA9PiA8VXNlciB1c2VyPXt0aGlzLmdldFVzZXJCeUlkKHByb3BzLm1hdGNoLnBhcmFtcy51c2VySWQpfSAvPn0gLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IGxvYWRVc2Vyc0FQSSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VycywgaXNMb2FkaW5nOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VXNlckJ5SWQodXNlcklkKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudXNlcnMuZmluZCh1ID0+IHUudXNlcklkID09PSB1c2VySWQpO1xuICB9XG59XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLl8zcmhkRzF6T2F2al90cEM3azJFTFkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxufVxcblxcbi5fM2RVNUtnNEpna0JpOWlJMnI5WXlxbyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9MRU5PVk8vZ21hc3Rlci9oZXJva3UtZ2l0aHViL3NyYy9jbGllbnQvY29tcG9uZW50cy9Ib21lL0hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtDQUN4QlwiLFwiZmlsZVwiOlwiSG9tZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0aXRsZVwiOiBcIl8zcmhkRzF6T2F2al90cEM3azJFTFlcIixcblx0XCJsb2dvXCI6IFwiXzNkVTVLZzRKZ2tCaTlpSTJyOVl5cW9cIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4vSG9tZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuL0hvbWUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4vSG9tZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgY3NzID0gcmVxdWlyZSgnLi9Ib21lLmNzcycpO1xuY29uc3QgbG9nb0ltZyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnKTtcblxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPSdGdWxsU3RhY2sgUmVhY3Qgd2l0aCBUeXBlU2NyaXB0JyAvPlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8aW1nIHNyYz17bG9nb0ltZ30gY2xhc3NOYW1lPXtjc3MubG9nb30gLz5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3ViaGVhZGluZyc+VGhpcyBpcyBhIHN0YXJ0ZXIga2l0IHRvIGdldCB5b3UgdXAgYW5kIHJ1bm5pbmcgd2l0aCBSZWFjdCAmIFR5cGVTY3JpcHQgb24gdG9wIG9mIG1hdGVyaWFsLXVpLjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3ViaGVhZGluZycgZ3V0dGVyQm90dG9tPkFuIGV4YW1wbGUgZm9yIGNsaWVudC9zZXJ2ZXIgc2hhcmVkIGNvZGUgY2FuIGJlIGZvdW5kIGF0IGA8TGluayB0bz0nL3VzZXJzLWxpc3QnPkV4YW1wbGUgVXNlcnMgTGlzdDwvTGluaz4gdGFiPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeT5Zb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBob3cgdG8gc2hhcmUgY29kZSBiZXR3ZWVuIHRoZSBjbGllbnQgYW5kIHRoZSBzZXJ2ZXIgYXQgbXkgPGEgaHJlZj0naHR0cHM6Ly9tZWRpdW0uY29tL2Zyb250LWVuZC1oYWNraW5nL2NsaWVudC1zZXJ2ZXItYW5kLXNoYXJlZC1jb2RlLTg0NjA5N2M1MjYwZSc+bWVkaXVtIGJsb2cgcG9zdDwvYT4uPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gIDwvR3JpZD5cbik7XG4iLCJpbXBvcnQgeyBBcHBCYXIsIEJ1dHRvbiwgVG9vbGJhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPEFwcEJhciBwb3NpdGlvbj0nc3RhdGljJyBjb2xvcj0nZGVmYXVsdCc+XG4gICAgPFRvb2xiYXI+XG4gICAgICA8QnV0dG9uIGNvbG9yPSdwcmltYXJ5JyBjb21wb25lbnQ9eyhwOiBhbnkpID0+IDxMaW5rIHRvPScvJyB7Li4ucH0gLz59PkhvbWU8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gY29sb3I9J3ByaW1hcnknIGNvbXBvbmVudD17KHA6IGFueSkgPT4gPExpbmsgdG89Jy91c2Vycy1saXN0JyB7Li4ucH0gLz59PkV4YW1wbGUgVXNlcnMgTGlzdDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBjb2xvcj0ncHJpbWFyeScgY29tcG9uZW50PXsocDogYW55KSA9PiA8TGluayB0bz0nL2Fib3V0JyB7Li4ucH0gLz59PkFib3V0PC9CdXR0b24+XG4gICAgPC9Ub29sYmFyPlxuICA8L0FwcEJhcj5cbik7XG4iLCJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgbG9nb0ltZyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnKTtcblxuZXhwb3J0IGNvbnN0IEFib3V0ID0gKCkgPT4gKFxuICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgPENhcmQ+XG4gICAgICA8Q2FyZEhlYWRlciB0aXRsZT0nQ3JlYXRlZCBieSBHaWwgQW1yYW4uJyAvPlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJoZWFkaW5nJz5Zb3UgY2FuIGZpbmQgaW5mb3JtYXRpb24gYXQgPGEgaHJlZj0naHR0cDovL2dpdGh1Yi5jb20vZ2lsYW1yYW4vZnVsbHN0YWNrLXR5cGVzY3JpcHQnPmdpdGh1YjwvYT48L1R5cG9ncmFwaHk+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgPC9HcmlkPlxuKTsiLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQWJvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXQvQWJvdXQnO1xuLy8gUGFnZXNcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCB7IEhvbWUgfSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZS9Ib21lJztcbmltcG9ydCB7IFVzZXJzTGlzdCB9IGZyb20gJy4vY29tcG9uZW50cy9Vc2Vyc0xpc3QvVXNlcnNMaXN0JztcblxuZXhwb3J0IGNvbnN0IEFwcCA9ICgpID0+IChcbiAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgPGRpdj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyNH0+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2Fib3V0JyBjb21wb25lbnQ9e0Fib3V0fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvdXNlcnMtbGlzdCcgY29tcG9uZW50PXtVc2Vyc0xpc3R9IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICA8L0Jyb3dzZXJSb3V0ZXI+XG4pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vQXBwJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=