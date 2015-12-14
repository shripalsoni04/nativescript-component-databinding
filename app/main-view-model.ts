import {Observable} from 'data/observable';

class MainViewModel extends Observable{
	
	_msg: string = 'Hello World';
	
	get msg(){
		console.log('getter called ', this._msg);
		return this._msg;
	}
	
	set msg(value: string){
		this._msg = value;
		this.notifyPropertyChange('msg', value);
	}
}

export var mainViewModel = new MainViewModel();