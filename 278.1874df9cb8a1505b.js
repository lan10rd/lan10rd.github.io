"use strict";(self.webpackChunkdocs_app_ng=self.webpackChunkdocs_app_ng||[]).push([[278],{5278:(z,u,c)=>{c.r(u),c.d(u,{PlayHammerFeatureModule:()=>E});var l=c(9808),g=c(4794),m=c(6226),t=c(5e3),s=c(1777);class d{constructor(){this.gestureIndicators=[]}hide(r){const e=this;setTimeout(()=>{r&&(r.state="hidden",setTimeout(()=>{if(r)for(let i=0;i<e.gestureIndicators.length;i++){const a=e.gestureIndicators[i];if(a.x===r.x&&a.y===r.y){e.gestureIndicators.splice(i,1);break}}},250))},500)}display(r,e,i){if(r>0&&e>0){const a={x:r,y:e,size:i,state:"hidden"};return this.gestureIndicators.push(a),setTimeout(()=>{a.state="visible"},100),a}return null}}const p=[(0,s.X$)("indicatorState",[(0,s.SB)("hidden",(0,s.oB)({transform:"scale(0, 0)"})),(0,s.SB)("visible",(0,s.oB)({transform:"scale(1, 1)"})),(0,s.eR)("hidden => visible",(0,s.jt)("150ms ease-in")),(0,s.eR)("visible => hidden",(0,s.jt)("150ms ease-out"))])];function f(n,r){if(1&n&&t._UZ(0,"div",3),2&n){const e=r.$implicit;t.Udp("top",e.y-e.size/2,"px")("left",e.x-e.size/2,"px")("width",e.size,"px")("height",e.size,"px")("transform",e.transform),t.Q6J("@indicatorState",e.state)}}let h=(()=>{class n{constructor(e){this.util=e,this.eventText="",this.indicators=new d}onPan(e){this.eventText+=`(${e.center.x}, ${e.center.y})<br/>`;const i=this.indicators.display(e.center.x,e.center.y,50);this.indicators.hide(i)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.fx))},n.\u0275cmp=t.Xpm({type:n,selectors:[["play-hammer-pan-element"]],decls:5,vars:2,consts:[[1,"gesture__zone",3,"pan"],[3,"innerHTML"],["class","gesture__indicator",3,"top","left","width","height","transform",4,"ngFor","ngForOf"],[1,"gesture__indicator"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.NdJ("pan",function(o){return i.onPan(o)}),t.TgZ(1,"h1"),t._uU(2,"Pan Gesture"),t.qZA(),t._UZ(3,"p",1),t.qZA(),t.YNc(4,f,1,11,"div",2)),2&e&&(t.xp6(3),t.Q6J("innerHTML",i.eventText,t.oJD),t.xp6(1),t.Q6J("ngForOf",i.indicators.gestureIndicators))},directives:[l.sg],styles:[".gesture__zone[_ngcontent-%COMP%]{background-color:#efefef;padding:20px;margin:10px;border-radius:3px;height:500px;text-align:center;overflow:auto}h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%], .gesture__indicator[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.gesture__indicator[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:50px;width:50px;display:block;border-radius:50%;text-align:center;line-height:45px;z-index:10;background-color:#42a5f5}"],data:{animation:[p]}}),n})();function _(n,r){if(1&n&&t._UZ(0,"div",3),2&n){const e=r.$implicit;t.Udp("top",e.y-e.size/2,"px")("left",e.x-e.size/2,"px")("width",e.size,"px")("height",e.size,"px")("transform",e.transform),t.Q6J("@indicatorState",e.state)}}let y=(()=>{class n{constructor(e){this.util=e,this.eventText="",this.indicators=new d}onPress(e){const i=this.indicators.display(e.center.x,e.center.y,50);i.interval=setInterval(()=>{i.size+=1},10),this.eventText+=`(${e.center.x}, ${e.center.y})<br/>`}onPressUp(e){const i=this.indicators.gestureIndicators[0];i&&(clearInterval(i.interval),this.indicators.hide(i))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.fx))},n.\u0275cmp=t.Xpm({type:n,selectors:[["play-hammer-press-element"]],decls:5,vars:2,consts:[[1,"gesture__zone",3,"press","pressUp"],[3,"innerHTML"],["class","gesture__indicator",3,"top","left","width","height","transform",4,"ngFor","ngForOf"],[1,"gesture__indicator"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.NdJ("press",function(o){return i.onPress(o)})("pressUp",function(o){return i.onPressUp(o)}),t.TgZ(1,"h1"),t._uU(2,"Press Gesture"),t.qZA(),t._UZ(3,"p",1),t.qZA(),t.YNc(4,_,1,11,"div",2)),2&e&&(t.xp6(3),t.Q6J("innerHTML",i.eventText,t.oJD),t.xp6(1),t.Q6J("ngForOf",i.indicators.gestureIndicators))},directives:[l.sg],styles:[".gesture__zone[_ngcontent-%COMP%]{background-color:#efefef;padding:20px;margin:10px;border-radius:3px;height:500px;text-align:center;overflow:auto}h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%], .gesture__indicator[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.gesture__indicator[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:50px;width:50px;display:block;border-radius:50%;text-align:center;line-height:45px;z-index:10;background-color:#42a5f5}"],data:{animation:[p]}}),n})();function P(n,r){if(1&n&&t._UZ(0,"div",3),2&n){const e=r.$implicit;t.Udp("top",e.y-e.size/2,"px")("left",e.x-e.size/2,"px")("width",e.size,"px")("height",e.size,"px")("transform",e.transform),t.Q6J("@indicatorState",e.state)}}let x=(()=>{class n{constructor(e){this.util=e,this.eventText="",this.indicators=new d}onRotate(e){this.eventText+=`rotate ${e.angle}&deg; about (${e.center.x}, ${e.center.y})<br/>`}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.fx))},n.\u0275cmp=t.Xpm({type:n,selectors:[["play-hammer-rotate-element"]],decls:5,vars:2,consts:[[1,"gesture__zone",3,"rotate"],[3,"innerHTML"],["class","gesture__indicator",3,"top","left","width","height","transform",4,"ngFor","ngForOf"],[1,"gesture__indicator"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.NdJ("rotate",function(o){return i.onRotate(o)}),t.TgZ(1,"h1"),t._uU(2,"Rotate Gesture"),t.qZA(),t._UZ(3,"p",1),t.qZA(),t.YNc(4,P,1,11,"div",2)),2&e&&(t.xp6(3),t.Q6J("innerHTML",i.eventText,t.oJD),t.xp6(1),t.Q6J("ngForOf",i.indicators.gestureIndicators))},directives:[l.sg],styles:[".gesture__zone[_ngcontent-%COMP%]{background-color:#efefef;padding:20px;margin:10px;border-radius:3px;height:500px;text-align:center;overflow:auto}h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%], .gesture__indicator[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.gesture__indicator[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:50px;width:50px;display:block;border-radius:50%;text-align:center;line-height:45px;z-index:10;background-color:#42a5f5}"],data:{animation:[p]}}),n})(),v=(()=>{class n{constructor(e){this.util=e,this.eventText=""}onSwipe(e){const i=Math.abs(e.deltaX)>40?e.deltaX>0?"right":"left":"",a=Math.abs(e.deltaY)>40?e.deltaY>0?"down":"up":"";this.eventText+=`${i} ${a}<br/>`}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.fx))},n.\u0275cmp=t.Xpm({type:n,selectors:[["play-hammer-swipe-element"]],decls:4,vars:1,consts:[[1,"gesture__zone",3,"swipe"],[3,"innerHTML"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.NdJ("swipe",function(o){return i.onSwipe(o)}),t.TgZ(1,"h1"),t._uU(2,"Swipe Gesture"),t.qZA(),t._UZ(3,"p",1),t.qZA()),2&e&&(t.xp6(3),t.Q6J("innerHTML",i.eventText,t.oJD))},styles:[".gesture__zone[_ngcontent-%COMP%]{background-color:#efefef;padding:20px;margin:10px;border-radius:3px;height:500px;text-align:center;overflow:auto}h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%], .gesture__indicator[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.gesture__indicator[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:50px;width:50px;display:block;border-radius:50%;text-align:center;line-height:45px;z-index:10;background-color:#42a5f5}"]}),n})(),H=(()=>{class n{constructor(e){this.util=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.fx))},n.\u0275cmp=t.Xpm({type:n,selectors:[["play-hammer-feature"]],decls:4,vars:0,template:function(e,i){1&e&&(t._UZ(0,"play-hammer-pan-element"),t._UZ(1,"play-hammer-press-element"),t._UZ(2,"play-hammer-rotate-element"),t._UZ(3,"play-hammer-swipe-element"))},directives:[h,y,x,v],styles:[".gesture__zone[_ngcontent-%COMP%]{background-color:#efefef;padding:20px;margin:10px;border-radius:3px;height:500px;text-align:center;overflow:auto}h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%], .gesture__indicator[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.gesture__indicator[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:50px;width:50px;display:block;border-radius:50%;text-align:center;line-height:45px;z-index:10;background-color:#42a5f5}"]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[],imports:[[l.ez]]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[],imports:[[l.ez]]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[],imports:[[l.ez]]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[],imports:[[l.ez]]}),n})(),E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,g.Bz.forChild([{path:"",component:H,data:{CommonRouterService:{routes:[".."],seo:{title:"Play hammer",keywords:"play hammer",description:"play hammer"}}}}]),M,w,T,b]]}),n})()}}]);