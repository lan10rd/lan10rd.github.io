(self.webpackChunkgrams=self.webpackChunkgrams||[]).push([[399],{9399:(t,e,o)=>{"use strict";o.r(e),o.d(e,{NotesFeatureModule:()=>d});var n=o(2057),s=o(3644),i=o(4762),l=o(9259),r=o(4788),c=o(8501);function u(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"common-ng-select-element",2),r.NdJ("optionChange",function(e){return r.CHM(t),r.oxw().fetchNote(e)}),r.qZA()}if(2&t){const t=r.oxw();r.Q6J("options",t.util.data.notes.paths)}}function a(t,e){if(1&t&&(r.TgZ(0,"div",3),r._uU(1),r.qZA()),2&t){const t=r.oxw();r.xp6(1),r.hij(" ",t.note,"\n")}}let p=(()=>{class t{constructor(t){this.util=t}ngOnInit(){return(0,i.mG)(this,void 0,void 0,function*(){let t=yield this.util.http.get(this.util.functions.assets("index.json"));this.util.data.notes={paths:t.filter(t=>t.includes("/notes/")).map(t=>t.split("assets/notes/").join(""))}})}fetchNote(t){return(0,i.mG)(this,void 0,void 0,function*(){console.log("$event",t),this.note=t?yield this.util.http.get(this.util.functions.assets("notes/"+t),{responseType:"text"}):void 0})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(l.fx))},t.\u0275cmp=r.Xpm({type:t,selectors:[["notes-feature"]],decls:2,vars:2,consts:[["class","bl glo-0-drop glo-0-text-trim",3,"options","optionChange",4,"ngIf"],["class","glo-0-drop mt glo-0-text-trim",4,"ngIf"],[1,"bl","glo-0-drop","glo-0-text-trim",3,"options","optionChange"],[1,"glo-0-drop","mt","glo-0-text-trim"]],template:function(t,e){1&t&&(r.YNc(0,u,1,1,"common-ng-select-element",0),r.YNc(1,a,2,1,"div",1)),2&t&&(r.Q6J("ngIf",e.util.data.notes),r.xp6(1),r.Q6J("ngIf",e.note))},directives:[n.O5,c.r],styles:[""]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,s.Bz.forChild([{path:"",component:p,data:{CommonRouterService:{routes:[".."],seo:{title:"Notes",keywords:"",description:""}}}}]),l.xg]]}),t})()}}]);