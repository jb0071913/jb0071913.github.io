!function(o){var n={};function l(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=o,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,o){o(1),o(2),o(3),o(4),o(5),o(7),o(9),o(11),e.exports=o(13)},function(e,t,o){"use strict";angular.module("queryBuilder",["ngAnimate","ngRoute","ngMaterial","ngMessages","queryBuilder.services","queryBuilder.components","queryBuilder.demo"]).config(["$locationProvider","$routeProvider",function(e,t){e.hashPrefix("!"),t.otherwise({redirectTo:"/QueryBuilder/demo"})}])},function(e,t,o){"use strict";angular.module("queryBuilder.services",[])},function(e,t,o){"use strict";angular.module("queryBuilder.services").factory("ruleDataService",function(){return{getOperators:function(){return[{display:"=",value:"equals"},{display:"<",value:"less than"},{display:">",value:"greater than"}]}}})},function(e,t,o){"use strict";angular.module("queryBuilder.components",[])},function(e,t,o){"use strict";angular.module("queryBuilder.components").component("andOrSwitch",{template:o(6),bindings:{data:"<",variable:"@"},controller:function(){}})},function(e,t){e.exports='<md-radio-group ng-model=$ctrl.data.condition layout=row layout-align="start center"> <md-radio-button value=and>And</md-radio-button> <md-radio-button value=or>Or</md-radio-button> </md-radio-group>'},function(e,t,o){"use strict";angular.module("queryBuilder.components").component("queryBuilder",{template:o(8),bindings:{displayModel:"<?"},controller:[function(){var e=this;e.$onInit=function(){e.data={condition:"and",rules:[]}},e.showModel=!1}]})},function(e,t){e.exports='<div layout-padding class=query-builder> <rule-set is-first=true data=$ctrl.data></rule-set> <md-divider ng-if=$ctrl.displayModel></md-divider> <div ng-if=$ctrl.displayModel class=model-title layout=row layout-align="start start" flex=10> <md-icon flex=5 ng-if=!$ctrl.showModel ng-click="$ctrl.showModel = !$ctrl.showModel">keyboard_arrow_down</md-icon> <md-icon flex=5 ng-if=$ctrl.showModel ng-click="$ctrl.showModel = !$ctrl.showModel">keyboard_arrow_up</md-icon> <h4>{{$ctrl.showModel ? \'Hide\' : \'Show\'}} Model</h4> </div> <div ng-if="$ctrl.displayModel && $ctrl.showModel" class=model-container> <pre>{{$ctrl.data|json}}</pre> </div> </div>'},function(e,t,o){"use strict";angular.module("queryBuilder.components").component("ruleSet",{template:o(10),bindings:{data:"<?",indent:"<?",isFirst:"<?",onAddRule:"&",onAddRuleSet:"&",onRemoveRuleSet:"&",onModelUpdate:"&"},controller:[function(){var o=this;function t(){return o.indent+"-"+(o.data.rules.length+1)}o.addRule=function(){var e={id:t(),type:"rule",field:"",operator:"",value:""};o.data.rules.push(e),o.onAddRule&&o.onAddRule(),o.onModelUpdate()},o.addRuleSet=function(){var e={id:t(),type:"ruleSet",condition:"and",rules:[]};o.data.rules.push(e),o.onAddRuleSet&&o.onAddRuleSet(),o.onModelUpdate()},o.removeRule=function(t){var e=o.data.rules.findIndex(function(e){return e.id===t.id});o.data.rules.splice(e,1),o.onModelUpdate()},o.removeRuleSet=function(){o.onRemoveRuleSet&&o.onRemoveRuleSet()},o.$onInit=function(){o.indent||(o.indent=1),o.data||(o.data={condition:"and",rules:[]}),o.style={"margin-left":5*o.indent+"px"}}}]})},function(e,t){e.exports='<div class=rule-set-container> <div class=rule-set layout=row> <and-or-switch flex=90 layout-align="start center" data=$ctrl.data></and-or-switch> <div flex=10 layout-align="end center"> <md-icon class=add-rule ng-click=$ctrl.addRule()> add <md-tooltip>Add Rule</md-tooltip> </md-icon> <md-icon class=add-rule-set ng-click=$ctrl.addRuleSet()> add_circle_outline <md-tooltip>Add Rule Set</md-tooltip> </md-icon> <md-icon class=remove-rule-set ng-if=!$ctrl.isFirst ng-click=$ctrl.removeRuleSet()> remove_circle_outline <md-tooltip>Remove Rule Set</md-tooltip> </md-icon> </div> </div> <div class=rule-outline ng-repeat="rule in $ctrl.data.rules" ng-style=$ctrl.style> <div ng-switch=rule.type> <rule data=rule on-remove=$ctrl.removeRule(rule) ng-switch-when=rule></rule> <rule-set indent="$ctrl.indent + 1" is-first=false data=rule on-remove-rule-set=$ctrl.removeRule(rule) ng-switch-when=ruleSet on-model-update=$ctrl.onModelUpdate()> </rule-set> </div> </div> </div>'},function(e,t,o){"use strict";angular.module("queryBuilder.components").component("rule",{template:o(12),bindings:{data:"<?",onRemove:"&"},controller:["ruleDataService",function(e){var t=this;t.$onInit=function(){t.operators=e.getOperators()}}]})},function(e,t){e.exports='<div class=rule-container> <div layout=row> <md-input-container flex=20> <label>Field</label> <input required ng-model=$ctrl.data.field> </md-input-container> <div flex=5></div> <md-input-container flex=15> <label>Operator</label> <md-select ng-model=$ctrl.data.operator> <md-option ng-repeat="operator in $ctrl.operators" ng-value=operator.value> {{operator.display}} </md-option> </md-select> </md-input-container> <div flex=5></div> <md-input-container flex=20> <label>Value</label> <input required ng-model=$ctrl.data.value> </md-input-container> <div flex=5></div> <md-input-container flex=15> <md-checkbox ng-model=$ctrl.data.caseSensitive> Case Sensitive </md-checkbox> </md-input-container> <div flex=5></div> <md-icon class=remove-rule flex=5 ng-click=$ctrl.onRemove()> remove_circle_outline <md-tooltip>Remove Rule</md-tooltip> </md-icon> </div> </div>'},function(e,t,n){"use strict";function o(e,t){function o(e,t){e.close=function(){t.cancel()}}this.openDialog=function(e){t.show({controller:["$scope","$mdDialog",o],fullscreen:!0,template:n(15),clickOutsideToClose:!0,targetEvent:e})}}angular.module("queryBuilder.demo",["ngRoute"]).config(["$routeProvider",function(e){e.when("/QueryBuilder/demo",{template:n(14),controller:["$scope","$mdDialog",o],controllerAs:"vm"})}]).controller("demoController",o)},function(e,t){e.exports="<md-card class=main-container layout-padding> <h3>Query Builder</h3> <query-builder display-model=true></query-builder> <md-divider></md-divider> <h3>Query Builder Via Dialog</h3> <div> <md-button ng-click=vm.openDialog($event)>Click to open dialog</md-button> </div> </md-card> "},function(e,t){e.exports="<md-dialog class=demo-dialog> <md-toolbar> <div class=md-toolbar-tools> <h2>Query Builder</h2> </div> </md-toolbar> <md-dialog-content> <div class=md-dialog-content> <query-builder display-model=false></query-builder> </div> </md-dialog-content> <md-dialog-actions layout=row> <span flex></span> <md-button ng-click=close()>Close</md-button> </md-dialog-actions> </md-dialog>"}]);