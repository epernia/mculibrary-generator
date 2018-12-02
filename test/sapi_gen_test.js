var should    = require("chai").should();
var calculator = require("../app/sapi_gen");

describe("sapi_gen tests: ", function() {
	before(function() {
		 // runs before all tests in this block
		var result;
	});
	after(function() {
		// runs after all tests in this block
	});
	beforeEach(function() {
		// runs before each test in this block
	});
	afterEach(function() {
	   // runs after each test in this block
	   result = null;  
	});	
	describe("Check generated documentation: ", function() {
			it("Check SoC documentation.", function() {
				result   = calculator.sum(2);
				result.should.equal(4);
			});
			it("Check Board documentation.", function() {
				result   = calculator.sum(2);
				result.should.be.a('number');
			});
	});
	describe("Check generated C code: ", function() {
		it("Check GPIO C module", function() {
			result   = calculator.addTested("text");
			result.should.equal("text tested");
		});		
		it("Check Core C module", function() {
			result   = calculator.addTested("text");
			result.should.be.a('string');
		});	
		it("Check SoC C module", function() {
			result   = calculator.addTested("text");
			result.should.be.a('string');
		});		
		it("Check Board C module", function() {
			result   = calculator.addTested("text");
			result.should.have.lengthOf(11);
		});		
	});

});
