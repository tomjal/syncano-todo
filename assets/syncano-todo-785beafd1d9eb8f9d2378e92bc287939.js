"use strict";define("syncano-todo/adapters/application",["exports","ember","ember-syncano/adapters/syncano"],function(e,t,n){e["default"]=n["default"].extend({syncano:t["default"].inject.service()})}),define("syncano-todo/app",["exports","ember","ember/resolver","ember/load-initializers","syncano-todo/config/environment"],function(e,t,n,a,o){var r=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:o["default"].modulePrefix,podModulePrefix:o["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(r,o["default"].modulePrefix),e["default"]=r}),define("syncano-todo/components/app-version",["exports","ember-cli-app-version/components/app-version","syncano-todo/config/environment"],function(e,t,n){var a=n["default"].APP.name,o=n["default"].APP.version;e["default"]=t["default"].extend({version:o,name:a})}),define("syncano-todo/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("syncano-todo/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("syncano-todo/controllers/todos",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({actions:{saveNewItem:function(){this.store.createRecord("todo",{title:this.get("newItem"),is_completed:!1}).save(),this.set("newItem",null)},toggleComplete:function(e){e.toggleProperty("is_completed"),e.save()},itemDelete:function(e){e.destroyRecord()}}})}),define("syncano-todo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","syncano-todo/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("syncano-todo/initializers/application",["exports"],function(e){function t(e,t){}e.initialize=t,e["default"]={name:"application",initialize:t}}),define("syncano-todo/initializers/export-application-global",["exports","ember","syncano-todo/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,o=n["default"].exportApplicationGlobal;a="string"==typeof o?o:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("syncano-todo/models/todo",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({title:t["default"].attr("string"),is_completed:t["default"].attr("boolean")})}),define("syncano-todo/router",["exports","ember","syncano-todo/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.resource("todos",{path:"/"})}),e["default"]=a}),define("syncano-todo/routes/todos",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return this.store.findAll("todo")}})}),define("syncano-todo/services/syncano",["exports","ember-syncano/services/syncano","syncano-todo/config/environment"],function(e,t,n){e["default"]=t["default"].extend({config:n["default"].syncano})}),define("syncano-todo/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:9,column:0}},moduleName:"syncano-todo/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","text-center");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h2");e.setAttribute(a,"id","title");var o=e.createTextNode("To-Do List");e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h4"),o=e.createTextNode("Powered by ");e.appendChild(a,o);var o=e.createElement("a");e.setAttribute(o,"href","http://www.syncano.io");var r=e.createTextNode("Syncano");e.appendChild(o,r),e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h5"),o=e.createElement("a");e.setAttribute(o,"href","https://github.com/twack05/syncano-todo");var r=e.createTextNode("Source Code");e.appendChild(o,r),e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","https://twitter.com/WackerTheHacker");var o=e.createTextNode("@WackerTheHacker");e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[0]),7,7),a},statements:[["content","outlet",["loc",[null,[6,2],[6,12]]]]],locals:[],templates:[]}}())}),define("syncano-todo/templates/todos",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:9,column:2},end:{line:17,column:2}},moduleName:"syncano-todo/templates/todos.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","item");var o=e.createTextNode("\n      ");e.appendChild(a,o);var o=e.createElement("span");e.appendChild(a,o);var o=e.createTextNode("\n      ");e.appendChild(a,o);var o=e.createElement("span"),r=e.createComment("");e.appendChild(o,r),e.appendChild(a,o);var o=e.createTextNode("\n      ");e.appendChild(a,o);var o=e.createElement("span");e.appendChild(a,o);var o=e.createTextNode("\n    ");e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1,1]),o=e.childAt(a,[1]),r=e.childAt(a,[3]),l=e.childAt(a,[5]),i=new Array(6);return i[0]=e.createAttrMorph(o,"class"),i[1]=e.createElementMorph(o),i[2]=e.createAttrMorph(r,"class"),i[3]=e.createMorphAt(r,0,0),i[4]=e.createAttrMorph(l,"class"),i[5]=e.createElementMorph(l),i},statements:[["attribute","class",["concat",["glyphicon"," ",["subexpr","if",[["get","item.is_completed",[]],"glyphicon-check","glyphicon-unchecked"],[],[]]," ","item-complete"]]],["element","action",["toggleComplete",["get","item",["loc",[null,[12,38],[12,42]]]]],[],["loc",[null,[12,12],[12,44]]]],["attribute","class",["concat",[["subexpr","if",[["get","item.is_completed",[]],"strikethrough",""],[],[]]]]],["content","item.title",["loc",[null,[13,66],[13,80]]]],["attribute","class",["concat",["glyphicon"," ","glyphicon-remove"," ","item-remove"," ",["subexpr","if",[["get","item.is_completed",[]],"","invisible"],[],[]]]]],["element","action",["itemDelete",["get","item",["loc",[null,[14,34],[14,38]]]]],[],["loc",[null,[14,12],[14,40]]]]],locals:["item"],templates:[]}}();return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:19,column:0}},moduleName:"syncano-todo/templates/todos.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","item-input");var o=e.createTextNode("\n    ");e.appendChild(a,o);var o=e.createComment("");e.appendChild(a,o);var o=e.createTextNode("\n    ");e.appendChild(a,o);var o=e.createElement("span");e.setAttribute(o,"class","item-create glyphicon glyphicon-floppy-disk item-save"),e.appendChild(a,o);var o=e.createTextNode("\n  ");e.appendChild(a,o),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","item");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),o=e.childAt(a,[1]),r=e.childAt(o,[3]),l=new Array(5);return l[0]=e.createMorphAt(o,1,1),l[1]=e.createElementMorph(r),l[2]=e.createMorphAt(a,3,3),l[3]=e.createMorphAt(t,3,3,n),l[4]=e.createMorphAt(e.childAt(t,[5]),0,0),l},statements:[["inline","input",[],["value",["subexpr","@mut",[["get","newItem",["loc",[null,[4,18],[4,25]]]]],[],[]],"placeholder","Enter a New To-Do Item"],["loc",[null,[4,4],[4,64]]]],["element","action",["saveNewItem",["get","newItem",["loc",[null,[5,95],[5,102]]]]],[],["loc",[null,[5,72],[5,104]]]],["content","errorMessage",["loc",[null,[7,2],[7,18]]]],["block","each",[["get","model",["loc",[null,[9,18],[9,23]]]]],[],0,null,["loc",[null,[9,2],[17,11]]]],["content","newItem",["loc",[null,[18,20],[18,31]]]]],locals:[],templates:[e]}}())}),define("syncano-todo/config/environment",["ember"],function(e){var t="syncano-todo";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),o=JSON.parse(unescape(a));return{"default":o}}catch(r){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("syncano-todo/app")["default"].create({name:"syncano-todo",version:"0.0.0+591f8580"});