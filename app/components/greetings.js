var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dependencyObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var stackLayoutModule = require('ui/layouts/stack-layout');
var builder_1 = require('ui/builder');
var fs = require("file-system");
var messageProperty = new dependencyObservable.Property("message", "GreetingsComponent", new proxy.PropertyMetadata(""));
/**
 * Loads and parses template xml file
 */
function getFileContent(path) {
    path = path.replace("~/", "");
    var fullFilePath = fs.path.join(fs.knownFolders.currentApp().path, path);
    var fileContent;
    if (fs.File.exists(fullFilePath)) {
        var file = fs.File.fromPath(fullFilePath);
        var onError = function (error) {
            throw new Error("Error loading file " + fullFilePath + " :" + error.message);
        };
        fileContent = file.readTextSync(onError);
    }
    return fileContent;
}
var GreetingsComponent = (function (_super) {
    __extends(GreetingsComponent, _super);
    function GreetingsComponent() {
        _super.call(this);
        this.init();
    }
    Object.defineProperty(GreetingsComponent.prototype, "message", {
        get: function () {
            return this._getValue(GreetingsComponent.messageProperty);
        },
        set: function (value) {
            this._setValue(GreetingsComponent.messageProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    // On binding binding property via code, two binding is working even without using dependency property.
    // get message(){
    // 	return this._message;	
    // }
    // set message(value: string){
    // 	this._message = value;
    // 	this.notifyPropertyChange('message', value);
    // }
    GreetingsComponent.prototype.attachView = function () {
        var xml = getFileContent(GreetingsComponent.templateUrl);
        var view = builder_1.parse(xml);
        this.addChild(view);
    };
    GreetingsComponent.prototype.init = function () {
        this.bindingContext = this;
        this.attachView();
    };
    GreetingsComponent.templateUrl = 'components/greetings.xml';
    GreetingsComponent.messageProperty = messageProperty;
    return GreetingsComponent;
})(stackLayoutModule.StackLayout);
exports.GreetingsComponent = GreetingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZXRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JlZXRpbmdzLnRzIl0sIm5hbWVzIjpbImdldEZpbGVDb250ZW50IiwiR3JlZXRpbmdzQ29tcG9uZW50IiwiR3JlZXRpbmdzQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiR3JlZXRpbmdzQ29tcG9uZW50Lm1lc3NhZ2UiLCJHcmVldGluZ3NDb21wb25lbnQuYXR0YWNoVmlldyIsIkdyZWV0aW5nc0NvbXBvbmVudC5pbml0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU8sb0JBQW9CLFdBQVcsK0JBQStCLENBQUMsQ0FBQztBQUN2RSxJQUFPLEtBQUssV0FBVyxlQUFlLENBQUMsQ0FBQztBQUN4QyxJQUFPLGlCQUFpQixXQUFXLHlCQUF5QixDQUFDLENBQUM7QUFDOUQsd0JBQW9CLFlBQVksQ0FBQyxDQUFBO0FBQ2pDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUdoQyxJQUFJLGVBQWUsR0FBRyxJQUFJLG9CQUFvQixDQUFDLFFBQVEsQ0FDbkQsU0FBUyxFQUNULG9CQUFvQixFQUNwQixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FDakMsQ0FBQztBQUVGOztHQUVHO0FBQ0gsd0JBQXdCLElBQVk7SUFDbkNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO0lBQzlCQSxJQUFJQSxZQUFZQSxHQUFHQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUN6RUEsSUFBSUEsV0FBV0EsQ0FBQ0E7SUFDYkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDckNBLElBQUlBLElBQUlBLEdBQUdBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO1FBQ3BDQSxJQUFJQSxPQUFPQSxHQUFHQSxVQUFVQSxLQUFLQTtZQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixHQUFHLFlBQVksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pGLENBQUMsQ0FBQ0E7UUFDRkEsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDaERBLENBQUNBO0lBQ0RBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO0FBQ3BCQSxDQUFDQTtBQUVEO0lBQXdDQyxzQ0FBNkJBO0lBUXBFQTtRQUNDQyxpQkFBT0EsQ0FBQ0E7UUFDUkEsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7SUFDYkEsQ0FBQ0E7SUFFREQsc0JBQUlBLHVDQUFPQTthQUFYQTtZQUNDRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxrQkFBa0JBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQzNEQSxDQUFDQTthQUVERixVQUFZQSxLQUFhQTtZQUN4QkUsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxlQUFlQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUMzREEsQ0FBQ0E7OztPQUpBRjtJQU1EQSx1R0FBdUdBO0lBQ3ZHQSxpQkFBaUJBO0lBQ2pCQSwwQkFBMEJBO0lBQzFCQSxJQUFJQTtJQUVKQSw4QkFBOEJBO0lBQzlCQSwwQkFBMEJBO0lBQzFCQSxnREFBZ0RBO0lBQ2hEQSxJQUFJQTtJQUVJQSx1Q0FBVUEsR0FBbEJBO1FBQ0NHLElBQUlBLEdBQUdBLEdBQUdBLGNBQWNBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFDekRBLElBQUlBLElBQUlBLEdBQUdBLGVBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3RCQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNyQkEsQ0FBQ0E7SUFFT0gsaUNBQUlBLEdBQVpBO1FBQ0NJLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLENBQUNBO1FBQzNCQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7SUF0Q01KLDhCQUFXQSxHQUFXQSwwQkFBMEJBLENBQUNBO0lBRWpEQSxrQ0FBZUEsR0FBR0EsZUFBZUEsQ0FBQ0E7SUFxQzFDQSx5QkFBQ0E7QUFBREEsQ0FBQ0EsQUF6Q0QsRUFBd0MsaUJBQWlCLENBQUMsV0FBVyxFQXlDcEU7QUF6Q1ksMEJBQWtCLHFCQXlDOUIsQ0FBQSJ9