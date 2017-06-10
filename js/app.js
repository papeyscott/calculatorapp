	window.$on = function(target, type,cb){
		target.addEventListener(type,cb,false);
	}


	var CORE = require("./core.js"),
		board = require("./board.js"),
		calculator = require("./calculator.js");

	CORE.addModule(board.id,board);
	CORE.addModule(calculator.id, calculator);

	board.init();
	calculator.init();
