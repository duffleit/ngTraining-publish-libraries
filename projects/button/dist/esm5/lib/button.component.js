/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.click = new EventEmitter();
    }
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-button',
                    template: "\n    <button (click)=\"click.emit()\"><ng-content></ng-content></button>\n  ",
                    styles: ["\n      button {\n        color: white;\n        border: 0;\n        height: 48px;\n        padding: 0 30px;\n        background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);\n        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);\n        border-radius: 3px;\n      }\n    "]
                }] }
    ];
    ButtonComponent.propDecorators = {
        click: [{ type: Output }]
    };
    return ButtonComponent;
}());
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.click;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J1dHRvbi8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEU7SUFBQTtRQXFCUyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDOztnQkF0QkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsK0VBRVQ7NkJBRUMsOFJBVUM7aUJBRUo7Ozt3QkFFRSxNQUFNOztJQUVULHNCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FIWSxlQUFlOzs7SUFDMUIsZ0NBQ2tDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIChjbGljayk9XCJjbGljay5lbWl0KClcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9idXR0b24+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmU2YjhiIDMwJSwgI2ZmOGU1MyA5MCUpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggMnB4IHJnYmEoMjU1LCAxMDUsIDEzNSwgMC4zKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuICBAT3V0cHV0KClcbiAgcHVibGljIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufSJdfQ==