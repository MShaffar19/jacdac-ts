(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{MyTZ:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return x})),t.d(a,"default",(function(){return N}));var n=t("8o2o"),c=t("q1tI"),r=t.n(c),i=t("7ljp"),o=t("9Dj+"),l=t("4+mf"),m=t("KWB9"),s=t("XsSY"),u=t("cgyF"),d=t("tRbT"),p=t("TD2k"),f=t("6aaX"),b=t("dfam"),g=t("JrkS"),h=t("R/WZ"),E=t("ZBNC"),v=t("kKAo"),j=t("Ulw+"),k=t("48zx"),w=Object(h.a)((function(e){return Object(E.a)({root:{flexGrow:1,backgroundColor:e.palette.background.paper,marginBottom:e.spacing(1)},pre:{margin:"0",padding:"0",backgroundColor:"transparent",whiteSpec:"pre-wrap"}})}));function O(e){var a=e.deviceSpecification,t=e.showMarkdown,n=e.showSpecification,i=w(),o=Object(c.useState)(0),l=o[0],m=o[1],s=a,u=0;return r.a.createElement("div",{className:i.root},r.a.createElement(v.a,{square:!0},r.a.createElement(b.a,{value:l,onChange:function(e,a){m(a)},"aria-label":"View specification formats"},[t&&a.source&&"Markdown",n&&"Specification","JSON"].filter((function(e){return!!e})).map((function(e,a){return r.a.createElement(g.a,Object.assign({key:e,label:e},Object(j.a)(a)))}))),t&&a.source&&r.a.createElement(j.b,{value:l,index:u++},r.a.createElement(k.a,{value:a.source,mode:"markdown"})),n&&r.a.createElement(j.b,{key:"spec",value:l,index:u++},r.a.createElement(S,{device:s})),r.a.createElement(j.b,{key:"convjson",value:l,index:u++},r.a.createElement(k.a,{value:JSON.stringify(s,null,2),mode:"json"}))))}function S(e){var a=e.device,t=e.showSource,n=Object(p.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{key:"title"},a.name,r.a.createElement("span",{style:{marginLeft:"1rem"}},a.firmwares.map((function(e){return r.a.createElement(s.a,{key:e,id:e})})))),a.image&&r.a.createElement("img",{key:"image",alt:"image of the device",src:"https://raw.githubusercontent.com/microsoft/jacdac/main/devices/"+a.image}),r.a.createElement("p",{key:"description"},a.description&&r.a.createElement(f.a,{source:a.description})),r.a.createElement("ul",null,r.a.createElement("li",null,"repo: ",r.a.createElement(l.Link,{to:a.repo},a.repo)),r.a.createElement("li",null,"link: ",r.a.createElement(l.Link,{to:a.link},a.link))),!!a.firmwares.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Firmware identifiers"),r.a.createElement("ul",null,a.firmwares.map((function(e){return r.a.createElement("li",{key:e},"0x",e.toString(16))})))),r.a.createElement("h3",null,"Services"),r.a.createElement(d.a,{container:!0,spacing:2},a.services.map((function(e){return Object(m.x)(e)})).map((function(e){return r.a.createElement(d.a,Object.assign({item:!0},n),r.a.createElement(u.a,{key:e.shortId,specification:e}))}))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Specification"),r.a.createElement(O,{deviceSpecification:a,showMarkdown:!0})))}var x={},y={_frontmatter:x},C=o.f;function N(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.mdx)(C,Object.assign({},y,t,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)(S,{device:Object(m.e)(t.pageContext.node.id),showSource:!0,mdxType:"DeviceSpecification"}),Object(i.mdx)("h2",{id:"see-also",style:{position:"relative"}},Object(i.mdx)("a",Object.assign({parentName:"h2"},{href:"#see-also","aria-label":"see also permalink",className:"anchor before"}),Object(i.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"See Also"),Object(i.mdx)("ul",null,Object(i.mdx)("li",null,Object(i.mdx)("a",{href:"https://github.com/microsoft/jacdac/tree/main/devices/"},"Edit specification source"),".")))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-templates-device-mdx-defb2c6e06c78ccc9eb1.js.map