
var MAP_SPRITE_FILENAME = "img/map_sprite.png";
var TS = 15;

var Menu = function () {
	this.currentCursorPos;
    this.node;
	this.animations = {};
	this.objects = {};
	this._contructor = function () {
		this.animations.bg = new $.gQ.Animation({imageURL:"img/menu_bg.jpg"});
		$.playground().addGroup("menu", {width:STAGE_WIDTH, height:STAGE_HEIGHT});
	};
	this._contructor();

	this.drawMenu = function () {
		if (!this.node) return false;
		for (var i=1; i<=OBJECTS.player.owned_pokemons.length; i++) {
			var _pokemon = OBJECTS.player.owned_pokemons[i-1];
			var posY = 100+(40*i);
			this.node.append(
				'<div style="position:absolute;top:'+posY+'px;left:40px;width:400px;color:#000;line-height:40px;">'+
				_pokemon.name+" HP:"+_pokemon.hp+
				'</div>'
			);
		//	this.node.append('<div style="position:absolute;top:100px;left:40px;width:400px;color:#000;line-height:40px;"> HP:'+_pokemon.hp+'</div>');
		}
	};

	this.show = function () {
		console.log("show menu!");
		$("#menu").addSprite("bg_menu", {animation:this.animations.bg,
				width:STAGE_WIDTH, height:STAGE_HEIGHT })
				.z(100);
		this.node = $("#bg_menu");
		this.drawMenu();

		this.currentCursorPos = 1;
		this.drawCursor(this.currentCursorPos);
	};

	this.hide = function () {
		if (!this.node) return false;
		this.node.remove();
	};

	this.drawCursor = function (y) {
		var posY = 110+(40*y);
		$("#menu_cursor").remove();
		this.node.append('<div id="menu_cursor" style="position:absolute;top:'+posY+'px;left:10px;width:400px;color:#000;font-size:20px;">*</div>');
		this.currentCursorPos = y;
	}

};


