(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"2RYT":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return V}));var r=n("q1tI"),a=n.n(r),i=n("ZBNC"),s=n("viY9"),c=n("q4d2"),o=n("L1J+"),u=n("kD0k"),d=n.n(u),l=(n("ls82"),n("/S4K")),m=n("tRbT"),h=n("r9w1"),f=n("eNf+"),p=n("IzqI"),v=n("FrwU"),b=n.n(v),g=n("ZF4C"),w=n("T7k7"),x=n("8uQ5"),k=n("MpiI"),j=n("POFd"),O=n("ls4f"),y=n("uRdJ"),E=n("9Hrx"),S=n("LBfC"),q=n("sP+f"),M=n("9mRT"),R=n("mr3+"),I=n("2Qkp"),P=function(e){Object(E.a)(n,e);var t=n.prototype;function n(){var t;return(t=e.call(this)||this).pendingCommands={},t.extensionId=Object(M.b)()?window.location.hash.substr(1):void 0,t._connected=!1,t._visible=!1,t.nextRequestId=1,t.handleMessage=t.handleMessage.bind(Object(y.a)(t)),"undefined"!=typeof window&&(window.addEventListener("message",t.handleMessage,!1),t.mount((function(){return window.removeEventListener("message",t.handleMessage)}))),t.on("shown",(function(){return t.refresh()})),t.init(),t}return t.log=function(e){console.log("mkcd "+this.extensionId+": "+e)},t.setVisible=function(e){this._visible!==e&&(this._visible=e,this.emit(q.e))},t.mkRequest=function(e,t,n,r){var a="jd_"+this.nextRequestId++;return this.pendingCommands[a]={action:n,resolve:e,reject:t},{type:"pxtpkgext",action:n,extId:this.extensionId,response:!0,id:a,body:r}},t.sendRequest=function(e,t){var n=this;return this.log("send "+e),this.extensionId?new Promise((function(r,a){var i=n.mkRequest(r,a,e,t);window.parent.postMessage(i,"*")})):Promise.resolve(void 0)},t.handleMessage=function(e){var t=e.data;if("pxtpkgext"===(null==t?void 0:t.type))if(t.id){var n=this.pendingCommands[t.id],r=n.action,a=n.resolve,i=n.reject;switch(delete this.pendingCommands[t.id],t.success&&a?a(t.resp):!t.success&&i&&i(t.resp),r){case"extinit":this._connected=!0,this.emit(q.n),this.emit(q.e);break;case"extusercode":this.emit("readuser",t.resp),this.emit(q.e);break;case"extreadcode":this.emit("read",t.resp),this.emit(q.e);break;case"extwritecode":this.emit("written",void 0)}}else switch(t.event){case"extinit":this.log("init"),this._target=t.target,this._connected=!0,this.emit(q.n),this.emit(q.e);break;case"extloaded":this.log("loaded");break;case"extshown":this.setVisible(!0),this.emit("shown"),this.emit(q.e);break;case"exthidden":this.setVisible(!1),this.emit("hidden"),this.emit(q.e);break;case"extdatastream":this.emit("datastream",!0);break;case"extconsole":this.emit("console",t.body);break;case"extmessagepacket":this.emit("messagepacket",t.body);break;default:console.debug("Unhandled event",t)}},t.init=function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.log("initializing"),e.next=3,this.sendRequest("extinit");case 3:return this.log("connected"),e.next=6,this.refresh();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.refresh=function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.log("refresh"),e.next=3,this.read();case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.read=function(){var e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.extensionId){e.next=6;break}return t={},this.emit("read",t),e.abrupt("return",t);case 6:return e.next=8,this.sendRequest("extreadcode");case 8:return n=e.sent,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.readUser=function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sendRequest("extusercode");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.write=function(){var e=Object(l.a)(d.a.mark((function e(t,n,r,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.extensionId){e.next=4;break}this.emit("written",void 0),e.next=6;break;case 4:return e.next=6,this.sendRequest("extwritecode",{code:t||void 0,json:n||void 0,jres:r||void 0,dependencies:a});case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),t.queryPermission=function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sendRequest("extquerypermission");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.requestPermission=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sendRequest("extrequestpermission",{console:t});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.dataStreamConsole=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sendRequest("extdatastream",{console:t});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.dataStreamMessages=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sendRequest("extdatastream",{messages:t});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),Object(O.a)(n,[{key:"target",get:function(){return this._target}},{key:"connected",get:function(){return this._connected}},{key:"visible",get:function(){return this._visible}}]),n}(S.a);var F=n("mv/Z"),C=n("hQyO"),B=n.n(C),U=n("gmkF");function z(e){var t="myModules";return"// auto-generated, do not edit.\nnamespace "+t+" {\n"+e.roles.map((function(e){return'\n    //% fixedInstance block="'+e.name+'"\n    export const '+Object(U.c)(e.name)+" = new "+Object(g.w)(e.service).client.qName+'("'+Object(U.c)(e.name)+'");\n'})).join("")+"\n}\ncontrol.inBackground(function() {\n"+e.roles.map((function(e){return"    "+t+"."+Object(U.c)(e.name)+".start();\n"})).join("")+"\n})\n    "}function _(e){var t={};return null==e||e.roles.forEach((function(e){var n=Object(g.w)(e.service);t[n.client.name]="github:"+n.client.repo})),t}function L(e){var t=e.component,n=e.onUpdate,i=e.config,s=t.name,c=t.service,o=Object(r.useMemo)((function(){return{serviceError:void 0,nameError:void 0}}),[i,t]),u=o.nameError,d=o.serviceError;return a.a.createElement(m.a,{item:!0,xs:12},a.a.createElement(m.a,{container:!0,spacing:2},a.a.createElement(m.a,{item:!0,xs:4,md:6},a.a.createElement(h.a,{fullWidth:!0,error:!!u,variant:"outlined",label:"name",helperText:u,value:s,onChange:function(e){t.name=Object(k.d)(e.target.value),n()}})),a.a.createElement(m.a,{item:!0,xs:4,md:4},a.a.createElement(x.a,{variant:"outlined",label:"service",serviceClass:c,setServiceClass:function(e){t.service=e,n()},error:d})),a.a.createElement(m.a,{item:!0},a.a.createElement(j.a,{title:"Remove service",onClick:function(){i.roles.splice(i.roles.indexOf(t),1),n()}},a.a.createElement(b.a,null)))))}function A(){var e,t=function(){var e=Object(r.useContext)(I.a).bus,t=Object(r.useState)(void 0),n=t[0],a=t[1];return Object(r.useEffect)((function(){console.log("mkcd: new editor client");var t=new P;return t.on(q.n,(function(){console.log("mkcd: stream messages"),t.dataStreamMessages(!0)})),t.on(["hidden","shown"],(function(){return e.clear()})),t.on("messagepacket",(function(t){if("jacdac"===t.channel&&"jacdac-editor-extension"!==t.source){var n=R.a.fromBinary(t.data,e.timestamp);if(!n)return;n.sender=t.source||"makecode",e.processPacket(n)}})),a(t),function(){return null==t?void 0:t.unmount()}}),[]),n}(),n=Object(p.a)(t,(function(e){return null==e?void 0:e.connected})),i=Object(r.useState)({roles:[]}),s=i[0],c=i[1];Object(r.useEffect)((function(){return null==t?void 0:t.subscribe("read",(function(e){console.log("mkcd: read received");var t=Object(f.b)(e.json);console.log({resp:e,cfg:t}),t&&c(t)}))}),[t]);var o=function(){c(Object(f.m)(s))},u=function(){var e=Object(l.a)(d.a.mark((function e(){var n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=z(s),r=(i=s)&&JSON.stringify(i,null,4),a=_(s),console.log("mkcd: saving..."),e.next=6,t.write(n,r,void 0,a);case 6:case"end":return e.stop()}var i}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(m.a,{container:!0,direction:"row",spacing:2},null===(e=s.roles)||void 0===e?void 0:e.map((function(e,t){return a.a.createElement(L,{key:"config"+t,config:s,component:e,onUpdate:o})})),a.a.createElement(m.a,{item:!0,xs:12},a.a.createElement(w.a,{serviceFilter:function(e){return!!Object(g.v)(e)},onAdd:function(e){s.roles||(s.roles=[]);var t=s.roles.map((function(e){return e.name}));s.roles.push({name:Object(f.T)(t,e.camelName||e.shortId),service:e.classIdentifier}),o()}})),a.a.createElement(m.a,{item:!0,xs:12},a.a.createElement(F.a,{variant:"contained",disabled:!n,icon:a.a.createElement(B.a,null),onClick:u},"save")))}var J=n("R/WZ"),T=n("goX9"),H=n("StIp"),N=n("x4rs");H.a.webUSB=!1;var Q=Object(J.a)((function(e){return Object(i.a)({content:{display:"flex",minHeight:"100vh",minWidth:"10rem",flexDirection:"column",padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexGrow:1}})}));function V(){var e=Object(s.a)({palette:{primary:{main:"#2e7d32"},secondary:{main:"#ffc400"}}}),t=Q(),n=Object(c.a)(e);return a.a.createElement(o.a,{theme:n},a.a.createElement("div",{className:t.content},a.a.createElement(T.a,null,a.a.createElement(A,null)),a.a.createElement(N.a,null)))}},"L1J+":function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var r=n("bWLx"),a=n("5CWz"),i=n("HQMY"),s=n("NKQG"),c=n("q1tI"),o=n.n(c),u=n("W1g9"),d=n("2Qkp"),l=n("ZYKV"),m=n("Ash2"),h=n("sP+f"),f=n("uRdJ"),p=n("9Hrx"),v=n("9mRT"),b=n("mr3+"),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).bridgeId="bridge"+Math.random(),n.packetSent=0,n.packetProcessed=0,n.bus=t,n.postPacket=n.postPacket.bind(Object(f.a)(n)),n.handleMessage=n.handleMessage.bind(Object(f.a)(n)),n.registerEvents(),n}Object(p.a)(t,e);var n=t.prototype;return n.registerEvents=function(){var e=this;console.log("jdiframe: listening for packets"),this.mount(this.bus.subscribe(h.mb,this.postPacket)),this.mount(this.bus.subscribe(h.qb,this.postPacket)),window.addEventListener("message",this.handleMessage,!1),this.mount((function(){return window.removeEventListener("message",e.handleMessage,!1)}))},n.handleMessage=function(e){if(this.isOriginValid(e)){var t=e.data,n=t;n&&"jacdac"===n.channel&&"messagepacket"===n.type?this.handleMessageJacdac(n):"pxtdriver"===(null==t?void 0:t.source)&&this.handleDriverMessage(t)}},n.handleDriverMessage=function(e){switch(e.type){case"stop":this.bus.clear()}},n.handleMessageJacdac=function(e){var t=b.a.fromBinary(e.data,this.bus.timestamp);t&&t.sender!==this.bridgeId&&(this.packetProcessed++,t.sender=e.sender,this.bus.sendPacketAsync(t),this.bus.processPacket(t))},n.postPacket=function(e){var t;if(!e.sender){this.packetSent++,e.sender=this.bridgeId;var n={type:"messagepacket",channel:"jacdac",broadcast:!0,data:e.toBuffer(),sender:this.bridgeId};null===(t=window.parent)||void 0===t||t.postMessage(n,this.origin)}},t}(v.a),w=n("StIp");var x=function(){if("undefined"==typeof window||"undefined"==typeof URLSearchParams)return{diagnostic:!1,webUSB:!0};var e=new URLSearchParams(window.location.search);return{diagnostics:"1"===e.get("dbg"),webUSB:"0"!==e.get("webusb"),parentOrigin:e.get("parentOrigin")}}();w.a.diagnostics=x.diagnostics,w.a.webUSB=x.webUSB;var k=w.a.webUSB?Object(m.c)(void 0,{parentOrigin:x.parentOrigin}):new l.b(void 0);k.setBackgroundFirmwareScans(!0),Object(v.b)()&&new g(k);var j=function(e){var t=e.children,n=Object(c.useState)(!1),r=n[0],a=n[1],i=Object(c.useState)(k.connectionState),s=i[0],u=i[1];Object(c.useEffect)((function(){return r||k.connectionState!=l.a.Disconnected||(a(!0),k.connectAsync(!0)),function(){}}),[]),Object(c.useEffect)((function(){return k.subscribe(h.p,(function(e){return u(e)}))}),[]);return o.a.createElement(d.a.Provider,{value:{bus:k,connectionState:s,connectAsync:function(){return k.connectAsync()},disconnectAsync:function(){return k.disconnectAsync()}}},t)},O=n("2K/c"),y=n("lPdd"),E=n("VKQG"),S=n("XZCR"),q=n("qhky");function M(e){var t=e.theme,n=e.maxSnack,c=e.children;return o.a.createElement(r.a,{theme:t},o.a.createElement(s.a,{maxSnack:n||1,dense:!0},o.a.createElement(u.a,null,o.a.createElement(i.a,null,o.a.createElement(y.b,null,o.a.createElement(j,null,o.a.createElement(S.a,null,o.a.createElement(E.a,null,o.a.createElement(O.a,null,o.a.createElement(a.a,null),o.a.createElement(q.b,null,o.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com",crossOrigin:"anonymous"}),o.a.createElement("link",{rel:"preconnect",href:"https://raw.githubusercontent.com",crossOrigin:"anonymous"}),o.a.createElement("link",{rel:"preconnect",href:"https://www.youtube-nocookie.com",crossOrigin:"anonymous"}),o.a.createElement("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"})),c)))))))))}},q4d2:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("k1TG"),a=n("TrhM"),i=n("FqMR");function s(e){return String(parseFloat(e)).length===String(e).length}function c(e){return parseFloat(e)}function o(e){return function(t,n){var r=String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===n)return t;var a=c(t);if("px"!==r)if("em"===r)a=c(t)*c(e);else if("rem"===r)return a=c(t)*c(e),t;var i=a;if("px"!==n)if("em"===n)i=a/c(e);else{if("rem"!==n)return t;i=a/c(e)}return parseFloat(i.toFixed(5))+n}}function u(e){var t=e.size,n=e.grid,r=t-t%n,a=r+n;return t-r<a-t?r:a}function d(e){var t=e.lineHeight;return e.pixels/(t*e.htmlFontSize)}function l(e){var t=e.cssProperty,n=e.min,r=e.max,a=e.unit,s=void 0===a?"rem":a,c=e.breakpoints,o=void 0===c?[600,960,1280]:c,u=e.transform,d=void 0===u?null:u,l=Object(i.a)({},t,"".concat(n).concat(s)),m=(r-n)/o[o.length-1];return o.forEach((function(e){var r=n+m*e;null!==d&&(r=d(r)),l["@media (min-width:".concat(e,"px)")]=Object(i.a)({},t,"".concat(Math.round(1e4*r)/1e4).concat(s))})),l}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.breakpoints,i=void 0===n?["sm","md","lg"]:n,c=t.disableAlign,m=void 0!==c&&c,h=t.factor,f=void 0===h?2:h,p=t.variants,v=void 0===p?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:p,b=Object(r.a)({},e);b.typography=Object(r.a)({},b.typography);var g=b.typography,w=o(g.htmlFontSize),x=i.map((function(e){return b.breakpoints.values[e]}));return v.forEach((function(e){var t=g[e],n=parseFloat(w(t.fontSize,"rem"));if(!(n<=1)){var i=n,c=1+(i-1)/f,o=t.lineHeight;if(!s(o)&&!m)throw new Error(Object(a.a)(6));s(o)||(o=parseFloat(w(o,"rem"))/parseFloat(n));var h=null;m||(h=function(e){return u({size:e,grid:d({pixels:4,lineHeight:o,htmlFontSize:g.htmlFontSize})})}),g[e]=Object(r.a)({},t,l({cssProperty:"fontSize",min:c,max:i,unit:"rem",breakpoints:x,transform:h}))}})),b}}}]);
//# sourceMappingURL=component---src-pages-tools-makecode-editor-extension-tsx-6f17fb4e2a84cdca17bb.js.map