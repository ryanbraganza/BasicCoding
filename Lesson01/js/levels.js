var _levels = new Array();

// level 1
_levels.push(
	{
		"elephant":{
			"x":0, "y":0, "rotation":0
		},
		"goal":{
			"x":3, "y":1
		},
		"coins":[
			{"x":1, "y":0},
			{"x":2, "y":1},
		],
		"holes":[],
	}
);


// level 2
_levels.push(
	{
		"elephant":{
			"x":0, "y":0, "rotation":0
		},
		"goal":{
			"x":9, "y":9
		},
		"coins":[],
		"holes":[],
	}
);

// level 3
_levels.push(
	{
		"elephant":{
			"x":0, "y":3, "rotation":0
		},
		"goal":{
			"x":9, "y":3
		},
		"coins":[
			{"x":2, "y":3},
			{"x":4, "y":3},
			{"x":5, "y":3},
			{"x":6, "y":3},
			{"x":8, "y":3},
		],
		"holes":[
			{"x":3, "y":3},
			{"x":7, "y":3},
		],
	}
);

// level 4
_levels.push(
	{
		"elephant":{
			"x":0, "y":0, "rotation":0
		},
		"goal":{
			"x":9, "y":0
		},
		"coins":[
			{"x":2, "y":1},
			{"x":2, "y":2},
			{"x":2, "y":3},
			{"x":2, "y":4},
			{"x":4, "y":1},
			{"x":4, "y":2},
			{"x":4, "y":3},
			{"x":4, "y":4},
			{"x":7, "y":1},
			{"x":7, "y":2},
			{"x":7, "y":3},
			{"x":7, "y":4},
		],
		"holes":[],
	}
);

// level 5
_levels.push(
	{
		"elephant":{
			"x":0, "y":0, "rotation":0
		},
		"goal":{
			"x":-1, "y":-1 // -1 = random
		},
		"coins":[],
		"holes":[
			{"x":1, "y":0},
			{"x":6, "y":2},
			{"x":3, "y":3},
			{"x":5, "y":5},
			{"x":3, "y":6},
			{"x":7, "y":8},
			{"x":2, "y":8},
			{"x":5, "y":9},
		],
	}
);