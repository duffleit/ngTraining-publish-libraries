(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('button', ['exports', '@angular/core'], factory) :
    (factory((global.button = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonService = /** @class */ (function () {
        function ButtonService() {
        }
        ButtonService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ButtonService.ctorParameters = function () { return []; };
        /** @nocollapse */ ButtonService.ngInjectableDef = i0.defineInjectable({ factory: function ButtonService_Factory() { return new ButtonService(); }, token: ButtonService, providedIn: "root" });
        return ButtonService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.click = new i0.EventEmitter();
        }
        ButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-button',
                        template: "\n    <button (click)=\"click.emit()\"><ng-content></ng-content></button>\n  ",
                        styles: ["\n      button {\n        color: white;\n        border: 0;\n        height: 48px;\n        padding: 0 30px;\n        background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);\n        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);\n        border-radius: 3px;\n      }\n    "]
                    }] }
        ];
        ButtonComponent.propDecorators = {
            click: [{ type: i0.Output }]
        };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ButtonComponent],
                        imports: [],
                        exports: [ButtonComponent]
                    },] }
        ];
        return ButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ButtonService = ButtonService;
    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=button.umd.js.map