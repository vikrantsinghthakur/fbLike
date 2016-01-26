// __tests__/sum-test.js
jest.dontMock('./../components/para.js');

describe('Para', function() {
	var React=require('react/addons');
	var TestUtils=React.addons.TestUtils;
	var Para1;

	beforeEach(function(){
		Para1=require('./../components/para.js');
	});

 	it('should render component', function() {
 	var para= TestUtils.renderIntoDocument(<Para1/>);
 	expect(TestUtils.isCompositeComponent(para)).toBeTruthy();
 	});

 	it('should get initial state from localstorage', function(){
 		var para= TestUtils.renderIntoDocument(<Para1/>);
 		var label= ReactDOM.findDOMNode(para);
 		var stat=localstorage.getItem("likedState");
 		if(stat==NULL || stat==false)
 		{
 			expect(label.getDOMNode().textContent).toEqual('Like');
 		}
 		else
 		{
 			expect(label.getDOMNode().textContent).toEqual('Liked');	
 		}
 	});

});