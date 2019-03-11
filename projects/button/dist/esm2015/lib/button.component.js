/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
export class ButtonComponent {
    constructor() {
        this.click = new EventEmitter();
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-button',
                template: `
    <button (click)="click.emit()"><ng-content></ng-content></button>
  `,
                styles: [`
      button {
        color: white;
        border: 0;
        height: 48px;
        padding: 0 30px;
        background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
        border-radius: 3px;
      }
    `]
            }] }
];
ButtonComponent.propDecorators = {
    click: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.click;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2J1dHRvbi8iLCJzb3VyY2VzIjpbImxpYi9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQmhFLE1BQU0sT0FBTyxlQUFlO0lBbkI1QjtRQXFCUyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7WUF0QkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7O0dBRVQ7eUJBRUM7Ozs7Ozs7Ozs7S0FVQzthQUVKOzs7b0JBRUUsTUFBTTs7OztJQUFQLGdDQUNrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiY2xpY2suZW1pdCgpXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvYnV0dG9uPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBidXR0b24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZlNmI4YiAzMCUsICNmZjhlNTMgOTAlKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDJweCByZ2JhKDI1NSwgMTA1LCAxMzUsIDAuMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn0iXX0=