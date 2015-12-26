function sumWithoutVar(x, y){
	resultInSumWithoutVar = x + y;
	return resultInSumWithoutVar;
}

function sumWithVar(x, y){
	var resultInSumWithVar = x + y;
	return resultInSumWithVar;
}

function chainAssignmentsWithoutVar(){
	var chainGlobalA = chainGlobalB = 1;
}

function chainAssignmentWithVar(){
	var chainLocalC, chainLocalD;
	chainLocalC = chainLocalD = 1;
}

var global_var = 1;
global_novar = 2;
(function(){
	global_fromfunc = 3;
});

var global_var_s = 1;
global_novar_s = 2;
(function(){
	global_fromfunc_s = 3;
});
function deleteGlobalVariables(){
	delete global_var;
	delete global_novar;
	delete global_fromfunc;
}
function deleteGlobalVariablesInStrictMode(){
	delete global_var_s;
	delete global_novar_s;
	delete global_fromfunc_s;
}

function singleVarPattern(){
	var a = 1,
		b = 2,
		sum = a + b,
		myobject = {},
		i,
		j;
	// 
}

function singleVarPatternWithElement(){
	var el = document.getElementById('result'),
		style = el.style;

		// 
}

// hoist variables
var hoistVariableA = 'global';
function hostVariableExample(){
	var arr = [];
	arr.push(hoistVariableA);
	var hoistVariableA = 'local';
	arr.push(hoistVariableA);
	return arr;
}

function cacheLoopLength(){
	var i = 0,
		max,
		myarray = [1,2,3,4];

	for (i = 0, max = myarray.length; i < max; i++){
		console.log(myarray[i]);
		// 
	}

}

function microOptimizationOfLoop(){
	var i,
		myarray = [1,2,3,4,5];

	for(i = myarray.length; i--;) {
		console.log(myarray[i]);
		// 
	}
}

function microOptimizationOfLoop2(){
	var myarray = [1,2,3,4,5],
		i = myarray.length;

	while (i--) {
		console.log(myarray[i]);
		// do something
	}
}

function iterateObjectWithHasOwnProperty(man){
	var i;
	if(typeof Object.prototype.clone === 'undefined') {
		Object.prototype.clone = function(){};
	}
	var newMan = {};
	for(i in man){
		if(man.hasOwnProperty(i)) {
			newMan[i] = man[i];
		}
	}
	return newMan;
}

function iterateObjectWithoutHasOwnProperty(man){
	var i;
	if(typeof Object.prototype.clone === 'undefined') {
		Object.prototype.clone = function(){};
	}
	var newMan = {};
	for(i in man){
		newMan[i] = man[i];
	}
	return newMan;
}

function iterateObjectWithHasOwnPropertyOfObjectPrototype(man){
	var i;
	if(typeof Object.prototype.clone === 'undefined') {
		Object.prototype.clone = function(){};
	}
	var newMan = {};
	for(i in man){
		if(Object.prototype.hasOwnProperty.call(man, i)) {
			newMan[i] = man[i];
		}
	}
	return newMan;
}

function switchPattern(inspect_me){
	var result = '';

	switch (inspect_me) {
	case 0:
		result = "zero";
		break;
	case 1:
		result = "one";
		break;
	default:
		result = "unknown";
	}
	return result;
}

function useFunctionConstructor(a, b){
	var x, y,
		jsstr1 = 'console.log('+ a +')',
		jsstr2 = 'console.log('+ b +')';

		new Function(jsstr1)();
		Function(jsstr2)();

}