(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{29:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(12),r=c(13),a=c(18),l=c(17),i=c(0),j=c.n(i),o=c(7),b=c.n(o),d=c(10),h=c.n(d),O=c(14),u=c(11),p=c(32),x=c(33),m=c(34);c(25);function v(e){var t=e.movie;return Object(s.jsxs)("div",{className:"card--movie",children:[Object(s.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("h3",{className:"card--title",children:t.title}),Object(s.jsx)("p",{children:Object(s.jsxs)("small",{children:[Object(s.jsx)("strong",{children:"RELEASE DATE: "}),t.release_date]})}),Object(s.jsx)("p",{children:Object(s.jsxs)("small",{children:[Object(s.jsx)("strong",{children:"RATING: "}),t.vote_average]})})]}),Object(s.jsx)("div",{children:Object(s.jsx)(p.a,{children:Object(s.jsxs)(x.a,{children:[Object(s.jsx)(x.a.Header,{children:Object(s.jsx)(p.a.Toggle,{as:m.a,variant:"link",eventKey:"0",children:Object(s.jsx)("strong",{children:"More Info!"})})}),Object(s.jsx)(p.a.Collapse,{eventKey:"0",children:Object(s.jsxs)(x.a.Body,{children:[Object(s.jsxs)("p",{className:"card--desc",children:[Object(s.jsx)("strong",{children:"OVERVIEW: "}),t.overview]}),Object(s.jsx)("p",{children:Object(s.jsxs)("small",{children:[Object(s.jsx)("strong",{children:"POPULARITY:"})," ",t.popularity]})}),Object(s.jsx)("p",{children:Object(s.jsxs)("small",{children:[Object(s.jsx)("strong",{children:"VOTE COUNT:"})," ",t.vote_count]})}),Object(s.jsx)("p",{children:Object(s.jsxs)("small",{children:[Object(s.jsx)("strong",{children:"VOTE AVERAGE:"})," ",t.vote_average]})})]})})]})})})]})}function g(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)([]),a=Object(u.a)(r,2),l=a[0],j=a[1],o=function(){var e=Object(O.a)(h.a.mark((function e(t){var s,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Searching..."),s="https://api.themoviedb.org/3/search/movie?api_key=8607e20bbb736a686daeeb093977d957&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=3,e.next=6,fetch(s);case 6:return n=e.sent,e.next=9,n.json();case 9:r=e.sent,console.log(r.results),j(r.results),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("form",{className:"form",onSubmit:o,children:[Object(s.jsx)("label",{className:"label",htmlFor:"query",children:"Search Movie..."}),Object(s.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"Enter Movie...",value:c,onChange:function(e){return n(e.target.value)}}),Object(s.jsx)("button",{className:"button",type:"submit",children:"Search!"})]}),Object(s.jsx)("div",{className:"card-list",children:l.filter((function(e){return e.poster_path})).map((function(e){return Object(s.jsx)(v,{movie:e},e.id)}))})]})}var f=function(e){Object(a.a)(c,e);var t=Object(l.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"title",children:"Movie Database"}),Object(s.jsx)(g,{})]})}}]),c}(j.a.Component);b.a.render(Object(s.jsx)(f,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.3758b893.chunk.js.map