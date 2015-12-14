var main_view_model_1 = require('./main-view-model');
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = main_view_model_1.mainViewModel;
    // binding message property
    var greetingsComponent = page.getViewById('greetingsComponent');
    if (greetingsComponent) {
        greetingsComponent.bind({
            sourceProperty: 'msg',
            targetProperty: 'message',
            twoWay: true
        }, main_view_model_1.mainViewModel);
    }
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbInBhZ2VMb2FkZWQiXSwibWFwcGluZ3MiOiJBQUFBLGdDQUE0QixtQkFBbUIsQ0FBQyxDQUFBO0FBS2hELG9CQUFvQixJQUFJO0lBQ3BCQSxJQUFJQSxJQUFJQSxHQUFTQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUM3QkEsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsK0JBQWFBLENBQUNBO0lBRXZDQSwyQkFBMkJBO0lBQzNCQSxJQUFJQSxrQkFBa0JBLEdBQWdCQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBO0lBQzdFQSxFQUFFQSxDQUFBQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUFBLENBQUNBO1FBQ3RCQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBO1lBQ3ZCQSxjQUFjQSxFQUFFQSxLQUFLQTtZQUNyQkEsY0FBY0EsRUFBRUEsU0FBU0E7WUFDekJBLE1BQU1BLEVBQUVBLElBQUlBO1NBQ1pBLEVBQUVBLCtCQUFhQSxDQUFDQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7QUFHRkEsQ0FBQ0E7QUFDRCxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyJ9