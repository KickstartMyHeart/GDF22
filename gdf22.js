function GDF22() {	
	
	//only user on server ?????
	/*
	registerScript = function(scriptName) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = (scriptName + '.js');
		$("head").append(script);
		console.log(scriptName);
		$("body").append("scriptName(stageOptions.height, stageOptions.width)");
	}
*/
	var that = this;

	this.stageOptions = {
		height: 600,
		width: 800,
		speed: 3
	};
	
	this.gametick = 0;

	$("#stage").playground(this.stageOptions)
		.addGroup("bgLayer").end()
		.addGroup("spriteLayer")
	
	// Initialize the background images. This needs to be rewritten in a modular
	// fashion for parallax.
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
	
	// Initialize some test enemies.
	var enemies = [];
	for (var i = 0; i < 10; i++) {
		enemies.push(new Enemy('narwhal', Math.random() * stageOptions.width, Math.random() * stageOptions.height));
	}
	
	// Main game loop and logic runs here.
	$.playground().registerCallback(function () {
		// Increment the game timer on every frame.
		if (0) {
			that.gametick++;
			console.log("Woo");
		}

		// Take care of updating all of the game object positions.
		// This one is the background.
		var scrollspeed = stageOptions.speed;
	
		$("#bgLayer").children().each(function () {
			if ($(this).y() >= that.stageOptions.height) {
				$(this).y($(this).h() * -3 + scrollspeed, true);
				// $(this).y($(this).h() * -1);
			} else {
				$(this).y(scrollspeed, true);
			}
		});
		
		// This is for the enemies.
		//$("#spriteLayer").children().each(function () {
		//	$(this).x(Math.random(), true);
		//	$(this).y(Math.random(), true);
		//});
		
	}, 30);
		
	$.playground().startGame(function () {

	});
	
	//all external code goes herr
	playership(stageOptions.width, stageOptions.height);
	powerup(stageOptions.width, stageOptions.height, stageOptions.speed);
};