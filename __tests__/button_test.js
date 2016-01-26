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
});