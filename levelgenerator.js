// Alg parameetird
maxRooms = maxRooms || 12;
minRoomSize = minRoomSize || 4;
maxRoomSize = maxRoomSize || 14;

// Seinte võrgustik
var ret = [];
for (var i = 0; i < mapSize.x; ++i) {
	ret.push ([])
	for (var j = 0; j < mapSize.y ++j) {
		ret[i].push(1);
	}
}

// Ruumid
function setFloor(room){
	var x = room.x;
	var y = room.y;
	var w = room.w;
	var h = room.h;
	for (var i = x; i < x + w; ++i) {
		for (var j = y; j < y + h; ++j) {
			ret[i][j] = 0;
		}
	}
}

// Mitu ruumi on jäänud veel luua
var roomsLeft = maxRooms -1;

// Kontrolli olemas olevat ruumi, kas tuba kattub teise toaga või kas kaardi ruum on otsas
function isValid(room) {
	var x = room.x;
	var y = room.y;
	var w = room.w;
	var h = room.h;

// Kontrolli kas tube on veel
	if (roomsLeft <=0) {return false;}

// Kontrolli kaardi piire
	if (x < 0 || x + w >= mapSize.x) {return false;}
	if (y < 0 || y + h >= mapSize.y) {return false;}

// Veendu, et toad ei kattuks
	for (var i = x-1; i < x + w + 1; ++i) {
		for (var j = y-1; j < y + h + 1; ++j) {
			if (ret[i] && ret[i][j] === 0) {return false;}
		}
	}
	return true;
}

