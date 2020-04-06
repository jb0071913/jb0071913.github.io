!function(l){var i={};function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=l,r.c=i,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(l,i,function(e){return t[e]}.bind(null,i));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,l){l(1),l(2),l(3),l(4),l(5),l(6),l(8),l(10),l(12),l(14),e.exports=l(16)},function(e,t,l){"use strict";angular.module("queryBuilder",["ngAnimate","ngRoute","ngMaterial","ngMessages","queryBuilder.services","queryBuilder.components","queryBuilder.demo"]).config(["$locationProvider","$routeProvider",function(e,t){e.hashPrefix("!"),t.otherwise({redirectTo:"/QueryBuilder/demo"})}])},function(e,t,l){"use strict";angular.module("queryBuilder.services",[])},function(e,t,l){"use strict";angular.module("queryBuilder.services").factory("filterDataService",function(){return{getFilters:function(){for(var e=[{id:1,name:"Attribution",values:["COMMON","CAT","DOG"],options:{allowCaseSensitive:!1,multipleValues:!0}},{id:2,name:"Class",values:[],options:{allowCaseSensitive:!0}},{id:3,name:"Type",values:[],options:{allowCaseSensitive:!0}}],t=1;t<=100;t++)e[1].values.push("Class"+t),e[2].values.push("Type"+t);return e},getPersistedFilters:function(){return[{id:1,name:"Filter 1 - type filter",type:"ruleSet",condition:"and",rules:[{id:"1-1",type:"rule",field:"class",operator:"equals",value:"class1"},{id:"1-2",type:"rule",field:"type",operator:"equals",value:""}]},{id:2,name:"Filter 2 - class filter",type:"ruleSet",condition:"and",rules:[{id:"1-1",type:"rule",field:"class",operator:"equals",value:"",allowWildcards:!0},{id:"1-2",type:"rule",field:"rule",operator:"equals",value:"rule1"}]},{id:3,name:"Filter 3 - class & rule filter",type:"ruleSet",condition:"and",rules:[{id:"1-1",type:"rule",field:"class",operator:"equals",value:""},{id:"1-2",type:"rule",field:"rule",operator:"equals",value:""},{id:"1-3",type:"rule",field:"type",operator:"equals",value:"type1"}]}]}}})},function(e,t,l){"use strict";angular.module("queryBuilder.services").factory("ruleDataService",function(){return{getOperators:function(){return[{display:"Exact Match",value:"exact-match"},{display:"Regex",value:"regex"},{display:"Contains",value:"contains"},{display:"Starts with",value:"starts-with"}]}}})},function(e,t,l){"use strict";angular.module("queryBuilder.components",[])},function(e,t,l){"use strict";angular.module("queryBuilder.components").component("andOrSwitch",{template:l(7),bindings:{data:"<",disabled:"<?",withCriteria:"<?"},controller:function(){}})},function(e,t){e.exports='<md-radio-group ng-model=$ctrl.data.condition layout=row layout-align="start center" ng-disabled=$ctrl.disabled> <md-radio-button value=and ng-disabled="$ctrl.data.condition === \'criteria\' && $ctrl.data.rules.length"> And <md-tooltip>Apply logical AND</md-tooltip> </md-radio-button> <md-radio-button value=or ng-disabled="$ctrl.data.condition === \'criteria\' && $ctrl.data.rules.length"> Or <md-tooltip>Apply logical OR</md-tooltip> </md-radio-button> <md-radio-button ng-if=$ctrl.withCriteria ng-disabled="$ctrl.data.condition !== \'criteria\' && $ctrl.data.rules.length" value=criteria> Criteria <md-tooltip>A group of rules which are implicitly ANDed</md-tooltip> </md-radio-button> </md-radio-group>'},function(e,t,l){"use strict";angular.module("queryBuilder.components").component("collapsiblePanel",{template:l(9),bindings:{switch:"=",title:"@",titleSize:"<?"},controller:function(){}})},function(e,t){e.exports='<div class=collapsible-panel-container> <div ng-click="$ctrl.switch = !$ctrl.switch" layout=row layout-align="start start" flex> <md-icon flex=5 ng-if=!$ctrl.switch>keyboard_arrow_down</md-icon> <md-icon flex=5 ng-if=$ctrl.switch>keyboard_arrow_up</md-icon> <h4 ng-if="$ctrl.titleSize === 4 || !$ctrl.titleSize">{{$ctrl.title}}</h4> <h3 ng-if="$ctrl.titleSize === 3">{{$ctrl.title}}</h3> </div> </div>'},function(e,t,l){"use strict";angular.module("queryBuilder.components").component("queryBuilder",{template:l(11),bindings:{childRule:"<?",childRuleSet:"<?",conditionOptions:"<?",data:"=?",displayModel:"<?",fields:"<?",initialCondition:"@?",mode:"@?",operators:"<?",preDefinedRules:"<?",singleRuleSet:"<?"},controller:[function(){var e=this;e.$onInit=function(){e.data=e.data||{condition:"and",rules:[]},e.mode=e.mode||"build",e.conditionOptions=e.conditionOptions||{and:{rule:!0,ruleSet:!0},or:{rule:!0,ruleSet:!0},criteria:{rule:!1,ruleSet:!0}}},e.showModel=!1}]})},function(e,t){e.exports='<div layout-padding class=query-builder> <rule-set condition-options=$ctrl.conditionOptions default-child-rule=$ctrl.childRule default-child-rule-set=$ctrl.childRuleSet data=$ctrl.data fields=$ctrl.fields initial-condition={{$ctrl.initialCondition}} is-first=true mode={{$ctrl.mode}} operators=$ctrl.operators pre-defined-rules=$ctrl.preDefinedRules single-rule-set=$ctrl.singleRuleSet> </rule-set> <collapsible-panel ng-if=$ctrl.displayModel switch=$ctrl.showModel title=Model title-size=4> </collapsible-panel> <div ng-if="$ctrl.displayModel && $ctrl.showModel" class=model-container> <pre>{{$ctrl.data|json}}</pre> </div> </div>'},function(e,t,l){"use strict";angular.module("queryBuilder.components").component("ruleSet",{template:l(13),bindings:{data:"<?",conditionOptions:"<?",defaultChildRule:"<?",defaultChildRuleSet:"<?",fields:"<?",indent:"<?",initialCondition:"@?",isFirst:"<?",mode:"@",onAddRule:"&",onAddRuleSet:"&",onRemoveRuleSet:"&",operators:"<?",preDefinedRules:"<?",singleRuleSet:"<?"},controller:[function(){var l=this;function e(){l.data.rules=l.data.rules.filter(function(e){return"ruleSet"===e.type||"rule"===e.type&&0===e.value.length})}function i(){return l.indent+"-"+(l.data.rules.length+1)}l.$onInit=function(){l.indent||(l.indent=1),l.data||(l.data={condition:"and",rules:[]},l.initialCondition&&(l.data.condition=l.initialCondition)),l.style={"margin-left":5*l.indent+"px"},"entry"===l.mode&&e()},l.addRule=function(){var e=function(){var e,t=i();e=l.defaultChildRule?angular.copy(l.defaultChildRule):{type:"rule",field:"",operator:"",value:""};return e.id=t,e}();l.data.rules.push(e),l.onAddRule&&l.onAddRule()},l.addRuleSet=function(){var e=function(){var e,t=i();e=l.defaultChildRuleSet?angular.copy(l.defaultChildRuleSet):{type:"ruleSet",condition:"and",rules:[]};return e.id=t,e}();l.data.rules.push(e),l.onAddRuleSet&&l.onAddRuleSet()},l.conditionOptionAllowed=function(e,t){return l.conditionOptions[e][t]},l.removeRule=function(t){var e=l.data.rules.findIndex(function(e){return e.id===t.id});l.data.rules.splice(e,1)},l.removeRuleSet=function(){l.onRemoveRuleSet&&l.onRemoveRuleSet()},l.selectedFilterChanged=function(){l.data.name=l.selectedFilter.name,l.data.type=l.selectedFilter.type,l.data.rules=l.data.rules.concat(angular.copy(l.selectedFilter.rules)),e()}}]})},function(e,t){e.exports='<div class=rule-set-container> <div class=rule-set layout=row> <and-or-switch ng-if="$ctrl.mode === \'build\' || $ctrl.isFirst" flex=90 layout-align="start center" data=$ctrl.data with-criteria=!$ctrl.isFirst> </and-or-switch> <div ng-if="$ctrl.mode === \'entry\' && !$ctrl.isFirst && $ctrl.selectedFilter" flex=90 layout-align="start center"> {{$ctrl.data.name}} </div> <div ng-if="$ctrl.mode === \'entry\' && !$ctrl.isFirst && !$ctrl.selectedFilter" flex=90> <md-select ng-model=$ctrl.selectedFilter placeholder="Choose a filter" aria-label="Choose a filter" ng-change=$ctrl.selectedFilterChanged()> <md-option ng-value=filter ng-repeat="filter in $ctrl.preDefinedRules">{{filter.name}}</md-option> </md-select> </div> <div flex=10 layout-align="end center"> <md-icon class=add-rule ng-click="$ctrl.conditionOptionAllowed($ctrl.data.condition, \'rule\') && $ctrl.addRule()" ng-disabled="!$ctrl.conditionOptionAllowed($ctrl.data.condition, \'rule\')" ng-if="$ctrl.mode === \'build\' || ($ctrl.mode === \'entry\' && $ctrl.isFirst)"> add <md-tooltip>Add Rule</md-tooltip> </md-icon> <md-icon class=add-rule-set ng-click="$ctrl.conditionOptionAllowed($ctrl.data.condition, \'ruleSet\') && $ctrl.addRuleSet()" ng-disabled="!$ctrl.conditionOptionAllowed($ctrl.data.condition, \'ruleSet\')" ng-if="$ctrl.mode === \'build\'"> add_circle_outline <md-tooltip>Add Rule Set</md-tooltip> </md-icon> <md-icon class=remove-rule-set ng-if=!$ctrl.isFirst ng-click=$ctrl.removeRuleSet()> remove_circle_outline <md-tooltip>Remove Rule Set</md-tooltip> </md-icon> </div> </div> <div class=rule-outline ng-repeat="rule in $ctrl.data.rules" ng-style=$ctrl.style> <div ng-switch=rule.type> <rule ng-switch-when=rule data=rule fields=$ctrl.fields mode={{$ctrl.mode}} on-remove=$ctrl.removeRule(rule) operators=$ctrl.operators> </rule> <rule-set indent="$ctrl.indent + 1" is-first=false data=rule mode={{$ctrl.mode}} condition-options=$ctrl.conditionOptions initial-condition={{$ctrl.initialCondition}} on-remove-rule-set=$ctrl.removeRule(rule) ng-switch-when=ruleSet fields=$ctrl.fields operators=$ctrl.operators pre-defined-rules=$ctrl.preDefinedRules default-child-rule-set=$ctrl.defaultChildRuleSet> </rule-set> </div> </div> </div>'},function(e,t,l){"use strict";angular.module("queryBuilder.components").component("rule",{template:l(15),bindings:{data:"<?",fields:"<?",mode:"@",onRemove:"&",operators:"<?"},controller:[function(){var l=this;l.$onInit=function(){l.fields=void 0!==l.fields?l.fields:[],l.operators=l.operators||[{display:"=",value:"equals"},{display:"<",value:"less than"},{display:">",value:"greater than"}],l.data.operator=l.operators[0].value},l.fieldSearch=function(t){return l.fields.filter(function(e){return-1<e.name.toLowerCase().indexOf(t.toLowerCase())})},l.searchTextChange=function(e){},l.selectedFieldChange=function(e){e&&e.values&&e.values.length&&(l.data.value="")},l.selectedValueChange=function(){},l.valueSearch=function(t){return l.data.field.values.filter(function(e){return-1<e.toLowerCase().indexOf(t.toLowerCase())})}}]})},function(e,t){e.exports='<div class=rule-container> <div layout=row ng-if="$ctrl.mode === \'build\'"> <md-input-container flex=20> <label>Field</label> <input required ng-model=$ctrl.data.field ng-if=!$ctrl.fields.length> <md-autocomplete ng-if=$ctrl.fields.length md-no-cache=true md-selected-item=$ctrl.data.field md-search-text-change=$ctrl.searchTextChange($ctrl.searchFieldText) md-search-text=$ctrl.searchFieldText md-selected-item-change=$ctrl.selectedFieldChange(item) md-items="item in $ctrl.fieldSearch($ctrl.searchFieldText)" md-item-text=item.name md-min-length=0 md-clear-button=false placeholder=Field> <md-item-template> <span md-highlight-text=$ctrl.searchFieldText md-highlight-flags=^i>{{item.name}}</span> </md-item-template> <md-not-found> No matches found. </md-not-found> </md-autocomplete> </md-input-container> <div flex=5></div> <md-input-container flex=10> <label>Operator</label> <md-select ng-model=$ctrl.data.operator> <md-option ng-repeat="operator in $ctrl.operators" ng-value=operator.value> {{operator.display}} </md-option> </md-select> </md-input-container> <div flex=5></div> <md-input-container flex=25> <label>Value</label> <input required ng-model=$ctrl.data.value ng-if="$ctrl.data.field && !$ctrl.data.field.values"> <md-autocomplete ng-if="$ctrl.data.field && $ctrl.data.field.values && $ctrl.data.field.values.length && !$ctrl.data.field.options.multipleValues" md-no-cache=true md-selected-item=$ctrl.data.value md-search-text-change=$ctrl.searchTextChange($ctrl.searchValueText) md-search-text=$ctrl.searchValueText md-selected-item-change=$ctrl.selectedValueChange(item) md-items="item in $ctrl.valueSearch($ctrl.searchValueText)" md-item-text=item md-min-length=0 md-clear-button=false placeholder="Value (leave blank if this is an user input)"> <md-item-template> <span md-highlight-text=$ctrl.searchValueText md-highlight-flags=i>{{item}}</span> </md-item-template> </md-autocomplete> <md-select ng-model=$ctrl.data.value ng-if="$ctrl.data.field && $ctrl.data.field.options.multipleValues" multiple=multiple> <md-option ng-value=value ng-repeat="value in $ctrl.data.field.values">{{value}}</md-option> </md-select> </md-input-container> <div flex="{{!$ctrl.data.value || $ctrl.data.value.length === 0 ? 5 : 25}}"></div> <md-input-container flex=10 ng-if="!$ctrl.data.value || $ctrl.data.value.length === 0"> <md-checkbox ng-model=$ctrl.data.allowWildcards> Allow Wilcards </md-checkbox> </md-input-container> <md-input-container flex=10 ng-if="!$ctrl.data.value || $ctrl.data.value.length === 0"> <md-checkbox ng-model=$ctrl.data.caseSensitive> Case Sensitive </md-checkbox> </md-input-container> <div flex=5></div> <md-icon class=remove-rule flex=5 ng-click=$ctrl.onRemove()> remove_circle_outline <md-tooltip>Remove Rule</md-tooltip> </md-icon> </div> <div layout=row ng-if="$ctrl.mode === \'entry\'"> <md-input-container flex=40> <label>{{$ctrl.data.field}}</label> <textarea ng-model=$ctrl.data.value rows=3></textarea> </md-input-container> <div flex=20></div> <md-input-container flex=20> <label>Treat as</label> <md-select ng-model=$ctrl.data.treatAs> <md-option value=literal>Literal</md-option> <md-option value=regex>Regex</md-option> <md-option value=wildcards ng-if=::$ctrl.data.allowWildcards>Allow Wildcards</md-option> </md-select> </md-input-container> </div> </div>'},function(e,t,n){"use strict";function l(t,e,l){var i=this;function r(e,t){e.close=function(){t.cancel()}}i.conditionOptions={and:{rule:!1,ruleSet:!0},or:{rule:!1,ruleSet:!0},criteria:{rule:!0,ruleSet:!1}},i.entryData={condition:"and",rules:[{type:"ruleSet",rules:[]}]},i.defaultChildRule={condition:"criteria",type:"ruleSet",rules:[]},i.defaultChildRuleSet={condition:"criteria",type:"ruleSet",rules:[]},i.demoSwitches={demo1:!1,demo2:!1,demo3:!1,demo4:!1,demo5:!1},i.entryConditionOptions={and:{rule:!0,ruleSet:!1},or:{rule:!0,ruleSet:!1},criteria:{rule:!1,ruleSet:!1}},i.fields=e.getFilters(),i.filterSelected=function(){i.data.rules.push(angular.copy(i.selectedFilter))},i.openDialog=function(e){t.show({controller:["$scope","$mdDialog",r],fullscreen:!0,template:n(18),clickOutsideToClose:!0,targetEvent:e})},i.operators=l.getOperators(),i.queryFilters=e.getPersistedFilters(),i.selectedFilter=null}angular.module("queryBuilder.demo",["ngRoute"]).config(["$routeProvider",function(e){e.when("/QueryBuilder/demo",{template:n(17),controller:["$mdDialog","filterDataService","ruleDataService",l],controllerAs:"vm"})}]).controller("demoController",l)},function(e,t){e.exports='<md-card class=main-container layout-padding> <h2>Query Builder</h2> <p>Each section shows the builder with a different config/view set. Click the down arrow to expand.</p> <collapsible-panel switch=vm.demoSwitches.demo4 title="Filter builder (using build mode)" title-size=3></collapsible-panel> <query-builder ng-if=vm.demoSwitches.demo4 child-rule-set=vm.defaultChildRuleSet condition-options=vm.conditionOptions display-model=false fields=vm.fields initial-condition=and mode=build operators=vm.operators> </query-builder> <md-divider></md-divider> <collapsible-panel switch=vm.demoSwitches.demo5 title="Query form (using entry mode)" title-size=3></collapsible-panel> <div ng-if=vm.demoSwitches.demo5> <query-builder child-rule=vm.defaultChildRule condition-options=vm.entryConditionOptions data=vm.entryData display-model=false fields=vm.fields mode=entry pre-defined-rules=vm.queryFilters> </query-builder> </div> </md-card> '},function(e,t){e.exports="<md-dialog class=demo-dialog> <md-toolbar> <div class=md-toolbar-tools> <h2>Query Builder</h2> </div> </md-toolbar> <md-dialog-content> <div class=md-dialog-content> <query-builder display-model=false></query-builder> </div> </md-dialog-content> <md-dialog-actions layout=row> <span flex></span> <md-button ng-click=close()>Close</md-button> </md-dialog-actions> </md-dialog>"}]);