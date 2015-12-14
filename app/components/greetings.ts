import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import stackLayoutModule = require('ui/layouts/stack-layout');
import {parse} from 'ui/builder';
var fs = require("file-system");


var messageProperty = new dependencyObservable.Property(
    "message",
    "GreetingsComponent",
    new proxy.PropertyMetadata("")
);

/**
 * Loads and parses template xml file
 */
function getFileContent(path: string){
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

export class GreetingsComponent extends stackLayoutModule.StackLayout{
	
	static templateUrl: string = 'components/greetings.xml';
	
	static messageProperty = messageProperty;
	
	_message: string;
	
	constructor(){
		super();
		this.init();
	}
	
	get message(){
		return this._getValue(GreetingsComponent.messageProperty);	
	}
	
	set message(value: string){
		this._setValue(GreetingsComponent.messageProperty, value);
	}
	
	// On binding binding property via code, two binding is working even without using dependency property.
	// get message(){
	// 	return this._message;	
	// }
	
	// set message(value: string){
	// 	this._message = value;
	// 	this.notifyPropertyChange('message', value);
	// }
	
	private attachView(){
		var xml = getFileContent(GreetingsComponent.templateUrl);
		var view = parse(xml);
		this.addChild(view);
	}
	
	private init(){
		this.bindingContext = this;
		this.attachView();
	}
}
