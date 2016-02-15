jest.dontMock('../components/para.js');
jest.dontMock('react-dom');
jest.dontMock('react');
jest.dontMock('react-addons-test-utils');
var ReactDOM =require('react-dom');

describe('Para', function() {
	var React=require('react');
	var TestUtils=require('react-addons-test-utils');
	var Para1;

	beforeEach(function(){
		Para1 =require('../components/para')
	});

 	it('should render component', function() {
 	var para= TestUtils.renderIntoDocument(<Para1/>);
 	expect(TestUtils.isCompositeComponent(para)).toBeTruthy();
 	});

 	it('should get initial state from localstorage', function(){
 		var para= TestUtils.renderIntoDocument(<Para1/>);
 		var label= ReactDOM.findDOMNode(para);
 		var stat=window.localStorage.getItem('status');
 		if(stat==null || stat==="false")
 		{
 			expect(label.textContent).toEqual('THIS IS A STATUS Like');
 		}
 		else
 		{
 			expect(label.textContent).toEqual('THIS IS A STATUS Liked');	
 		}
 	});

});