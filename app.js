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


angular.module('queryBuilder', ['ngAnimate', 'ngRoute', 'ngMaterial', 'ngMessages', 'angular-uuid', 'queryBuilder.services', 'queryBuilder.components', 'queryBuilder.demo', 'queryBuilder.directives']).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({ redirectTo: '/QueryBuilder/demo' });
}]);

/***/ }),

/***/ "./app/components/and-or-switch.component.html":
/*!*****************************************************!*\
  !*** ./app/components/and-or-switch.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<md-radio-group ng-model=\"$ctrl.data.condition\" layout=\"row\" layout-align=\"start center\"\n                ng-if=\"$ctrl.data.rules.length > 1\"\n                ng-disabled=\"$ctrl.disabled\">\n    <md-radio-button value=\"and\" \n                     ng-disabled=\"$ctrl.disableAnd || ($ctrl.data.condition === 'criteria' && $ctrl.data.rules.length)\">\n        {{$ctrl.displayOptions ? $ctrl.displayOptions.and : 'And'}}\n        <md-tooltip>Apply logical AND</md-tooltip>\n    </md-radio-button>\n    <md-radio-button value=\"or\" \n                     ng-disabled=\"$ctrl.disableOr || ($ctrl.data.condition === 'criteria' && $ctrl.data.rules.length)\">\n        {{$ctrl.displayOptions ? $ctrl.displayOptions.or : 'Or'}}\n        <md-tooltip>Apply logical OR</md-tooltip>\n    </md-radio-button>\n</md-radio-group>";
// Exports
module.exports = code;

/***/ }),

/***/ "./app/components/and-or-switch.component.js":
/*!***************************************************!*\
  !*** ./app/components/and-or-switch.component.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.components').component('andOrSwitch', {
    template: __webpack_require__(/*! ./and-or-switch.component.html */ "./app/components/and-or-switch.component.html"),
    bindings: {
        data: '<',
        disableAnd: '<?',
        disableOr: '<?',
        disabled: '<?',
        displayOptions: '<?'
    },
    controller: function controller() {
        var vm = this;
    }
});

/***/ }),

/***/ "./app/components/collapsible-panel.component.html":
/*!*********************************************************!*\
  !*** ./app/components/collapsible-panel.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"collapsible-panel-container\">\n    <div ng-click=\"$ctrl.switch = !$ctrl.switch\" layout=\"row\" layout-align=\"start start\" flex>\n        <md-icon flex=\"5\" ng-if=\"!$ctrl.switch\">keyboard_arrow_down</md-icon>\n        <md-icon flex=\"5\" ng-if=\"$ctrl.switch\">keyboard_arrow_up</md-icon>\n        <h4 ng-if=\"$ctrl.titleSize === 4 || !$ctrl.titleSize\">{{$ctrl.title}}</h4>\n        <h3 ng-if=\"$ctrl.titleSize === 3\">{{$ctrl.title}}</h3>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./app/components/collapsible-panel.component.js":
/*!*******************************************************!*\
  !*** ./app/components/collapsible-panel.component.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.components').component('collapsiblePanel', {
    template: __webpack_require__(/*! ./collapsible-panel.component.html */ "./app/components/collapsible-panel.component.html"),
    bindings: {
        switch: '=',
        title: '@',
        titleSize: '<?'
    },
    controller: function controller() {
        var vm = this;
    }
});

/***/ }),

/***/ "./app/components/components.module.js":
/*!*********************************************!*\
  !*** ./app/components/components.module.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.components', []);

/***/ }),

/***/ "./app/components/query-builder.component.html":
/*!*****************************************************!*\
  !*** ./app/components/query-builder.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div layout-padding class=\"query-builder\">\n    <form name=\"queryBuilder\">\n        <rule-set allow-empty-rules=\"$ctrl.allowEmptyRules\"\n                condition-options=\"$ctrl.conditionOptions\"\n                default-child-rule=\"$ctrl.childRule\"\n                default-child-rule-set=\"$ctrl.childRuleSet\"\n                data=\"$ctrl.data\"\n                display-options=\"$ctrl.displayOptions\"\n                fields=\"$ctrl.fields\"\n                initial-condition=\"{{$ctrl.initialCondition}}\"\n                is-first=\"true\"\n                mix-rules=\"$ctrl.mixRules\"\n                mode=\"{{$ctrl.mode}}\"\n                operators=\"$ctrl.operators\"\n                pre-defined-rules=\"$ctrl.preDefinedRules\"\n                user-input-names=\"$ctrl.userInputNames\">\n        </rule-set>\n    </form>\n    <div layout=\"row\" layout-align=\"start center\">\n        <div flex=\"10\">Builder form valid?: </div>\n        <md-icon flex=\"20\" ng-class=\"{'valid': queryBuilder.$valid, 'invalid': !queryBuilder.$valid}\">{{queryBuilder.$valid ? 'check_circle' : 'error'}}</md-icon>\n        <div flex=\"70\"></div>\n    </div>\n    <div ng-messages=\"queryBuilder.$error\" style=\"color:maroon\">\n        <div ng-message=\"invalidRuleSize\">{{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}} must have 2 or more children</div>\n        <div ng-message=\"required\">A required field is missing</div>\n    </div>\n    <collapsible-panel ng-if=\"$ctrl.displayOptions.includeModel\"\n                       switch=\"$ctrl.showModel\"\n                       title=\"Model\"\n                       title-size=\"4\">\n    </collapsible-panel>\n    <div ng-if=\"$ctrl.displayOptions.includeModel && $ctrl.showModel\" layout=\"row\">\n        <div layout=\"column\" flex=\"45\">\n            <h5>Builder Model</h5>\n            <div class=\"model-container\">\n                <pre>{{$ctrl.data|json}}</pre>\n            </div>\n        </div>\n        <div flex=\"10\" layout=\"row\" layout-align=\"center start\" class=\"map-button-container\">\n            <md-icon ng-click=\"$ctrl.mapModel()\">\n                forward\n                <md-tooltip>Map to predicate tree model</md-tooltip>\n            </md-icon>\n        </div>\n        <div layout=\"column\" flex=\"45\">\n            <h5>Predicate Tree Model</h5>\n            <div class=\"model-container\">\n                <pre ng-if=\"!$ctrl.predicateTree\">Predicate tree will appear here</pre>\n                <pre ng-if=\"$ctrl.predicateTree\">{{$ctrl.predicateTree|json}}</pre>\n            </div>\n        </div>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./app/components/query-builder.component.js":
/*!***************************************************!*\
  !*** ./app/components/query-builder.component.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A component to allow the construct of both simple and complex filters.
 * 
 * The bindings are:
 * @param {boolean} allowEmptyRules Indicates if empty rules are allowed. Defaults to false.
 * @param {Object} childRule The model to initialise a Rule with.
 * @param {Object} childRuleSet The model to initialise a Rule Set with.
 * @param {Object} conditionOptions The options for Rule and Rule Set when AND/OR conditions are selected. These determine
 * if using Rules/Rule Sets is enabled or rendered when a particular condition is selected.
 * @param {Object} data The underlying model object which is used to build the filter.
 * @param {Object} displayOptions The options which affect the display of the component. These include using text buttons,
 * showing the underlying model and which terms to use for the conditions.
 * @param {Array} fields The fields to use when constructing a Rule.
 * @param {string} initialCondition The initial condition value - choices are 'AND' or 'OR'.
 * @param {boolean} mixRules Indicates if the Rule Set can contain both Rules and Rule Sets.
 * @param {string} mode Which mode the component will be in - choices are 'build' or 'entry'.
 * @param {Array} operators The operators to use when constructing a Rule.
 * @param {Array} preDefinedRules The filters to select from. Only applies to 'entry' mode.
 */

angular.module('queryBuilder.components').component('queryBuilder', {
    template: __webpack_require__(/*! ./query-builder.component.html */ "./app/components/query-builder.component.html"),
    bindings: {
        allowEmptyRules: '<?',
        childRule: '<?',
        childRuleSet: '<?',
        conditionOptions: '<?',
        data: '=?',
        displayOptions: '<?',
        fields: '<?',
        initialCondition: '@?',
        mixRules: '<?',
        mode: '@?',
        operators: '<?',
        preDefinedRules: '<?'
    },
    controller: ['filterTransformationService', queryBuilderController]
});

function queryBuilderController(filterTransformationService) {
    var vm = this;
    vm.$onInit = onInit;
    vm.mapModel = mapModel;

    /**
     * Initialisation of this component.
     */
    function onInit() {
        if (vm.allowEmptyRules === undefined) {
            vm.allowEmptyRules = true;
        }
        vm.data = vm.data || {
            condition: 'and',
            rules: []
        };
        vm.conditionOptions = vm.conditionOptions || {
            'and': {
                rule: true,
                ruleSet: true
            },
            'or': {
                rule: true,
                ruleSet: true
            },
            'criteria': {
                rule: false,
                ruleSet: true
            }
        };
        vm.displayOptions = vm.displayOptions || {
            entityTerms: {
                rule: 'Rule',
                ruleSet: 'Rule Set'
            },
            includeModel: false,
            logicalTerms: {
                and: 'AND',
                or: 'OR'
            },
            useTextButtons: false
        };
        vm.mode = vm.mode || 'build';
        vm.showModel = false;
        vm.userInputNames = [];
    }

    /**
     * Maps the underlying model (vm.data) to a predicate tree.
     */
    function mapModel() {
        vm.predicateTree = filterTransformationService.getPredicateTree(vm.data);
    }
}

/***/ }),

/***/ "./app/components/rule-set.component.html":
/*!************************************************!*\
  !*** ./app/components/rule-set.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"rule-set-container\">\n    <div class=\"rule-set\" layout=\"row\">\n        <div flex=\"50\" layout=\"row\" layout-align=\"start center\">\n            <and-or-switch ng-if=\"$ctrl.mode === 'build' || ($ctrl.mode === 'entry' && $ctrl.data.condition !== 'criteria')\"\n                           data=\"$ctrl.data\"\n                           display-options=\"$ctrl.displayOptions.logicalTerms\"\n                           disable-and=\"$ctrl.disableAnd\"\n                           disable-or=\"$ctrl.disableOr\">\n            </and-or-switch>\n            <div ng-if=\"$ctrl.mode === 'entry' && !$ctrl.isFirst && $ctrl.selectedFilter\" layout=\"row\" flex=\"100\">\n                <div flex=\"60\">{{$ctrl.data.name}}</div>\n                <div flex=\"5\"></div>\n                <div ng-if=\"!$ctrl.data.rules.length\" flex=\"35\" class=\"read-only-message\">\n                    {{$ctrl.displayOptions.entityTerms.rule || 'Rule Set'}} requires no user inputs\n                </div>\n            </div>\n            <div ng-if=\"$ctrl.isFirst && !$ctrl.data.rules.length\">\n                Please use the buttons on the right to add a {{$ctrl.displayOptions.entityTerms.rule|| 'Rule'}}/{{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}\n            </div>\n            <div ng-if=\"!$ctrl.isFirst && $ctrl.data.condition !== 'criteria' && $ctrl.data.rules.length < 2\">\n                A {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}} must have 2 or more children\n            </div>\n            <div flex=\"100\" ng-if=\"$ctrl.mode === 'entry' && $ctrl.data.type === 'ruleSet' && $ctrl.data.condition === 'criteria' && !$ctrl.isFirst && !$ctrl.selectedFilter\">\n                <md-select required ng-model=\"$ctrl.selectedFilter\" placeholder=\"Choose a filter\" aria-label=\"Choose a filter\" ng-change=\"$ctrl.selectedFilterChanged()\">\n                    <md-option ng-value=\"filter\" ng-repeat=\"filter in $ctrl.preDefinedRules\">{{filter.name}}</md-option>\n                </md-select>\n            </div>\n        </div>\n        <div flex=\"50\" layout=\"row\" layout-align=\"end center\">\n            <div>\n                <md-icon class=\"add-rule\"\n                         ng-click=\"$ctrl.checkCondition($ctrl.data.condition, 'rule', 'enable') && $ctrl.addRule()\" \n                         ng-disabled=\"!$ctrl.checkCondition($ctrl.data.condition, 'rule', 'enable') || !$ctrl.fieldsAvailable()\"\n                         ng-if=\"!$ctrl.displayOptions.useTextButtons && $ctrl.checkCondition($ctrl.data.condition, 'rule', 'render')\">\n                    add\n                    <md-tooltip>Add {{$ctrl.displayOptions.entityTerms.rule || 'Rule'}}</md-tooltip>\n                </md-icon>\n            </div>\n            <div>\n                <md-button class=\"md-small md-raised add-rule\"\n                           ng-click=\"$ctrl.checkCondition($ctrl.data.condition, 'rule', 'enable') && $ctrl.addRule()\" \n                           ng-disabled=\"!$ctrl.checkCondition($ctrl.data.condition, 'rule', 'enable') || !$ctrl.fieldsAvailable()\"\n                           ng-if=\"$ctrl.displayOptions.useTextButtons && $ctrl.checkCondition($ctrl.data.condition, 'rule', 'render')\">\n                    + {{$ctrl.displayOptions.entityTerms.rule|| 'Rule'}}\n                    <md-tooltip>Add {{$ctrl.displayOptions.entityTerms.rule || 'Rule'}}</md-tooltip>\n                </md-button>\n            </div>\n            <div>\n                <md-icon class=\"add-rule-set\" \n                         ng-click=\"$ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'enable') && $ctrl.addRuleSet()\"\n                         ng-disabled=\"!$ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'enable')\" \n                         ng-if=\"!$ctrl.displayOptions.useTextButtons && $ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'render')\">\n                    add_circle_outline\n                    <md-tooltip>Add {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}</md-tooltip>\n                </md-icon>\n            </div>\n            <div>\n                <md-button class=\"md-small md-raised add-rule-set\" \n                         ng-click=\"$ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'enable') && $ctrl.addRuleSet()\"\n                         ng-disabled=\"!$ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'enable')\" \n                         ng-if=\"$ctrl.displayOptions.useTextButtons && $ctrl.checkCondition($ctrl.data.condition, 'ruleSet', 'render')\">\n                    + {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}\n                    <md-tooltip>Add {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}</md-tooltip>\n                </md-button>\n            </div>\n            <div>\n                <md-icon class=\"remove-rule-set\" \n                         ng-if=\"!$ctrl.isFirst && !$ctrl.displayOptions.useTextButtons\" \n                         ng-click=\"$ctrl.removeRuleSet()\">\n                    remove_circle_outline\n                    <md-tooltip>Remove {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}</md-tooltip>\n                </md-icon>\n            </div>\n            <div>\n                <md-button class=\"md-small md-raised remove-rule-set\"\n                         ng-if=\"!$ctrl.isFirst && $ctrl.displayOptions.useTextButtons\" \n                         ng-click=\"$ctrl.removeRuleSet()\">\n                    X\n                    <md-tooltip>Remove {{$ctrl.displayOptions.entityTerms.ruleSet || 'Rule Set'}}</md-tooltip>\n                </md-button>\n            </div>\n        </div>\n    </div>\n    <div class=\"child-rule-container\"\n         ng-class=\"{\n             'rule-connector': $ctrl.data.rules.length > 1 && $ctrl.data.condition !== 'criteria',\n             'container-outline': $ctrl.data.condition !== 'criteria'\n        }\"\n         ng-repeat=\"rule in $ctrl.data.rules\">\n        <div ng-switch=\"rule.type\">\n            <rule ng-switch-when=\"rule\"\n                  allow-empty=\"$ctrl.allowEmptyRules\"\n                  data=\"rule\"\n                  fields=\"$ctrl.fieldsForRules\"\n                  mode=\"{{$ctrl.mode}}\"\n                  on-field-change=\"$ctrl.onFieldChange(newField, oldField)\"\n                  on-remove=\"$ctrl.removeRule(rule)\"\n                  operators=\"$ctrl.operators\"\n                  options=\"$ctrl.displayOptions\"\n                  user-input-names=\"$ctrl.userInputNames\">\n            </rule>\n            <rule-set ng-switch-when=\"ruleSet\"\n                      allow-empty-rules=\"$ctrl.allowEmptyRules\"\n                      condition-options=\"$ctrl.conditionOptions\"\n                      default-child-rule=\"$ctrl.defaultChildRule\"\n                      default-child-rule-set=\"$ctrl.defaultChildRuleSet\"\n                      data=\"rule\"\n                      display-options=\"$ctrl.displayOptions\"\n                      is-first=\"false\"\n                      fields=\"$ctrl.fields\"\n                      initial-condition=\"{{$ctrl.initialCondition}}\"\n                      mix-rules=\"$ctrl.mixRules\"\n                      mode=\"{{$ctrl.mode}}\"\n                      on-remove-rule-set=\"$ctrl.removeRule(rule)\"\n                      operators=\"$ctrl.operators\"\n                      pre-defined-rules=\"$ctrl.preDefinedRules\"\n                      user-input-names=\"$ctrl.userInputNames\"\n                      ng-model=\"rule\"\n                      ng-attr-rule-size=\"{{rule.condition !== 'criteria' ? true : undefined}}\">\n            </rule-set>\n        </div>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./app/components/rule-set.component.js":
/*!**********************************************!*\
  !*** ./app/components/rule-set.component.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A rule set is essentially a collection of rules, wrapped with a logical operator (AND/OR).
 * 
 * The bindings are:
 * @param {boolean} allowEmptyRules Indicates if empty rules are allowed. Defaults to false.
 * @param {Object} data The initial data model for the component.
 */

angular.module('queryBuilder.components').component('ruleSet', {
    template: __webpack_require__(/*! ./rule-set.component.html */ "./app/components/rule-set.component.html"),
    bindings: {
        allowEmptyRules: '<?',
        data: '<?',
        displayOptions: '<?',
        conditionOptions: '<?',
        defaultChildRule: '<?',
        defaultChildRuleSet: '<?',
        fields: '<?',
        initialCondition: '@?',
        isFirst: '<?',
        mixRules: '<?',
        mode: '@',
        onRemoveRuleSet: '&',
        operators: '<?',
        preDefinedRules: '<?',
        userInputNames: '<?'
    },
    controller: ['uuid', ruleSetController]
});

function ruleSetController(uuid) {
    var vm = this;
    vm.$onInit = onInit;
    vm.addRule = addRule;
    vm.addRuleSet = addRuleSet;
    vm.checkCondition = checkCondition;
    vm.fieldsAvailable = fieldsAvailable;
    vm.onFieldChange = onFieldChange;
    vm.removeRule = removeRule;
    vm.removeRuleSet = removeRuleSet;
    vm.savedConditionOptions;
    vm.selectedFilterChanged = selectedFilterChanged;

    var localConditionOptions = void 0;

    /**
     * Initialisation of this component.
     */
    function onInit() {

        if (vm.allowEmptyRules === undefined) {
            vm.allowEmptyRules = true;
        }

        if (vm.mixRules === undefined) {
            vm.mixRules = true;
        }

        if (!vm.data) {
            vm.data = {
                condition: 'and',
                rules: []
            };
            // If an initial condition has been passed, use it
            if (vm.initialCondition) {
                vm.data.condition = vm.initialCondition;
            }
        }

        vm.disableAnd = false;
        vm.disableOr = false;

        // Remove rules that do not require input if the mode is "entry"
        if (vm.mode === 'entry') {
            _filterUserInputRules();
        }

        localConditionOptions = angular.copy(vm.conditionOptions);

        if (vm.data.rules.length && vm.data.condition && !vm.mixRules) {
            var rule = vm.data.rules[0];
            if (rule.type === 'rule') {
                localConditionOptions[vm.data.condition]['ruleSet'].enable = false;
                _applyConditionCheck('rule');
            } else {
                localConditionOptions[vm.data.condition]['rule'].enable = false;
                _applyConditionCheck('ruleSet');
            }
        }

        if (vm.fields) {
            // Start out with all fields enabled
            vm.fields.forEach(function (field) {
                field.disabled = false;
            });

            // This array will be passed to each rule within this rule set
            vm.fieldsForRules = _.cloneDeep(vm.fields);
        }
    }

    function addRule() {
        var rule = _getRuleTemplate();
        vm.data.rules.push(rule);

        if (!vm.mixRules) {
            localConditionOptions[vm.data.condition]['ruleSet'].enable = false;
            _applyConditionCheck('rule');
        }
    }

    function addRuleSet() {
        var ruleSet = _getRuleSetTemplate();
        vm.data.rules.push(ruleSet);

        if (!vm.mixRules) {
            localConditionOptions[vm.data.condition]['rule'].enable = false;
            _applyConditionCheck('ruleSet');
        }
    }

    function checkCondition(condition, option, property) {
        if (typeof localConditionOptions[condition][option] === 'boolean') {
            return localConditionOptions[condition][option];
        } else {
            return localConditionOptions[condition][option] && localConditionOptions[condition][option][property];
        }
    }

    /**
     * Indicates if there are fields available for use when applying rules. Rules are only available if they are not disabled.
     */
    function fieldsAvailable() {
        return _.find(vm.fieldsForRules, { disabled: false });
    }

    /**
     * Callback passed to rule component and fired when the Field input is changed.
     * The field denoted by newField will be disabled. The field denoted by oldField will be enabled.
     * Updates the disabled flag on the use of fields within a single rule set.
     * 
     * @param {Object} newField the new selected field
     * @param {Object} oldField (optional) the previous selected field
     */
    function onFieldChange(newField, oldField) {
        _toggleRuleFieldUse(newField.id, true);
        if (oldField) {
            _toggleRuleFieldUse(oldField.id, false);
        }
    }

    /**
     * Callback invoked when a rule is removed from this rule set.
     * 
     * @param {Object} rule the rule which was removed.
     */
    function removeRule(rule) {
        var index = vm.data.rules.findIndex(function (r) {
            return r.id === rule.id;
        });
        vm.data.rules.splice(index, 1);

        if (rule.field) {
            _toggleRuleFieldUse(rule.field.id, false);
        }

        if (!vm.data.rules.length) {
            localConditionOptions = angular.copy(vm.conditionOptions);
            vm.disableAnd = false;
            vm.disableOr = false;
        }
    }

    function removeRuleSet() {
        if (vm.onRemoveRuleSet) {
            vm.onRemoveRuleSet();
        }
    }

    function selectedFilterChanged() {
        vm.data.name = vm.selectedFilter.name;
        vm.data.type = vm.selectedFilter.type;
        vm.data.rules = vm.data.rules.concat(angular.copy(vm.selectedFilter.rules));
        _filterUserInputRules();
    }

    /* private functions */

    function _applyConditionCheck(option) {
        switch (vm.data.condition) {
            case 'and':
                if (!localConditionOptions.or[option].enable) {
                    vm.disableOr = true;
                }
                break;
            case 'or':
                if (!localConditionOptions.and[option].enable) {
                    vm.disableAnd = true;
                }
                break;
        };
    }

    function _filterUserInputRules() {
        var rules = [];
        var names = [];
        vm.data.rules.forEach(function (rule) {
            if (rule.type === 'ruleSet') {
                rules.push(rule);
            }
            // This ensures a rule which is a user input with the same name only renders on the UI once
            if (rule.type === 'rule' && rule.isUserInput && names.indexOf(rule.userInput.name) === -1) {
                rules.push(rule);
                names.push(rule.userInput.name);
            }
        });
        vm.data.rules = rules;
    }

    /**
     * Returns an Object represents a new Rule.
     * 
     * @returns {Object} a new Rule.
     */
    function _getRuleTemplate() {
        var defaultTemplate = {
            type: 'rule',
            field: '',
            operator: '',
            value: ''
        };
        return _getTemplate(defaultTemplate, vm.defaultChildRule);
    }

    /**
     * Returns an Object represents a new Rule Set.
     * 
     * @returns {Object} a new Rule Set.
     */
    function _getRuleSetTemplate() {
        var defaultTemplate = {
            type: 'ruleSet',
            condition: 'and',
            rules: []
        };
        return _getTemplate(defaultTemplate, vm.defaultChildRuleSet);
    }

    /**
     * Returns the template object with an id set. Uses applyTemplate if provided, otherwise uses defaultTemplate.
     * 
     * @param {Object} defaultTemplate The default object. Uses if applyTemplate is not provided.
     * @param {Object} applyTemplate The template to use. If not provided, defaultTemplate is used.
     * @returns {Object}
     */
    function _getTemplate(defaultTemplate, applyTemplate) {
        var id = uuid.v4();
        var template = defaultTemplate;
        if (applyTemplate) {
            template = angular.copy(applyTemplate);
        }
        template.id = id;
        return template;
    }

    /**
     * Sets the disabled flag on the field identified by fieldId in the array vm.fieldsForRules.
     * 
     * @param {number|string} fieldId The field id.
     * @param {boolean} disabled value of the disabled flag to set.
     */
    function _toggleRuleFieldUse(fieldId, disabled) {
        var field = _.find(vm.fieldsForRules, { id: fieldId });
        field.disabled = disabled;
    }
}

/***/ }),

/***/ "./app/components/rule.component.html":
/*!********************************************!*\
  !*** ./app/components/rule.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"rule-container\" id=\"{{$ctrl.data.id}}\">\n    <div layout=\"row\" layout-align=\"start center\" ng-if=\"$ctrl.mode === 'build'\">\n        <md-input-container flex=\"15\">\n            <label>Field</label>\n            <input id=\"{{$ctrl.data.id + '_FIELD'}}\" required ng-model=\"$ctrl.selectedField\" ng-if=\"!$ctrl.fields.length\">\n            <md-select id=\"{{$ctrl.data.id + '_FIELD'}}\" ng-if=\"$ctrl.fields.length\"\n                       ng-model=\"$ctrl.selectedField\" required\n                       ng-change=\"$ctrl.selectedFieldChange($ctrl.selectedField)\">\n                <md-option ng-repeat=\"field in $ctrl.fields\" ng-value=\"field\" ng-disabled=\"field.id !== $ctrl.selectedField.id && field.disabled\">\n                    {{field.name}}\n                </md-option>\n            </md-select>\n        </md-input-container>\n        <div flex=\"5\"></div>\n        <md-input-container flex=\"15\">\n            <label>Operator</label>\n            <md-select ng-model=\"$ctrl.data.operator\" required \n                       ng-change=\"$ctrl.selectedOperatorChange($ctrl.data.operator)\"\n                       id=\"{{$ctrl.data.id + '_OPERATOR'}}\">\n                <md-option id=\"{{'OPERATOR_OPTION_' + operator.value.toUpperCase().replace('-', '_')}}\" \n                           ng-repeat=\"operator in $ctrl.operators\" ng-value=\"operator.value\"\n                           ng-disabled=\"$ctrl.selectedField.options.validOperators && \n                                        $ctrl.selectedField.options.validOperators.indexOf(operator.value) === -1\">\n                    {{operator.display}}\n                </md-option>\n            </md-select>\n        </md-input-container>\n        <div flex=\"5\"></div>\n        <div flex=\"30\" ng-if=\"!$ctrl.selectedField\"></div>\n        <md-input-container flex=\"30\" ng-if=\"$ctrl.selectedField && !$ctrl.selectedField.values\">\n            <label>{{$ctrl.valueLabel}}</label>\n            <input ng-required=\"!$ctrl.allowEmpty\" ng-disabled=\"$ctrl.data.isUserInput\" \n                   ng-model=\"$ctrl.data.value\" ng-if=\"$ctrl.selectedField && !$ctrl.selectedField.values\"\n                   id=\"{{$ctrl.data.id + '_VALUE'}}\">\n        </md-input-container>\n        <md-input-container flex=\"30\" class=\"class-type\"\n                            ng-if=\"$ctrl.selectedField && $ctrl.selectedField.values && $ctrl.selectedField.values.length && !$ctrl.selectedField.options.multipleValues\">\n            <label>{{$ctrl.valueLabel}}</label>\n            <md-autocomplete\n                md-input-id=\"{{$ctrl.data.id + '_VALUE'}}\"\n                md-no-cache=\"true\"\n                md-selected-item=\"$ctrl.data.value\"\n                ng-blur=\"$ctrl.valueChanged()\"\n                md-search-text=\"$ctrl.searchValueText\"\n                md-items=\"item in $ctrl.valueSearch($ctrl.searchValueText)\"\n                md-item-text=\"item\"\n                md-min-length=\"0\"\n                md-clear-button=\"false\"\n                placeholder=\"{{$ctrl.data.isUserInput ? '(no value required)' : $ctrl.valueLabel}}\"\n                ng-required=\"!$ctrl.data.isUserInput\"\n                ng-disabled=\"$ctrl.data.isUserInput\">\n                <md-item-template>\n                    <span md-highlight-text=\"$ctrl.searchValueText\" md-highlight-flags=\"i\">{{item}}</span>\n                </md-item-template>\n            </md-autocomplete>\n        </md-input-container>\n        <md-input-container flex=\"30\" \n                            ng-if=\"$ctrl.selectedField && $ctrl.selectedField.options.multipleValues\">\n            <label>{{$ctrl.valueLabel}}</label>\n            <md-select ng-model=\"$ctrl.data.value\" multiple aria-label=\"Select a value\" \n                       placeholder=\"{{$ctrl.data.isUserInput ? '(no value required)' : $ctrl.valueLabel}}\"\n                       ng-required=\"!$ctrl.data.isUserInput\" ng-disabled=\"$ctrl.data.isUserInput\"\n                       id=\"{{$ctrl.data.id + '_VALUE'}}\">\n                <md-option id=\"{{'VALUE_OPTION_' + value.toUpperCase()}}\" ng-value=\"value\" ng-repeat=\"value in $ctrl.selectedField.values\">{{value}}</md-option>\n            </md-select>\n        </md-input-container>\n        <div flex=\"5\"></div>\n        <md-input-container flex=\"10\" ng-if=\"$ctrl.allowEmpty\">\n            <md-checkbox ng-model=\"$ctrl.data.isUserInput\" ng-change=\"$ctrl.userInputToggled()\">\n                User Input\n            </md-checkbox>\n        </md-input-container>\n        <md-input-container flex=\"10\" ng-if=\"$ctrl.selectedField.options.allowCaseSensitive\">\n            <md-checkbox ng-model=\"$ctrl.data.caseSensitive\">\n                Case Sensitive\n            </md-checkbox>\n        </md-input-container>\n        <div flex=\"{{$ctrl.selectedField.options.allowCaseSensitive ? 5 : 15}}\"></div>\n        <md-icon class=\"remove-rule\" flex=\"5\" ng-click=\"$ctrl.onRemove()\" ng-if=\"!$ctrl.options.useTextButtons\">\n            remove_circle_outline\n            <md-tooltip>Remove</md-tooltip>\n        </md-icon>\n        <md-button class=\"remove-rule md-small md-raised\" flex=\"5\" ng-click=\"$ctrl.onRemove()\" ng-if=\"$ctrl.options.useTextButtons\">\n            X\n            <md-tooltip>Remove</md-tooltip>\n        </md-button>\n    </div>\n    <div layout=\"row\" layout-align=\"start center\" ng-if=\"$ctrl.mode === 'build' && $ctrl.allowEmpty && $ctrl.data.isUserInput && $ctrl.data.userInput\">\n        <md-input-container flex=\"35\">\n            <label>User Input Name</label>\n            <md-autocomplete\n                required\n                md-no-cache=\"true\"\n                md-selected-item=\"$ctrl.data.userInput.name\"\n                md-search-text=\"$ctrl.userInputNameSearchText\"\n                md-items=\"item in $ctrl.userInputNameSearch($ctrl.userInputNameSearchText)\"\n                md-item-text=\"item\"\n                md-min-length=\"0\"\n                md-clear-button=\"false\"\n                placeholder=\"Choose input (type to create new)\"\n                ng-blur=\"$ctrl.userInputNameUpdated()\">\n                <md-item-template>\n                    <span md-highlight-text=\"$ctrl.userInputNameSearchText\" md-highlight-flags=\"^i\">{{item}}</span>\n                </md-item-template>\n            </md-autocomplete>\n        </md-input-container>\n        <div flex=\"5\"></div>\n        <md-input-container flex=\"15\">\n            <label>Filter Type</label>\n            <md-select ng-model=\"$ctrl.data.userInput.filterType\">\n                <md-option value=\"standard\">Standard</md-option>\n                <md-option value=\"other\">Other</md-option>\n            </md-select>\n        </md-input-container>\n        <div flex=\"5\"></div>\n        <md-input-container flex=\"10\">\n            <md-checkbox ng-model=\"$ctrl.data.userInput.allowWildcards\">\n                Allow Wilcards\n            </md-checkbox>\n        </md-input-container>\n        <div flex=\"5\"></div>\n    </div>\n    <div layout=\"row\" ng-if=\"$ctrl.mode === 'entry'\">\n        <md-input-container flex=\"60\">\n            <label>{{$ctrl.data.userInput.name}}</label>\n            <textarea ng-model=\"$ctrl.data.value\" rows=\"2\" required></textarea>\n        </md-input-container>\n        <div flex=\"15\"></div>\n        <md-input-container flex=\"20\">\n            <label>Treat as</label>\n            <md-select ng-model=\"$ctrl.data.treatAs\" required>\n                <md-option value=\"literal\">Literal</md-option>\n                <md-option value=\"regex\">Regex</md-option>\n                <md-option value=\"wildcards\" ng-if=\"::$ctrl.data.userInput.allowWildcards\">Allow Wildcards</md-option>\n            </md-select>\n        </md-input-container>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./app/components/rule.component.js":
/*!******************************************!*\
  !*** ./app/components/rule.component.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A rule defines a link between a field, operator and its value. It also allows for setting conditions on the value
 * like whether it is case sensitive. It further allows for setting the field to be a user input and define separate
 * conditions for those.
 * 
 * The bindings are:
 * @param {boolean} allowEmpty Indicates if empty rule values are allowed. Defaults to true.
 * @param {Object} data The initial data model for the component.
 * @param {Array} fields The list of fields to be used in the field drop-down.
 * @param {String} mode The mode of the component - 'build' or 'entry'.
 * @param {Function} onRemove Callback when the rule is removed.
 * @param {Array} operators The list of operators to be used in the operator drop-down.
 * @param {Object} options Used to change the display of the component. Possible keys are:
 *   - {boolean} useTextButtons Indicates if text buttons should be used instead of md icons. 
 * @param {Array} userInputNames The list of available user input names.
 */

angular.module('queryBuilder.components').component('rule', {
    template: __webpack_require__(/*! ./rule.component.html */ "./app/components/rule.component.html"),
    bindings: {
        allowEmpty: '<?',
        data: '<?',
        fields: '<',
        mode: '@',
        onFieldChange: '&',
        onRemove: '&',
        operators: '<?',
        options: '<?',
        userInputNames: '<'
    },
    controller: [ruleController]
});

function ruleController() {
    var vm = this;
    vm.$onInit = onInit;
    vm.selectedField;
    vm.selectedFieldChange = selectedFieldChange;
    vm.selectedOperatorChange = selectedOperatorChange;
    vm.userInputNameSearch = userInputNameSearch;
    vm.userInputNameUpdated = userInputNameUpdated;
    vm.userInputToggled = userInputToggled;
    vm.valueChanged = valueChanged;
    vm.valueLabel;
    vm.valueSearch = valueSearch;

    function onInit() {
        if (vm.allowEmpty === undefined) {
            vm.allowEmpty = true;
        }
        vm.fields = vm.fields !== undefined ? vm.fields : [];
        vm.operators = vm.operators || [{
            description: 'that equals',
            display: '=',
            value: 'equals'
        }, {
            description: 'that is less than',
            display: '<',
            value: 'less-than'
        }, {
            description: 'that is greater than',
            display: '>',
            value: 'greater-than'
        }];

        var matchedField = void 0;
        if (vm.data.field) {
            // find field in the list of available fields
            matchedField = _.find(vm.fields, { id: vm.data.field.id });
        } else if (vm.fields.length) {
            // Set selected field to be first enabled one
            matchedField = _.find(vm.fields, { disabled: false });
        }
        vm.selectedField = matchedField;
        if (vm.selectedField) {
            vm.data.field = {
                id: vm.selectedField.id,
                name: vm.selectedField.name
            };
            if (vm.onFieldChange) {
                vm.onFieldChange({ newField: vm.selectedField });
            }
        }

        if (!vm.data.operator) {
            // Set default to operator field
            vm.data.operator = vm.operators[0].value;
        }

        if (vm.mode === 'entry') {
            vm.data.treatAs = 'literal';
        }

        if (vm.selectedField && vm.data.operator) {
            _constructValueLabel(vm.selectedField, vm.data.operator);
        }
    }

    /**
     * Fired when Field input has been changed.
     * 
     * @param {Object} field The selected field.
     */
    function selectedFieldChange(field) {
        // If the field has its own set of values to select, clear the current value
        if (field.values && field.values.length) {
            vm.data.value = '';
        }

        var oldField = _.find(vm.fields, { id: vm.data.field.id });

        // Update the field model
        vm.data.field = {
            id: field.id,
            name: field.name
        };

        // Check that the current operator is valid for use with the new field - if not, find one which is valid
        if (field.options && field.options.validOperators && field.options.validOperators.indexOf(vm.data.operator) === -1) {
            var operator = _.find(vm.operators, function (operator) {
                return field.options.validOperators.indexOf(operator.value) > -1;
            });
            vm.data.operator = operator.value;
        }

        _constructValueLabel(field, vm.data.operator);

        if (vm.onFieldChange) {
            vm.onFieldChange({ newField: field, oldField: oldField });
        }
    }

    /**
     * Fired when Operator input has been changed.
     * 
     * @param {String} operator The new selected operator.
     */
    function selectedOperatorChange(operator) {
        _constructValueLabel(vm.data.field, operator);
    }

    /**
     * Search the possible user input names using the given text. The search is case insensitive and
     * all values are returned if text is not provided or empty.
     * 
     * @param {String} text The search text.
     * @returns {Array} User input names which partially match or match the text provided. 
     */
    function userInputNameSearch(text) {
        if (!text || !text.length) {
            return vm.userInputNames;
        }
        var names = vm.userInputNames.filter(function (name) {
            return name.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
        return names;
    }

    /**
     * Fired when focus has been taken away from the user input name field.
     * 
     * If the text entered for the name has not be used before, it is added to the userInputNames array for possible future use.
     * If the user input name has not been set, vm.userInputNameSearchText is used instead.
     */
    function userInputNameUpdated() {
        if (vm.userInputNameSearchText) {
            if (vm.userInputNameSearchText.length && vm.userInputNames.indexOf(vm.userInputNameSearchText) === -1) {
                vm.userInputNames.push(vm.userInputNameSearchText);
            }
            if (vm.userInputNameSearchText.length && !vm.data.userInput.name) {
                vm.data.userInput.name = vm.userInputNameSearchText;
            }
        }
    }

    /**
     * Fired when the user input checkbox is changed.
     */
    function userInputToggled() {
        if (vm.data.isUserInput) {
            vm.data.userInput = {
                filterType: 'standard',
                name: ''
            };
            vm.userInputNameSearchText = '';
        } else {
            vm.data.userInput = {};
        }
    }

    /**
     * Fired when focus is taken off the value field.
     * 
     * If a value has not be selected but search text has been entered, set it as the value.
     */
    function valueChanged() {
        if (!vm.data.value && vm.searchValueText && vm.searchValueText.length) {
            vm.data.value = vm.searchValueText;
        }
    }

    /**
     * Search the possible values of the field using the given text. The search is case insensitive and
     * all values are returned if text is not provided or empty.
     * 
     * @param {String} text The search text.
     * @returns {Array} Values which partially match or match the text provided. 
     */
    function valueSearch(text) {
        if (!text || !text.length) {
            return vm.selectedField.values;
        }
        var values = vm.selectedField.values.filter(function (value) {
            return value.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
        return values;
    }

    /* private functions */

    /**
     * Constructs the label used for the value field which is based upon field and operator inputs.
     * e.g. 'Class that exactly matches'. This is set on vm.valueLabel.
     * 
     * @param {Object} field The current field.
     * @param {String} operatorValue The current operator value.
     */
    function _constructValueLabel(field, operatorValue) {
        var operator = _.find(vm.operators, function (operator) {
            return operator.value === operatorValue;
        });
        vm.valueLabel = field.name + ' ' + operator.description;
    }
}

/***/ }),

/***/ "./app/demo/demo-data.service.js":
/*!***************************************!*\
  !*** ./app/demo/demo-data.service.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.demo').factory('demoDataService', function () {

  var DATA = {
    build: {
      data: {
        condition: 'and',
        rules: []
      },
      displayOptions: {
        entityTerms: {
          rule: 'Criteria',
          ruleSet: 'Group'
        },
        includeModel: false,
        logicalTerms: {
          and: 'AND',
          or: 'OR'
        },
        useTextButtons: true
      },
      show: false,
      conditionOptions: {
        'and': {
          rule: {
            enable: true,
            render: true
          },
          ruleSet: {
            enable: true,
            render: true
          }
        },
        'or': {
          rule: {
            enable: false,
            render: false
          },
          ruleSet: {
            enable: true,
            render: true
          }
        }
      }
    },
    entry: {
      conditionOptions: {
        'and': {
          rule: true,
          ruleSet: true
        },
        'or': {
          rule: true,
          ruleSet: true
        },
        'criteria': {
          rule: false,
          ruleSet: false
        }
      },
      data: {
        condition: 'and',
        rules: []
      },
      defaultChildRule: {
        condition: 'criteria',
        type: 'ruleSet',
        rules: []
      },
      defaultChildRuleSet: {
        condition: 'and',
        type: 'ruleSet',
        rules: []
      },
      displayOptions: {
        entityTerms: {
          rule: 'Filter',
          ruleSet: 'Group'
        },
        includeModel: false,
        logicalTerms: {
          and: 'AND',
          or: 'OR'
        },
        useTextButtons: true
      },
      show: false
    },
    filter: {
      allowEmptyRules: false,
      data: {
        condition: 'and',
        rules: [{
          type: 'rule',
          field: {
            id: 11,
            name: 'Any',
            options: {
              allowCaseSensitive: true
            }
          },
          operator: 'exact-match',
          value: '',
          id: 'b62a994e-847a-4fdf-a288-d74adc0a82ce'
        }]
      },
      displayOptions: {
        entityTerms: {
          rule: 'Criteria',
          ruleSet: 'Group'
        },
        includeModel: false,
        logicalTerms: {
          and: 'AND',
          or: 'OR'
        },
        useTextButtons: true
      },
      show: false,
      conditionOptions: {
        'and': {
          rule: {
            enable: true,
            render: true
          },
          ruleSet: {
            enable: false,
            render: false
          }
        },
        'or': {
          rule: {
            enable: false,
            render: false
          },
          ruleSet: {
            enable: false,
            render: false
          }
        }
      }
    }
  };

  return {
    getData: getData
  };

  function getData(key) {
    return angular.copy(DATA[key]);
  }
});

/***/ }),

/***/ "./app/demo/demo-options.component.html":
/*!**********************************************!*\
  !*** ./app/demo/demo-options.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div layout=\"row\">\n    <md-switch ng-model=\"$ctrl.data.useTextButtons\" ng-change=\"$ctrl.useTextButtonsChanged({id: $ctrl.id, val: $ctrl.data.useTextButtons})\">Use text buttons</md-switch>\n    <md-switch ng-model=\"$ctrl.data.includeModel\" ng-change=\"$ctrl.includeModelChanged({id: $ctrl.id, val: $ctrl.data.includeModel})\">Show Model</md-switch>\n    <md-switch ng-model=\"$ctrl.data.logicTerms\" ng-change=\"$ctrl.logicTermsChanged({id: $ctrl.id, val: $ctrl.data.logicTerms})\">Use terms ALL/ANY</md-switch>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./app/demo/demo-options.component.js":
/*!********************************************!*\
  !*** ./app/demo/demo-options.component.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.demo').component('demoOptions', {
    template: __webpack_require__(/*! ./demo-options.component.html */ "./app/demo/demo-options.component.html"),
    bindings: {
        data: '<?',
        id: '@',
        includeModelChanged: '&?',
        logicTermsChanged: '&?',
        useTextButtonsChanged: '&?'
    },
    controller: [demoOptionsController]
});

function demoOptionsController() {
    var vm = this;
}

/***/ }),

/***/ "./app/demo/demo.controller.js":
/*!*************************************!*\
  !*** ./app/demo/demo.controller.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.demo').config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/QueryBuilder/demo', {
    template: __webpack_require__(/*! ./demo.html */ "./app/demo/demo.html"),
    controller: ['$mdDialog', 'demoDataService', 'fieldDataService', 'filterDataService', 'ruleDataService', demoController],
    controllerAs: 'vm'
  });
}]).controller('demoController', demoController);

function demoController($mdDialog, demoDataService, fieldDataService, filterDataService, ruleDataService) {
  var vm = this;
  vm.demos = {
    build: demoDataService.getData('build'),
    entry: demoDataService.getData('entry'),
    filter: demoDataService.getData('filter')
  };
  vm.fields = fieldDataService.getFields();
  vm.includeModelChanged = includeModelChanged;
  vm.logicTerms = false;
  vm.logicTermsChanged = logicTermsChanged;
  vm.openDialog = openDialog;
  vm.operators = ruleDataService.getOperators();
  vm.queryFilters = filterDataService.getFilters();
  vm.useTextButtonsChanged = useTextButtonsChanged;

  activate();

  function activate() {
    vm.quickFilterFields = angular.copy(vm.fields);
    vm.quickFilterFields.splice(0, 0, {
      id: vm.quickFilterFields.length + 1,
      name: 'Any',
      options: {
        allowCaseSensitive: true
      }
    });
    vm.options = {
      build: {
        includeModel: vm.demos.build.displayOptions.includeModel,
        logicTerms: false,
        useTextButtons: vm.demos.build.displayOptions.useTextButtons
      },
      entry: {
        includeModel: vm.demos.entry.displayOptions.includeModel,
        logicTerms: false,
        useTextButtons: vm.demos.entry.displayOptions.useTextButtons
      }
    };
  }

  function logicTermsChanged(id, val) {
    if (val) {
      vm.demos[id].displayOptions.logicalTerms.and = 'ALL';
      vm.demos[id].displayOptions.logicalTerms.or = 'ANY';
    } else {
      vm.demos[id].displayOptions.logicalTerms.and = 'AND';
      vm.demos[id].displayOptions.logicalTerms.or = 'OR';
    }
  }

  function openDialog(ev) {
    vm.demos.filter = demoDataService.getData('filter');

    $mdDialog.show({
      bindToController: true,
      clickOutsideToClose: true,
      controller: ['$scope', '$mdDialog', DialogController],
      controllerAs: 'vm',
      locals: {
        builderData: vm.demos.filter,
        fields: vm.quickFilterFields,
        operators: vm.operators,
        title: 'Quick Filter'
      },
      targetEvent: ev,
      template: __webpack_require__(/*! ./demo.dialog.html */ "./app/demo/demo.dialog.html")
    });
  };

  function DialogController($scope, $mdDialog) {
    var vm = this;
    vm.close = close;

    function close() {
      $mdDialog.cancel();
    }
  }

  function includeModelChanged(id, val) {
    vm.demos[id].displayOptions.includeModel = val;
  }

  function useTextButtonsChanged(id, val) {
    vm.demos[id].displayOptions.useTextButtons = val;
  }
}

/***/ }),

/***/ "./app/demo/demo.dialog.html":
/*!***********************************!*\
  !*** ./app/demo/demo.dialog.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<md-dialog class=\"demo-dialog\">\n    <md-toolbar>\n        <div class=\"md-toolbar-tools\">\n            <h2>{{vm.title}}</h2>\n        </div>\n    </md-toolbar>\n    <md-dialog-content>\n        <div class=\"md-dialog-content\">\n            <query-builder allow-empty-rules=\"vm.builderData.allowEmptyRules\"\n                           condition-options=\"vm.builderData.conditionOptions\"\n                           data=\"vm.builderData.data\"\n                           display-options=\"vm.builderData.displayOptions\"\n                           fields=\"vm.fields\"\n                           initial-condition=\"and\"\n                           mix-rules=\"false\"\n                           mode=\"build\"\n                           operators=\"vm.operators\">\n            </query-builder>\n        </div>\n    </md-dialog-content>\n    <md-dialog-actions layout=\"row\">\n        <span flex></span>\n        <md-button ng-click=\"vm.close()\">Close</md-button>\n    </md-dialog-actions>\n</md-dialog>";
// Exports
module.exports = code;

/***/ }),

/***/ "./app/demo/demo.html":
/*!****************************!*\
  !*** ./app/demo/demo.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<md-card class=\"main-container\" layout-padding>\r\n    <h2>Filter Builder</h2>\r\n    <p>Each section shows the builder with a different config/view set. Click the down arrow to expand.</p>\r\n    <collapsible-panel switch=\"vm.demos.build.show\" title=\"Filter builder (in build mode)\" title-size=\"3\"></collapsible-panel>\r\n    <div ng-show=\"vm.demos.build.show\">\r\n        <demo-options data=\"vm.options.build\"\r\n                      id=\"build\" \r\n                      include-model-changed=\"vm.includeModelChanged(id, val)\"\r\n                      logic-terms-changed=\"vm.logicTermsChanged(id, val)\"\r\n                      use-text-buttons-changed=\"vm.useTextButtonsChanged(id, val)\">\r\n        </demo-options>\r\n        <query-builder condition-options=\"vm.demos.build.conditionOptions\"\r\n                       data=\"vm.demos.build.data\"\r\n                       display-options=\"vm.demos.build.displayOptions\"\r\n                       fields=\"vm.fields\"\r\n                       initial-condition=\"and\"\r\n                       mix-rules=\"false\"\r\n                       mode=\"build\"\r\n                       operators=\"vm.operators\">\r\n        </query-builder>\r\n    </div>\r\n    <md-divider></md-divider>\r\n    <collapsible-panel switch=\"vm.demos.filter.show\" title=\"Quick filter\" title-size=\"3\"></collapsible-panel>\r\n    <div ng-show=\"vm.demos.filter.show\">\r\n        <md-button ng-click=\"vm.openDialog($event)\">Click to open Quick Filter dialog</md-button>\r\n    </div>\r\n    <md-divider></md-divider>\r\n    <collapsible-panel switch=\"vm.demos.entry.show\" title=\"Query form (in entry mode)\" title-size=\"3\"></collapsible-panel>\r\n    <div ng-show=\"vm.demos.entry.show\">\r\n        <demo-options data=\"vm.options.entry\"\r\n                      id=\"entry\" \r\n                      include-model-changed=\"vm.includeModelChanged(id, val)\"\r\n                      logic-terms-changed=\"vm.logicTermsChanged(id, val)\"\r\n                      use-text-buttons-changed=\"vm.useTextButtonsChanged(id, val)\">\r\n        </demo-options>\r\n        <query-builder child-rule=\"vm.demos.entry.defaultChildRule\"\r\n                       child-rule-set=\"vm.demos.entry.defaultChildRuleSet\"\r\n                       condition-options=\"vm.demos.entry.conditionOptions\"\r\n                       data=\"vm.demos.entry.data\"\r\n                       display-options=\"vm.demos.entry.displayOptions\"\r\n                       fields=\"vm.fields\"\r\n                       mode=\"entry\"\r\n                       pre-defined-rules=\"vm.queryFilters\">\r\n        </query-builder>\r\n    </div>\r\n</md-card>\r\n\r\n\r\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./app/demo/demo.module.js":
/*!*********************************!*\
  !*** ./app/demo/demo.module.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.demo', ['ngRoute']);

/***/ }),

/***/ "./app/directives/directives.module.js":
/*!*********************************************!*\
  !*** ./app/directives/directives.module.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.directives', []);

/***/ }),

/***/ "./app/directives/rule-size.directive.js":
/*!***********************************************!*\
  !*** ./app/directives/rule-size.directive.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.directives').directive('ruleSize', function () {
  return {
    require: 'ngModel',
    link: function link(scope, elem, attr, ngModel) {

      function validate() {
        var rules = ngModel.$modelValue.rules;
        if (rules.length > 1) {
          ngModel.$setValidity('invalidRuleSize', true);
        } else {
          ngModel.$setValidity('invalidRuleSize', false);
        }
      }

      var ruleSizePresent = attr.ruleSize;
      if (ruleSizePresent) {
        scope.$watch(function (newValue, oldValue) {
          validate();
        });
      }
    }
  };
});

/***/ }),

/***/ "./app/services/field-data.service.js":
/*!********************************************!*\
  !*** ./app/services/field-data.service.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.services').factory('fieldDataService', function () {

    return {
        getFields: getFields
    };

    function getFields() {
        var filters = [{
            id: 1,
            name: 'Attribution',
            values: ['COMMON', 'CAT', 'DOG'],
            options: {
                allowCaseSensitive: false,
                multipleValues: true,
                validOperators: ['exact-match']
            }
        }, {
            id: 2,
            name: 'Class',
            values: [],
            options: {
                allowCaseSensitive: true
            }
        }, {
            id: 3,
            name: 'Rule',
            options: {
                allowCaseSensitive: true
            }
        }, {
            id: 4,
            name: 'Scope',
            options: {
                allowCaseSensitive: true
            }
        }, {
            id: 5,
            name: 'Security',
            options: {
                allowCaseSensitive: true
            }
        }, {
            id: 6,
            name: 'Service',
            options: {
                allowCaseSensitive: true
            }
        }, {
            id: 7,
            name: 'Tech',
            options: {
                allowCaseSensitive: true
            }
        }, {
            id: 8,
            name: 'Type',
            values: [],
            options: {
                allowCaseSensitive: true
            }
        }, {
            id: 9,
            name: 'Universe',
            options: {
                allowCaseSensitive: true
            }
        }, {
            id: 10,
            name: 'Value',
            options: {
                allowCaseSensitive: true
            }
        }];

        // Populate class and type with some data
        for (var i = 1; i <= 100; i++) {
            filters[1].values.push('Class' + i);
            filters[7].values.push('Type' + i);
        }

        return filters;
    }
});

/***/ }),

/***/ "./app/services/filter-data.service.js":
/*!*********************************************!*\
  !*** ./app/services/filter-data.service.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.services').factory('filterDataService', function () {

    return {
        getFilters: getFilters
    };

    /**
     * Some filters data - in real app, this will come from database.
     * @returns {Array}
     */
    function getFilters() {
        return [{
            id: 1,
            name: 'Filter 1 - type filter',
            type: 'ruleSet',
            condition: 'and',
            rules: [{
                id: '1-1',
                type: 'rule',
                field: 'class',
                operator: 'equals',
                value: 'class1'
            }, {
                id: '1-2',
                type: 'rule',
                field: 'type',
                operator: 'equals',
                value: '',
                isUserInput: true,
                userInput: {
                    allowWildcards: false,
                    name: 'type'
                }
            }]
        }, {
            id: 2,
            name: 'Filter 2 - class filter',
            type: 'ruleSet',
            condition: 'and',
            rules: [{
                id: '1-1',
                type: 'rule',
                field: 'class',
                operator: 'equals',
                value: '',
                isUserInput: true,
                userInput: {
                    allowWildcards: true,
                    name: 'class'
                }
            }, {
                id: '1-2',
                type: 'rule',
                field: 'rule',
                operator: 'equals',
                value: 'rule1'
            }]
        }, {
            id: 3,
            name: 'Filter 3 - class & rule filter, different inputs',
            type: 'ruleSet',
            condition: 'and',
            rules: [{
                id: '1-1',
                type: 'rule',
                field: 'class',
                operator: 'equals',
                value: '',
                isUserInput: true,
                userInput: {
                    allowWildcards: false,
                    name: 'class'
                }
            }, {
                id: '1-2',
                type: 'rule',
                field: 'rule',
                operator: 'equals',
                value: '',
                isUserInput: true,
                userInput: {
                    allowWildcards: false,
                    name: 'rule'
                }
            }, {
                id: '1-3',
                type: 'rule',
                field: 'type',
                operator: 'equals',
                value: 'type1'
            }]
        }, {
            id: 4,
            name: 'Filter 4 - class & rule filter, same inputs',
            type: 'ruleSet',
            condition: 'and',
            rules: [{
                id: '1-1',
                type: 'rule',
                field: 'class',
                operator: 'equals',
                value: '',
                isUserInput: true,
                userInput: {
                    allowWildcards: false,
                    name: 'Enter a value used for both class and rule'
                }
            }, {
                id: '1-2',
                type: 'rule',
                field: 'rule',
                operator: 'equals',
                value: '',
                isUserInput: true,
                userInput: {
                    allowWildcards: false,
                    name: 'Enter a value used for both class and rule'
                }
            }, {
                id: '1-3',
                type: 'rule',
                field: 'type',
                operator: 'equals',
                value: 'type1'
            }]
        }, {
            id: 5,
            name: 'Filter 5 - read only, no user inputs',
            type: 'ruleSet',
            condition: 'and',
            rules: [{
                id: '1-1',
                type: 'rule',
                field: 'class',
                operator: 'equals',
                value: 'class',
                isUserInput: false,
                userInput: {}
            }, {
                id: '1-2',
                type: 'rule',
                field: 'rule',
                operator: 'equals',
                value: 'rule1',
                isUserInput: false,
                userInput: {}
            }]
        }];
    }
});

/***/ }),

/***/ "./app/services/filter-transformation.service.js":
/*!*******************************************************!*\
  !*** ./app/services/filter-transformation.service.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.services').factory('filterTransformationService', function () {

    return {
        getPredicateTree: getPredicateTree
    };

    /**
     * Maps the given filter builder model to a predicate tree.
     * 
     * @param {Object} filterBuilderModel The model used by the filter builder component.
     * @returns {Object} a predicate tree.
     */
    function getPredicateTree(filterBuilderModel) {
        return _mapRuleSet(filterBuilderModel);
    }

    function _mapRule(rule, criteria) {
        var criteriaNameByFieldName = {
            'Class': 'CLASS',
            'Rule': 'RULE',
            'Scope': 'SCOPE',
            'Security': 'SECURITY',
            'Service': 'SERVICE',
            'Tech': 'TECH',
            'Type': 'TYPE',
            'Universe': 'UNIVERSE',
            'Value': 'VALUE'
        };
        var field = criteriaNameByFieldName[rule.field.name];
        var values = _mapValues(rule.operator, rule.value);
        criteria[field] = values;
    }

    function _mapRuleSet(ruleSet) {
        var criteria = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


        var predicateTree = {};

        var ruleSets = ruleSet.rules.filter(function (rule) {
            return rule.type === 'ruleSet';
        });
        if (ruleSets.length) {
            predicateTree.type = ruleSet.condition.toUpperCase();
            predicateTree.children = [];
        } else {
            predicateTree.type = 'MATCH';
            predicateTree.criteria = criteria;
        }

        ruleSet.rules.forEach(function (rule) {
            switch (rule.type) {
                case 'rule':
                    if (rule.field.name === 'Attribution') {
                        predicateTree.attributions = rule.value;
                    } else {
                        _mapRule(rule, criteria);
                    }
                    break;
                case 'ruleSet':
                    predicateTree.children.push(_mapRuleSet(rule));
                    break;
            }
        });

        return predicateTree;
    }

    function _mapValues(operator, values) {
        var vals = Array.isArray(values) ? values : [values];
        var result = vals.map(function (val) {
            switch (operator) {
                case 'contains':
                    return _.escapeRegExp(val);
                case 'ends-with':
                    return _.escapeRegExp(val) + '$';
                case 'exact-match':
                    return '^' + _.escapeRegExp(val) + '$';
                case 'regex':
                    return '' + val;
                case 'starts-with':
                    return '^' + _.escapeRegExp(val);
                default:
                    throw new Error('Unknown operator ' + operator);
            }
        });

        return result;
    }
});

/***/ }),

/***/ "./app/services/rule-data.service.js":
/*!*******************************************!*\
  !*** ./app/services/rule-data.service.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.services').factory('ruleDataService', function () {

    return {
        getOperators: getOperators
    };

    function getOperators() {
        return [{
            description: 'exactly matches',
            display: 'Exact Match',
            value: 'exact-match'
        }, {
            description: 'matches regex',
            display: 'Regex',
            value: 'regex'
        }, {
            description: 'contains',
            display: 'Contains',
            value: 'contains'
        }, {
            description: 'starts with',
            display: 'Starts with',
            value: 'starts-with'
        }, {
            description: 'ends with',
            display: 'Ends with',
            value: 'ends-with'
        }];
    }
});

/***/ }),

/***/ "./app/services/services.module.js":
/*!*****************************************!*\
  !*** ./app/services/services.module.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('queryBuilder.services', []);

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./app/app.js ./app/services/services.module.js ./app/services/field-data.service.js ./app/services/filter-data.service.js ./app/services/filter-transformation.service.js ./app/services/rule-data.service.js ./app/components/components.module.js ./app/components/and-or-switch.component.js ./app/components/collapsible-panel.component.js ./app/components/query-builder.component.js ./app/components/rule-set.component.js ./app/components/rule.component.js ./app/directives/directives.module.js ./app/directives/rule-size.directive.js ./app/demo/demo.module.js ./app/demo/demo-options.component.js ./app/demo/demo.controller.js ./app/demo/demo-data.service.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./app/app.js */"./app/app.js");
__webpack_require__(/*! ./app/services/services.module.js */"./app/services/services.module.js");
__webpack_require__(/*! ./app/services/field-data.service.js */"./app/services/field-data.service.js");
__webpack_require__(/*! ./app/services/filter-data.service.js */"./app/services/filter-data.service.js");
__webpack_require__(/*! ./app/services/filter-transformation.service.js */"./app/services/filter-transformation.service.js");
__webpack_require__(/*! ./app/services/rule-data.service.js */"./app/services/rule-data.service.js");
__webpack_require__(/*! ./app/components/components.module.js */"./app/components/components.module.js");
__webpack_require__(/*! ./app/components/and-or-switch.component.js */"./app/components/and-or-switch.component.js");
__webpack_require__(/*! ./app/components/collapsible-panel.component.js */"./app/components/collapsible-panel.component.js");
__webpack_require__(/*! ./app/components/query-builder.component.js */"./app/components/query-builder.component.js");
__webpack_require__(/*! ./app/components/rule-set.component.js */"./app/components/rule-set.component.js");
__webpack_require__(/*! ./app/components/rule.component.js */"./app/components/rule.component.js");
__webpack_require__(/*! ./app/directives/directives.module.js */"./app/directives/directives.module.js");
__webpack_require__(/*! ./app/directives/rule-size.directive.js */"./app/directives/rule-size.directive.js");
__webpack_require__(/*! ./app/demo/demo.module.js */"./app/demo/demo.module.js");
__webpack_require__(/*! ./app/demo/demo-options.component.js */"./app/demo/demo-options.component.js");
__webpack_require__(/*! ./app/demo/demo.controller.js */"./app/demo/demo.controller.js");
module.exports = __webpack_require__(/*! ./app/demo/demo-data.service.js */"./app/demo/demo-data.service.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map