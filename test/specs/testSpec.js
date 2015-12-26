// Chapter1 test

describe('chapter 1 minimizing globals tests', function(){
	it('variables in function without "var" become global ones', function(){
		var res = sumWithoutVar(1, 2);
		expect(res).toBe(3);
		expect(window.resultInSumWithoutVar).toBe(res);
	});
	it('variables in function with "var" become local ones', function(){
		var res = sumWithVar(1, 2);
		expect(res).toBe(3);
		expect(window.resultInSumWithVar).toBeUndefined();
	});
	it('chain assigned variables become global ones', function(){
		chainAssignmentsWithoutVar();
		expect(window.chainGlobalA).toBeUndefined();
		expect(window.chainGlobalB).toBe(1);
	});
	it('declare var before chain assignments make the variable local', function(){
		chainAssignmentWithVar();
		expect(window.chainLocalC).toBeUndefined();
		expect(window.chainLocalD).toBeUndefined();
	});
	it('globals created with var cannot be deleted (they are real variables). but implied globals created without var can be deleted', function(){
		deleteGlobalVariables();
		expect(window.global_var).toBe(1);
		expect(window.global_novar).toBeUndefined();
		expect(window.global_fromfunc).toBeUndefined();
	});
	xit('assignments to undeclared variables will throw an error in ES5 strict mode', function(){
		'use strict'
		expect(deleteGlobalVariablesInStrictMode).toThrowError();
	});
	it('!!!Pattern!!! single var pattern', function(){
		expect(singleVarPattern).not.toThrow();
	});
	it('hosit variables', function(){
		var arr = hostVariableExample();
		expect(arr).toEqual([undefined, 'local']);
	});
});

describe('loop in javascript Array and Object', function(){

	it('in "for" loops, it is better to cache the length of the array if necessary', function(){
		expect(cacheLoopLength).not.toThrow();
	});
	it('use "i--" or while(i--) instead of "i++" or while(i++) for micro-optimizations', function(){
		expect(microOptimizationOfLoop).not.toThrow();
		expect(microOptimizationOfLoop2).not.toThrow();
	});
	it('it is important to use method hasOwnProperty() when iterating over object properties to filter out properties that come down the prototype chain', function(){
		var man = {hands: 2, legs: 2, heads: 1};
		var man1 = iterateObjectWithHasOwnProperty(man);
		var man2 = iterateObjectWithoutHasOwnProperty(man);
		expect(man1).toEqual(man);
		expect(man2).not.toEqual(man);
		expect(man1.hasOwnProperty('clone')).toBe(false);
		expect(man2.hasOwnProperty('clone')).toBe(true);
	});
	it('use Ojbect.prototype.hasOwnProperty to avoid naming collisions in case the object has redefined a function named hasOwnProperty', function(){
		var man = {hands: 2, legs: 2, heads: 1};
		var man1 = iterateObjectWithHasOwnPropertyOfObjectPrototype(man);
		expect(man1).toEqual(man);
		expect(man1.hasOwnProperty('clone')).toBe(false);
	});

});

describe('switch pattern', function(){
	it('the switch pattern', function(){
		expect(switchPattern(0)).toBe('zero');
		expect(switchPattern(1)).toBe('one');
		expect(switchPattern(2)).toBe('unknown');
	})
});

describe('avoid implied typecasting', function(){
	it('use "===" instead of "==" to make the code more readable', function(){
		expect(0).toBeFalsy();
		expect('').toBeFalsy();
		expect(null).toBeFalsy();
		expect(undefined).toBeFalsy();
	});
});

describe('remember the mantra "eval() is evil."', function(){
	xit('avoid passing strings to setInterval(), setTimeout() and the Function() constructor, as they are similar to eval()', function(){
	});
	it('use Function() instead of eval() if you have to use the eval feature', function(){
		expect(useFunctionConstructor).not.toThrow();
	});
});