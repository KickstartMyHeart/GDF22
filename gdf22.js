function GDF22() {

	this.stageOptions = {
		height: 600,
		width: 800
	};

	this.testimg = new $.gameQuery.Animation({imageURL: "images/trollface.png"});
	
	this.scroll = function () {
		
	};

	$("#stage").playground(this.stageOptions)
		.addGroup("bgLayer")
			.addSprite("testimg", {animation: this.testimg, width: 800, height: 600});
		
	$.playground().startGame(function () {
		alert("FUCK YOU");
	});
};