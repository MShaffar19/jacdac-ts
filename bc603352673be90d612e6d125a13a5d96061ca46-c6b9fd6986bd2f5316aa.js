(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+AIW":function(e,t,n){"use strict";var r=n("5NKs"),a=n("jGDn");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n("q1tI")),o=(0,r(n("8/g6")).default)(c.createElement("path",{d:"M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z"}),"NotificationImportant");t.default=o},"0FeW":function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var r=n("8o2o"),a=n("q1tI"),c=n.n(a),o=n("2Qkp"),i=n("R/WZ"),l=n("ZBNC"),u=n("7TAU"),s=n("B6OW"),d=n.n(s),f=n("ZqJb"),h=n.n(f),p=n("IzqI"),v=n("ZF4C"),b=n("tr08"),g=n("lopY"),m=n("dYIP"),k=n("U/xp"),x=n("8zWW"),O=n("sP+f"),E=n("jj5L"),j=n("eNf+"),y=n("4+mf"),C=n("aJrF"),I=n("c1jw"),w=n("Vwk8"),S=n("ofer"),N=n("NHHF"),P=n("UhlP"),F=n("+AIW"),T=n.n(F),A=Object(i.a)((function(e){return Object(l.a)({root:{color:e.palette.text.secondary,"&:hover > $content":{backgroundColor:e.palette.action.hover},"&:focus > $content, &$selected > $content":{backgroundColor:"var(--tree-view-bg-color, "+e.palette.grey[400]+")",color:"var(--tree-view-color)"},"&:focus > $content $label, &:hover > $content $label, &$selected > $content $label":{backgroundColor:"transparent"}},content:{color:e.palette.text.secondary,fontWeight:e.typography.fontWeightMedium,"$expanded > &":{fontWeight:e.typography.fontWeightRegular}},group:{marginLeft:0,"& $content":{paddingLeft:e.spacing(1)}},expanded:{},selected:{},label:{fontWeight:"inherit",color:"inherit"},labelRoot:{display:"flex",alignItems:"center",padding:e.spacing(.5,0)},labelIcon:{marginRight:e.spacing(.5)},labelText:{fontWeight:"inherit",flexGrow:1}})}));function M(e){var t=A(),n=e.labelText,o=e.kind,i=e.labelInfo,l=e.color,u=e.bgColor,s=e.checked,d=e.setChecked,f=e.actions,h=e.nodeId,p=e.alert,v=Object(r.a)(e,["labelText","kind","labelInfo","color","bgColor","checked","setChecked","actions","nodeId","alert"]),b=Object(a.useState)(s),g=b[0],m=b[1];return c.a.createElement(w.a,Object.assign({nodeId:h,label:c.a.createElement("div",{className:t.labelRoot},d&&c.a.createElement(P.a,{checked:g,color:"primary",inputProps:{"aria-label":"secondary checkbox"},onChange:function(e,t){e.stopPropagation(),d(t),m(t)}}),o&&c.a.createElement(N.b,{kind:o,className:t.labelIcon,tooltip:!0}),c.a.createElement(S.a,{variant:"body2",className:t.labelText},n),p&&c.a.createElement(T.a,null),c.a.createElement(S.a,{variant:"caption",color:"inherit"},p&&c.a.createElement(S.a,{component:"span"},p),i,f)),style:{"--tree-view-color":l,"--tree-view-bg-color":u},classes:{root:t.root,content:t.content,expanded:t.expanded,selected:t.selected,group:t.group,label:t.label}},v))}var R=n("AjCI"),K=n.n(R);function $(e){var t,n=e.device,a=e.checked,o=e.setChecked,i=e.checkboxes,l=e.serviceFilter,u=Object(r.a)(e,["device","checked","setChecked","checkboxes","serviceFilter"]),s=n.id,d=Object(C.a)(n,!0),f=Object(p.a)(n,(function(e){return e.physical}))?"device":"virtualdevice",h=Object(E.a)([O.eb,O.O],n,(function(e){return!(null==e||!e.lost)})),v=Object(p.a)(n,(function(){return n.services().filter((function(e){return!l||l(e)}))})),k=Object(b.a)(),y=Object(g.a)(k.breakpoints.up("sm")),I=Object(j.s)(v.filter((function(e){return e.serviceClass!==O.Pb&&e.serviceClass!==O.Qb})).map((function(e){return e.name})),2),w=null===(t=v.find((function(e){return e.readingRegister})))||void 0===t?void 0:t.readingRegister,S=[Object(m.a)(w),I].filter((function(e){return!!e})).join(", ");return c.a.createElement(M,{nodeId:s,labelText:d,labelInfo:S,alert:h&&"Lost device...",kind:f,checked:(null==a?void 0:a.indexOf(s))>-1,setChecked:i&&i.indexOf("device")>-1&&o&&function(e){return o(s,e)},actions:y&&c.a.createElement(x.a,{device:n,reset:!0,rename:!0})},null==v?void 0:v.map((function(e){return c.a.createElement(L,Object.assign({key:e.id,service:e,checked:a,setChecked:o,checkboxes:i},u))})))}function L(e){var t=e.service,n=e.checked,a=e.setChecked,o=e.checkboxes,i=e.dashboard,l=e.registerFilter,u=e.eventFilter,s=Object(r.a)(e,["service","checked","setChecked","checkboxes","dashboard","registerFilter","eventFilter"]),d=t.specification,f=d&&!i,h=t.id,p=t.name,b=(null==n?void 0:n.indexOf(h))>-1,g=null==d?void 0:d.packets,k=null==g?void 0:g.filter(v.r).map((function(e){return t.register(e.identifier)})).filter((function(e){return!l||l(e)})).sort((function(e,t){return e.name.localeCompare(t.name)})),x=null==g?void 0:g.filter(v.l).map((function(e){return t.event(e.identifier)})).filter((function(e){return!u||u(e)})),O=t.readingRegister,E=Object(m.a)(O);return c.a.createElement(M,{nodeId:h,labelText:p,labelInfo:E,kind:"service",checked:b,setChecked:(null==o?void 0:o.indexOf("service"))>-1&&a&&function(e){return a(h,e)},actions:f&&c.a.createElement(y.Link,{color:"inherit",to:"/services/"+d.shortId},c.a.createElement(K.a,{fontSize:"small"}))},null==k?void 0:k.map((function(e){return c.a.createElement(z,Object.assign({key:e.id,register:e,checked:n,setChecked:a,checkboxes:o},s))})),null==x?void 0:x.map((function(e){return c.a.createElement(D,Object.assign({key:e.id,event:e,checked:n,setChecked:a,checkboxes:o},s))})))}function z(e){var t=e.register,n=e.checked,r=e.setChecked,o=e.checkboxes,i=t.specification,l=t.id,u=Object(a.useState)(t.lastGetAttempts),s=u[0],d=u[1],f=!(null==i||!i.optional),h=s>2,p=((null==i?void 0:i.name)||t.id)+(f?"?":""),v=Object(m.a)(t);Object(a.useEffect)((function(){return null==t?void 0:t.subscribe(O.P,(function(){d(t.lastGetAttempts)}))}),[t]);return f&&h&&void 0===v?c.a.createElement(c.a.Fragment,null):c.a.createElement(M,{nodeId:l,labelText:p,labelInfo:v||s>0&&"#"+s||"",kind:(null==i?void 0:i.kind)||"register",alert:h&&!f&&void 0===v&&"???",checked:(null==n?void 0:n.indexOf(l))>-1,setChecked:(null==o?void 0:o.indexOf("register"))>-1&&r&&function(e){r(l,e)}})}function D(e){var t=e.event,n=e.checked,r=e.setChecked,a=e.checkboxes,o=t.specification,i=t.id,l=Object(k.a)(t);return c.a.createElement(M,{nodeId:i,labelText:(null==o?void 0:o.name)||t.id,labelInfo:(l||"")+"",kind:"event",checked:(null==n?void 0:n.indexOf(i))>-1,setChecked:(null==a?void 0:a.indexOf("event"))>-1&&r&&function(e){r(i,e)}})}var W=Object(i.a)(Object(l.a)({root:{flexGrow:1}}));function B(e){var t=e.defaultExpanded,n=e.defaultSelected,i=e.defaultChecked,l=e.onChecked,s=e.onToggle,f=e.onSelect,v=e.checkboxes,b=e.deviceFilter,g=Object(r.a)(e,["defaultExpanded","defaultSelected","defaultChecked","onChecked","onToggle","onSelect","checkboxes","deviceFilter"]),m=W(),k=Object(a.useState)(t||[]),x=k[0],O=k[1],E=Object(a.useState)(n||[]),j=E[0],y=E[1],C=Object(a.useState)(i||[]),w=C[0],S=C[1],N=Object(a.useContext)(o.a).bus,P=Object(p.a)(N,(function(){return N.devices().filter((function(e){return!b||b(e)}))})),F=function(e,t){var n=w.indexOf(e);!t&&n>-1?w.splice(n,1):t&&n<0&&w.push(e),S(w),l&&l(w)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,null),c.a.createElement(u.a,{className:m.root,defaultCollapseIcon:c.a.createElement(d.a,null),defaultExpandIcon:c.a.createElement(h.a,null),defaultEndIcon:c.a.createElement("div",{style:{width:12}}),expanded:x,selected:j,onNodeToggle:function(e,t){O(t),s&&s(t)},onNodeSelect:function(e,t){y(t),f&&f(t)}},null==P?void 0:P.map((function(e){return c.a.createElement($,Object.assign({key:e.id,device:e,checked:w,setChecked:F,checkboxes:v,expanded:x,selected:j},g))}))))}},"7TAU":function(e,t,n){"use strict";var r=n("k1TG"),a=n("8j0Q"),c=n("aXB2"),o=n("q1tI"),i=n("iuhU"),l=n("H2TA"),u=n("yCxk"),s=n("lVsP");var d=function(e,t,n){for(var r=t;r<e.length;r+=1)if(n===e[r])return r;return-1},f=[],h=[],p=o.forwardRef((function(e,t){var n=e.children,l=e.classes,p=e.className,v=e.defaultCollapseIcon,b=e.defaultEndIcon,g=e.defaultExpanded,m=void 0===g?f:g,k=e.defaultExpandIcon,x=e.defaultParentIcon,O=e.defaultSelected,E=void 0===O?h:O,j=e.disableSelection,y=void 0!==j&&j,C=e.multiSelect,I=void 0!==C&&C,w=e.expanded,S=e.onNodeSelect,N=e.onNodeToggle,P=e.selected,F=Object(c.a)(e,["children","classes","className","defaultCollapseIcon","defaultEndIcon","defaultExpanded","defaultExpandIcon","defaultParentIcon","defaultSelected","disableSelection","multiSelect","expanded","onNodeSelect","onNodeToggle","selected"]),T=o.useState(null),A=T[0],M=T[1],R=o.useState(null),K=R[0],$=R[1],L=o.useRef({}),z=o.useRef({}),D=o.useRef([]),W=Object(u.a)({controlled:w,default:m,name:"TreeView",state:"expanded"}),B=Object(a.a)(W,2),V=B[0],q=B[1],U=Object(u.a)({controlled:P,default:E,name:"TreeView",state:"selected"}),G=Object(a.a)(U,2),H=G[0],J=G[1],Q=o.useCallback((function(e){return!!Array.isArray(V)&&-1!==V.indexOf(e)}),[V]),Z=o.useCallback((function(e){return Array.isArray(H)?-1!==H.indexOf(e):H===e}),[H]),_=function(e){var t=D.current.indexOf(e);return-1!==t&&t+1<D.current.length?D.current[t+1]:null},Y=function(e){var t=D.current.indexOf(e);return-1!==t&&t-1>=0?D.current[t-1]:null},X=function(){return D.current[D.current.length-1]},ee=function(){return D.current[0]},te=function(e){e&&(M(e),$(e))},ne=o.useRef(null),re=o.useRef(!1),ae=o.useRef([]),ce=function(e,t){var n=H,r=t.start,a=t.next,c=t.current;a&&c&&(-1===ae.current.indexOf(c)&&(ae.current=[]),re.current?-1!==ae.current.indexOf(a)?(n=n.filter((function(e){return e===r||e!==c})),ae.current=ae.current.filter((function(e){return e===r||e!==c}))):(n.push(a),ae.current.push(a)):(n.push(a),ae.current.push(c,a)),S&&S(e,n),J(n))},oe=function(e,t){var n=H,r=t.start,a=t.end;re.current&&(n=H.filter((function(e){return-1===ae.current.indexOf(e)})));var c=function(e,t){var n=D.current.indexOf(e),r=D.current.indexOf(t),a=Math.min(n,r),c=Math.max(n,r);return D.current.slice(a,c+1)}(r,a);ae.current=c;var o=n.concat(c);o=o.filter((function(e,t){return o.indexOf(e)===t})),S&&S(e,o),J(o)},ie=function(e,t){var n=[];n=-1!==H.indexOf(t)?H.filter((function(e){return e!==t})):[t].concat(H),S&&S(e,n),J(n)},le=function(e,t){var n=I?[t]:t;S&&S(e,n),J(n)},ue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t.start,a=void 0===r?ne.current:r,c=t.end,o=t.current;return n?ce(e,{start:a,next:c,current:o}):oe(e,{start:a,end:c}),re.current=!0,!0},se=o.useCallback((function(e){var t=L.current[e],n=[];return t&&(n.push(e),t.children&&(n.concat(t.children),t.children.forEach((function(e){n.concat(se(e))})))),n}),[]),de=o.useCallback((function(e){var t=Object(r.a)({},z.current);e.forEach((function(e){t[e]&&delete t[e]})),z.current=t}),[]),fe=o.useCallback((function(e){var t=se(e);de(t);var n=Object(r.a)({},L.current);t.forEach((function(e){var t=n[e];if(t){if(t.parent){var a=n[t.parent];if(a&&a.children){var c=a.children.filter((function(t){return t!==e}));n[t.parent]=Object(r.a)({},a,{children:c})}}delete n[e]}})),L.current=n,$((function(t){return t===e?null:t}))}),[se,de]),he=o.useRef([]),pe=o.useState(!1),ve=pe[0],be=pe[1];o.useEffect((function(){var e=[];o.Children.forEach(n,(function(t){o.isValidElement(t)&&t.props.nodeId&&e.push(t.props.nodeId)})),function(e,t){if(e.length!==t.length)return!0;for(var n=0;n<e.length;n+=1)if(e[n]!==t[n])return!0;return!1}(he.current,e)&&(L.current[-1]={parent:null,children:e},e.forEach((function(e,t){0===t&&M(e)})),D.current=L.current[-1].children,he.current=e,be(!0))}),[n]),o.useEffect((function(){ve&&(D.current=function e(t){for(var n=[],r=0;r<t.length;r+=1){var a=t[r];n.push(a);var c=L.current[a].children;Q(a)&&c&&(n=n.concat(e(c)))}return n}(L.current[-1].children))}),[V,ve,Q,n]);var ge=function(){return!1};return o.createElement(s.a.Provider,{value:{icons:{defaultCollapseIcon:v,defaultExpandIcon:k,defaultParentIcon:x,defaultEndIcon:b},focus:te,focusFirstNode:function(){return te(ee())},focusLastNode:function(){return te(X())},focusNextNode:function(e){return te(_(e))},focusPreviousNode:function(e){return te(Y(e))},focusByFirstCharacter:function(e,t){var n,r,a=t.toLowerCase(),c=[],o=[];Object.keys(z.current).forEach((function(e){var t=z.current[e],n=L.current[e];(!n.parent||Q(n.parent))&&(c.push(e),o.push(t))})),(n=c.indexOf(e)+1)===L.current.length&&(n=0),-1===(r=d(o,n,a))&&(r=d(o,0,a)),r>-1&&te(c[r])},expandAllSiblings:function(e,t){var n,r=L.current[t],a=L.current[r.parent];a?n=a.children.filter((function(e){return!Q(e)})):n=L.current[-1].children.filter((function(e){return!Q(e)}));var c=V.concat(n);n.length>0&&(q(c),N&&N(e,c))},toggleExpansion:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K;-1!==V.indexOf(n)?(t=V.filter((function(e){return e!==n})),M((function(e){var t=L.current[e];return e&&(t&&t.parent?t.parent.id:null)===n?n:e}))):t=[n].concat(V),N&&N(e,t),q(t)},isExpanded:Q,isFocused:function(e){return K===e},isSelected:Z,selectNode:y?ge:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!!t&&(n?ie(e,t):le(e,t),ne.current=t,re.current=!1,ae.current=[],!0)},selectRange:y?ge:ue,selectNextNode:y?ge:function(e,t){return ue(e,{end:_(t),current:t},!0)},selectPreviousNode:y?ge:function(e,t){return ue(e,{end:Y(t),current:t},!0)},rangeSelectToFirst:y?ge:function(e,t){ne.current||(ne.current=t);var n=re.current?ne.current:t;return ue(e,{start:n,end:ee()})},rangeSelectToLast:y?ge:function(e,t){ne.current||(ne.current=t);var n=re.current?ne.current:t;return ue(e,{start:n,end:X()})},selectAllNodes:y?ge:function(e){return ue(e,{start:ee(),end:X()})},isTabbable:function(e){return A===e},multiSelect:I,getParent:function(e){return L.current[e].parent},mapFirstChar:function(e,t){z.current[e]=t},addNodeToNodeMap:function(e,t){var n=L.current[e];L.current[e]=Object(r.a)({},n,{children:t,id:e}),t.forEach((function(t){var n=L.current[t];L.current[t]=Object(r.a)({},n,{parent:e,id:t})}))},removeNodeFromNodeMap:fe}},o.createElement("ul",Object(r.a)({role:"tree","aria-multiselectable":I,className:Object(i.a)(l.root,p),ref:t},F),n))}));t.a=Object(l.a)({root:{padding:0,margin:0,listStyle:"none"}},{name:"MuiTreeView"})(p)},B6OW:function(e,t,n){"use strict";var r=n("5NKs"),a=n("jGDn");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n("q1tI")),o=(0,r(n("8/g6")).default)(c.createElement("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");t.default=o},"L1J+":function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var r=n("bWLx"),a=n("HQMY"),c=n("NKQG"),o=n("q1tI"),i=n.n(o),l=n("W1g9"),u=n("2Qkp"),s=n("ZYKV"),d=n("Ash2"),f=n("sP+f"),h=n("uRdJ"),p=n("9Hrx"),v=n("9mRT"),b=n("mr3+"),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).bridgeId="bridge"+Math.random(),n.bus=t,n.postPacket=n.postPacket.bind(Object(h.a)(n)),n.handleMessage=n.handleMessage.bind(Object(h.a)(n)),n.registerEvents(),n}Object(p.a)(t,e);var n=t.prototype;return n.registerEvents=function(){var e=this;console.log("jdiframe: listening for packets"),this.mount(this.bus.subscribe(f.ob,this.postPacket)),this.mount(this.bus.subscribe(f.sb,this.postPacket)),window.addEventListener("message",this.handleMessage,!1),this.mount((function(){return window.removeEventListener("message",e.handleMessage,!1)}))},n.handleMessage=function(e){if(this.isOriginValid(e)){var t=e.data,n=t;n&&"jacdac"===n.channel&&"messagepacket"===n.type?this.handleMessageJacdac(n):"pxtdriver"===(null==t?void 0:t.source)?this.handleDriverMessage(t):console.log({data:t})}},n.handleDriverMessage=function(e){switch(e.type){case"stop":this.bus.clear()}},n.handleMessageJacdac=function(e){var t=b.a.fromBinary(e.data,this.bus.timestamp);t&&(t.sender=e.sender||this.bridgeId,this.bus.sendPacketAsync(t),this.bus.processPacket(t))},n.postPacket=function(e){var t;if(e.sender!==this.bridgeId){var n={type:"messagepacket",channel:"jacdac",broadcast:!0,data:e.toBuffer(),sender:this.bridgeId};null===(t=window.parent)||void 0===t||t.postMessage(n,this.origin)}},t}(v.a),m=n("StIp");var k=function(){if("undefined"==typeof window||"undefined"==typeof URLSearchParams)return{diagnostic:!1,webUSB:!0};var e=new URLSearchParams(window.location.search);return{diagnostics:"1"===e.get("dbg"),webUSB:"0"!==e.get("webusb"),parentOrigin:e.get("parentOrigin")}}();m.a.diagnostics=k.diagnostics,m.a.webUSB=k.webUSB;var x=m.a.webUSB?Object(d.c)(void 0,{parentOrigin:k.parentOrigin}):new s.b(void 0);x.setBackgroundFirmwareScans(!0),Object(v.b)()&&new g(x);var O=function(e){var t=e.children,n=Object(o.useState)(!1),r=n[0],a=n[1],c=Object(o.useState)(x.connectionState),l=c[0],d=c[1];Object(o.useEffect)((function(){return r||x.connectionState!=s.a.Disconnected||(a(!0),x.connectAsync(!0)),function(){}}),[]),Object(o.useEffect)((function(){return x.subscribe(f.q,(function(e){return d(e)}))}),[]);return i.a.createElement(u.a.Provider,{value:{bus:x,connectionState:l,connectAsync:function(){return x.connectAsync()},disconnectAsync:function(){return x.disconnectAsync()}}},t)},E=n("2K/c"),j=n("lPdd"),y=n("VKQG"),C=n("XZCR");function I(e){var t=e.theme,n=e.maxSnack,o=e.children;return i.a.createElement(r.a,{theme:t},i.a.createElement(c.a,{maxSnack:n||1,dense:!0},i.a.createElement(l.a,null,i.a.createElement(a.a,null,i.a.createElement(j.b,null,i.a.createElement(O,null,i.a.createElement(C.a,null,i.a.createElement(y.a,null,i.a.createElement(E.a,null,o)))))))))}},Vwk8:function(e,t,n){"use strict";var r=n("k1TG"),a=n("aXB2"),c=n("q1tI"),o=n("iuhU"),i=n("ofer"),l=n("JQEk"),u=n("ye/S"),s=n("tr08"),d=n("H2TA"),f=n("bfFb"),h=n("lVsP"),p=c.forwardRef((function(e,t){var n=e.children,u=e.classes,d=e.className,p=e.collapseIcon,v=e.endIcon,b=e.expandIcon,g=e.icon,m=e.label,k=e.nodeId,x=e.onClick,O=e.onLabelClick,E=e.onIconClick,j=e.onFocus,y=e.onKeyDown,C=e.onMouseDown,I=e.TransitionComponent,w=void 0===I?l.a:I,S=e.TransitionProps,N=Object(a.a)(e,["children","classes","className","collapseIcon","endIcon","expandIcon","icon","label","nodeId","onClick","onLabelClick","onIconClick","onFocus","onKeyDown","onMouseDown","TransitionComponent","TransitionProps"]),P=c.useContext(h.a),F=P.icons,T=P.focus,A=P.focusFirstNode,M=P.focusLastNode,R=P.focusNextNode,K=P.focusPreviousNode,$=P.focusByFirstCharacter,L=P.selectNode,z=P.selectRange,D=P.selectNextNode,W=P.selectPreviousNode,B=P.rangeSelectToFirst,V=P.rangeSelectToLast,q=P.selectAllNodes,U=P.expandAllSiblings,G=P.toggleExpansion,H=P.isExpanded,J=P.isFocused,Q=P.isSelected,Z=P.isTabbable,_=P.multiSelect,Y=P.getParent,X=P.mapFirstChar,ee=P.addNodeToNodeMap,te=P.removeNodeFromNodeMap,ne=c.useRef(null),re=c.useRef(null),ae=Object(f.a)(ne,t),ce=g,oe=Boolean(Array.isArray(n)?n.length:n),ie=!!H&&H(k),le=!!J&&J(k),ue=!!Z&&Z(k),se=!!Q&&Q(k),de=F||{},fe=Object(s.a)();ce||(oe?(ce=ie?p||de.defaultCollapseIcon:b||de.defaultExpandIcon)||(ce=de.defaultParentIcon):ce=v||de.defaultEndIcon);var he,pe=function(e){return oe&&(ie?R(k):G(e)),!0},ve=function(e){if(ie)return G(e,k),!0;var t=Y(k);return!!t&&(T(t),!0)};return c.useEffect((function(){if(ee){var e=[];c.Children.forEach(n,(function(t){c.isValidElement(t)&&t.props.nodeId&&e.push(t.props.nodeId)})),ee(k,e)}}),[n,k,ee]),c.useEffect((function(){if(te)return function(){te(k)}}),[k,te]),c.useEffect((function(){X&&m&&X(k,re.current.textContent.substring(0,1).toLowerCase())}),[X,k,m]),c.useEffect((function(){le&&ne.current.focus()}),[le]),_?he=se:se&&(he=!0),c.createElement("li",Object(r.a)({className:Object(o.a)(u.root,d,ie&&u.expanded,se&&u.selected),role:"treeitem",onKeyDown:function(e){var t=!1,n=e.key;if(!e.altKey&&e.currentTarget===e.target){var r,a=e.ctrlKey||e.metaKey;switch(n){case" ":ne.current===e.currentTarget&&(t=_&&e.shiftKey?z(e,{end:k}):_?L(e,k,!0):L(e,k)),e.stopPropagation();break;case"Enter":ne.current===e.currentTarget&&oe&&(G(e),t=!0),e.stopPropagation();break;case"ArrowDown":_&&e.shiftKey&&D(e,k),R(k),t=!0;break;case"ArrowUp":_&&e.shiftKey&&W(e,k),K(k),t=!0;break;case"ArrowRight":t="rtl"===fe.direction?ve(e):pe(e);break;case"ArrowLeft":t="rtl"===fe.direction?pe(e):ve(e);break;case"Home":_&&a&&e.shiftKey&&B(e,k),A(),t=!0;break;case"End":_&&a&&e.shiftKey&&V(e,k),M(),t=!0;break;default:"*"===n?(U(e,k),t=!0):_&&a&&"a"===n.toLowerCase()?t=q(e):!a&&!e.shiftKey&&((r=n)&&1===r.length&&r.match(/\S/))&&($(k,n),t=!0)}t&&(e.preventDefault(),e.stopPropagation()),y&&y(e)}},onFocus:function(e){le||e.currentTarget!==e.target||T(k),j&&j(e)},"aria-expanded":oe?ie:null,"aria-selected":he,ref:ae,tabIndex:ue?0:-1},N),c.createElement("div",{className:u.content,onClick:function(e){le||T(k);var t=_&&(e.shiftKey||e.ctrlKey||e.metaKey);!oe||e.defaultPrevented||t&&H(k)||G(e,k),t?e.shiftKey?z(e,{end:k}):L(e,k,!0):L(e,k),x&&x(e)},onMouseDown:function(e){(e.shiftKey||e.ctrlKey||e.metaKey)&&e.preventDefault(),C&&C(e)},ref:re},c.createElement("div",{onClick:E,className:u.iconContainer},ce),c.createElement(i.a,{onClick:O,component:"div",className:u.label},m)),n&&c.createElement(w,Object(r.a)({unmountOnExit:!0,className:u.group,in:ie,component:"ul",role:"group"},S),n))}));t.a=Object(d.a)((function(e){return{root:{listStyle:"none",margin:0,padding:0,outline:0,WebkitTapHighlightColor:"transparent","&:focus > $content $label":{backgroundColor:e.palette.action.hover},"&$selected > $content $label":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.selectedOpacity)},"&$selected > $content $label:hover, &$selected:focus > $content $label":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},expanded:{},selected:{},group:{margin:0,padding:0,marginLeft:17},content:{width:"100%",display:"flex",alignItems:"center",cursor:"pointer"},iconContainer:{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},label:{width:"100%",paddingLeft:4,position:"relative","&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}}}),{name:"MuiTreeItem"})(p)},ZqJb:function(e,t,n){"use strict";var r=n("5NKs"),a=n("jGDn");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n("q1tI")),o=(0,r(n("8/g6")).default)(c.createElement("path",{d:"M10 17l5-5-5-5v10z"}),"ArrowRight");t.default=o},lVsP:function(e,t,n){"use strict";var r=n("q1tI"),a=r.createContext({});t.a=a},q4d2:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("k1TG"),a=n("TrhM"),c=n("FqMR");function o(e){return String(parseFloat(e)).length===String(e).length}function i(e){return parseFloat(e)}function l(e){return function(t,n){var r=String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===n)return t;var a=i(t);if("px"!==r)if("em"===r)a=i(t)*i(e);else if("rem"===r)return a=i(t)*i(e),t;var c=a;if("px"!==n)if("em"===n)c=a/i(e);else{if("rem"!==n)return t;c=a/i(e)}return parseFloat(c.toFixed(5))+n}}function u(e){var t=e.size,n=e.grid,r=t-t%n,a=r+n;return t-r<a-t?r:a}function s(e){var t=e.lineHeight;return e.pixels/(t*e.htmlFontSize)}function d(e){var t=e.cssProperty,n=e.min,r=e.max,a=e.unit,o=void 0===a?"rem":a,i=e.breakpoints,l=void 0===i?[600,960,1280]:i,u=e.transform,s=void 0===u?null:u,d=Object(c.a)({},t,"".concat(n).concat(o)),f=(r-n)/l[l.length-1];return l.forEach((function(e){var r=n+f*e;null!==s&&(r=s(r)),d["@media (min-width:".concat(e,"px)")]=Object(c.a)({},t,"".concat(Math.round(1e4*r)/1e4).concat(o))})),d}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.breakpoints,c=void 0===n?["sm","md","lg"]:n,i=t.disableAlign,f=void 0!==i&&i,h=t.factor,p=void 0===h?2:h,v=t.variants,b=void 0===v?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:v,g=Object(r.a)({},e);g.typography=Object(r.a)({},g.typography);var m=g.typography,k=l(m.htmlFontSize),x=c.map((function(e){return g.breakpoints.values[e]}));return b.forEach((function(e){var t=m[e],n=parseFloat(k(t.fontSize,"rem"));if(!(n<=1)){var c=n,i=1+(c-1)/p,l=t.lineHeight;if(!o(l)&&!f)throw new Error(Object(a.a)(6));o(l)||(l=parseFloat(k(l,"rem"))/parseFloat(n));var h=null;f||(h=function(e){return u({size:e,grid:s({pixels:4,lineHeight:l,htmlFontSize:m.htmlFontSize})})}),m[e]=Object(r.a)({},t,d({cssProperty:"fontSize",min:i,max:c,unit:"rem",breakpoints:x,transform:h}))}})),g}}}]);
//# sourceMappingURL=bc603352673be90d612e6d125a13a5d96061ca46-c6b9fd6986bd2f5316aa.js.map