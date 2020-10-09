(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{MyTZ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return x})),a.d(t,"default",(function(){return C}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var n=a("q1tI"),r=a.n(n),c=a("7ljp"),i=a("9Dj+"),o=a("4+mf"),l=a("KWB9"),m=(a("a1Th"),a("tUrg"),a("f3/d"),a("XsSY")),s=a("cgyF"),u=a("tRbT"),d=a("TD2k"),p=a("6aaX"),f=a("dfam"),b=a("JrkS"),g=a("R/WZ"),h=a("ZBNC"),v=a("kKAo"),E=a("Ulw+"),j=a("48zx"),k=Object(g.a)((function(e){return Object(h.a)({root:{flexGrow:1,backgroundColor:e.palette.background.paper,marginBottom:e.spacing(1)},pre:{margin:"0",padding:"0",backgroundColor:"transparent",whiteSpec:"pre-wrap"}})}));function w(e){var t=e.deviceSpecification,a=e.showMarkdown,c=e.showSpecification,i=k(),o=Object(n.useState)(0),l=o[0],m=o[1],s=t,u=0;return r.a.createElement("div",{className:i.root},r.a.createElement(v.a,{square:!0},r.a.createElement(f.a,{value:l,onChange:function(e,t){m(t)},"aria-label":"View specification formats"},[a&&t.source&&"Markdown",c&&"Specification","JSON"].filter((function(e){return!!e})).map((function(e,t){return r.a.createElement(b.a,Object.assign({key:e,label:e},Object(E.a)(t)))}))),a&&t.source&&r.a.createElement(E.b,{value:l,index:u++},r.a.createElement(j.a,{value:t.source,mode:"markdown"})),c&&r.a.createElement(E.b,{key:"spec",value:l,index:u++},r.a.createElement(O,{device:s})),r.a.createElement(E.b,{key:"convjson",value:l,index:u++},r.a.createElement(j.a,{value:JSON.stringify(s,null,2),mode:"json"}))))}function O(e){var t=e.device,a=e.showSource,n=Object(d.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{key:"title"},t.name,r.a.createElement("span",{style:{marginLeft:"1rem"}},t.firmwares.map((function(e){return r.a.createElement(m.a,{key:e,id:e})})))),t.image&&r.a.createElement("img",{key:"image",alt:"image of the device",src:"https://raw.githubusercontent.com/microsoft/jacdac/main/devices/"+t.image}),r.a.createElement("p",{key:"description"},t.description&&r.a.createElement(p.a,{source:t.description})),r.a.createElement("ul",null,r.a.createElement("li",null,"repo: ",r.a.createElement(o.Link,{to:t.repo},t.repo)),r.a.createElement("li",null,"link: ",r.a.createElement(o.Link,{to:t.link},t.link))),!!t.firmwares.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Firmware identifiers"),r.a.createElement("ul",null,t.firmwares.map((function(e){return r.a.createElement("li",{key:e},"0x",e.toString(16))})))),r.a.createElement("h3",null,"Services"),r.a.createElement(u.a,{container:!0,spacing:2},t.services.map((function(e){return Object(l.x)(e)})).map((function(e){return r.a.createElement(u.a,Object.assign({item:!0},n),r.a.createElement(s.a,{key:e.shortId,specification:e}))}))),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Specification"),r.a.createElement(w,{deviceSpecification:t,showMarkdown:!0})))}var x={},S={_frontmatter:x},y=i.f;function C(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(c.mdx)(y,Object.assign({},S,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)(O,{device:Object(l.e)(a.pageContext.node.id),showSource:!0,mdxType:"DeviceSpecification"}),Object(c.mdx)("h2",{id:"see-also",style:{position:"relative"}},Object(c.mdx)("a",Object.assign({parentName:"h2"},{href:"#see-also","aria-label":"see also permalink",className:"anchor before"}),Object(c.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(c.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"See Also"),Object(c.mdx)("ul",null,Object(c.mdx)("li",null,Object(c.mdx)("a",{href:"https://github.com/microsoft/jacdac/tree/main/devices/"},"Edit specification source"),".")))}C.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-templates-device-mdx-b3db517a4ff2c5d5e330.js.map