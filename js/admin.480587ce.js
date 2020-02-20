(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{1369:function(e,t,s){},1711:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-fab-transition",[s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms",value:e.perms,expression:"perms"}],key:"add",attrs:{color:"accent",fab:"",fixed:"",bottom:"",right:""},on:{click:e.addToList}},[s("v-icon",{attrs:{color:"white"}},[e._v("\n      add\n    ")])],1)],1)},i=[],r={props:{perms:{type:String,required:!0}},methods:{addToList:function(){this.$emit("add-to-list")}}},n=r,o=s("2877"),l=s("6544"),d=s.n(l),c=s("8336"),u=s("0789"),m=s("132d"),p=Object(o["a"])(n,a,i,!1,null,null,null);t["a"]=p.exports;d()(p,{VBtn:c["a"],VFabTransition:u["b"],VIcon:m["a"]})},"1d7d":function(e,t,s){"use strict";var a=s("1369"),i=s.n(a);i.a},"696f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"groups"},[s("group-list")],1)},i=[],r=s("d225"),n=s("308d"),o=s("6bb5"),l=s("4e2b"),d=s("9ab4"),c=s("60a3"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.listbox,callback:function(t){e.listbox=t},expression:"listbox"}},[s("v-form",{ref:"form"},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("\n            "+e._s(e.$t("AddRemoveUsers"))+"\n          ")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs9:""}},[s("v-autocomplete",{attrs:{disabled:e.isLoading,items:e.allUsers,autofocus:"",box:"",chips:"",label:e.$t("Addusers"),"item-text":"name","item-value":"id"},on:{change:e.addUser},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{staticClass:"chip--select-multi",attrs:{selected:t.selected,close:""},on:{input:function(s){return e.removeUser(t.item)}}},[s("v-icon",[e._v("person")]),e._v("\n                      "+e._s(t.item.name)+"\n                    ")],1)]}},{key:"item",fn:function(t){return["object"!==typeof t.item?[s("v-list-tile-content",{domProps:{textContent:e._s(t.item)}})]:[s("v-list-tile-avatar",[s("v-icon",[e._v("person")])],1),s("v-list-tile-content",[s("v-list-tile-title",{domProps:{innerHTML:e._s(t.item.name)}}),s("v-list-tile-sub-title",{domProps:{innerHTML:e._s(t.item.email)}})],1)]]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)],1)],1),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("div",{staticClass:"headline"},[e._v("\n              "+e._s(e.groupName)+"\n            ")]),s("span",[e._v(e._s(e.$t("UsersInGroup")))])])]),s("v-list",e._l(e.groupUsers,(function(t){return s("v-list-tile",{key:t.id,attrs:{avatar:""},on:{click:function(s){return e.removeUser(t.id)}}},[s("v-list-tile-avatar",[s("v-icon",[e._v("person")])],1),s("v-list-tile-content",[s("v-list-tile-title",{domProps:{innerHTML:e._s(t.name)}}),s("v-list-tile-sub-title",{domProps:{innerHTML:e._s(t.login)}})],1),s("v-list-tile-action",[s("v-icon",[e._v("\n                "+e._s("active"==t.status?"remove_circle":"remove_circle_outline")+"\n              ")])],1)],1)})),1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("\n            Close\n          ")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-form",{ref:"form"},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("\n            "+e._s(e.formTitle)+"\n          ")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.editedItem.name,expression:"editedItem.name"}],attrs:{close:""},on:{click:function(t){e.editedItem.name=null}}},[s("strong",[e._v(e._s(e.editedItem.name))]),e._v(" \n                  "),s("span",[e._v("("+e._s(e.$t("group"))+")")])])],1),s("v-text-field",{attrs:{label:e.$t("Group"),rules:[e.rules.required],required:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}}),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:e.$t("Description")},model:{value:e.editedItem.text,callback:function(t){e.$set(e.editedItem,"text",t)},expression:"editedItem.text"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("\n            "+e._s(e.$t("Cancel"))+"\n          ")]),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.validate}},[e._v("\n            "+e._s(e.$t("Save"))+"\n          ")])],1)],1)],1)],1),s("v-card",[s("v-card-title",{staticClass:"title"},[e._v("\n      "+e._s(e.$t("Groups"))+"\n      "),s("v-spacer"),s("v-text-field",{attrs:{"append-icon":"search",label:e.$t("Search"),"single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),s("v-data-table",{staticClass:"px-2",attrs:{headers:e.headers,items:e.groups,"rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination,search:e.search,loading:e.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[e._v(e._s(t.item.name))]),s("td",{staticClass:"text-xs-left"},[e._v("\n          "+e._s(t.item.text)+"\n        ")]),s("td",[e._v("\n          "+e._s(t.item.count)+"\n        ")]),s("td",{staticClass:"text-no-wrap"},[s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:groups",expression:"'admin:groups'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(s){return e.editItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              edit\n            ")])],1),s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:groups",expression:"'admin:groups'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(s){return e.addRemoveUsers(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              person_add\n            ")])],1),s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:groups",expression:"'admin:groups'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:""},on:{click:function(s){return e.deleteItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              delete\n            ")])],1)],1)]}}])},[s("template",{slot:"no-data"},[s("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[e._v("\n          "+e._s(e.$t("NoDisplay"))+"\n        ")])],1),s("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v("\n        "+e._s(e.$t("SearchNoResult1"))+' "'+e._s(e.search)+'" '+e._s(e.$t("SearchNoResult2"))+"\n      ")])],2)],1),s("list-button-add",{directives:[{name:"show",rawName:"v-show",value:e.isBasicAuth,expression:"isBasicAuth"}],attrs:{perms:"admin:groups"},on:{"add-to-list":function(t){e.dialog=!0}}})],1)},m=[],p=(s("7f7f"),s("1711")),v=s("fe0b"),f={components:{ListButtonAdd:p["a"]},data:function(e){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"name",rowsPerPage:20},search:"",dialog:!1,headers:[{text:v["a"].t("Name"),value:"name"},{text:v["a"].t("Description"),value:"text"},{text:v["a"].t("NumberUsers"),value:"count"},{text:v["a"].t("Actions"),value:"actions",sortable:!1}],editedId:null,editedItem:{name:null,text:""},menu1:!1,menu2:!1,defaultItem:{name:null,text:""},rules:{required:function(e){return!!e||v["a"].t("Required")}},groupId:null,groupName:"",listbox:!1,selected:null}},computed:{isBasicAuth:function(){return"basic"==this.$config.provider},groups:function(){return this.$store.state.groups.groups},groupUsers:function(){return this.$store.state.groups.users},allUsers:function(){return this.$store.state.users.users},isLoading:function(){return this.$store.state.groups.isLoading},formTitle:function(){return this.editedId?v["a"].t("EditGroup"):v["a"].t("NewGroup")},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(e){e||this.close()},refresh:function(e){e||this.getGroups()}},created:function(){this.getUsers(),this.getGroups()},methods:{getUsers:function(){this.$store.dispatch("users/getUsers")},getGroups:function(){this.$store.dispatch("groups/getGroups")},getGroupUsers:function(e){this.$store.dispatch("groups/getGroupUsers",e)},editItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){confirm(v["a"].t("ConfirmDelete"))&&this.$store.dispatch("groups/deleteGroup",e.id)},close:function(){var e=this;this.dialog=!1,this.listbox=!1,setTimeout((function(){e.$refs.form.reset(),e.editedItem=Object.assign({},e.defaultItem),e.editedId=null,e.groupId=null,e.groupName="",e.$store.dispatch("groups/clearGroupUsers")}),300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){this.editedId?this.$store.dispatch("groups/updateGroup",[this.editedId,{name:this.editedItem.name,text:this.editedItem.text}]):this.$store.dispatch("groups/createGroup",this.editedItem),this.close()},addRemoveUsers:function(e){this.groupId=e.id,this.groupName=e.name,this.getGroupUsers(this.groupId),this.listbox=!0},addUser:function(e){var t=this;this.$store.dispatch("groups/addUserToGroup",[this.groupId,e]),setTimeout((function(){t.$refs.form.reset(),t.selected=null}),300)},removeUser:function(e){this.$store.dispatch("groups/removeUserFromGroup",[this.groupId,e])}}},h=f,g=(s("1d7d"),s("2877")),b=s("6544"),_=s.n(b),x=s("0798"),I=s("c6a6"),w=s("8336"),$=s("b0af"),k=s("99d9"),C=s("12b2"),V=s("cc20"),y=s("a523"),P=s("8fea"),S=s("169a"),T=s("0e8f"),L=s("4bd4"),N=s("132d"),U=s("a722"),j=s("8860"),O=s("ba95"),A=s("40fe"),G=s("c954"),R=s("5d23"),B=s("9910"),q=s("2677"),D=Object(g["a"])(h,u,m,!1,null,"3259e172",null),E=D.exports;_()(D,{VAlert:x["a"],VAutocomplete:I["a"],VBtn:w["a"],VCard:$["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:C["a"],VChip:V["a"],VContainer:y["a"],VDataTable:P["a"],VDialog:S["a"],VFlex:T["a"],VForm:L["a"],VIcon:N["a"],VLayout:U["a"],VList:j["a"],VListTile:O["a"],VListTileAction:A["a"],VListTileAvatar:G["a"],VListTileContent:R["a"],VListTileSubTitle:R["b"],VListTileTitle:R["c"],VSpacer:B["a"],VTextField:q["a"]});var F=function(e){function t(){return Object(r["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(c["c"]);F=Object(d["a"])([Object(c["a"])({components:{GroupList:E}})],F);var M=F,H=M,J=Object(g["a"])(H,a,i,!1,null,null,null);t["default"]=J.exports},a0d4:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"perms"},[s("perm-list")],1)},i=[],r=s("d225"),n=s("308d"),o=s("6bb5"),l=s("4e2b"),d=s("9ab4"),c=s("60a3"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-form",{ref:"form"},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("\n            "+e._s(e.formTitle)+"\n          ")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.editedItem.match,expression:"editedItem.match"}],attrs:{close:""},on:{click:function(t){e.editedItem.match=null}}},[s("strong",[e._v(e._s(e.editedItem.match))]),e._v(" \n                  "),s("span",[e._v("("+e._s(e.$t("role"))+")")])])],1),s("v-text-field",{attrs:{label:e.$t("Role"),rules:[e.rules.required],required:""},model:{value:e.editedItem.match,callback:function(t){e.$set(e.editedItem,"match",t)},expression:"editedItem.match"}}),s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-autocomplete",{attrs:{items:e.allowedScopes,label:e.$t("Scopes"),chips:"",clearable:"",solo:"",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{attrs:{selected:t.selected,close:""}},[s("strong",[e._v(e._s(t.item))]),e._v(" \n                      "),s("span",[e._v("("+e._s(e.$t("scope"))+")")])])]}}]),model:{value:e.editedItem.scopes,callback:function(t){e.$set(e.editedItem,"scopes",t)},expression:"editedItem.scopes"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("\n            "+e._s(e.$t("Cancel"))+"\n          ")]),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.validate}},[e._v("\n            "+e._s(e.$t("Save"))+"\n          ")])],1)],1)],1)],1),s("v-card",[s("v-card-title",{staticClass:"title"},[e._v("\n      "+e._s(e.$t("Permissions"))+"\n      "),s("v-spacer"),s("v-flex",{staticClass:"mr-3 pt-3",attrs:{xs3:""}},[s("v-autocomplete",{attrs:{items:e.scopes,label:e.$t("Scopes"),chips:"",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{attrs:{selected:t.selected,close:""}},[s("strong",[e._v(e._s(t.item))]),e._v(" \n              "),s("span",[e._v("("+e._s(e.$t("scope"))+")")])])]}}]),model:{value:e.wantScopes,callback:function(t){e.wantScopes=t},expression:"wantScopes"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:e.$t("Search"),"single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),s("v-data-table",{staticClass:"px-2",attrs:{headers:e.headers,items:e.perms,"rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination,search:e.search,"custom-filter":e.customFilter,loading:e.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[s("v-chip",{attrs:{small:""}},[s("strong",[e._v(e._s(t.item.match))]),e._v(" \n            "),s("span",[e._v("("+e._s(e.$t("role"))+")")])]),s("v-tooltip",{attrs:{top:""}},[e.systemRoles.includes(t.item.match)?s("v-icon",{attrs:{slot:"activator",small:""},slot:"activator"},[e._v("\n              lock\n            ")]):e._e(),s("span",[e._v(e._s(e.$t("SystemRole")))])],1)],1),s("td",e._l(t.item.scopes,(function(t){return s("v-chip",{key:t,attrs:{small:""}},[s("strong",[e._v(e._s(t))]),e._v(" \n            "),s("span",[e._v("("+e._s(e.$t("scope"))+")")])])})),1),s("td",{staticClass:"text-no-wrap"},[s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:perms",expression:"'admin:perms'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:"",disabled:e.systemRoles.includes(t.item.match)},on:{click:function(s){return e.editItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              edit\n            ")])],1),s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:perms",expression:"'admin:perms'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:"",disabled:e.systemRoles.includes(t.item.match)},on:{click:function(s){return e.deleteItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              delete\n            ")])],1)],1)]}}])},[s("template",{slot:"no-data"},[s("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[e._v("\n          "+e._s(e.$t("NoDisplay"))+"\n        ")])],1),s("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v("\n        "+e._s(e.$t("SearchNoResult1"))+' "'+e._s(e.search)+'" '+e._s(e.$t("SearchNoResult2"))+"\n      ")])],2)],1),s("list-button-add",{attrs:{perms:"admin:perms"},on:{"add-to-list":function(t){e.dialog=!0}}})],1)},m=[],p=(s("4917"),s("ac6a"),s("456d"),s("6762"),s("2fdb"),s("1711")),v=s("fe0b"),f=s("b74e"),h={components:{ListButtonAdd:p["a"]},data:function(){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"match",rowsPerPage:20},search:"",systemRoles:["admin","user","guest"],wantScopes:[],dialog:!1,headers:[{text:v["a"].t("Role"),value:"match"},{text:v["a"].t("Scopes"),value:"scopes"},{text:v["a"].t("Actions"),value:"name",sortable:!1}],editedId:null,editedItem:{match:"",scopes:[]},defaultItem:{match:"",scopes:[]},rules:{required:function(e){return!!e||v["a"].t("Required")}}}},computed:{perms:function(){return this.$store.state.perms.permissions},scopes:function(){return this.$store.state.perms.scopes},allowedScopes:function(){return f["a"].getAllowedScopes(this.$store.getters["auth/scopes"],this.$store.state.perms.scopes)},isLoading:function(){return this.$store.state.perms.isLoading},formTitle:function(){return this.editedId?v["a"].t("EditPermission"):v["a"].t("NewPermission")},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(e){e||this.close()},refresh:function(e){e||this.getPerms()}},created:function(){this.getPerms(),this.getScopes()},methods:{getPerms:function(){this.$store.dispatch("perms/getPerms")},getScopes:function(){this.$store.dispatch("perms/getScopes")},filterByScopes:function(e){this.wantScopes=e},customFilter:function(e,t,s){var a=this;return e=e.filter((function(e){return a.wantScopes.length>0?e.scopes.some((function(e){return a.wantScopes.includes(e)})):e})),""===t.trim()?e:e.filter((function(e){return Object.keys(e).some((function(a){return s(e[a],t)}))}))},editItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){confirm(v["a"].t("ConfirmDelete"))&&this.$store.dispatch("perms/deletePerm",e.id)},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.$refs.form.reset(),e.editedItem=Object.assign({},e.defaultItem),e.editedId=null}),300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){this.editedId?this.$store.dispatch("perms/updatePerm",[this.editedId,{match:this.editedItem.match,scopes:this.editedItem.scopes}]):this.$store.dispatch("perms/createPerm",this.editedItem),this.close()}}},g=h,b=s("2877"),_=s("6544"),x=s.n(_),I=s("0798"),w=s("c6a6"),$=s("8336"),k=s("b0af"),C=s("99d9"),V=s("12b2"),y=s("cc20"),P=s("a523"),S=s("8fea"),T=s("169a"),L=s("0e8f"),N=s("4bd4"),U=s("132d"),j=s("a722"),O=s("9910"),A=s("2677"),G=s("3a2f"),R=Object(b["a"])(g,u,m,!1,null,null,null),B=R.exports;x()(R,{VAlert:I["a"],VAutocomplete:w["a"],VBtn:$["a"],VCard:k["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:V["a"],VChip:y["a"],VContainer:P["a"],VDataTable:S["a"],VDialog:T["a"],VFlex:L["a"],VForm:N["a"],VIcon:U["a"],VLayout:j["a"],VSpacer:O["a"],VTextField:A["a"],VTooltip:G["a"]});var q=function(e){function t(){return Object(r["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(c["c"]);q=Object(d["a"])([Object(c["a"])({components:{PermList:B}})],q);var D=q,E=D,F=Object(b["a"])(E,a,i,!1,null,null,null);t["default"]=F.exports},dfe8:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"customers"},[s("customer-list")],1)},i=[],r=s("d225"),n=s("308d"),o=s("6bb5"),l=s("4e2b"),d=s("9ab4"),c=s("60a3"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-form",{ref:"form"},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("\n            "+e._s(e.formTitle)+"\n          ")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:e.$t("LookUp"),hint:e.$t("LookUpDescription"),"persistent-hint":"",rules:[e.rules.required],required:""},model:{value:e.editedItem.match,callback:function(t){e.$set(e.editedItem,"match",t)},expression:"editedItem.match"}}),s("v-flex",{attrs:{xs12:""}},[s("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.editedItem.customer,expression:"editedItem.customer"}],attrs:{close:""},on:{click:function(t){e.editedItem.customer=null}}},[s("strong",[e._v(e._s(e.editedItem.customer))]),e._v(" \n                    "),s("span",[e._v("("+e._s(e.$t("customer"))+")")])])],1),s("v-text-field",{attrs:{label:e.$t("Customer"),rules:[e.rules.required],required:""},model:{value:e.editedItem.customer,callback:function(t){e.$set(e.editedItem,"customer",t)},expression:"editedItem.customer"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("\n            "+e._s(e.$t("Cancel"))+"\n          ")]),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.validate}},[e._v("\n            "+e._s(e.$t("Save"))+"\n          ")])],1)],1)],1)],1),s("v-card",[s("v-card-title",{staticClass:"title"},[e._v("\n      "+e._s(e.$t("Customers"))+"\n      "),s("v-spacer"),s("v-text-field",{attrs:{"append-icon":"search",label:e.$t("Search"),"single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),s("v-data-table",{staticClass:"px-2",attrs:{headers:e.headers,items:e.customers,"rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination,search:e.search,loading:e.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[e._v(e._s(t.item.match))]),s("td",[s("v-chip",[s("strong",[e._v(e._s(t.item.customer))]),e._v(" \n            "),s("span",[e._v("("+e._s(e.$t("customer"))+")")])])],1),s("td",{staticClass:"text-no-wrap"},[s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:customers",expression:"'admin:customers'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(s){return e.editItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              edit\n            ")])],1),s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:customers",expression:"'admin:customers'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:""},on:{click:function(s){return e.deleteItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              delete\n            ")])],1)],1)]}}])},[s("template",{slot:"no-data"},[s("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[e._v("\n          "+e._s(e.$t("NoDisplay"))+"\n        ")])],1),s("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v("\n        "+e._s(e.$t("SearchNoResult1"))+' "'+e._s(e.search)+'" '+e._s(e.$t("SearchNoResult2"))+"\n      ")])],2)],1),s("list-button-add",{attrs:{perms:"admin:customers"},on:{"add-to-list":function(t){e.dialog=!0}}})],1)},m=[],p=(s("4917"),s("1711")),v=s("fe0b"),f={components:{ListButtonAdd:p["a"]},data:function(){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"match",rowsPerPage:20},search:"",dialog:!1,headers:[{text:v["a"].t("LookUp"),value:"match"},{text:v["a"].t("Customer"),value:"customer"},{text:v["a"].t("Actions"),value:"name",sortable:!1}],editedId:null,editedItem:{match:null,customer:null},defaultItem:{match:null,customer:null},rules:{required:function(e){return!!e||v["a"].t("Required")}}}},computed:{customers:function(){return this.$store.state.customers.customers},isLoading:function(){return this.$store.state.customers.isLoading},formTitle:function(){return this.editedId?v["a"].t("EditCustomer"):v["a"].t("NewCustomer")},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(e){e||this.close()},refresh:function(e){e||this.getCustomers()}},created:function(){this.getCustomers()},methods:{getCustomers:function(){this.$store.dispatch("customers/getCustomers")},editItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){confirm(v["a"].t("ConfirmDelete"))&&this.$store.dispatch("customers/deleteCustomer",e.id)},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.$refs.form.reset(),e.editedItem=Object.assign({},e.defaultItem),e.editedId=null}),300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){this.editedId?this.$store.dispatch("customers/updateCustomer",[this.editedId,{match:this.editedItem.match,customer:this.editedItem.customer}]):this.$store.dispatch("customers/createCustomer",this.editedItem),this.close()}}},h=f,g=s("2877"),b=s("6544"),_=s.n(b),x=s("0798"),I=s("8336"),w=s("b0af"),$=s("99d9"),k=s("12b2"),C=s("cc20"),V=s("a523"),y=s("8fea"),P=s("169a"),S=s("0e8f"),T=s("4bd4"),L=s("132d"),N=s("a722"),U=s("9910"),j=s("2677"),O=Object(g["a"])(h,u,m,!1,null,null,null),A=O.exports;_()(O,{VAlert:x["a"],VBtn:I["a"],VCard:w["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:k["a"],VChip:C["a"],VContainer:V["a"],VDataTable:y["a"],VDialog:P["a"],VFlex:S["a"],VForm:T["a"],VIcon:L["a"],VLayout:N["a"],VSpacer:U["a"],VTextField:j["a"]});var G=function(e){function t(){return Object(r["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(c["c"]);G=Object(d["a"])([Object(c["a"])({components:{CustomerList:A}})],G);var R=G,B=R,q=Object(g["a"])(B,a,i,!1,null,null,null);t["default"]=q.exports},ed81:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"users"},[s("user-list")],1)},i=[],r=s("d225"),n=s("308d"),o=s("6bb5"),l=s("4e2b"),d=s("9ab4"),c=s("60a3"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-form",{ref:"form",attrs:{autocomplete:"off"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("\n            "+e._s(e.formTitle)+"\n          ")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"",md9:""}},[s("v-text-field",{attrs:{disabled:!e.isBasicAuth,label:e.$t("Name"),rules:[e.rules.required],required:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[s("v-switch",{attrs:{"true-value":"active","false-value":"inactive",label:e.$t("Active")},model:{value:e.editedItem.status,callback:function(t){e.$set(e.editedItem,"status",t)},expression:"editedItem.status"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md9:""}},[s("v-text-field",{attrs:{disabled:!e.isBasicAuth,label:e.$t("LogIn"),rules:[e.rules.required],required:""},model:{value:e.editedItem.login,callback:function(t){e.$set(e.editedItem,"login",t)},expression:"editedItem.login"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md9:""}},[s("v-text-field",{attrs:{disabled:!e.isBasicAuth,label:e.$t("Email"),rules:[e.rules.required],required:""},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[s("v-checkbox",{attrs:{label:e.$t("Verified")},model:{value:e.editedItem.email_verified,callback:function(t){e.$set(e.editedItem,"email_verified",t)},expression:"editedItem.email_verified"}})],1),s("v-flex",{attrs:{xs12:"",sm6:""}},[s("v-text-field",{directives:[{name:"show",rawName:"v-show",value:e.isBasicAuth,expression:"isBasicAuth"}],staticClass:"input-group--focused",attrs:{"append-icon":e.showPassword?"visibility_off":"visibility",rules:e.isBasicAuth?[e.rules.min]:[],type:e.showPassword?"text":"password",name:"input-10-2",label:e.$t("Password"),autocomplete:"new-password"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.editedItem.password,callback:function(t){e.$set(e.editedItem,"password",t)},expression:"editedItem.password"}}),s("v-text-field",{directives:[{name:"show",rawName:"v-show",value:!e.isBasicAuth,expression:"!isBasicAuth"}],attrs:{disabled:"","append-icon":"visibility",label:e.$t("Password")}})],1),s("v-flex",{attrs:{xs12:"",sm6:""}},[s("v-text-field",{directives:[{name:"show",rawName:"v-show",value:e.isBasicAuth,expression:"isBasicAuth"}],attrs:{"append-icon":e.showPassword?"visibility_off":"visibility",rules:e.isBasicAuth?[e.rules.passwordMatch]:[],type:e.showPassword?"text":"password",name:"input-10-2",label:e.$t("ConfirmPassword"),value:e.editedItem.confirmPassword,autocomplete:"new-password"},on:{"click:append":function(t){e.showPassword=!e.showPassword}}}),s("v-text-field",{directives:[{name:"show",rawName:"v-show",value:!e.isBasicAuth,expression:"!isBasicAuth"}],attrs:{disabled:"","append-icon":"visibility",label:e.$t("ConfirmPassword")}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-select",{attrs:{items:e.allGroups,label:e.$t("Groups"),"item-text":"name","item-value":"id",chips:"",solo:"",multiple:"",disabled:!e.editedId},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{attrs:{selected:t.selected,close:""}},[s("strong",[e._v(e._s(t.item.name))]),e._v(" \n                      "),s("span",[e._v("("+e._s(e.$t("Group"))+")")])])]}}]),model:{value:e.userGroups,callback:function(t){e.userGroups=t},expression:"userGroups"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-autocomplete",{attrs:{items:e.allowedRoles,label:e.$t("Roles"),chips:"",clearable:"",solo:"",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{attrs:{selected:t.selected,close:""}},[s("strong",[e._v(e._s(t.item))]),e._v(" \n                      "),s("span",[e._v("("+e._s(e.$t("role"))+")")])])]}}]),model:{value:e.editedItem.roles,callback:function(t){e.$set(e.editedItem,"roles",t)},expression:"editedItem.roles"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-text-field",{attrs:{label:e.$t("Comment")},model:{value:e.editedItem.text,callback:function(t){e.$set(e.editedItem,"text",t)},expression:"editedItem.text"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("\n            "+e._s(e.$t("Cancel"))+"\n          ")]),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.validate}},[e._v("\n            "+e._s(e.$t("Save"))+"\n          ")])],1)],1)],1)],1),s("v-card",[s("v-card-title",{staticClass:"title"},[e._v("\n      "+e._s(e.$t("Users"))+"\n      "),s("v-spacer"),s("v-flex",{staticClass:"mr-3 pt-3",attrs:{xs3:""}},[s("v-autocomplete",{attrs:{items:e.allowedRoles,label:e.$t("Roles"),chips:"",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{attrs:{selected:t.selected,close:""}},[s("strong",[e._v(e._s(t.item))]),e._v(" \n              "),s("span",[e._v("("+e._s(e.$t("role"))+")")])])]}}]),model:{value:e.wantRoles,callback:function(t){e.wantRoles=t},expression:"wantRoles"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:e.$t("Search"),"single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),s("v-data-table",{staticClass:"px-2",attrs:{headers:e.headers,items:e.users,"rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination,search:e.search,"custom-filter":e.customFilter,loading:e.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[e._v(e._s(t.item.name))]),s("td",{staticClass:"text-xs-center"},[s("v-tooltip",{attrs:{top:""}},[s("v-icon",{attrs:{slot:"activator",color:"active"==t.item.status?"primary":""},on:{click:function(s){return e.toggleUserStatus(t.item)}},slot:"activator"},[e._v("\n              "+e._s("active"===t.item.status?"toggle_on":"toggle_off")+"\n            ")]),s("span",[e._v(e._s(e._f("capitalize")(t.item.status)))])],1)],1),s("td",[e._v(e._s(t.item.login))]),s("td",[e._v(e._s(t.item.email))]),s("td",{staticClass:"text-xs-center"},[s("v-tooltip",{attrs:{top:""}},[s("v-icon",{attrs:{slot:"activator"},on:{click:function(s){return e.toggleEmailVerified(t.item)}},slot:"activator"},[e._v("\n              "+e._s(t.item.email_verified?"check_box":"check_box_outline_blank")+"\n            ")]),s("span",[e._v("\n              "+e._s(t.item.email_verified?e.$t("EmailVerified"):e.$t("EmailNotVerified"))+"\n            ")])],1)],1),s("td",e._l(t.item.roles,(function(t){return s("v-chip",{key:t},[s("strong",[e._v(e._s(t))]),e._v(" \n            "),s("span",[e._v("("+e._s(e.$t("role"))+")")])])})),1),s("td",{staticClass:"text-xs-right"},[s("date-time",{attrs:{value:t.item.createTime,format:"mediumDate"}})],1),s("td",{staticClass:"text-xs-right"},[t.item.lastLogin?s("date-time",{attrs:{value:t.item.lastLogin,format:"mediumDate"}}):e._e()],1),s("td",{staticClass:"text-xs-right"},[e._v("\n          "+e._s(t.item.text)+"\n        ")]),s("td",{staticClass:"text-no-wrap"},[s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:users",expression:"'admin:users'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(s){return e.editItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              edit\n            ")])],1),s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:users",expression:"'admin:users'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:""},on:{click:function(s){return e.deleteItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              delete\n            ")])],1)],1)]}}])},[s("template",{slot:"no-data"},[s("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[e._v("\n          "+e._s(e.$t("NoDisplay"))+"\n        ")])],1),s("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v("\n        "+e._s(e.$t("SearchNoResult1"))+' "'+e._s(e.search)+'" '+e._s(e.$t("SearchNoResult2"))+".\n      ")])],2)],1),s("list-button-add",{directives:[{name:"show",rawName:"v-show",value:e.isBasicAuth,expression:"isBasicAuth"}],attrs:{perms:"admin:users"},on:{"add-to-list":function(t){e.dialog=!0}}})],1)},m=[],p=(s("7f7f"),s("ac6a"),s("456d"),s("6762"),s("2fdb"),s("6377")),v=s("1711"),f=s("fe0b"),h={components:{DateTime:p["a"],ListButtonAdd:v["a"]},data:function(e){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"name",rowsPerPage:20},search:"",wantRoles:[],dialog:!1,headers:[{text:f["a"].t("Name"),value:"name"},{text:f["a"].t("Status"),value:"status"},{text:f["a"].t("LogInUser"),value:"login"},{text:f["a"].t("Email"),value:"email"},{text:f["a"].t("VerifiedOrNot"),value:"email_verified"},{text:f["a"].t("Roles"),value:"roles"},{text:f["a"].t("Created"),value:"createTime"},{text:f["a"].t("LastLogin"),value:"lastLogin"},{text:f["a"].t("Comment"),value:"text"},{text:f["a"].t("Actions"),value:"name",sortable:!1}],editedId:null,editedItem:{name:"",status:e.editedId?null:"active",login:"",email:"",email_verified:!1,password:"",confirmPassword:"",roles:[],text:""},editedGroups:null,defaultItem:{name:"",status:e.editedId?null:"active",login:"",email:"",email_verified:!1,password:"",confirmPassword:"",roles:[],text:""},showPassword:!1,rules:{required:function(e){return!!e||f["a"].t("Required")},min:function(t){return e.editedId&&null==t||t&&t.length>=6||f["a"].t("Min6Char")},passwordMatch:function(t){return e.editedId&&null==t||t&&t==e.editedItem.password||f["a"].t("PasswordNotMatch")}}}},computed:{isBasicAuth:function(){return"basic"==this.$config.provider},users:function(){return this.$store.state.users.users},allGroups:function(){return this.$store.state.groups.groups},userGroups:{get:function(){return this.$store.state.users.groups},set:function(e){this.editedGroups=e}},allowedRoles:function(){return this.$store.getters["perms/roles"]},isLoading:function(){return this.$store.state.users.isLoading},formTitle:function(){return this.editedId?f["a"].t("EditUser"):f["a"].t("NewUser")},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(e){e||this.close()},refresh:function(e){e||this.getUsers()}},created:function(){this.getUsers(),this.getGroups(),this.getPerms(),this.editedItem=Object.assign({},this.defaultItem)},methods:{getUsers:function(){this.$store.dispatch("users/getUsers")},getGroups:function(){this.$store.dispatch("groups/getGroups")},getUserGroups:function(e){this.$store.dispatch("users/getUserGroups",e)},getPerms:function(){this.$store.dispatch("perms/getPerms")},filterByRoles:function(e){this.wantRoles=e},customFilter:function(e,t,s){var a=this;return e=e.filter((function(e){return a.wantRoles.length>0?e.roles.some((function(e){return a.wantRoles.includes(e)})):e})),""===t.trim()?e:e.filter((function(e){return Object.keys(e).some((function(a){return s(e[a],t)}))}))},toggleUserStatus:function(e){this.$store.dispatch("users/setUserStatus",[e.id,"active"===e.status?"inactive":"active"])},toggleEmailVerified:function(e){this.$store.dispatch("users/setEmailVerified",[e.id,!e.email_verified])},editItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.getUserGroups(e.id),this.editedGroups=null,this.$refs.form.resetValidation(),this.dialog=!0},deleteItem:function(e){confirm(f["a"].t("ConfirmDelete"))&&this.$store.dispatch("users/deleteUser",e.id)},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.$refs.form.resetValidation(),e.editedItem=Object.assign({},e.defaultItem),e.editedId=null}),300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){var e=this;if(this.editedId){if(this.$store.dispatch("users/updateUser",[this.editedId,{name:this.editedItem.name,email:this.editedItem.email,password:this.editedItem.password,status:this.editedItem.status,roles:this.editedItem.roles,text:this.editedItem.text,email_verified:this.editedItem.email_verified}]),this.editedGroups){var t=this.editedGroups.filter((function(t){return!e.userGroups.map((function(e){return e.id})).includes(t)})),s=this.userGroups.map((function(e){return e.id})).filter((function(t){return!e.editedGroups.includes(t)}));t.map((function(t){return e.$store.dispatch("groups/addUserToGroup",[t,e.editedId])})),s.map((function(t){return e.$store.dispatch("groups/removeUserFromGroup",[t,e.editedId])}))}}else this.$store.dispatch("users/createUser",this.editedItem);this.close()}}},g=h,b=s("2877"),_=s("6544"),x=s.n(_),I=s("0798"),w=s("c6a6"),$=s("8336"),k=s("b0af"),C=s("99d9"),V=s("12b2"),y=s("ac7c"),P=s("cc20"),S=s("a523"),T=s("8fea"),L=s("169a"),N=s("0e8f"),U=s("4bd4"),j=s("132d"),O=s("a722"),A=s("b56d"),G=s("9910"),R=s("b73d"),B=s("2677"),q=s("3a2f"),D=Object(b["a"])(g,u,m,!1,null,null,null),E=D.exports;x()(D,{VAlert:I["a"],VAutocomplete:w["a"],VBtn:$["a"],VCard:k["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:V["a"],VCheckbox:y["a"],VChip:P["a"],VContainer:S["a"],VDataTable:T["a"],VDialog:L["a"],VFlex:N["a"],VForm:U["a"],VIcon:j["a"],VLayout:O["a"],VSelect:A["a"],VSpacer:G["a"],VSwitch:R["a"],VTextField:B["a"],VTooltip:q["a"]});var F=function(e){function t(){return Object(r["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(c["c"]);F=Object(d["a"])([Object(c["a"])({components:{UserList:E}})],F);var M=F,H=M,J=Object(b["a"])(H,a,i,!1,null,null,null);t["default"]=J.exports}}]);
//# sourceMappingURL=admin.480587ce.js.map