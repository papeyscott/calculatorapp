var sb = require("./sandbox.js");
	var id, display;

	function init(){
		display = document.getElementById("board");

		sb.listen({
			"notify-board": refreshBoard
		},id);
	}

	function refreshBoard(cels){
		var p = document.createElement("p");
		var text = document.createTextNode(cels);
		p.appendChild(text);

		display.innerHTML = "";
		display.appendChild(p);
	}

	
		module.exports.id = id;
		module.exports.init = init;
		module.exports.refreshBoard = refreshBoard;
