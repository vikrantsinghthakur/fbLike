jest.dontMock('../actions/toggleLike');


describe('reduxTests', function() {
 	it('should create an action on state change', function() {
 	var likeProp= require('./../actions/toggleLike');
 		const val={'stat':'true'}
 		const expectedVal={
 			type: val.stat
 		}
 		expect(likeProp.toggleLike(val)).toEqual(expectedVal);
 	});

 	// it('should reduce the action',function(){
 	// 	var redcr=require('./../reducers/flipLike');
 	// 	const TRUE='true';
 	// 	expect(redcr.flipLike(null,TRUE)).toEqual(TRUE);
 	// });

});