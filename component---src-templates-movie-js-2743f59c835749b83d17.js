(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(142),i=t(154),c=(t(74),t(75),t(77),t(7)),s=t.n(c),m=t(4),o=t.n(m),u=t(168),d=t.n(u),f=(t(171),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).state={},a}return s()(a,e),a.prototype.render=function(){if(!this.props.videos)return"";if(0===this.props.videos.length)return"";var e=[];this.props.videos.map(function(a){if(console.log(a.url),"archive"===a.source)e.push(l.a.createElement(v,{url:a.url}));else if("youtube"===a.source){var t=a.url.split("?v=")[1];t&&t.includes("&")&&(t=t.split("&")[0]),e.push(l.a.createElement(h,{id:t}))}else if("dailymotion"===a.source)e.push(l.a.createElement(g,{url:a.url}));else if("vimeo"===a.source){var n=a.url.split("vimeo.com/")[1];e.push(l.a.createElement(b,{id:n}))}});return e[0]},a}(l.a.Component));f.propTypes={videos:o.a.array};var E=f,p=function(e){var a=e.children;return l.a.createElement("div",{className:"tab-content",id:"nav-tabContent"},l.a.createElement("div",{className:"tab-pane fade show active",id:"nav-archive",role:"tabpanel","aria-labelledby":"nav-archive-tab"},a))},h=function(e){var a=e.id;return l.a.createElement(d.a,{type:"youtube",videoId:a})},v=function(e){var a=e.url;return l.a.createElement("div",{className:"tab-content",id:"nav-tabContent"},l.a.createElement("div",{className:"tab-pane fade show active",id:"nav-archive",role:"tabpanel","aria-labelledby":"nav-archive-tab"},l.a.createElement("iframe",{src:a,webkitallowfullscreen:"true",mozallowfullscreen:"true",allowfullscreen:!0})))},b=function(e){var a=e.id;return l.a.createElement(p,null,l.a.createElement(d.a,{type:"vimeo",videoId:a}))},g=function(e){var a=e.url;return l.a.createElement("div",{className:"tab-content",id:"nav-tabContent"},l.a.createElement("div",{className:"tab-pane fade show active",id:"nav-archive",role:"tabpanel","aria-labelledby":"nav-archive-tab"},l.a.createElement("iframe",{src:a,allowFullScreen:!0,allow:"autoplay",frameborder:"0"})))};t(172);t.d(a,"query",function(){return x});var N=function(e){var a=e.related,t=a&&a.map(function(e){return l.a.createElement("li",{className:"media mb-3"},l.a.createElement(r.Link,{to:e.slug,className:"underline-not",title:""},l.a.createElement("img",{className:"mr-3",width:"168",height:"95",src:"https://"+e.cover,alt:""})),l.a.createElement("div",{className:"media-body"},l.a.createElement(r.Link,{to:e.slug,className:"underline-not",title:""},l.a.createElement("h5",{className:"mt-0 mb-1"},e.title),l.a.createElement("p",null,"author"))))});return l.a.createElement("div",{className:"col-lg-4 col-xs-12 sidebar"},l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("ul",{className:"list-unstyled mt-3"},t)))},y=function(){return l.a.createElement("div",{className:"col-lg-8 col-xs-12 py-3 px-md-3 px-sm-1 mb-5 mx-md-3"},l.a.createElement("h3",{class:"text-center my-2 font-weight-bold mb-5"},"Laisser un commentaire"),l.a.createElement("form",{method:"POST",id:"commentForm",action:"https://api.staticman.net/v2/entry/cinetimes/cinetimes-fr/source/comments"},l.a.createElement("div",{class:"col-12 col-md-8 m-auto"},l.a.createElement("input",{name:"options[slug]",type:"hidden",value:""}),l.a.createElement("div",{class:"form-row"},l.a.createElement("div",{class:"col"},l.a.createElement("label",{for:"name"}," Nom "),l.a.createElement("input",{name:"fields[name]",type:"text",id:"name",class:"form-control"})),l.a.createElement("div",{class:"col"},l.a.createElement("label",{for:"email"},"Email "),l.a.createElement("input",{name:"fields[email]",id:"email",type:"email",class:"form-control"}),l.a.createElement("small",{id:"",class:"form-text text-muted"},"Ne seras jamais partagée")),l.a.createElement("div",{style:{display:"none"}},l.a.createElement("input",{type:"phone",name:"phone",id:"phone"}))),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"message"},"Commentaire"),l.a.createElement("textarea",{class:"form-control",id:"message",rows:"4",name:"fields[message]"})),l.a.createElement("button",{type:"submit",class:"btn btn-success mt-2"},"Commenter"))))},x=(a.default=function(e){var a=e.data,t=a.internalMovies.title,n=a.internalMovies.synopsis;return l.a.createElement(i.a,null,l.a.createElement("div",{className:"container-fluid movie-page-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-8 col-xs-12 pr-lg-0",id:"video_et_description"},a.internalMovies.videos&&l.a.createElement(E,{videos:a.internalMovies.videos}),l.a.createElement("div",{className:"videoDescription px-4 text-left d-flex justify-content-between"},l.a.createElement("h1",{className:"py-2 mb-0",id:"video-title"},t),l.a.createElement("div",{className:"text-right my-auto"},l.a.createElement("a",{href:"/"}," ",l.a.createElement("i",{className:"far fa-edit text-dark"})," "))),l.a.createElement("div",{className:"videoDescription px-4 pb-2 text-left font-weight-light"},l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",{className:"text-left"},n))),l.a.createElement(N,{related:a.internalMovies.recommendations}),l.a.createElement("div",{className:"col-lg-8 col-xs-12 py-3 px-md-3 px-sm-1 mb-5 mx-3"},l.a.createElement("h2",{class:"text-center my-2 font-weight-bold mb-5"}," 1 Commentaire"),l.a.createElement("div",{class:"d-flex flex-column col-12"},l.a.createElement("div",{class:"mx-auto my-1 bg-white w-100 col-12 col-sm-9 rounded border border-white pt-3 px-3"},l.a.createElement("span",{class:"font-weight-bold"}," Juliette "),l.a.createElement("br",null),l.a.createElement("p",{class:"font-weight-light"},"Sur un thème difficile, Truffaut nous fait ici une démonstration de cinéma, rien de trop, que des petites touches. Ce film est l'œuvre d'un auteur hypersensible qui a l'intelligence de ne jamais tomber dans la sensiblerie, de choisir le plan qu'il faut et le faire durer le temps qu'il faut, du grand art. C'est beau, c'est intelligent, ça fait réfléchir et on en redemande. Merci Monsieur Truffaut ! ")))),l.a.createElement(y,null))))},"1581460546")},142:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return E}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return f});var n=t(0),l=t.n(n),r=t(4),i=t.n(r),c=t(141),s=t.n(c);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return c.withPrefix}),t.d(a,"navigate",function(){return c.navigate}),t.d(a,"push",function(){return c.push}),t.d(a,"replace",function(){return c.replace}),t.d(a,"navigateTo",function(){return c.navigateTo});var m=t(143),o=t.n(m);t.d(a,"PageRenderer",function(){return o.a});var u=t(32);t.d(a,"parsePath",function(){return u.a});var d=l.a.createContext({}),f=function(e){return l.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function E(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(e,a,t){var n;e.exports=(n=t(144))&&n.default||n},144:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),l=t.n(n),r=t(4),i=t.n(r),c=t(51),s=t(2),m=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=m},145:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(142);t(146);a.a=function(){return l.a.createElement("footer",null,l.a.createElement("div",{id:"footer_nav"},l.a.createElement("div",{className:"fContainer"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-5"},l.a.createElement("h3",null,l.a.createElement(r.Link,{to:"/blog/",className:"text-white"},"Blog")),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"47 Dessins Animés Gratuits (à voir en streaming)")),l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"10 Documentaires gratuits à voir en streaming")),l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"77 Films Gratuits en Français à Voir en Streaming")),l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"53 Films libres de droits (dans le Domaine Public)")))),l.a.createElement("div",{className:"col-sm-12 col-md-5"},l.a.createElement("h3",{className:"text-white mb-2"}," Populaire "),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"L'Enfant sauvage - François Truffaut")),l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"Morgane et ses nymphes - Bruno Gantillon")),l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"Le Kid (The Kid) - Charlie Chaplin")),l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"Le Président - Henri Verneuil")),l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"Le Clan des Siciliens - Henri Verneuil")))),l.a.createElement("div",{className:"col-sm-12 col-md-2 pr-0"},l.a.createElement("h3",{className:"text-white mb-2"}," Pages "),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"À propos")),l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"Mentions légales et politique de confidentialité")),l.a.createElement("li",{className:"mb-2"},l.a.createElement("a",{className:"text-light",href:"/"},"Droits d'auteur")))))))),l.a.createElement("div",{id:"footerBottom"},l.a.createElement("p",null," Copyright © 2019 CineTimes "),l.a.createElement("p",null),l.a.createElement("p",null,l.a.createElement("a",{className:"fab fa-twitter fa-2x text-light ",href:"https://twitter.com/<%- config.twitter_site %>"}))))}},146:function(e,a,t){},147:function(e,a,t){"use strict";var n=t(7),l=t.n(n),r=t(0),i=t.n(r),c=t(142),s=t(153),m=(t(148),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return l()(a,e),a.prototype.render=function(){return i.a.createElement(s.h,{dark:!0,expand:"lg",className:"navigation"},i.a.createElement(s.i,{href:"/"}," Cinetimes "),i.a.createElement(s.j,{onClick:this.toggle}),i.a.createElement(s.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(s.e,{className:"mr-auto",navbar:!0},i.a.createElement(s.f,null,i.a.createElement(s.g,{href:"/"},"Films")),i.a.createElement(s.f,null,i.a.createElement(s.g,{href:"/"},"Documentaires")),i.a.createElement(s.f,null,i.a.createElement(s.g,{href:"/"},"Dessins Animés")),i.a.createElement(s.f,null,i.a.createElement(c.Link,{className:"nav-link",to:"/blog/"},"Blog"))),i.a.createElement(s.e,{navbar:!0},i.a.createElement(s.k,{nav:!0,inNavbar:!0},i.a.createElement(s.d,{nav:!0,caret:!0},"Langue"),i.a.createElement(s.c,{right:!0},i.a.createElement(s.b,null,"Français"),i.a.createElement(s.b,null,"Espagnol"),i.a.createElement(s.b,null,"Englais"))))))},a}(i.a.Component));a.a=m},148:function(e,a,t){},149:function(e,a,t){},154:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(145),i=t(147);t(151),t(149);a.a=function(e){var a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null),a,l.a.createElement(r.a,null))}},172:function(e,a,t){}}]);
//# sourceMappingURL=component---src-templates-movie-js-2743f59c835749b83d17.js.map