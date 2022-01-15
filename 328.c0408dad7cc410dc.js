"use strict";(self.webpackChunkdocs_app_ng=self.webpackChunkdocs_app_ng||[]).push([[328],{8328:(k,d,r)=>{r.r(d),r.d(d,{AppInitElement:()=>Ke});var e=r(5e3),p=r(9617),y=r(8582),_=r(9671),x=r(4968),g=r(4105);const C=["*"];let N=(()=>{class n{constructor(t,o){this.ref=t,this.styles=o,this.handleScroll=!0,this.scrollPos=0}ngAfterViewInit(){var t=this;return(0,_.Z)(function*(){t.styles.applyStyles(t.styles.document.document.documentElement,{"padding-top":t.ref.nativeElement.offsetHeight+"px"}),t.listener$=(0,x.R)(window,"scroll").pipe().subscribe(i=>{let c=window.pageYOffset;t.handleScroll&&(t.ref.nativeElement.style.top=t.scrollPos>c||0===t.styles.document.document.documentElement.scrollTop?"0":`-${t.ref.nativeElement.offsetHeight}px`),t.scrollPos=c})})()}ngOnDestroy(){var t=this;return(0,_.Z)(function*(){t.listener$&&t.listener$.unsubscribe()})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(g.W))},n.\u0275cmp=e.Xpm({type:n,selectors:[["common-ng-app-bar-element"]],inputs:{handleScroll:"handleScroll"},ngContentSelectors:C,decls:1,vars:0,template:function(t,o){1&t&&(e.F$t(),e.Hsn(0))},styles:[""]}),n})();var l=r(9808);const Q=["appBarElement"];function M(n,m){1&n&&e.Hsn(0,2,["*ngSwitchCase","'left'"])}function B(n,m){1&n&&e.Hsn(0,3,["*ngSwitchCase","''"])}function S(n,m){1&n&&e.Hsn(0,4,["*ngSwitchCase","'right'"])}function Y(n,m){1&n&&(e.ynx(0),e.Hsn(1,5),e.BQk())}function F(n,m){1&n&&(e.ynx(0),e.Hsn(1,6),e.BQk())}const U=[[["","left-button",""]],[["","right-button",""]],[["","left-bar",""]],[["","middle-bar",""]],[["","right-bar",""]],[["","left-content",""]],[["","right-content",""]]],j=["[left-button]","[right-button]","[left-bar]","[middle-bar]","[right-bar]","[left-content]","[right-content]"];let P=(()=>{class n{constructor(t){this.srv=t}ngAfterViewInit(){this.srv.appBarElementRef=this.appBarElement}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(y.m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["common-ng-app-bar-artifact"]],viewQuery:function(t,o){if(1&t&&e.Gf(Q,5),2&t){let i;e.iGM(i=e.CRH())&&(o.appBarElement=i.first)}},ngContentSelectors:j,decls:16,vars:8,consts:[[1,"fixed-top","bl","scrollable-y","glo-0-drop","corners0","contain","flex","column","max-height-100vh",2,"overflow-x","hidden",3,"handleScroll"],["appBarElement",""],[1,"flex"],[1,"ib",2,"width","18%","overflow-y","hidden",3,"click"],[1,"ib",2,"width","64%"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"ib",2,"width","18%",3,"click"],[1,"scrollable-y","flex1","contain",2,"flex","1"]],template:function(t,o){1&t&&(e.F$t(U),e.TgZ(0,"common-ng-app-bar-element",0,1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.NdJ("click",function(){return o.srv.open("left")}),e.Hsn(4),e.qZA(),e.TgZ(5,"div",4),e.ynx(6,5),e.YNc(7,M,1,0,"ng-content",6),e.YNc(8,B,1,0,"ng-content",6),e.YNc(9,S,1,0,"ng-content",6),e.BQk(),e.qZA(),e.TgZ(10,"div",7),e.NdJ("click",function(){return o.srv.open("right")}),e.Hsn(11,1),e.qZA(),e.qZA(),e.TgZ(12,"div",8),e.ynx(13,5),e.YNc(14,Y,2,0,"ng-container",6),e.YNc(15,F,2,0,"ng-container",6),e.BQk(),e.qZA(),e.qZA()),2&t&&(e.Q6J("handleScroll",0===o.srv.show.length),e.xp6(6),e.Q6J("ngSwitch",o.srv.show),e.xp6(1),e.Q6J("ngSwitchCase","left"),e.xp6(1),e.Q6J("ngSwitchCase",""),e.xp6(1),e.Q6J("ngSwitchCase","right"),e.xp6(4),e.Q6J("ngSwitch",o.srv.show),e.xp6(1),e.Q6J("ngSwitchCase","left"),e.xp6(1),e.Q6J("ngSwitchCase","right"))},directives:[N,l.RF,l.n9],styles:[".flex1[_ngcontent-%COMP%]{flex:1}.scrollable-y[_ngcontent-%COMP%]{white-space:nowrap;overflow-x:hidden;overflow-y:auto}.column[_ngcontent-%COMP%]{flex-direction:column}.corners0[_ngcontent-%COMP%]{border-radius:0}.max-height-100vh[_ngcontent-%COMP%]{max-height:100vh}"]}),n})();var v=r(687),u=r(7208),O=r(5793),w=r(267);let b=(()=>{class n{constructor(t,o,i){this.srv=t,this.document=o,this.ref=i}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(O.T),e.Y36(w.k),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["common-ng-router-element"]],decls:2,vars:3,consts:[[3,"options","toggleable","emitUndefined","optionChange"],["routerSelect",""]],template:function(t,o){1&t&&(e.TgZ(0,"common-ng-select-element",0,1),e.NdJ("optionChange",function(c){return o.srv.route(c)}),e.qZA()),2&t&&e.Q6J("options",o.srv._renderedRoutes)("toggleable",!1)("emitUndefined",!1)},directives:[u.r],styles:[""]}),n})();function H(n,m){1&n&&e._UZ(0,"common-ng-router-element")}function I(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"common-ng-button-element",8),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit;return e.oxw(3).router.route("/"+i.path)}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.path," ")}}function $(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"common-ng-button-element",8),e.NdJ("click",function(){return e.CHM(t),e.oxw(4).router.route("/")}),e._uU(1," / "),e.qZA()}}function L(n,m){if(1&n&&(e.ynx(0),e.YNc(1,I,2,1,"common-ng-button-element",7),e.YNc(2,$,2,0,"common-ng-button-element",7),e.BQk()),2&n){const t=m.$implicit;e.xp6(1),e.Q6J("ngIf","**"!==t.path),e.xp6(1),e.Q6J("ngIf",""===t.path)}}function R(n,m){if(1&n&&(e.TgZ(0,"div",5),e.YNc(1,L,3,2,"ng-container",6),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.router.router.config)}}const q=function(){return["relative","top"]};function D(n,m){if(1&n&&(e.ynx(0),e._UZ(1,"common-ng-select-element",2,3),e.ynx(3,0),e.YNc(4,H,1,0,"common-ng-router-element",1),e.YNc(5,R,2,1,"div",4),e.BQk(),e.BQk()),2&n){const t=e.MAs(2);e.xp6(1),e.Q6J("options",e.DdM(5,q))("initial","relative"),e.xp6(2),e.Q6J("ngSwitch",t._option),e.xp6(1),e.Q6J("ngSwitchCase","relative"),e.xp6(1),e.Q6J("ngSwitchCase","top")}}let z=(()=>{class n{constructor(t,o){this.util=t,this.router=o}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.fx),e.Y36(p.To))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-bar-left-element"]],inputs:{menu:"menu"},decls:2,vars:2,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"options","initial"],["routerSelect",""],["class","scrollable pt pb tcenter",4,"ngSwitchCase"],[1,"scrollable","pt","pb","tcenter"],[4,"ngFor","ngForOf"],["class","tcenter pr pl glo-0-text-ani glo-0-text-trim",3,"click",4,"ngIf"],[1,"tcenter","pr","pl","glo-0-text-ani","glo-0-text-trim",3,"click"]],template:function(t,o){1&t&&(e.ynx(0,0),e.YNc(1,D,6,6,"ng-container",1),e.BQk()),2&t&&(e.Q6J("ngSwitch",o.menu._option),e.xp6(1),e.Q6J("ngSwitchCase","router"))},directives:[l.RF,l.n9,u.r,b,l.sg,l.O5,v.T],styles:[""]}),n})();var J=r(9419),Z=r(6227),T=r(5335),V=r(1603),f=r(3075);function X(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"common-ng-button-element",21),e.NdJ("click",function(){e.CHM(t),e.oxw();const i=e.MAs(2),c=e.MAs(4),s=e.MAs(6),a=e.oxw(3),h=e.MAs(3);return a.model[i.value]=a.json.convert(c.value,s.value),a.modelChange.emit(a.model),a.setup(),i.value="",c.value="",h.toggleButton()}),e._uU(1),e.qZA()}if(2&n){e.oxw();const t=e.MAs(2);e.xp6(1),e.hij(" add ",t.value," ")}}function K(n,m){if(1&n&&(e.ynx(0),e._UZ(1,"input",11,12),e._UZ(3,"textarea",13,14),e.TgZ(5,"select",null,15),e.TgZ(7,"option",16),e._uU(8,"string"),e.qZA(),e.TgZ(9,"option",17),e._uU(10,"object"),e.qZA(),e.TgZ(11,"option",18),e._uU(12,"number"),e.qZA(),e.TgZ(13,"option",19),e._uU(14,"boolean"),e.qZA(),e.qZA(),e.YNc(15,X,2,1,"common-ng-button-element",20),e.BQk()),2&n){const t=e.MAs(2),o=e.oxw(3);e.xp6(15),e.Q6J("ngIf",t.value.length>0&&!o.keys.includes(t.value))}}function G(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"common-ng-button-element",21),e.NdJ("click",function(){e.CHM(t),e.oxw();const i=e.MAs(2);e.oxw();const c=e.MAs(2),s=e.oxw(2),a=e.MAs(3);return s.json.removeFromObject(s.model,i.value),s.modelChange.emit(s.model),s.setup(),c.deselect(),a.toggleButton()}),e._uU(1),e.qZA()}if(2&n){e.oxw();const t=e.MAs(2);e.xp6(1),e.hij(" remove ",t.value," ")}}function W(n,m){if(1&n&&(e.ynx(0),e._UZ(1,"input",22,23),e.YNc(3,G,2,1,"common-ng-button-element",20),e.BQk()),2&n){const t=e.MAs(2),o=e.oxw(3);e.xp6(3),e.Q6J("ngIf",t.value.length>0&&o.keys.includes(t.value))}}function ee(n,m){1&n&&e.GkF(0)}const te=function(){return["add","remove","mode"]};function ne(n,m){if(1&n&&(e.ynx(0),e._UZ(1,"common-ng-select-element",9,10),e.ynx(3,6),e.YNc(4,K,16,1,"ng-container",7),e.YNc(5,W,4,1,"ng-container",7),e.YNc(6,ee,1,0,"ng-container",7),e.BQk(),e.BQk()),2&n){const t=e.MAs(2);e.xp6(1),e.Q6J("scrollClasses","scrollable")("options",e.DdM(6,te)),e.xp6(2),e.Q6J("ngSwitch",t._option),e.xp6(1),e.Q6J("ngSwitchCase","add"),e.xp6(1),e.Q6J("ngSwitchCase","remove"),e.xp6(1),e.Q6J("ngSwitchCase","mode")}}function oe(n,m){if(1&n){const t=e.EpF();e.ynx(0),e._UZ(1,"textarea",null,25),e.TgZ(3,"div"),e._uU(4,"inserted at position (index): "),e._UZ(5,"input",26,27),e.qZA(),e.TgZ(7,"common-ng-button-element",28),e.NdJ("click",function(){e.CHM(t);const i=e.MAs(6),c=e.MAs(2),s=e.oxw(3);return s.model.splice(+i.value,0,s.json.parse(c.value)),s.setup()}),e._uU(8," insert "),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(3);e.xp6(5),e.s9C("max",t.keys.length)}}function ie(n,m){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",29),e._uU(2,"remove at position (index): "),e._UZ(3,"input",26,30),e.qZA(),e.TgZ(5,"common-ng-button-element",31),e.NdJ("click",function(){e.CHM(t);const i=e.MAs(4);e.oxw();const c=e.MAs(2),s=e.oxw(2),a=e.MAs(3);return s.model=s.json.removeFromArray(s.model,+i.value),s.modelChange.emit(s.model),s.setup(),c.deselect(),a.toggleButton()}),e._uU(6," remove "),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(3);e.xp6(3),e.s9C("max",t.keys.length-1)}}function me(n,m){1&n&&(e.ynx(0),e._uU(1," swap "),e.BQk())}const ce=function(){return["insert","remove","swap","mode"]};function se(n,m){if(1&n&&(e.ynx(0),e._UZ(1,"common-ng-select-element",9,24),e.TgZ(3,"div",6),e.YNc(4,oe,9,1,"ng-container",7),e.YNc(5,ie,7,1,"ng-container",7),e.YNc(6,me,2,0,"ng-container",7),e.qZA(),e.BQk()),2&n){const t=e.MAs(2);e.xp6(1),e.Q6J("scrollClasses","scrollable")("options",e.DdM(6,ce)),e.xp6(2),e.Q6J("ngSwitch",t._option),e.xp6(1),e.Q6J("ngSwitchCase","insert"),e.xp6(1),e.Q6J("ngSwitchCase","remove"),e.xp6(1),e.Q6J("ngSwitchCase","swap")}}function re(n,m){1&n&&(e.ynx(0),e._uU(1," default "),e.BQk())}function le(n,m){if(1&n&&(e.ynx(0),e.ynx(1,6),e.YNc(2,ne,7,7,"ng-container",7),e.YNc(3,se,7,7,"ng-container",7),e.YNc(4,re,2,0,"ng-container",8),e.BQk(),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngSwitch",t.type),e.xp6(1),e.Q6J("ngSwitchCase","obj"),e.xp6(1),e.Q6J("ngSwitchCase","arr")}}function ae(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"common-ng-button-element",36),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit;return e.oxw().toggleEditKey(i)}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t," ")}}function _e(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"textarea",40),e.NdJ("ngModelChange",function(i){e.CHM(t);const c=e.oxw(2).$implicit;return e.oxw().model[c]=i}),e.qZA()}if(2&n){const t=e.oxw(2).$implicit,o=e.oxw();e.Q6J("ngModel",o.model[t])}}function pe(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"input",41),e.NdJ("ngModelChange",function(i){e.CHM(t);const c=e.oxw(2).$implicit;return e.oxw().model[c]=i}),e.qZA()}if(2&n){const t=e.oxw(2).$implicit,o=e.oxw();e.Q6J("ngModel",o.model[t])}}function ge(n,m){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw(2).$implicit,o=e.oxw();e.xp6(1),e.hij(" ",o.model[t]," ")}}function ue(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"common-ng-json-artifact",42),e.NdJ("modelChange",function(i){e.CHM(t);const c=e.oxw(2).$implicit;return e.oxw().model[c]=i}),e.qZA()}if(2&n){const t=e.oxw(2).$implicit,o=e.oxw();e.Q6J("model",o.model[t])}}function fe(n,m){if(1&n&&(e.ynx(0),e.ynx(1,6),e.YNc(2,_e,1,1,"textarea",37),e.YNc(3,pe,1,1,"input",38),e.YNc(4,ge,2,1,"ng-container",7),e.YNc(5,ue,1,1,"common-ng-json-artifact",39),e.BQk(),e.BQk()),2&n){const t=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngSwitch",o.json.typeOf(o.model[t])),e.xp6(1),e.Q6J("ngSwitchCase","str"),e.xp6(1),e.Q6J("ngSwitchCase","num"),e.xp6(1),e.Q6J("ngSwitchCase","boo")}}function he(n,m){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"textarea",40),e.NdJ("ngModelChange",function(i){e.CHM(t);const c=e.oxw().$implicit;return e.oxw().editing.values[c]=i}),e.qZA(),e.BQk()}if(2&n){const t=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngModel",o.editing.values[t])}}const de=function(n){return{hidden:n}};function xe(n,m){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"li"),e.YNc(2,ae,2,1,"common-ng-button-element",32),e.TgZ(3,"div",33),e.TgZ(4,"input",34,35),e.NdJ("focusout",function(){const c=e.CHM(t).$implicit,s=e.oxw();return s.editing.keys=s.json.remove(s.editing.keys,c)})("keyup.enter",function(){const i=e.CHM(t),c=i.$implicit,s=i.index,a=e.MAs(5),h=e.oxw();return h.editing.keys=h.json.remove(h.editing.keys,c),h.changeKey(a.value,s)}),e.qZA(),e.qZA(),e.ynx(6,6),e.YNc(7,fe,6,4,"ng-container",7),e.YNc(8,he,2,1,"ng-container",7),e.BQk(),e.qZA(),e.BQk()}if(2&n){const t=m.$implicit,o=m.index,i=e.oxw();e.xp6(2),e.Q6J("ngIf",!i.editing.keys.includes(t)),e.xp6(1),e.Q6J("ngClass",e.VKq(6,de,!i.editing.keys.includes(t))),e.xp6(1),e.Q6J("ngModel",i.keys[o]),e.xp6(2),e.Q6J("ngSwitch",i.mode),e.xp6(1),e.Q6J("ngSwitchCase","pretty"),e.xp6(1),e.Q6J("ngSwitchCase","raw")}}const Ce=function(n){return{"glo-0-shadow":n}};let ve=(()=>{class n{constructor(t){this.json=t,this.modelChange=new e.vpe,this.mode="pretty",this.type="obj",this.keys=[],this.editing={keys:[],values:{}}}ngOnChanges(t){this.setup()}setup(){try{if(this.type=this.json.typeOf(this.model),"obj"===this.type)this.keys=Object.keys(this.model);else if("arr"===this.type){let t=[];for(let o=0;o<this.model.length;o++)t.push(o);this.keys=t}}catch(t){console.log(t)}}changeKey(t,o){let i=t,c=this.keys[o];i.length>0&&!(i in this.model)&&(this.model[i]=this.model[c],delete this.model[c],this.editing.keys.includes(c)&&(this.editing.keys=this.json.remove(this.editing.keys,c),this.editing.keys.push(i)),this.keys=Object.keys(this.model))}handleMode(t,o){switch(t){case"raw":this.editing.values[o]=this.json.stringify(this.model[o]);break;case"pretty":o in this.editing.values&&delete this.editing.values[o]}}addField(t,o,i="string"){t.length>0&&!(t in this.model)&&(this.model[t]=this.json.parse(o),this.setup())}toggleEditKey(t){"obj"===this.type&&this.editing.keys.push(t)}swap(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T.V))},n.\u0275cmp=e.Xpm({type:n,selectors:[["common-ng-json-artifact"]],inputs:{model:"model",mode:"mode"},outputs:{modelChange:"modelChange"},features:[e.TTD],decls:8,vars:6,consts:[[1,"flex",2,"align-items","center"],[1,"flex","fit","pt","pb","glo-0-text-ani",3,"ngClass"],["dotdotdot",""],[1,"glo-0-text-trim"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"ib","glo-0-text-trim",3,"scrollClasses","options"],["objOptions",""],["placeholder","add key",1,"mr"],["objAddKey",""],["placeholder","add value",1,"mr"],["objAddValue",""],["objAddSelect",""],["value","string","selected",""],["value","object"],["value","number"],["value","boolean"],["class","p glo-0-text-ani glo-0-text-trim ib",3,"click",4,"ngIf"],[1,"p","glo-0-text-ani","glo-0-text-trim","ib",3,"click"],["placeholder","which key would you like to remove?"],["objRemove",""],["arrOptions",""],["insertTextarea",""],["min","0","step","1","type","number","value","0",3,"max"],["insertIndex",""],[1,"bl","glo-0-text-ani","glo-0-text-trim","tcenter",3,"click"],[1,"ib"],["removeIndex",""],[1,"ib","p","glo-0-text-ani","glo-0-text-trim","tcenter",3,"click"],["class","bl glo-0-text-ani fit center glo-0-text-trim",3,"click",4,"ngIf"],[3,"ngClass"],[1,"bl",3,"ngModel","focusout","keyup.enter"],["keysi",""],[1,"bl","glo-0-text-ani","fit","center","glo-0-text-trim",3,"click"],[3,"ngModel","ngModelChange",4,"ngSwitchCase"],["type","number",3,"ngModel","ngModelChange",4,"ngSwitchCase"],[3,"model","modelChange",4,"ngSwitchDefault"],[3,"ngModel","ngModelChange"],["type","number",3,"ngModel","ngModelChange"],[3,"model","modelChange"]],template:function(t,o){if(1&t&&(e.TgZ(0,"ul"),e.TgZ(1,"div",0),e.TgZ(2,"common-ng-button-element",1,2),e.TgZ(4,"span",3),e._uU(5,"..."),e.qZA(),e.qZA(),e.YNc(6,le,5,3,"ng-container",4),e.qZA(),e.YNc(7,xe,9,8,"ng-container",5),e.qZA()),2&t){const i=e.MAs(3);e.xp6(2),e.Q6J("ngClass",e.VKq(4,Ce,i.toggle)),e.xp6(4),e.Q6J("ngIf",i.toggle),e.xp6(1),e.Q6J("ngForOf",o.keys)("ngForTrackBy",o.json.trackBy)}},directives:[v.T,l.mk,l.O5,l.sg,l.RF,l.n9,l.ED,u.r,f.YN,f.Kr,f.Fj,f.JJ,f.On,f.wV,n],styles:[".hover[_ngcontent-%COMP%]:hover{box-shadow:5px 5px 15px 5px #ff8080,-9px 5px 15px 5px #ffe488,-7px -5px 15px 5px #8cff85,12px -5px 15px 5px #80c7ff,12px 10px 15px 7px #e488ff,-10px 10px 15px 7px #ff616b,-10px -7px 27px 1px #8e5cff,5px 5px 15px 5px #0000;border-radius:5px}.hover[_ngcontent-%COMP%]:focus-within{box-shadow:5px 5px 15px 5px #ff8080,-9px 5px 15px 5px #ffe488,-7px -5px 15px 5px #8cff85,12px -5px 15px 5px #80c7ff,12px 10px 15px 7px #e488ff,-10px 10px 15px 7px #ff616b,-10px -7px 27px 1px #8e5cff,5px 5px 15px 5px #0000;border-radius:5px}textarea[_ngcontent-%COMP%]{min-width:-moz-fit-content;min-width:fit-content}ul[_ngcontent-%COMP%]{margin:0}"]}),n})();function ye(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"common-ng-json-artifact",5),e.NdJ("modelChange",function(i){return e.CHM(t),e.oxw().themes_theme_copy=i}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("model",t.themes_theme_copy)}}let Te=(()=>{class n{constructor(t,o,i,c){this.themes=t,this.popop=o,this.json=i,this.document=c}ngOnInit(){}store(t,o=!1){let i=this.themes.getStored(),c=t[this.themes.theme_identifier];i.themes[c]=t,o&&(i.theme=c),this.themes.setStored(i)}unstore(t){let o=this.themes.getStored(),i=t[this.themes.theme_identifier];i in o.themes&&delete o.themes[i],this.themes.setStored(o)}update(t){let o=this.json.copy(this.themes.themes);o[t[this.themes.theme_identifier]]=t,this.themes.themes=o}handleThemesChange(t){this.themes_theme_copy=this.json.copy(t)}paste(){var t=this;return(0,_.Z)(function*(){t.popop.open((yield r.e(333).then(r.bind(r,1333))).CommonNgThemesEditorPastePopop,yield(yield r.e(831).then(r.bind(r,9831))).CommonNgThemesEditorPastePopopModule).subscribe(o=>{var i;if(null===(i=null==o?void 0:o.status)||void 0===i?void 0:i.paste){let c=o.status.paste,s=c[t.themes.theme_identifier];for(;s in t.themes.themes;)s+="copy";c[t.themes.theme_identifier]=s,t.themes.themes[s]=c,t.themes.setThemes(t.themes.themes)}})})()}remove(t){var o=this;return(0,_.Z)(function*(){o.popop.open((yield r.e(333).then(r.bind(r,1333))).CommonNgThemesEditorPastePopop,yield(yield r.e(831).then(r.bind(r,9831))).CommonNgThemesEditorPastePopopModule,{theme:t}).subscribe(i=>{var c;if(null===(c=null==i?void 0:i.status)||void 0===c?void 0:c.remove){let s=t[o.themes.theme_identifier],a=o.themes.themes;s in a&&delete a[s],o.themes.setThemes(a)}})})()}duplicate(t){var o=this;return(0,_.Z)(function*(){let i=o.json.copy(t);o.popop.open((yield r.e(633).then(r.bind(r,1633))).CommonNgThemesEditorDuplicatePopop,yield(yield r.e(884).then(r.bind(r,8884))).CommonNgThemesEditorDuplicatePopopModule,{theme:i}).subscribe(c=>{var s;(null===(s=null==c?void 0:c.status)||void 0===s?void 0:s.key)&&!(c.status.key in o.themes.themes)&&(i[o.themes.theme_identifier]=c.status.key,o.themes.themes[c.status.key]=i,o.themes.setThemes(o.themes.themes))})})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(J.y),e.Y36(Z.e),e.Y36(T.V),e.Y36(w.k))},n.\u0275cmp=e.Xpm({type:n,selectors:[["common-ng-themes-editor-artifact"]],decls:20,vars:4,consts:[[1,"glo-0-text-trim","bl",3,"options","initial","path","optionChange"],["themesSelect",""],[1,"glo-0-text-trim","bl"],[1,"ib","p","glo-0-text-ani",3,"click"],["class","bl scrollable",3,"model","modelChange",4,"ngIf"],[1,"bl","scrollable",3,"model","modelChange"]],template:function(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"common-ng-select-element",0,1),e.NdJ("optionChange",function(s){return o.handleThemesChange(s)}),e.qZA(),e.TgZ(2,"common-ng-scroll-element",2),e.TgZ(3,"common-ng-button-element",3),e.NdJ("click",function(){return o.themes.setTheme(o.themes_theme_copy)}),e._uU(4," apply "),e.qZA(),e.TgZ(5,"common-ng-button-element",3),e.NdJ("click",function(){return o.update(o.themes_theme_copy)}),e._uU(6," update "),e.qZA(),e.TgZ(7,"common-ng-button-element",3),e.NdJ("click",function(){e.CHM(i);const s=e.MAs(1);return o.duplicate(o.themes_theme_copy),s.cd.detectChanges()}),e._uU(8," duplicate "),e.qZA(),e.TgZ(9,"common-ng-button-element",3),e.NdJ("click",function(){return o.remove(o.themes_theme_copy)}),e._uU(10," remove "),e.qZA(),e.TgZ(11,"common-ng-button-element",3),e.NdJ("click",function(){return o.store(o.themes_theme_copy,!0)}),e._uU(12," store "),e.qZA(),e.TgZ(13,"common-ng-button-element",3),e.NdJ("click",function(){return o.unstore(o.themes_theme_copy)}),e._uU(14," unstore "),e.qZA(),e.TgZ(15,"common-ng-button-element",3),e.NdJ("click",function(){e.CHM(i);const s=e.MAs(1);return o.document.copy(o.json.stringify(o.themes_theme_copy,4)),s.cd.detectChanges()}),e._uU(16," copy "),e.qZA(),e.TgZ(17,"common-ng-button-element",3),e.NdJ("click",function(){return o.paste()}),e._uU(18," paste "),e.qZA(),e.qZA(),e.YNc(19,ye,1,1,"common-ng-json-artifact",4)}2&t&&(e.Q6J("options",o.themes.themes)("initial",o.themes.theme_key_index)("path","theme"),e.xp6(19),e.Q6J("ngIf",o.themes_theme_copy))},directives:[u.r,V.n,v.T,l.O5,ve],styles:[""]}),n})();function Ae(n,m){1&n&&e._UZ(0,"common-ng-themes-editor-artifact")}const Ne=function(){return["themes"]};function we(n,m){if(1&n&&(e.ynx(0),e._UZ(1,"common-ng-select-element",2,3),e.ynx(3,0),e.YNc(4,Ae,1,0,"common-ng-themes-editor-artifact",1),e.BQk(),e.BQk()),2&n){const t=e.MAs(2);e.xp6(1),e.Q6J("options",e.DdM(4,Ne))("initial",!0),e.xp6(2),e.Q6J("ngSwitch",t._option),e.xp6(1),e.Q6J("ngSwitchCase","themes")}}let be=(()=>{class n{constructor(t){this.util=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.fx))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-bar-right-element"]],inputs:{menu:"menu"},decls:2,vars:2,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"bl","glo-0-text-trim",3,"options","initial"],["preferencesMenu",""]],template:function(t,o){1&t&&(e.ynx(0,0),e.YNc(1,we,5,5,"ng-container",1),e.BQk()),2&t&&(e.Q6J("ngSwitch",o.menu._option),e.xp6(1),e.Q6J("ngSwitchCase","preferences"))},directives:[l.RF,l.n9,u.r,Te],styles:[""]}),n})();var A=r(9901);function Je(n,m){1&n&&e._UZ(0,"common-ng-router-element",15)}function Ze(n,m){if(1&n&&e._UZ(0,"common-ng-dynamic-element",16),2&n){const t=e.oxw();e.Q6J("component",t.appBar.middleBar.component)("module",t.appBar.middleBar.module)}}const E=function(n){return{"glo-0-shadow":n}},Ee=function(){return["router"]},ke=function(){return["preferences"]};let Qe=(()=>{class n{constructor(t,o){this.util=t,this.appBar=o}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.fx),e.Y36(p.mM))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-bar-element"]],decls:20,vars:16,consts:[["left-button","",1,"glo-0-text-trim"],[1,"tcenter","p","glo-0-text-ani","bl","scrollable",3,"ngClass"],["leftButton",""],["right-button","",1,"glo-0-text-trim"],["rightButton",""],["middle-bar",""],["class","tcenter glo-0-text-trim bl",4,"ngIf"],[3,"component","module",4,"ngIf"],["left-bar",""],[1,"bl","glo-0-text-trim",3,"options","initial"],["leftBarMenu",""],["right-bar",""],["rightBarMenu",""],["left-content","",1,"bl",3,"menu"],["right-content","",1,"bl",3,"menu"],[1,"tcenter","glo-0-text-trim","bl"],[3,"component","module"]],template:function(t,o){if(1&t&&(e.TgZ(0,"common-ng-app-bar-artifact"),e.TgZ(1,"div",0),e.TgZ(2,"common-ng-button-element",1,2),e._uU(4," menu "),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"common-ng-button-element",1,4),e._uU(8," user "),e.qZA(),e.qZA(),e.ynx(9,5),e.YNc(10,Je,1,0,"common-ng-router-element",6),e.YNc(11,Ze,1,2,"common-ng-dynamic-element",7),e.BQk(),e.TgZ(12,"div",8),e._UZ(13,"common-ng-select-element",9,10),e.qZA(),e.TgZ(15,"div",11),e._UZ(16,"common-ng-select-element",9,12),e.qZA(),e._UZ(18,"app-bar-left-element",13),e._UZ(19,"app-bar-right-element",14),e.qZA()),2&t){const i=e.MAs(14),c=e.MAs(17);e.xp6(2),e.Q6J("ngClass",e.VKq(10,E,"left"===o.appBar.show)),e.xp6(4),e.Q6J("ngClass",e.VKq(12,E,"right"===o.appBar.show)),e.xp6(4),e.Q6J("ngIf",!o.appBar.middleBar),e.xp6(1),e.Q6J("ngIf",o.appBar.middleBar),e.xp6(2),e.Q6J("options",e.DdM(14,Ee))("initial",!0),e.xp6(3),e.Q6J("options",e.DdM(15,ke))("initial",!0),e.xp6(2),e.Q6J("menu",i),e.xp6(1),e.Q6J("menu",c)}},directives:[P,v.T,l.mk,l.O5,u.r,z,be,b,A.F],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .scrollable-content[_ngcontent-%COMP%]{flex-grow:1;overflow:auto}"]}),n})();const Me=["popopContent"],Be=["modal"];function Se(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"div",1),e.NdJ("click",function(i){return i.stopPropagation()})("mousemove",function(i){return i.stopPropagation()})("touchstart",function(i){return i.stopPropagation()})("mousedown",function(i){return e.CHM(t),e.oxw().mousedown(i)})("mouseup",function(i){return e.CHM(t),e.oxw().mouseup(i)}),e.TgZ(1,"div",2,3),e.NdJ("mousedown",function(i){return e.CHM(t),e.oxw().mousedown_event=null,i.stopPropagation()}),e._UZ(3,"common-ng-dynamic-element",4,5),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("component",t.srv.component)("module",t.srv.module)("data",t.srv.data)}}let Ye=(()=>{class n{constructor(t,o){this.srv=t,this.json=o,this.mousedownPath=[]}ngOnInit(){}ngAfterViewChecked(){if(this.popopContent){for(let t of this.json.entries(this.srv.listeners))!t[1].listening&&this.popopContent.compRef&&(this.popopContent.compRef.instance[t[0]].subscribe(o=>t[1].fun(o)),t[1].listening=!0);this.srv.modal=this.modal}}mousedown(t){this.mousedown_event=t}mouseup(t){var o;(null===(o=this.mousedown_event)||void 0===o?void 0:o.target)===t.target&&this.srv.close()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z.e),e.Y36(T.V))},n.\u0275cmp=e.Xpm({type:n,selectors:[["common-ng-popop-element"]],viewQuery:function(t,o){if(1&t&&(e.Gf(Me,5),e.Gf(Be,5)),2&t){let i;e.iGM(i=e.CRH())&&(o.popopContent=i.first),e.iGM(i=e.CRH())&&(o.modal=i.first)}},decls:1,vars:1,consts:[["class","common-popop-element-container",3,"click","mousemove","touchstart","mousedown","mouseup",4,"ngIf"],[1,"common-popop-element-container",3,"click","mousemove","touchstart","mousedown","mouseup"],["tabindex","1",1,"common-popop-element-modal",3,"mousedown"],["modal",""],[1,"scrollable-child",3,"component","module","data"],["popopContent",""]],template:function(t,o){1&t&&e.YNc(0,Se,5,3,"div",0),2&t&&e.Q6J("ngIf",o.srv.show)},directives:[l.O5,A.F],styles:[".common-popop-element-container[_ngcontent-%COMP%]{position:fixed;z-index:2;left:0;top:0;width:100%;height:100%;overflow:hidden;background-color:#000;background-color:#0006}.common-popop-element-modal[_ngcontent-%COMP%]{top:7.5%;position:relative;margin:auto;width:80%;height:85%;border:solid white 1px;border-radius:5px;box-shadow:0 0 5px #ffffffbf;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.scrollable-child[_ngcontent-%COMP%]{max-height:100%;overflow:auto;display:block}"]}),n})();var Fe=r(4579);const Ue=["frame"];let je=(()=>{class n{constructor(t){this.http=t}ngAfterViewInit(){var t=this;return(0,_.Z)(function*(){let o=t.src?yield t.http.get(t.src,{responseType:"text"}):t.snippet;t.write(o)})()}write(t){this.frame.nativeElement.contentDocument.write(t),this.frame.nativeElement.contentDocument.close()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Fe.n))},n.\u0275cmp=e.Xpm({type:n,selectors:[["common-ng-frame-element"]],viewQuery:function(t,o){if(1&t&&e.Gf(Ue,5),2&t){let i;e.iGM(i=e.CRH())&&(o.frame=i.first)}},inputs:{src:"src",snippet:"snippet"},decls:2,vars:0,consts:[["src","about:blank"],["frame",""]],template:function(t,o){1&t&&e._UZ(0,"iframe",0,1)},styles:[""],encapsulation:2}),n})();var Pe=r(107);let Oe=(()=>{class n{constructor(t){this.sanitizer=t}transform(t,o="html"){return this.sanitizer.bypass(t,o)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Pe.K,16))},n.\u0275pipe=e.Yjl({name:"sanitizer",type:n,pure:!0}),n})();function He(n,m){if(1&n&&e._UZ(0,"common-ng-dynamic-element",4),2&n){const t=e.oxw().$implicit;e.Q6J("component",t.value.component)("module",t.value.module)("data",t.value.data)}}function Ie(n,m){if(1&n&&(e.ynx(0),e.YNc(1,He,1,3,"common-ng-dynamic-element",3),e.BQk()),2&n){const t=m.$implicit;e.xp6(1),e.Q6J("ngIf",t.value.enabled&&t.value.imported)}}function $e(n,m){if(1&n&&(e.ynx(0),e.YNc(1,Ie,2,1,"ng-container",0),e.ALo(2,"keyvalue"),e.BQk()),2&n){const t=m.$implicit;e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.value))}}function Le(n,m){if(1&n&&e._UZ(0,"div",5),2&n){const t=e.oxw();e.Q6J("innerHTML",t.themes.theme.safeHTML,e.oJD)}}function Re(n,m){if(1&n&&(e._UZ(0,"div",5),e.ALo(1,"sanitizer")),2&n){const t=e.oxw();e.Q6J("innerHTML",e.xi3(1,1,t.themes.theme.unsafeHTML,"html"),e.oJD)}}function qe(n,m){1&n&&(e._UZ(0,"iframe",7),e.ALo(1,"sanitizer")),2&n&&e.Q6J("src",e.xi3(1,1,m.$implicit,"resourceUrl"),e.uOi)}function De(n,m){if(1&n&&(e.ynx(0),e.YNc(1,qe,2,4,"iframe",6),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.themes.theme.iframes)}}function ze(n,m){if(1&n&&e._UZ(0,"common-ng-frame-element",9),2&n){const t=m.$implicit;e.Q6J("src",t.src)("snippet",t.snippet)}}function Ve(n,m){if(1&n&&(e.ynx(0),e.YNc(1,ze,1,2,"common-ng-frame-element",8),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.themes.theme.frames)}}let Xe=(()=>{class n{constructor(t){this.themes=t,this.origin=location.origin}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(J.y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["common-ng-themes-element"]],decls:6,vars:7,consts:[[4,"ngFor","ngForOf"],[3,"innerHTML",4,"ngIf"],[4,"ngIf"],[3,"component","module","data",4,"ngIf"],[3,"component","module","data"],[3,"innerHTML"],[3,"src",4,"ngFor","ngForOf"],[3,"src"],[3,"src","snippet",4,"ngFor","ngForOf"],[3,"src","snippet"]],template:function(t,o){1&t&&(e.YNc(0,$e,3,3,"ng-container",0),e.ALo(1,"keyvalue"),e.YNc(2,Le,1,1,"div",1),e.YNc(3,Re,2,4,"div",1),e.YNc(4,De,2,1,"ng-container",2),e.YNc(5,Ve,2,1,"ng-container",2)),2&t&&(e.Q6J("ngForOf",e.lcZ(1,5,o.themes.materials)),e.xp6(2),e.Q6J("ngIf",(null==o.themes||null==o.themes.theme||null==o.themes.theme.safeHTML?null:o.themes.theme.safeHTML.length)>0),e.xp6(1),e.Q6J("ngIf",(null==o.themes||null==o.themes.theme||null==o.themes.theme.unsafeHTML?null:o.themes.theme.unsafeHTML.length)>0),e.xp6(1),e.Q6J("ngIf",null==o.themes||null==o.themes.theme?null:o.themes.theme.iframes),e.xp6(1),e.Q6J("ngIf",null==o.themes||null==o.themes.theme?null:o.themes.theme.frames))},directives:[l.sg,l.O5,A.F,je],pipes:[l.Nd,Oe],styles:["iframe[_ngcontent-%COMP%]{z-index:-1;width:100vw;height:100vh;position:fixed;top:0;left:0;outline:none;border:none}  iframe{z-index:-1;width:100vw;height:100vh;position:fixed;top:0;left:0;outline:none;border:none}"]}),n})(),Ke=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-init-element"]],decls:3,vars:0,template:function(t,o){1&t&&(e._UZ(0,"app-bar-element"),e._UZ(1,"common-ng-popop-element"),e._UZ(2,"common-ng-themes-element"))},directives:[Qe,Ye,Xe],styles:[""]}),n})()},687:(k,d,r)=>{r.d(d,{T:()=>y});var e=r(5e3);const p=["*"];let y=(()=>{class _{constructor(){this.text="",this.toggle=!1,this.toggleChange=new e.vpe}toggleButton(){this.toggle=!this.toggle,this.toggleChange.emit(this.toggle)}}return _.\u0275fac=function(g){return new(g||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["common-ng-button-element"]],inputs:{text:"text",toggle:"toggle"},outputs:{toggleChange:"toggleChange"},ngContentSelectors:p,decls:3,vars:1,consts:[["tabindex","0",3,"click"]],template:function(g,C){1&g&&(e.F$t(),e.TgZ(0,"button",0),e.NdJ("click",function(){return C.toggleButton()}),e._uU(1),e.Hsn(2),e.qZA()),2&g&&(e.xp6(1),e.hij(" ",C.text," "))},styles:["button[_ngcontent-%COMP%]{font:inherit;color:inherit;background:inherit;border:inherit;cursor:inherit;margin:0}"]}),_})()}}]);