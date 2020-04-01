!function(l){var i={};function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=l,r.c=i,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(l,i,function(e){return t[e]}.bind(null,i));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,l){l(1),l(2),l(3),l(4),l(5),l(6),l(8),l(10),l(12),l(14),e.exports=l(16)},function(e,t,l){"use strict";angular.module("queryBuilder",["ngAnimate","ngRoute","ngMaterial","ngMessages","queryBuilder.services","queryBuilder.components","queryBuilder.demo"]).config(["$locationProvider","$routeProvider",function(e,t){e.hashPrefix("!"),t.otherwise({redirectTo:"/QueryBuilder/demo"})}])},function(e,t,l){"use strict";angular.module("queryBuilder.services",[])},function(e,t,l){"use strict";angular.module("queryBuilder.services").factory("filterDataService",function(){return{getFilters:function(){return[{id:1,name:"Filter 1 - Free text"},{id:2,name:"Filter 2 - Set of values - select one",values:["D","E","F"]},{id:3,name:"Filter 3 - Set of values - select multiple",values:["G","H","I"],multipleValues:!0}]},getPersistedFilters:function(){return[{id:1,name:"Filter 1 - type filter",type:"ruleSet",condition:"and",rules:[{id:"1-1",type:"rule",field:"class",operator:"equals",value:"class1"},{id:"1-2",type:"rule",field:"type",operator:"equals",value:""}]},{id:2,name:"Filter 2 - class filter",type:"ruleSet",condition:"and",rules:[{id:"1-1",type:"rule",field:"class",operator:"equals",value:""},{id:"1-2",type:"rule",field:"rule",operator:"equals",value:"rule1"}]},{id:3,name:"Filter 3 - class & rule filter",type:"ruleSet",condition:"and",rules:[{id:"1-1",type:"rule",field:"class",operator:"equals",value:""},{id:"1-2",type:"rule",field:"rule",operator:"equals",value:""},{id:"1-3",type:"rule",field:"type",operator:"equals",value:"type1"}]}]}}})},function(e,t,l){"use strict";angular.module("queryBuilder.services").factory("ruleDataService",function(){return{getOperators:function(){return[{display:"Regex",value:"regex"},{display:"Contains",value:"contains"},{display:"Starts with",value:"starts-with"}]}}})},function(e,t,l){"use strict";angular.module("queryBuilder.components",[])},function(e,t,l){"use strict";angular.module("queryBuilder.components").component("andOrSwitch",{template:l(7),bindings:{data:"<",disabled:"<?"},controller:function(){}})},function(e,t){e.exports='<md-radio-group ng-model=$ctrl.data.condition layout=row layout-align="start center" ng-disabled=$ctrl.disabled> <md-radio-button value=and>And</md-radio-button> <md-radio-button value=or>Or</md-radio-button> </md-radio-group>'},function(e,t,l){"use strict";angular.module("queryBuilder.components").component("collapsiblePanel",{template:l(9),bindings:{switch:"=",title:"@",titleSize:"<?"},controller:function(){}})},function(e,t){e.exports='<div class=collapsible-panel-container layout=row layout-align="start start" flex> <md-icon flex=5 ng-if=!$ctrl.switch ng-click="$ctrl.switch = !$ctrl.switch">keyboard_arrow_down</md-icon> <md-icon flex=5 ng-if=$ctrl.switch ng-click="$ctrl.switch = !$ctrl.switch">keyboard_arrow_up</md-icon> <h4 ng-if="$ctrl.titleSize === 4 || !$ctrl.titleSize">{{$ctrl.title}}</h4> <h3 ng-if="$ctrl.titleSize === 3">{{$ctrl.title}}</h3> </div>'},function(e,t,l){"use strict";angular.module("queryBuilder.components").component("queryBuilder",{template:l(11),bindings:{data:"=?",displayModel:"<?",fields:"<?",initialCondition:"@?",mode:"@?",operators:"<?",singleRuleSet:"<?"},controller:[function(){var e=this;e.$onInit=function(){e.data=e.data||{condition:"and",rules:[]},e.mode=e.mode||"build"},e.showModel=!1}]})},function(e,t){e.exports='<div layout-padding class=query-builder> <rule-set data=$ctrl.data fields=$ctrl.fields initial-condition={{$ctrl.initialCondition}} is-first=true mode={{$ctrl.mode}} operators=$ctrl.operators single-rule-set=$ctrl.singleRuleSet> </rule-set> <collapsible-panel ng-if=$ctrl.displayModel switch=$ctrl.showModel title=Model title-size=4> </collapsible-panel> <div ng-if="$ctrl.displayModel && $ctrl.showModel" class=model-container> <pre>{{$ctrl.data|json}}</pre> </div> </div>'},function(e,t,l){"use strict";angular.module("queryBuilder.components").component("ruleSet",{template:l(13),bindings:{data:"<?",fields:"<?",indent:"<?",initialCondition:"@?",isFirst:"<?",mode:"@",onAddRule:"&",onAddRuleSet:"&",onRemoveRuleSet:"&",operators:"<?",singleRuleSet:"<?"},controller:[function(){var l=this;function t(){return l.indent+"-"+(l.data.rules.length+1)}l.$onInit=function(){l.indent||(l.indent=1),l.data||(l.data={condition:"and",rules:[]}),l.initialCondition&&(l.data.condition=l.initialCondition),l.style={"margin-left":5*l.indent+"px"},"entry"===l.mode&&(l.data.rules=l.data.rules.filter(function(e){return"ruleSet"===e.type||"rule"===e.type&&0===e.value.length}),console.log(JSON.stringify(l.data.rules)))},l.addRule=function(){var e={id:t(),type:"rule",field:"",operator:"",value:""};l.data.rules.push(e),l.onAddRule&&l.onAddRule()},l.addRuleSet=function(){var e={id:t(),type:"ruleSet",condition:"and",rules:[]};l.data.rules.push(e),l.onAddRuleSet&&l.onAddRuleSet()},l.removeRule=function(t){var e=l.data.rules.findIndex(function(e){return e.id===t.id});l.data.rules.splice(e,1)},l.removeRuleSet=function(){l.onRemoveRuleSet&&l.onRemoveRuleSet()}}]})},function(e,t){e.exports='<div class=rule-set-container> <div class=rule-set layout=row> <and-or-switch ng-if="$ctrl.mode === \'build\' || $ctrl.isFirst" flex=90 layout-align="start center" data=$ctrl.data disabled=$ctrl.singleRuleSet> </and-or-switch> <div ng-if="$ctrl.mode === \'entry\' && !$ctrl.isFirst" flex=90 layout-align="start center"> {{$ctrl.data.name}} </div> <div flex=10 layout-align="end center"> <md-icon class=add-rule ng-click=$ctrl.addRule() ng-if="$ctrl.mode === \'build\'"> add <md-tooltip>Add Rule</md-tooltip> </md-icon> <md-icon class=add-rule-set ng-click=$ctrl.addRuleSet() ng-if="!$ctrl.singleRuleSet && $ctrl.mode === \'build\'"> add_circle_outline <md-tooltip>Add Rule Set</md-tooltip> </md-icon> <md-icon class=remove-rule-set ng-if=!$ctrl.isFirst ng-click=$ctrl.removeRuleSet()> remove_circle_outline <md-tooltip>Remove Rule Set</md-tooltip> </md-icon> </div> </div> <div class=rule-outline ng-repeat="rule in $ctrl.data.rules" ng-style=$ctrl.style> <div ng-switch=rule.type> <rule ng-switch-when=rule data=rule fields=$ctrl.fields mode={{$ctrl.mode}} on-remove=$ctrl.removeRule(rule) operators=$ctrl.operators> </rule> <rule-set indent="$ctrl.indent + 1" is-first=false data=rule mode={{$ctrl.mode}} on-remove-rule-set=$ctrl.removeRule(rule) ng-switch-when=ruleSet fields=$ctrl.fields operators=$ctrl.operators> </rule-set> </div> </div> </div>'},function(e,t,l){"use strict";angular.module("queryBuilder.components").component("rule",{template:l(15),bindings:{data:"<?",fields:"<?",mode:"@",onRemove:"&",operators:"<?"},controller:[function(){var l=this;l.$onInit=function(){l.fields=void 0!==l.fields?l.fields:[],l.operators=l.operators||[{display:"=",value:"equals"},{display:"<",value:"less than"},{display:">",value:"greater than"}]},l.fieldSearch=function(t){return l.fields.filter(function(e){return-1<e.name.toLowerCase().indexOf(t.toLowerCase())})},l.searchTextChange=function(e){},l.selectedFieldChange=function(e){e&&e.values&&e.values.length&&(l.data.value="")},l.selectedValueChange=function(){},l.valueSearch=function(e){var t=l.fields.find(function(e){return e.id===l.data.field.id});return t?t.values:[]}}]})},function(e,t){e.exports='<div class=rule-container> <div layout=row> <md-input-container flex=20> <label>Field</label> <input required ng-model=$ctrl.data.field ng-if=!$ctrl.fields.length> <md-autocomplete ng-if=$ctrl.fields.length md-no-cache=true md-selected-item=$ctrl.data.field md-search-text-change=$ctrl.searchTextChange($ctrl.searchFieldText) md-search-text=$ctrl.searchFieldText md-selected-item-change=$ctrl.selectedFieldChange(item) md-items="item in $ctrl.fieldSearch($ctrl.searchFieldText)" md-item-text=item.name md-min-length=0 md-clear-button=false placeholder=Field> <md-item-template> <span md-highlight-text=$ctrl.searchFieldText md-highlight-flags=^i>{{item.name}}</span> </md-item-template> <md-not-found> No matches found. </md-not-found> </md-autocomplete> </md-input-container> <div flex=5></div> <md-input-container flex=15 ng-if="$ctrl.mode === \'build\'"> <label>Operator</label> <md-select ng-model=$ctrl.data.operator> <md-option ng-repeat="operator in $ctrl.operators" ng-value=operator.value> {{operator.display}} </md-option> </md-select> </md-input-container> <div flex=5></div> <md-input-container flex=20> <label>Value</label> <input required ng-model=$ctrl.data.value ng-if="$ctrl.data.field && !$ctrl.data.field.values"> <md-autocomplete ng-if="$ctrl.data.field && $ctrl.data.field.values && $ctrl.data.field.values.length && !$ctrl.data.field.multipleValues" md-no-cache=true md-selected-item=$ctrl.data.value md-search-text-change=$ctrl.searchTextChange($ctrl.searchValueText) md-search-text=$ctrl.searchValueText md-selected-item-change=$ctrl.selectedValueChange(item) md-items="item in $ctrl.valueSearch($ctrl.searchValueText)" md-item-text=item md-min-length=0 md-clear-button=false placeholder=Field> <md-item-template> <span md-highlight-text=$ctrl.searchValueText md-highlight-flags=^i>{{item}}</span> </md-item-template> <md-not-found> No matches found. </md-not-found> </md-autocomplete> <md-select ng-model=$ctrl.data.value ng-if="$ctrl.data.field && $ctrl.data.field.multipleValues" multiple=multiple> <md-option ng-value=value ng-repeat="value in $ctrl.data.field.values">{{value}}</md-option> </md-select> </md-input-container> <div flex=5></div> <md-input-container flex=15> <md-checkbox ng-model=$ctrl.data.caseSensitive ng-if="$ctrl.mode === \'build\'"> Case Sensitive </md-checkbox> <label ng-if="$ctrl.mode === \'entry\'">Treat as</label> <md-select ng-model=$ctrl.data.treatAs ng-if="$ctrl.mode === \'entry\'"> <md-option value=literal>Literal</md-option> <md-option value=regex>Regex</md-option> </md-select> </md-input-container> <div flex=5></div> <md-icon class=remove-rule flex=5 ng-click=$ctrl.onRemove() ng-if="$ctrl.mode === \'build\'"> remove_circle_outline <md-tooltip>Remove Rule</md-tooltip> </md-icon> </div> </div>'},function(e,t,r){"use strict";function l(e,t){var l=this;function i(e,t){e.close=function(){t.cancel()}}l.data={condition:"and",rules:[]},l.demoSwitches={demo1:!1,demo2:!1,demo3:!1,demo4:!1,demo5:!1},l.fields=e.getFilters(),l.filterSelected=function(){l.data.rules.push(l.selectedFilter)},l.openDialog=function(e){$mdDialog.show({controller:["$scope","$mdDialog",i],fullscreen:!0,template:r(18),clickOutsideToClose:!0,targetEvent:e})},l.operators=t.getOperators(),l.queryFilters=e.getPersistedFilters(),l.selectedFilter=null}angular.module("queryBuilder.demo",["ngRoute"]).config(["$routeProvider",function(e){e.when("/QueryBuilder/demo",{template:r(17),controller:["filterDataService","ruleDataService",l],controllerAs:"vm"})}]).controller("demoController",l)},function(e,t){e.exports='<md-card class=main-container layout-padding> <h2>Query Builder</h2> <p>Each section shows the builder with a different config/view set. Click the down arrow to expand.</p> <collapsible-panel switch=vm.demoSwitches.demo1 title="Query Builder with model" title-size=3></collapsible-panel> <query-builder ng-if=vm.demoSwitches.demo1 display-model=true></query-builder> <md-divider></md-divider> <collapsible-panel switch=vm.demoSwitches.demo2 title="Query Builder via dialog" title-size=3></collapsible-panel> <div ng-if=vm.demoSwitches.demo2> <md-button ng-click=vm.openDialog($event)>Click to open dialog</md-button> </div> <md-divider></md-divider> <collapsible-panel switch=vm.demoSwitches.demo3 title="Query Builder with single rule set" title-size=3></collapsible-panel> <query-builder ng-if=vm.demoSwitches.demo3 display-model=false single-rule-set=true initial-condition=and></query-builder> <md-divider></md-divider> <collapsible-panel switch=vm.demoSwitches.demo4 title="Query Builder with pre-defined fields, operators and values" title-size=3></collapsible-panel> <query-builder ng-if=vm.demoSwitches.demo4 display-model=false fields=vm.fields operators=vm.operators></query-builder> <md-divider></md-divider> <collapsible-panel switch=vm.demoSwitches.demo5 title="Using with queries" title-size=3></collapsible-panel> <div ng-if=vm.demoSwitches.demo5> <div layout=row> <md-select ng-model=vm.selectedFilter flex=50> <md-option ng-value=filter ng-repeat="filter in vm.queryFilters">{{filter.name}}</md-option> </md-select> <md-button ng-click=vm.filterSelected()>Add</md-button> </div> <query-builder ng-if=vm.data.rules.length data=vm.data display-model=true fields=vm.fields mode=entry> </query-builder> </div> </md-card> '},function(e,t){e.exports="<md-dialog class=demo-dialog> <md-toolbar> <div class=md-toolbar-tools> <h2>Query Builder</h2> </div> </md-toolbar> <md-dialog-content> <div class=md-dialog-content> <query-builder display-model=false></query-builder> </div> </md-dialog-content> <md-dialog-actions layout=row> <span flex></span> <md-button ng-click=close()>Close</md-button> </md-dialog-actions> </md-dialog>"}]);