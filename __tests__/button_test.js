var ReactDOM =require('react-dom');
jest.dontMock('../components/para.js');

describe('Para', function() {
	var React=require('react/addons');
	var TestUtils=React.addons.TestUtils;
	var Para1;

	beforeEach(function(){
		Para1 =require('../components/para');	
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

 	it('should change state on click', function(){
 		var para= TestUtils.renderIntoDocument(<Para1/>);
 		var label= ReactDOM.findDOMNode(para);
 		var stat1=label.textContent;
 		TestUtils.Simulate.click(para);
 		var stat2=ReactDOM.findDOMNode(para).textContent;
 		expect(stat1).not.toEqual(stat2);
 	});

});