var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require('data/observable');
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.apply(this, arguments);
        this._msg = 'Hello World';
    }
    Object.defineProperty(MainViewModel.prototype, "msg", {
        get: function () {
            console.log('getter called ', this._msg);
            return this._msg;
        },
        set: function (value) {
            this._msg = value;
            this.notifyPropertyChange('msg', value);
        },
        enumerable: true,
        configurable: true
    });
    return MainViewModel;
})(observable_1.Observable);
exports.mainViewModel = new MainViewModel();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbIk1haW5WaWV3TW9kZWwiLCJNYWluVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiTWFpblZpZXdNb2RlbC5tc2ciXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFFM0M7SUFBNEJBLGlDQUFVQTtJQUF0Q0E7UUFBNEJDLDhCQUFVQTtRQUVyQ0EsU0FBSUEsR0FBV0EsYUFBYUEsQ0FBQ0E7SUFXOUJBLENBQUNBO0lBVEFELHNCQUFJQSw4QkFBR0E7YUFBUEE7WUFDQ0UsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN6Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDbEJBLENBQUNBO2FBRURGLFVBQVFBLEtBQWFBO1lBQ3BCRSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNsQkEsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxLQUFLQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN6Q0EsQ0FBQ0E7OztPQUxBRjtJQU1GQSxvQkFBQ0E7QUFBREEsQ0FBQ0EsQUFiRCxFQUE0Qix1QkFBVSxFQWFyQztBQUVVLHFCQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9