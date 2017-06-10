var sb = require("./sandbox.js");

	var id, input, handle, cels;

	id = "calculator-module";

	function init(){
		input = document.getElementById("temp");
		handle = document.getElementById("convert");

		$on(handle, "click", calculate);

	}

	function convert(f){
		return (f - 32)* (5/9);
	}

	function calculate(e){
		cels = convert(input.value);
					
		sb.notify({
			type:"notify-board",
			data:cels
		});

	e.preventDefault();
	}

	
		module.exports.id = id;
		module.exports.init = init;
		module.exports.calculate = calculate;
	

