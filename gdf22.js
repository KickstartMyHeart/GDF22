function GDF22() {	

	var that = this;

	this.stageOptions = {
		height: 600,
		width: 800
	};

	this.testimg = new $.gameQuery.Animation({imageURL: "images/star.jpg"});
	this.testimg.width = 563;
	this.testimg.height = 422;
	
	this.scroll = function () {
		
	};
	
	$("#stage").css('background-color', 'black');

	$("#stage").playground(this.stageOptions)
		.addGroup("bgLayer");
	
	var xLimit = Math.ceil(this.stageOptions.width / this.testimg.width);
	var yLimit = Math.ceil(this.stageOptions.height / this.testimg.height);
	
	for (var i = -1; i < xLimit; i++) {
		for (var j = -1; j < yLimit; j++) {
			$("#bgLayer").addSprite("testimg" + i.toString() + j.toString(), {
				animation: this.testimg,
				width: this.testimg.width,
				height: this.testimg.height,
				posx: this.testimg.width * i,
				posy: this.testimg.height * j
			});
		}
	}
	
	console.log($("#bgLayer").children());
	
	$.playground().registerCallback(function () {
		var scrollspeed = 3;
	
		$("#bgLayer").children().each(function () {
			if ($(this).y() >= that.stageOptions.height) {
				$(this).y(Math.floor($(this).h() * -3) + scrollspeed, true);
				// $(this).y($(this).h() * -1);
			} else {
				$(this).y(scrollspeed, true);
			}
		});
	}, 30);
		
	$.playground().startGame(function () {
	});
};