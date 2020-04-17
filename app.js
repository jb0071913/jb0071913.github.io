/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nangular.module('queryBuilder', [\r\n  'ngAnimate',\r\n  'ngRoute',\r\n  'ngMaterial',\r\n  'ngMessages',\r\n  'angular-uuid',\r\n  'queryBuilder.services',\r\n  'queryBuilder.components',\r\n  'queryBuilder.demo'\r\n]).\r\nconfig(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {\r\n  $locationProvider.hashPrefix('!');\r\n  $routeProvider.otherwise({redirectTo: '/QueryBuilder/demo'});\r\n}]);\r\n\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./app/components/and-or-switch.component.html":
/*!*****************************************************!*\
  !*** ./app/components/and-or-switch.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<md-radio-group ng-model=\\\"$ctrl.data.condition\\\" layout=\\\"row\\\" layout-align=\\\"start center\\\"\\n                ng-if=\\\"$ctrl.data.rules.length > 1\\\"\\n                ng-disabled=\\\"$ctrl.disabled\\\">\\n    <md-radio-button value=\\\"and\\\" \\n                     ng-disabled=\\\"$ctrl.disableAnd || ($ctrl.data.condition === 'criteria' && $ctrl.data.rules.length)\\\">\\n        {{$ctrl.displayOptions ? $ctrl.displayOptions.and : 'And'}}\\n        <md-tooltip>Apply logical AND</md-tooltip>\\n    </md-radio-button>\\n    <md-radio-button value=\\\"or\\\" \\n                     ng-disabled=\\\"$ctrl.disableOr || ($ctrl.data.condition === 'criteria' && $ctrl.data.rules.length)\\\">\\n        {{$ctrl.displayOptions ? $ctrl.displayOptions.or : 'Or'}}\\n        <md-tooltip>Apply logical OR</md-tooltip>\\n    </md-radio-button>\\n</md-radio-group>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./app/components/and-or-switch.component.html?");

/***/ }),

/***/ "./app/components/and-or-switch.component.js":
/*!***************************************************!*\
  !*** ./app/components/and-or-switch.component.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('queryBuilder.components')\n.component('andOrSwitch', {\n    template: __webpack_require__(/*! ./and-or-switch.component.html */ \"./app/components/and-or-switch.component.html\"),\n    bindings: {\n        data: '<',\n        disableAnd: '<?',\n        disableOr: '<?',\n        disabled: '<?',\n        displayOptions: '<?'\n    },\n    controller: function() {\n        var vm = this;\n    }\n});\n\n//# sourceURL=webpack:///./app/components/and-or-switch.component.js?");

/***/ }),

/***/ "./app/components/collapsible-panel.component.html":
/*!*********************************************************!*\
  !*** ./app/components/collapsible-panel.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div class=\\\"collapsible-panel-container\\\">\\n    <div ng-click=\\\"$ctrl.switch = !$ctrl.switch\\\" layout=\\\"row\\\" layout-align=\\\"start start\\\" flex>\\n        <md-icon flex=\\\"5\\\" ng-if=\\\"!$ctrl.switch\\\">keyboard_arrow_down</md-icon>\\n        <md-icon flex=\\\"5\\\" ng-if=\\\"$ctrl.switch\\\">keyboard_arrow_up</md-icon>\\n        <h4 ng-if=\\\"$ctrl.titleSize === 4 || !$ctrl.titleSize\\\">{{$ctrl.title}}</h4>\\n        <h3 ng-if=\\\"$ctrl.titleSize === 3\\\">{{$ctrl.title}}</h3>\\n    </div>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./app/components/collapsible-panel.component.html?");

/***/ }),

/***/ "./app/components/collapsible-panel.component.js":
/*!*******************************************************!*\
  !*** ./app/components/collapsible-panel.component.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('queryBuilder.components')\n.component('collapsiblePanel', {\n    template: __webpack_require__(/*! ./collapsible-panel.component.html */ \"./app/components/collapsible-panel.component.html\"),\n    bindings: {\n        switch: '=',\n        title: '@',\n        titleSize: '<?'\n    },\n    controller: function() {\n        var vm = this;\n    }\n});\n\n//# sourceURL=webpack:///./app/components/collapsible-panel.component.js?");

/***/ }),

/***/ "./app/components/components.module.js":
/*!*********************************************!*\
  !*** ./app/components/components.module.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('queryBuilder.components', []);\n\n//# sourceURL=webpack:///./app/components/components.module.js?");

/***/ }),

/***/ "./app/components/query-builder.component.html":
/*!*****************************************************!*\
  !*** ./app/components/query-builder.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div layout-padding class=\\\"query-builder\\\">\\n    <rule-set allow-empty-rules=\\\"$ctrl.allowEmptyRules\\\"\\n              condition-options=\\\"$ctrl.conditionOptions\\\"\\n              default-child-rule=\\\"$ctrl.childRule\\\"\\n              default-child-rule-set=\\\"$ctrl.childRuleSet\\\"\\n              data=\\\"$ctrl.data\\\"\\n              display-options=\\\"$ctrl.displayOptions\\\"\\n              fields=\\\"$ctrl.fields\\\"\\n              initial-condition=\\\"{{$ctrl.initialCondition}}\\\"\\n              is-first=\\\"true\\\"\\n              mix-rules=\\\"$ctrl.mixRules\\\"\\n              mode=\\\"{{$ctrl.mode}}\\\"\\n              operators=\\\"$ctrl.operators\\\"\\n              pre-defined-rules=\\\"$ctrl.preDefinedRules\\\"\\n              single-rule-set=\\\"$ctrl.singleRuleSet\\\">\\n    </rule-set>\\n    <collapsible-panel ng-if=\\\"$ctrl.displayOptions.includeModel\\\"\\n                       switch=\\\"$ctrl.showModel\\\"\\n                       title=\\\"Model\\\"\\n                       title-size=\\\"4\\\">\\n    </collapsible-panel>\\n    <div ng-if=\\\"$ctrl.displayOptions.includeModel && $ctrl.showModel\\\" class=\\\"model-container\\\">\\n        <pre>{{$ctrl.data|json}}</pre>\\n    </div>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./app/components/query-builder.component.html?");

/***/ }),

/***/ "./app/components/query-builder.component.js":
/*!***************************************************!*\
  !*** ./app/components/query-builder.component.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A component to allow the construct of both simple and complex filters.\n * \n * The bindings are:\n * @param {boolean} allowEmptyRules Indicates if empty rules are allowed. Defaults to false.\n */\nangular.module('queryBuilder.components')\n.component('queryBuilder', {\n    template: __webpack_require__(/*! ./query-builder.component.html */ \"./app/components/query-builder.component.html\"),\n    bindings: {\n        allowEmptyRules: '<?',\n        childRule: '<?',\n        childRuleSet: '<?',\n        conditionOptions: '<?',\n        data: '=?',\n        displayOptions: '<?',\n        fields: '<?',\n        initialCondition: '@?',\n        mixRules: '<?',\n        mode: '@?',\n        operators: '<?',\n        preDefinedRules: '<?',\n        singleRuleSet: '<?'\n    },\n    controller: [queryBuilderController]\n});\n\nfunction queryBuilderController() {\n    var vm = this;\n    vm.$onInit = onInit;\n    \n    /**\n     * Initialisation of this component.\n     */\n    function onInit() {\n        if (vm.allowEmptyRules === undefined) {\n            vm.allowEmptyRules = true;\n        }\n        vm.data = vm.data || {\n            condition: 'and',\n            rules: []\n        };\n        vm.conditionOptions = vm.conditionOptions || {\n            'and': {\n                rule: true,\n                ruleSet: true\n            },\n            'or': {\n                rule: true,\n                ruleSet: true\n            },\n            'criteria': {\n                rule: false,\n                ruleSet: true\n            }\n        };\n        vm.displayOptions = vm.displayOptions || {\n            entityTerms: {\n                rule: 'Rule',\n                ruleSet: 'Rule Set'\n            },\n            includeModel: false,\n            logicalTerms: {\n                and: 'AND',\n                or: 'OR'\n            },\n            useTextButtons: false\n        };\n        vm.mode = vm.mode || 'build';\n        vm.showModel = false;\n    }\n\n}\n\n//# sourceURL=webpack:///./app/components/query-builder.component.js?");

/***/ }),

/***/ "./app/components/rule-set.component.html":
/*!************************************************!*\
  !*** ./app/components/rule-set.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div class=\\\"rule-set-container\\\">\\n    <div class=\\\"rule-set\\\" layout=\\\"row\\\">\\n        <div flex=\\\"50\\\" layout=\\\"row\\\" layout-align=\\\"start center\\\">\\n            <and-or-switch ng-if=\\\"$ctrl.mode === 'build' || ($ctrl.mode === 'entry' && $ctrl.data.condition !== 'criteria')\\\"\\n                           data=\\\"$ctrl.data\\\"\\n                           display-options=\\\"$ctrl.displayOptions.logicalTerms\\\"\\n                           disable-and=\\\"$ctrl.disableAnd\\\"\\n                           disable-or=\\\"$ctrl.disableOr\\\">\\n            </and-or-switch>\\n            <div ng-if=\\\"$ctrl.mode === 'entry' && !$ctrl.isFirst && $ctrl.selectedFilter\\\">\\n                {{$ctrl.data.name}}\\n            </div>\\n            <div ng-if=\\\"$ctrl.isFirst && !$ctrl.data.rules.length\\\">\\n                Please use the buttons on the right to add a {{$ctrl.displayOptions.entityTerms.rule|| 'Rule'}}/{{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}\\n            </div>\\n            <div ng-if=\\\"!$ctrl.isFirst && $ctrl.data.condition !== 'criteria' && $ctrl.data.rules.length < 2\\\">\\n                A {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}} must have 2 or more children\\n            </div>\\n            <div flex=\\\"100\\\" ng-if=\\\"$ctrl.mode === 'entry' && $ctrl.data.type === 'ruleSet' && $ctrl.data.condition === 'criteria' && !$ctrl.isFirst && !$ctrl.selectedFilter\\\">\\n                <md-select ng-model=\\\"$ctrl.selectedFilter\\\" placeholder=\\\"Choose a filter\\\" aria-label=\\\"Choose a filter\\\" ng-change=\\\"$ctrl.selectedFilterChanged()\\\">\\n                    <md-option ng-value=\\\"filter\\\" ng-repeat=\\\"filter in $ctrl.preDefinedRules\\\">{{filter.name}}</md-option>\\n                </md-select>\\n            </div>\\n        </div>\\n        <div flex=\\\"50\\\" layout=\\\"row\\\" layout-align=\\\"end center\\\">\\n            <div>\\n                <md-icon class=\\\"add-rule\\\"\\n                         ng-click=\\\"$ctrl.checkCondition($ctrl.data.condition, 'rule', 'enable') && $ctrl.addRule()\\\" \\n                         ng-disabled=\\\"!$ctrl.checkCondition($ctrl.data.condition, 'rule', 'enable')\\\"\\n                         ng-if=\\\"!$ctrl.displayOptions.useTextButtons && $ctrl.checkCondition($ctrl.data.condition, 'rule', 'render')\\\">\\n                    add\\n                    <md-tooltip>Add {{$ctrl.displayOptions.entityTerms.rule || 'Rule'}}</md-tooltip>\\n                </md-icon>\\n            </div>\\n            <div>\\n                <md-button class=\\\"md-small md-raised add-rule\\\"\\n                           ng-click=\\\"$ctrl.checkCondition($ctrl.data.condition, 'rule', 'enable') && $ctrl.addRule()\\\" \\n                           ng-disabled=\\\"!$ctrl.checkCondition($ctrl.data.condition, 'rule', 'enable')\\\"\\n                           ng-if=\\\"$ctrl.displayOptions.useTextButtons && $ctrl.checkCondition($ctrl.data.condition, 'rule', 'render')\\\">\\n                    + {{$ctrl.displayOptions.entityTerms.rule|| 'Rule'}}\\n                    <md-tooltip>Add {{$ctrl.displayOptions.entityTerms.rule || 'Rule'}}</md-tooltip>\\n                </md-button>\\n            </div>\\n            <div>\\n                <md-icon class=\\\"add-rule-set\\\" \\n                         ng-click=\\\"$ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'enable') && $ctrl.addRuleSet()\\\"\\n                         ng-disabled=\\\"!$ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'enable')\\\" \\n                         ng-if=\\\"!$ctrl.displayOptions.useTextButtons && $ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'render')\\\">\\n                    add_circle_outline\\n                    <md-tooltip>Add {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}</md-tooltip>\\n                </md-icon>\\n            </div>\\n            <div>\\n                <md-button class=\\\"md-small md-raised add-rule-set\\\" \\n                         ng-click=\\\"$ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'enable') && $ctrl.addRuleSet()\\\"\\n                         ng-disabled=\\\"!$ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'enable')\\\" \\n                         ng-if=\\\"$ctrl.displayOptions.useTextButtons && $ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'render')\\\">\\n                    + {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}\\n                    <md-tooltip>Add {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}</md-tooltip>\\n                </md-button>\\n            </div>\\n            <div>\\n                <md-icon class=\\\"remove-rule-set\\\" \\n                         ng-if=\\\"!$ctrl.isFirst && !$ctrl.displayOptions.useTextButtons\\\" \\n                         ng-click=\\\"$ctrl.removeRuleSet()\\\">\\n                    remove_circle_outline\\n                    <md-tooltip>Remove {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}</md-tooltip>\\n                </md-icon>\\n            </div>\\n            <div>\\n                <md-button class=\\\"md-small md-raised remove-rule-set\\\"\\n                         ng-if=\\\"!$ctrl.isFirst && $ctrl.displayOptions.useTextButtons\\\" \\n                         ng-click=\\\"$ctrl.removeRuleSet()\\\">\\n                    X\\n                    <md-tooltip>Remove {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}</md-tooltip>\\n                </md-button>\\n            </div>\\n        </div>\\n    </div>\\n    <div class=\\\"child-rule-container\\\" ng-class=\\\"{'rule-connector': $ctrl.data.rules.length > 1}\\\" ng-repeat=\\\"rule in $ctrl.data.rules\\\">\\n        <div ng-switch=\\\"rule.type\\\">\\n            <rule ng-switch-when=\\\"rule\\\"\\n                  allow-empty=\\\"$ctrl.allowEmptyRules\\\"\\n                  data=\\\"rule\\\"\\n                  fields=\\\"$ctrl.fields\\\"\\n                  mode=\\\"{{$ctrl.mode}}\\\"\\n                  on-remove=\\\"$ctrl.removeRule(rule)\\\"\\n                  operators=\\\"$ctrl.operators\\\"\\n                  options=\\\"$ctrl.displayOptions\\\">\\n            </rule>\\n            <rule-set ng-switch-when=\\\"ruleSet\\\"\\n                      allow-empty-rules=\\\"$ctrl.allowEmptyRules\\\"\\n                      condition-options=\\\"$ctrl.conditionOptions\\\"\\n                      default-child-rule=\\\"$ctrl.defaultChildRule\\\"\\n                      default-child-rule-set=\\\"$ctrl.defaultChildRuleSet\\\"\\n                      data=\\\"rule\\\"\\n                      display-options=\\\"$ctrl.displayOptions\\\"\\n                      indent=\\\"$ctrl.indent + 1\\\"\\n                      is-first=\\\"false\\\"\\n                      fields=\\\"$ctrl.fields\\\"\\n                      initial-condition=\\\"{{$ctrl.initialCondition}}\\\"\\n                      mix-rules=\\\"$ctrl.mixRules\\\"\\n                      mode=\\\"{{$ctrl.mode}}\\\"\\n                      on-remove-rule-set=\\\"$ctrl.removeRule(rule)\\\"\\n                      operators=\\\"$ctrl.operators\\\"\\n                      pre-defined-rules=\\\"$ctrl.preDefinedRules\\\">\\n            </rule-set>\\n        </div>\\n    </div>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./app/components/rule-set.component.html?");

/***/ }),

/***/ "./app/components/rule-set.component.js":
/*!**********************************************!*\
  !*** ./app/components/rule-set.component.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A rule set is essentially a collection of rules, wrapped with a logical operator (AND/OR).\n * \n * The bindings are:\n * @param {boolean} allowEmptyRules Indicates if empty rules are allowed. Defaults to false.\n */\nangular.module('queryBuilder.components')\n.component('ruleSet', {\n    template: __webpack_require__(/*! ./rule-set.component.html */ \"./app/components/rule-set.component.html\"),\n    bindings: {\n        allowEmptyRules: '<?',\n        data: '<?',\n        displayOptions: '<?',\n        conditionOptions: '<?',\n        defaultChildRule: '<?',\n        defaultChildRuleSet: '<?',\n        fields: '<?',\n        indent: '<?',\n        initialCondition: '@?',\n        isFirst: '<?',\n        mixRules: '<?',\n        mode: '@',\n        onAddRule: '&',\n        onAddRuleSet: '&',\n        onRemoveRuleSet: '&',\n        operators: '<?',\n        preDefinedRules: '<?',\n        singleRuleSet: '<?'\n    },\n    controller: ['uuid', ruleSetController]\n});\n\nfunction ruleSetController(uuid) {\n    var vm = this;\n    vm.$onInit = onInit;\n    vm.addRule = addRule;\n    vm.addRuleSet = addRuleSet;\n    vm.checkCondition = checkCondition;\n    vm.removeRule = removeRule;\n    vm.removeRuleSet = removeRuleSet;\n    vm.savedConditionOptions;\n    vm.selectedFilterChanged = selectedFilterChanged;\n\n    /**\n     * Initialisation of this component.\n     */\n    function onInit() {\n        if (!vm.indent) {\n            vm.indent = 1;\n        }\n\n        if (vm.allowEmptyRules === undefined) {\n            vm.allowEmptyRules = true;\n        }\n\n        if (vm.mixRules === undefined) {\n            vm.mixRules = true;\n        }\n        \n        if (!vm.data) {\n            vm.data = {\n                condition: 'and',\n                rules: []\n            };\n            // If an initial condition has been passed, use it\n            if (vm.initialCondition) {\n                vm.data.condition = vm.initialCondition;\n            }\n        }\n\n        vm.disableAnd = false;\n        vm.disableOr = false;\n\n        // Remove rules that do not require input if the mode is \"entry\"\n        if (vm.mode === 'entry') {\n            _filterRules();\n        }\n\n        vm.localConditionOptions = angular.copy(vm.conditionOptions);\n\n        if (vm.data.rules.length && vm.data.condition && !vm.mixRules) {\n            var rule = vm.data.rules[0];\n            if (rule.type === 'rule') {\n                vm.localConditionOptions[vm.data.condition]['ruleSet'].enable = false;\n                _applyConditionCheck('rule');\n            } else {\n                vm.localConditionOptions[vm.data.condition]['rule'].enable = false;\n                _applyConditionCheck('ruleSet');\n            }\n        }\n    }\n\n    function addRule() {\n        var rule = _getRuleTemplate();\n        vm.data.rules.push(rule);\n\n        if (!vm.mixRules) {\n            vm.localConditionOptions[vm.data.condition]['ruleSet'].enable = false;\n            _applyConditionCheck('rule');\n        }\n\n        if (vm.onAddRule) {\n            vm.onAddRule();\n        }\n    }\n\n    function addRuleSet() {\n        var ruleSet = _getRuleSetTemplate();\n        vm.data.rules.push(ruleSet);\n\n        if (!vm.mixRules) {\n            vm.localConditionOptions[vm.data.condition]['rule'].enable = false;\n            _applyConditionCheck('ruleSet');\n        }\n\n        if (vm.onAddRuleSet) {\n            vm.onAddRuleSet();\n        }\n    }\n\n    function checkCondition(condition, option, property) {\n        if (typeof vm.localConditionOptions[condition][option] === 'boolean') {\n            return vm.localConditionOptions[condition][option];\n        } else {\n            return vm.localConditionOptions[condition][option] && vm.localConditionOptions[condition][option][property];\n        }\n    }\n\n    function removeRule(rule) {\n        var index = vm.data.rules.findIndex(function(r) {\n            return r.id === rule.id;\n        });\n        vm.data.rules.splice(index, 1);\n\n        if (!vm.data.rules.length) {\n            vm.localConditionOptions = angular.copy(vm.conditionOptions);\n            vm.disableAnd = false;\n            vm.disableOr = false;\n        }\n    }\n\n    function removeRuleSet() {\n        if (vm.onRemoveRuleSet) {\n            vm.onRemoveRuleSet();\n        }\n    }\n\n    function selectedFilterChanged() {\n        vm.data.name = vm.selectedFilter.name;\n        vm.data.type = vm.selectedFilter.type;\n        vm.data.rules = vm.data.rules.concat(angular.copy(vm.selectedFilter.rules));\n        _filterRules();\n    }\n\n    /* private functions */\n\n    function _applyConditionCheck(option) {\n        switch (vm.data.condition) {\n            case 'and':\n                if (!vm.localConditionOptions.or[option].enable) {\n                    vm.disableOr = true;\n                }\n                break;\n            case 'or':\n                if (!vm.localConditionOptions.and[option].enable) {\n                    vm.disableAnd = true;\n                }\n                break;\n        };\n    }\n\n    function _filterRules() {\n        vm.data.rules = vm.data.rules.filter(function(rule) {\n            return rule.type === 'ruleSet' || (rule.type === 'rule' && rule.value.length === 0);\n        });\n    }\n\n    function _getNextId() {\n        return uuid.v4();\n    }\n\n    function _getRuleTemplate() {\n        var defaultTemplate = {\n            type: 'rule',\n            field: '',\n            operator: '',\n            value: ''\n        };\n        return _getTemplate(defaultTemplate, vm.defaultChildRule);\n    }\n\n    function _getRuleSetTemplate() {\n        var defaultTemplate = {\n            type: 'ruleSet',\n            condition: 'and',\n            rules: []\n        };\n        return _getTemplate(defaultTemplate, vm.defaultChildRuleSet);\n    }\n\n    function _getTemplate(defaultTemplate, applyTemplate) {\n        var id = _getNextId();\n        var template = defaultTemplate;\n        if (applyTemplate) {\n            template = angular.copy(applyTemplate);\n        }\n        template.id = id;\n        return template;\n    }\n    \n}\n\n//# sourceURL=webpack:///./app/components/rule-set.component.js?");

/***/ }),

/***/ "./app/components/rule.component.html":
/*!********************************************!*\
  !*** ./app/components/rule.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div class=\\\"rule-container\\\">\\n    <div layout=\\\"row\\\" layout-align=\\\"start center\\\" ng-if=\\\"$ctrl.mode === 'build'\\\">\\n        <md-input-container flex=\\\"20\\\">\\n            <label>Field</label>\\n            <input required ng-model=\\\"$ctrl.data.field\\\" ng-if=\\\"!$ctrl.fields.length\\\">\\n            <md-autocomplete\\n                ng-if=\\\"$ctrl.fields.length\\\"\\n                md-no-cache=\\\"true\\\"\\n                md-selected-item=\\\"$ctrl.data.field\\\"\\n                md-search-text-change=\\\"$ctrl.searchTextChange($ctrl.searchFieldText)\\\"\\n                md-search-text=\\\"$ctrl.searchFieldText\\\"\\n                md-selected-item-change=\\\"$ctrl.selectedFieldChange(item)\\\"\\n                md-items=\\\"item in $ctrl.fieldSearch($ctrl.searchFieldText)\\\"\\n                md-item-text=\\\"item.name\\\"\\n                md-min-length=\\\"0\\\"\\n                md-clear-button=\\\"false\\\"\\n                placeholder=\\\"Field\\\">\\n                <md-item-template>\\n                    <span md-highlight-text=\\\"$ctrl.searchFieldText\\\" md-highlight-flags=\\\"^i\\\">{{item.name}}</span>\\n                </md-item-template>\\n                <md-not-found>\\n                    No matches found.\\n                </md-not-found>\\n            </md-autocomplete>\\n        </md-input-container>\\n        <div flex=\\\"5\\\"></div>\\n        <md-input-container flex=\\\"10\\\">\\n            <label>Operator</label>\\n            <md-select ng-model=\\\"$ctrl.data.operator\\\">\\n                <md-option ng-repeat=\\\"operator in $ctrl.operators\\\" ng-value=\\\"operator.value\\\">\\n                    {{operator.display}}\\n                </md-option>\\n            </md-select>\\n        </md-input-container>\\n        <div flex=\\\"5\\\"></div>\\n        <div flex=\\\"25\\\" ng-if=\\\"!$ctrl.data.field\\\"></div>\\n        <md-input-container flex=\\\"25\\\" ng-if=\\\"$ctrl.data.field && !$ctrl.data.field.values\\\">\\n            <label>Value</label>\\n            <input ng-required=\\\"!$ctrl.allowEmpty\\\" ng-model=\\\"$ctrl.data.value\\\" ng-if=\\\"$ctrl.data.field && !$ctrl.data.field.values\\\">\\n        </md-input-container>\\n        <md-input-container flex=\\\"25\\\" ng-if=\\\"$ctrl.data.field && $ctrl.data.field.values && $ctrl.data.field.values.length && !$ctrl.data.field.options.multipleValues\\\">\\n            <label>Value</label>\\n            <md-autocomplete\\n                md-no-cache=\\\"true\\\"\\n                md-selected-item=\\\"$ctrl.data.value\\\"\\n                md-search-text-change=\\\"$ctrl.searchTextChange($ctrl.searchValueText)\\\"\\n                md-search-text=\\\"$ctrl.searchValueText\\\"\\n                md-selected-item-change=\\\"$ctrl.selectedValueChange(item)\\\"\\n                md-items=\\\"item in $ctrl.valueSearch($ctrl.searchValueText)\\\"\\n                md-item-text=\\\"item\\\"\\n                md-min-length=\\\"0\\\"\\n                md-clear-button=\\\"false\\\"\\n                placeholder=\\\"{{$ctrl.allowEmpty ? '(leave blank if this is an user input)' : ''}}\\\"\\n                ng-required=\\\"!$ctrl.allowEmpty\\\">\\n                <md-item-template>\\n                    <span md-highlight-text=\\\"$ctrl.searchValueText\\\" md-highlight-flags=\\\"i\\\">{{item}}</span>\\n                </md-item-template>\\n            </md-autocomplete>\\n        </md-input-container>\\n        <md-input-container flex=\\\"25\\\" ng-if=\\\"$ctrl.data.field && $ctrl.data.field.options.multipleValues\\\">\\n            <label>Value</label>\\n            <md-select ng-model=\\\"$ctrl.data.value\\\" multiple ng-required=\\\"!$ctrl.allowEmpty\\\">\\n                <md-option ng-value=\\\"value\\\" ng-repeat=\\\"value in $ctrl.data.field.values\\\">{{value}}</md-option>\\n            </md-select>\\n        </md-input-container>\\n        <div flex=\\\"{{!$ctrl.data.value || $ctrl.data.value.length === 0 ? 5 : 25}}\\\"></div>\\n        <md-input-container flex=\\\"10\\\" ng-if=\\\"!$ctrl.data.value || $ctrl.data.value.length === 0\\\">\\n            <md-checkbox ng-model=\\\"$ctrl.data.allowWildcards\\\">\\n                Allow Wilcards\\n            </md-checkbox>\\n        </md-input-container>\\n        <md-input-container flex=\\\"10\\\" ng-if=\\\"!$ctrl.data.value || $ctrl.data.value.length === 0\\\">\\n            <md-checkbox ng-model=\\\"$ctrl.data.caseSensitive\\\">\\n                Case Sensitive\\n            </md-checkbox>\\n        </md-input-container>\\n        <div flex=\\\"5\\\"></div>\\n        <md-icon class=\\\"remove-rule\\\" flex=\\\"5\\\" ng-click=\\\"$ctrl.onRemove()\\\" ng-if=\\\"!$ctrl.options.useTextButtons\\\">\\n            remove_circle_outline\\n            <md-tooltip>Remove</md-tooltip>\\n        </md-icon>\\n        <md-button class=\\\"remove-rule md-small md-raised\\\" flex=\\\"5\\\" ng-click=\\\"$ctrl.onRemove()\\\" ng-if=\\\"$ctrl.options.useTextButtons\\\">\\n            X\\n            <md-tooltip>Remove</md-tooltip>\\n        </md-button>\\n    </div>\\n    <div layout=\\\"row\\\" ng-if=\\\"$ctrl.mode === 'entry'\\\">\\n        <md-input-container flex=\\\"40\\\">\\n            <label>{{$ctrl.data.field}}</label>\\n            <textarea ng-model=\\\"$ctrl.data.value\\\" rows=\\\"3\\\"></textarea>\\n        </md-input-container>\\n        <div flex=\\\"20\\\"></div>\\n        <md-input-container flex=\\\"20\\\">\\n            <label>Treat as</label>\\n            <md-select ng-model=\\\"$ctrl.data.treatAs\\\">\\n                <md-option value=\\\"literal\\\">Literal</md-option>\\n                <md-option value=\\\"regex\\\">Regex</md-option>\\n                <md-option value=\\\"wildcards\\\" ng-if=\\\"::$ctrl.data.allowWildcards\\\">Allow Wildcards</md-option>\\n            </md-select>\\n        </md-input-container>\\n    </div>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./app/components/rule.component.html?");

/***/ }),

/***/ "./app/components/rule.component.js":
/*!******************************************!*\
  !*** ./app/components/rule.component.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('queryBuilder.components')\n.component('rule', {\n    template: __webpack_require__(/*! ./rule.component.html */ \"./app/components/rule.component.html\"),\n    bindings: {\n        allowEmpty: '<?',\n        data: '<?',\n        fields: '<?',\n        mode: '@',\n        onRemove: '&',\n        operators: '<?',\n        options: '<?'\n    },\n    controller: [ruleController]\n});\n\nfunction ruleController() {\n    var vm = this;\n    vm.$onInit = onInit;\n    vm.fieldSearch = fieldSearch;\n    vm.searchTextChange = searchTextChange;\n    vm.selectedFieldChange = selectedFieldChange;\n    vm.selectedValueChange = selectedValueChange;\n    vm.valueSearch = valueSearch;\n\n    function onInit() {\n        if (vm.allowEmpty === undefined) {\n            vm.allowEmpty = true;\n        }\n        vm.fields = vm.fields !== undefined ? vm.fields : [];\n        vm.operators = vm.operators || [\n            {\n                display: '=',\n                value: 'equals'\n            },\n            {\n                display: '<',\n                value: 'less than'\n            },\n            {\n                display: '>',\n                value: 'greater than'\n            }\n        ];\n        // Set default to operator field\n        vm.data.operator = vm.operators[0].value;\n    }\n    \n    function fieldSearch(query) {\n        var fields = vm.fields.filter(function(field) {\n            return field.name.toLowerCase().indexOf(query.toLowerCase()) > -1;\n        });\n        return fields;\n    }\n\n    function searchTextChange(text) {\n\n    }\n\n    /**\n     * Fired when field is changed\n     * \n     * @param {Object} item The new selected field.\n     */\n    function selectedFieldChange(item) {\n\n        // if the field has its own set of values to select, clesr the current selection\n        if (item && item.values && item.values.length) {\n            vm.data.value = '';\n        }\n\n        if (!item && vm.searchFieldText.length) {\n            // set free text value\n            vm.data.field = vm.searchFieldText;\n        }\n    }\n\n    function selectedValueChange() {\n\n    }\n\n    function valueSearch(text) {\n        var values = vm.data.field.values.filter(function(value) {\n            return value.toLowerCase().indexOf(text.toLowerCase()) > -1;\n        });\n        return values;\n    }\n    \n}\n\n//# sourceURL=webpack:///./app/components/rule.component.js?");

/***/ }),

/***/ "./app/demo/demo-data.service.js":
/*!***************************************!*\
  !*** ./app/demo/demo-data.service.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('queryBuilder.demo')\n.factory('demoDataService', function() {\n\n    var DATA = {\n        build: {\n          data: {\n            condition: 'and',\n            rules: []\n          },\n          displayOptions: {\n            entityTerms: {\n              rule: 'Criteria',\n              ruleSet: 'Group'\n            },\n            includeModel: false,\n            logicalTerms: {\n              and: 'AND',\n              or: 'OR'\n            },\n            useTextButtons: true\n          },\n          show: false,\n          conditionOptions: {\n            'and': {\n              rule: {\n                enable: true,\n                render: true\n              },\n              ruleSet: {\n                enable: true,\n                render: true\n              }\n            },\n            'or': {\n              rule: {\n                enable: false,\n                render: false\n              },\n              ruleSet: {\n                enable: true,\n                render: true\n              }\n            }\n          }\n        },\n        entry: {\n          conditionOptions: {\n            'and': {\n              rule: true,\n              ruleSet: true\n            },\n            'or': {\n              rule: true,\n              ruleSet: true\n            },\n            'criteria': {\n              rule: false,\n              ruleSet: false\n            }\n          },\n          data: {\n            condition: 'and',\n            rules: []\n          },\n          defaultChildRule: {\n            condition: 'criteria',\n            type: 'ruleSet',\n            rules: []\n          },\n          defaultChildRuleSet: {\n            condition: 'and',\n            type: 'ruleSet',\n            rules: []\n          },\n          displayOptions: {\n            entityTerms: {\n              rule: 'Filter',\n              ruleSet: 'Group'\n            },\n            includeModel: false,\n            logicalTerms: {\n              and: 'AND',\n              or: 'OR'\n            },\n            useTextButtons: true\n          },\n          show: false\n        },\n        filter: {\n          allowEmptyRules: false,\n          data: {\n            condition: 'and',\n            rules: []\n          },\n          displayOptions: {\n            entityTerms: {\n              rule: 'Criteria',\n              ruleSet: 'Group'\n            },\n            includeModel: false,\n            logicalTerms: {\n              and: 'AND',\n              or: 'OR'\n            },\n            useTextButtons: true\n          },\n          show: false,\n          conditionOptions: {\n            'and': {\n              rule: {\n                enable: true,\n                render: true\n              },\n              ruleSet: {\n                enable: true,\n                render: true\n              }\n            },\n            'or': {\n              rule: {\n                enable: false,\n                render: false\n              },\n              ruleSet: {\n                enable: true,\n                render: true\n              }\n            }\n          }\n        },\n      };\n\n    return {\n        getData: getData\n    };\n\n    function getData(key) {\n        return DATA[key];\n    }\n\n});\n\n//# sourceURL=webpack:///./app/demo/demo-data.service.js?");

/***/ }),

/***/ "./app/demo/demo-options.component.html":
/*!**********************************************!*\
  !*** ./app/demo/demo-options.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div layout=\\\"row\\\">\\n    <md-switch ng-model=\\\"$ctrl.data.useTextButtons\\\" ng-change=\\\"$ctrl.useTextButtonsChanged({id: $ctrl.id, val: $ctrl.data.useTextButtons})\\\">Use text buttons</md-switch>\\n    <md-switch ng-model=\\\"$ctrl.data.includeModel\\\" ng-change=\\\"$ctrl.includeModelChanged({id: $ctrl.id, val: $ctrl.data.includeModel})\\\">Show Model</md-switch>\\n    <md-switch ng-model=\\\"$ctrl.data.logicTerms\\\" ng-change=\\\"$ctrl.logicTermsChanged({id: $ctrl.id, val: $ctrl.data.logicTerms})\\\">Use terms ALL/ANY</md-switch>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./app/demo/demo-options.component.html?");

/***/ }),

/***/ "./app/demo/demo-options.component.js":
/*!********************************************!*\
  !*** ./app/demo/demo-options.component.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('queryBuilder.demo')\n.component('demoOptions', {\n    template: __webpack_require__(/*! ./demo-options.component.html */ \"./app/demo/demo-options.component.html\"),\n    bindings: {\n        data: '<?',\n        id: '@',\n        includeModelChanged: '&?',\n        logicTermsChanged: '&?',\n        useTextButtonsChanged: '&?'\n    },\n    controller: [demoOptionsController]\n});\n\nfunction demoOptionsController() {\n    var vm = this;\n}\n\n//# sourceURL=webpack:///./app/demo/demo-options.component.js?");

/***/ }),

/***/ "./app/demo/demo.controller.js":
/*!*************************************!*\
  !*** ./app/demo/demo.controller.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nangular.module('queryBuilder.demo')\r\n\r\n.config(['$routeProvider', function($routeProvider) {\r\n  $routeProvider.when('/QueryBuilder/demo', {\r\n    template: __webpack_require__(/*! ./demo.html */ \"./app/demo/demo.html\"),\r\n    controller: ['$mdDialog', 'demoDataService', 'filterDataService', 'ruleDataService', demoController],\r\n    controllerAs: 'vm'\r\n  });\r\n}])\r\n\r\n.controller('demoController', demoController);\r\n\r\nfunction demoController($mdDialog, demoDataService, filterDataService, ruleDataService) {\r\n  var vm = this;\r\n  vm.demos = {\r\n    build: demoDataService.getData('build'),\r\n    entry: demoDataService.getData('entry'),\r\n    filter: demoDataService.getData('filter')\r\n  };\r\n  vm.fields = filterDataService.getFilters();\r\n  vm.includeModelChanged = includeModelChanged;\r\n  vm.logicTerms = false;\r\n  vm.logicTermsChanged = logicTermsChanged;\r\n  vm.openDialog = openDialog;\r\n  vm.operators = ruleDataService.getOperators();\r\n  vm.queryFilters = filterDataService.getPersistedFilters();\r\n  vm.useTextButtonsChanged = useTextButtonsChanged;\r\n\r\n  activate();\r\n\r\n  function activate() {\r\n    vm.quickFilterFields = angular.copy(vm.fields);\r\n    vm.quickFilterFields.splice(0, 0, {\r\n      id: 4,\r\n      name: 'Any',\r\n      options: {\r\n          allowCaseSensitive: true\r\n      }\r\n    });\r\n    vm.options = {\r\n      build: {\r\n        includeModel: vm.demos.build.displayOptions.includeModel,\r\n        logicTerms: false,\r\n        useTextButtons: vm.demos.build.displayOptions.useTextButtons \r\n      },\r\n      entry: {\r\n        includeModel: vm.demos.entry.displayOptions.includeModel,\r\n        logicTerms: false,\r\n        useTextButtons: vm.demos.entry.displayOptions.useTextButtons\r\n      }\r\n    };\r\n  }\r\n\r\n  function logicTermsChanged(id, val) {\r\n    if (val) {\r\n      vm.demos[id].displayOptions.logicalTerms.and = 'ALL';\r\n      vm.demos[id].displayOptions.logicalTerms.or = 'ANY';\r\n    } else {\r\n      vm.demos[id].displayOptions.logicalTerms.and = 'AND';\r\n      vm.demos[id].displayOptions.logicalTerms.or = 'OR';\r\n    }\r\n  }\r\n\r\n  function openDialog(ev) {\r\n    $mdDialog.show({\r\n      bindToController: true,\r\n      clickOutsideToClose: true,\r\n      controller: ['$scope', '$mdDialog', DialogController],\r\n      controllerAs: 'vm',\r\n      locals: {\r\n        builderData: vm.demos.filter,\r\n        fields: vm.quickFilterFields,\r\n        operators: vm.operators,\r\n        title: 'Quick Filter'\r\n      },\r\n      targetEvent: ev,\r\n      template: __webpack_require__(/*! ./demo.dialog.html */ \"./app/demo/demo.dialog.html\")\r\n    })\r\n  };\r\n\r\n  function DialogController($scope, $mdDialog) {\r\n    var vm = this;\r\n    vm.close = close;\r\n\r\n    function close() {\r\n      $mdDialog.cancel();\r\n    }\r\n\r\n  }\r\n\r\n  function includeModelChanged(id, val) {\r\n    vm.demos[id].displayOptions.includeModel = val;\r\n  }\r\n  \r\n  function useTextButtonsChanged(id, val) {\r\n    vm.demos[id].displayOptions.useTextButtons = val;\r\n  }\r\n  \r\n}\n\n//# sourceURL=webpack:///./app/demo/demo.controller.js?");

/***/ }),

/***/ "./app/demo/demo.dialog.html":
/*!***********************************!*\
  !*** ./app/demo/demo.dialog.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<md-dialog class=\\\"demo-dialog\\\">\\n    <md-toolbar>\\n        <div class=\\\"md-toolbar-tools\\\">\\n            <h2>{{vm.title}}</h2>\\n        </div>\\n    </md-toolbar>\\n    <md-dialog-content>\\n        <div class=\\\"md-dialog-content\\\">\\n            <query-builder allow-empty-rules=\\\"vm.builderData.allowEmptyRules\\\"\\n                           condition-options=\\\"vm.builderData.conditionOptions\\\"\\n                           data=\\\"vm.builderData.data\\\"\\n                           display-options=\\\"vm.builderData.displayOptions\\\"\\n                           fields=\\\"vm.fields\\\"\\n                           initial-condition=\\\"and\\\"\\n                           mix-rules=\\\"false\\\"\\n                           mode=\\\"build\\\"\\n                           operators=\\\"vm.operators\\\">\\n            </query-builder>\\n        </div>\\n    </md-dialog-content>\\n    <md-dialog-actions layout=\\\"row\\\">\\n        <span flex></span>\\n        <md-button ng-click=\\\"vm.close()\\\">Close</md-button>\\n    </md-dialog-actions>\\n</md-dialog>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./app/demo/demo.dialog.html?");

/***/ }),

/***/ "./app/demo/demo.html":
/*!****************************!*\
  !*** ./app/demo/demo.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<md-card class=\\\"main-container\\\" layout-padding>\\r\\n    <h2>Filter Builder</h2>\\r\\n    <p>Each section shows the builder with a different config/view set. Click the down arrow to expand.</p>\\r\\n    <collapsible-panel switch=\\\"vm.demos.build.show\\\" title=\\\"Filter builder (in build mode)\\\" title-size=\\\"3\\\"></collapsible-panel>\\r\\n    <div ng-show=\\\"vm.demos.build.show\\\">\\r\\n        <demo-options data=\\\"vm.options.build\\\"\\r\\n                      id=\\\"build\\\" \\r\\n                      include-model-changed=\\\"vm.includeModelChanged(id, val)\\\"\\r\\n                      logic-terms-changed=\\\"vm.logicTermsChanged(id, val)\\\"\\r\\n                      use-text-buttons-changed=\\\"vm.useTextButtonsChanged(id, val)\\\">\\r\\n        </demo-options>\\r\\n        <query-builder condition-options=\\\"vm.demos.build.conditionOptions\\\"\\r\\n                       data=\\\"vm.demos.build.data\\\"\\r\\n                       display-options=\\\"vm.demos.build.displayOptions\\\"\\r\\n                       fields=\\\"vm.fields\\\"\\r\\n                       initial-condition=\\\"and\\\"\\r\\n                       mix-rules=\\\"false\\\"\\r\\n                       mode=\\\"build\\\"\\r\\n                       operators=\\\"vm.operators\\\">\\r\\n        </query-builder>\\r\\n    </div>\\r\\n    <md-divider></md-divider>\\r\\n    <collapsible-panel switch=\\\"vm.demos.filter.show\\\" title=\\\"Quick filter\\\" title-size=\\\"3\\\"></collapsible-panel>\\r\\n    <div ng-show=\\\"vm.demos.filter.show\\\">\\r\\n        <md-button ng-click=\\\"vm.openDialog($event)\\\">Click to open Quick Filter dialog</md-button>\\r\\n    </div>\\r\\n    <md-divider></md-divider>\\r\\n    <collapsible-panel switch=\\\"vm.demos.entry.show\\\" title=\\\"Query form (in entry mode)\\\" title-size=\\\"3\\\"></collapsible-panel>\\r\\n    <div ng-show=\\\"vm.demos.entry.show\\\">\\r\\n        <demo-options data=\\\"vm.options.entry\\\"\\r\\n                      id=\\\"entry\\\" \\r\\n                      include-model-changed=\\\"vm.includeModelChanged(id, val)\\\"\\r\\n                      logic-terms-changed=\\\"vm.logicTermsChanged(id, val)\\\"\\r\\n                      use-text-buttons-changed=\\\"vm.useTextButtonsChanged(id, val)\\\">\\r\\n        </demo-options>\\r\\n        <query-builder child-rule=\\\"vm.demos.entry.defaultChildRule\\\"\\r\\n                       child-rule-set=\\\"vm.demos.entry.defaultChildRuleSet\\\"\\r\\n                       condition-options=\\\"vm.demos.entry.conditionOptions\\\"\\r\\n                       data=\\\"vm.demos.entry.data\\\"\\r\\n                       display-options=\\\"vm.demos.entry.displayOptions\\\"\\r\\n                       fields=\\\"vm.fields\\\"\\r\\n                       mode=\\\"entry\\\"\\r\\n                       pre-defined-rules=\\\"vm.queryFilters\\\">\\r\\n        </query-builder>\\r\\n    </div>\\r\\n</md-card>\\r\\n\\r\\n\\r\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./app/demo/demo.html?");

/***/ }),

/***/ "./app/demo/demo.module.js":
/*!*********************************!*\
  !*** ./app/demo/demo.module.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('queryBuilder.demo', ['ngRoute'])\n\n//# sourceURL=webpack:///./app/demo/demo.module.js?");

/***/ }),

/***/ "./app/services/filter-data.service.js":
/*!*********************************************!*\
  !*** ./app/services/filter-data.service.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('queryBuilder.services')\n.factory('filterDataService', function() {\n\n    return {\n        getFilters: getFilters,\n        getPersistedFilters: getPersistedFilters\n    };\n\n    function getPersistedFilters() {\n        return [\n            {\n                id: 1,\n                name: 'Filter 1 - type filter',\n                type: 'ruleSet',\n                condition: 'and',\n                rules: [\n                    {\n                    'id': '1-1',\n                    'type': 'rule',\n                    'field': 'class',\n                    'operator': 'equals',\n                    'value': 'class1'\n                    },\n                    {\n                    'id': '1-2',\n                    'type': 'rule',\n                    'field': 'type',\n                    'operator': 'equals',\n                    'value': ''\n                    }\n                ]\n            },\n            {\n                id: 2,\n                name: 'Filter 2 - class filter',\n                type: 'ruleSet',\n                condition: 'and',\n                rules: [\n                    {\n                    'id': '1-1',\n                    'type': 'rule',\n                    'field': 'class',\n                    'operator': 'equals',\n                    'value': '',\n                    'allowWildcards': true\n                    },\n                    {\n                    'id': '1-2',\n                    'type': 'rule',\n                    'field': 'rule',\n                    'operator': 'equals',\n                    'value': 'rule1'\n                    }\n                ]\n            },\n            {\n                id: 3,\n                name: 'Filter 3 - class & rule filter',\n                type: 'ruleSet',\n                condition: 'and',\n                rules: [\n                    {\n                        'id': '1-1',\n                        'type': 'rule',\n                        'field': 'class',\n                        'operator': 'equals',\n                        'value': ''\n                    },\n                    {\n                        'id': '1-2',\n                        'type': 'rule',\n                        'field': 'rule',\n                        'operator': 'equals',\n                        'value': ''\n                    },\n                    {\n                        'id': '1-3',\n                        'type': 'rule',\n                        'field': 'type',\n                        'operator': 'equals',\n                        'value': 'type1'\n                    }\n                ]\n            }\n        ];\n    }\n\n    function getFilters() {\n        var filters = [\n            {\n                id: 1,\n                name: 'Attribution',\n                values: [\n                    'COMMON',\n                    'CAT',\n                    'DOG'\n                ],\n                options: {\n                    allowCaseSensitive: false,\n                    multipleValues: true\n                }\n            },\n            {\n                id: 2,\n                name: 'Class',\n                values: [],\n                options: {\n                    allowCaseSensitive: true\n                }\n            },\n            {\n                id: 3,\n                name: 'Type',\n                values: [],\n                options: {\n                    allowCaseSensitive: true\n                }\n            }\n        ];\n\n        // Populate class and type with some data\n        for (var i = 1; i <= 100; i++) {\n            filters[1].values.push('Class' + i);\n            filters[2].values.push('Type' + i);\n        }\n\n        return filters;\n    }\n\n});\n\n//# sourceURL=webpack:///./app/services/filter-data.service.js?");

/***/ }),

/***/ "./app/services/rule-data.service.js":
/*!*******************************************!*\
  !*** ./app/services/rule-data.service.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('queryBuilder.services')\n.factory('ruleDataService', function() {\n\n    return {\n        getOperators: getOperators\n    };\n\n    function getOperators() {\n        return [\n            {\n                display: 'Exact Match',\n                value: 'exact-match'\n            },\n            {\n                display: 'Regex',\n                value: 'regex'\n            },\n            {\n                display: 'Contains',\n                value: 'contains'\n            },\n            {\n                display: 'Starts with',\n                value: 'starts-with'\n            }\n        ];\n    }\n\n});\n\n//# sourceURL=webpack:///./app/services/rule-data.service.js?");

/***/ }),

/***/ "./app/services/services.module.js":
/*!*****************************************!*\
  !*** ./app/services/services.module.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('queryBuilder.services', []);\n\n//# sourceURL=webpack:///./app/services/services.module.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./app/app.js ./app/services/services.module.js ./app/services/filter-data.service.js ./app/services/rule-data.service.js ./app/components/components.module.js ./app/components/and-or-switch.component.js ./app/components/collapsible-panel.component.js ./app/components/query-builder.component.js ./app/components/rule-set.component.js ./app/components/rule.component.js ./app/demo/demo.module.js ./app/demo/demo-options.component.js ./app/demo/demo.controller.js ./app/demo/demo-data.service.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./app/app.js */\"./app/app.js\");\n__webpack_require__(/*! ./app/services/services.module.js */\"./app/services/services.module.js\");\n__webpack_require__(/*! ./app/services/filter-data.service.js */\"./app/services/filter-data.service.js\");\n__webpack_require__(/*! ./app/services/rule-data.service.js */\"./app/services/rule-data.service.js\");\n__webpack_require__(/*! ./app/components/components.module.js */\"./app/components/components.module.js\");\n__webpack_require__(/*! ./app/components/and-or-switch.component.js */\"./app/components/and-or-switch.component.js\");\n__webpack_require__(/*! ./app/components/collapsible-panel.component.js */\"./app/components/collapsible-panel.component.js\");\n__webpack_require__(/*! ./app/components/query-builder.component.js */\"./app/components/query-builder.component.js\");\n__webpack_require__(/*! ./app/components/rule-set.component.js */\"./app/components/rule-set.component.js\");\n__webpack_require__(/*! ./app/components/rule.component.js */\"./app/components/rule.component.js\");\n__webpack_require__(/*! ./app/demo/demo.module.js */\"./app/demo/demo.module.js\");\n__webpack_require__(/*! ./app/demo/demo-options.component.js */\"./app/demo/demo-options.component.js\");\n__webpack_require__(/*! ./app/demo/demo.controller.js */\"./app/demo/demo.controller.js\");\nmodule.exports = __webpack_require__(/*! ./app/demo/demo-data.service.js */\"./app/demo/demo-data.service.js\");\n\n\n//# sourceURL=webpack:///multi_./app/app.js_./app/services/services.module.js_./app/services/filter-data.service.js_./app/services/rule-data.service.js_./app/components/components.module.js_./app/components/and-or-switch.component.js_./app/components/collapsible-panel.component.js_./app/components/query-builder.component.js_./app/components/rule-set.component.js_./app/components/rule.component.js_./app/demo/demo.module.js_./app/demo/demo-options.component.js_./app/demo/demo.controller.js_./app/demo/demo-data.service.js?");

/***/ })

/******/ });