(self.webpackChunkgrams=self.webpackChunkgrams||[]).push([[399],{9399:(t,e,n)=>{"use strict";n.r(e),n.d(e,{NotesFeatureModule:()=>f});var o=n(2057),s=n(3644),i=n(4762),c=n(9259),u=n(4788),r=n(8501);function a(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"common-ng-select-element",2),u.NdJ("optionChange",function(e){return u.CHM(t),u.oxw().fetchNote(e)}),u.qZA()}if(2&t){const t=u.oxw();u.Q6J("options",t.util.data.notes.paths)}}function l(t,e){if(1&t&&(u.TgZ(0,"div"),u._uU(1),u.qZA()),2&t){const t=u.oxw();u.xp6(1),u.hij(" ",t.note,"\n")}}let p=(()=>{class t{constructor(t){this.util=t}ngOnInit(){return(0,i.mG)(this,void 0,void 0,function*(){let t=yield this.util.http.get(this.util.functions.assets("index.json"));this.util.data.notes={paths:t.filter(t=>t.includes("/notes/")).map(t=>t.split("assets/notes/").join(""))}})}fetchNote(t){return(0,i.mG)(this,void 0,void 0,function*(){this.note=t?yield this.util.http.get(this.util.functions.assets("notes/"+t),{responseType:"text"}):void 0})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(c.fx))},t.\u0275cmp=u.Xpm({type:t,selectors:[["notes-feature"]],decls:2,vars:2,consts:[[3,"options","optionChange",4,"ngIf"],[4,"ngIf"],[3,"options","optionChange"]],template:function(t,e){1&t&&(u.YNc(0,a,1,1,"common-ng-select-element",0),u.YNc(1,l,2,1,"div",1)),2&t&&(u.Q6J("ngIf",e.util.data.notes),u.xp6(1),u.Q6J("ngIf",e.note))},directives:[o.O5,r.r],styles:[""]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[o.ez,s.Bz.forChild([{path:"",component:p,data:{CommonRouterService:{routes:[".."],seo:{title:"Notes",keywords:"",description:""}}}}]),c.xg]]}),t})()}}]);