import {mainViewModel} from './main-view-model';
import {Page} from 'ui/page';
import {StackLayout} from 'ui/layouts/stack-layout';
import {load} from 'ui/builder';

function pageLoaded(args) {
    var page = <Page>args.object;
    page.bindingContext = mainViewModel;

	// binding message property
	var greetingsComponent = <StackLayout>page.getViewById('greetingsComponent');
	if(greetingsComponent){
		greetingsComponent.bind({
			sourceProperty: 'msg',
			targetProperty: 'message',
			twoWay: true
		}, mainViewModel);	
	}
	
	
}
exports.pageLoaded = pageLoaded;
