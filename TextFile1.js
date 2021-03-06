//NOTES: TO RUN THIS CODE, UN-COMMENT OUT 1 CODE BLOCK AT-A-TIME ONLY AND, AFTER RUNNING PLEASE DO NOT FORGET TO AGAIN COMMNT IT OUT



//1. console.log("sita")

//2. var a = { "type": "success", "value": [{ "id": 101, "joke": "Archaeologists unearthed an old english dictionary dating back to the year 1236. It defined &quot;victim&quot; as &quot;one who has encountered Chuck Norris&quot;", "categories": [] }, { "id": 125, "joke": "Simply by pulling on both ends, Chuck Norris can stretch diamonds back into coal.", "categories": [] }, { "id": 284, "joke": "Chuck Norris' first job was as a paperboy. There were no survivors.", "categories": [] }, { "id": 61, "joke": "Chuck Norris once ate a whole cake before his friends could tell him there was a stripper in it.", "categories": [] }, { "id": 302, "joke": "Chuck Norris doesn't go on the internet, he has every internet site stored in his memory. He refreshes webpages by blinking.", "categories": [] }, { "id": 327, "joke": "Chuck Norris once ordered a steak in a restaurant. The steak did what it was told.", "categories": [] }] }
//console.log(a.type)
//console.log(a)

//3. var b1 = { "name": "abc"}			//3. correct format to access variables inside object
//var b2 = { 'name': "abc"}
//var b3 = { name: "abc" }
//var b4 = { "name": 'abc' }
//var b5 = { 'name': 'abc' }
//var b6 = { name: 'abc' }
//console.log(b1.name)
//console.log(b2.name)
//console.log(b3.name)
//console.log(b4.name)
//console.log(b5.name)
//console.log(b6.name)

//4. var b1 = { "name": "abc" }			//4. incorrect format to access variables inside object
//var b2 = { 'name': "abc" }
//var b3 = { name: "abc" }
//var b4 = { "name": 'abc' }
//var b5 = { 'name': 'abc' }
//var b6 = { name: 'abc' }
//console.log(b1.["name"])
//console.log(b2.["name"])
//console.log(b3.["name"])
//console.log(b4.["name"])
//console.log(b5.["name"])
//console.log(b6.["name"])

/*5. var b1 = { "name": "abc" }			//5. correct format to access variables + shortcut to comment out
var b2 = { 'name': "abc"}
var b3 = { name: "abc" }
var b4 = { "name": 'abc' }
var b5 = { 'name': 'abc' }
var b6 = { name: 'abc' }
console.log(b1["name"])
console.log(b2["name"])
console.log(b3["name"])
console.log(b4["name"])
console.log(b5["name"])
console.log(b6["name"])*/


/*var b1 = { "name": "abc", ROLL: '10' }			//6. 
var b2 = { 'name': "abc", ROLL: '11' }
var b3 = { name: "abc", ROLL: '12' }
var dynamic_ = 1
console.log(("b" + dynamic_).ROLL)*/

/*var b1 = { "name": "abc", ROLL: '10' }			//7. 
var b2 = { 'name': "abc", ROLL: '11' }
var b3 = { name: "abc", ROLL: '12' }
var dynamic_ = 1
console.log(("b" + dynamic_)["ROLL"])*/

/*var b1 = { "name": "abc", ROLL: '10' }			//8. 
var b2 = { 'name': "abc", ROLL: '11' }
var b3 = { name: "abc", ROLL: '12' }
var dynamic_ = 1
b = "b" + dynamic_
console.log(b["ROLL"])
dynamic_++
console.log(b["ROLL"])*/

/*var b1 = { "name": "abc", ROLL: '10' }			//9. incorrectly dynamically calling objects
var b2 = { 'name': "abc", ROLL: '11' }
var b3 = { name: "abc", ROLL: '12' }
var dynamic_ = 1
"b" = "b" + dynamic_
console.log(b["ROLL"])
dynamic_++
console.log(b["ROLL"])*/

/*var b1 = { "name": "abc", ROLL: '10' }			//10. use this[] command to search string into the windows object
var b2 = { 'name': "abc", ROLL: '11' }
var b3 = { name: "abc", ROLL: '12' }
var dynamic_ = 1
b = this["b"+dynamic_]
console.log(b["ROLL"])*/

/*var b1 = { "name": "abc", ROLL: '10' }			//11. use this[] command inside the console.log()
var b2 = { 'name': "abc", ROLL: '11' }
var b3 = { name: "abc", ROLL: '12' }
var dynamic_ = 1
console.log(this["b"+dynamic_]["ROLL"])*/

/*var b1 = { "name": "abc", ROLL: '10' }			//12: dynamically object-looping+increement operator testing
var b2 = { 'name': "abc", ROLL: '11' }
var b3 = { name: "abc", ROLL: '12' }
var b4 = { name: "abc", ROLL: '13' }
var dynamic_ = 1
b = "b" + dynamic_
console.log(this[b]["ROLL"])
dynamic_++
b = "b" + dynamic_
console.log(this[b]["ROLL"])
console.log(this[b]["ROLL"])
dynamic_++
b = "b" + dynamic_
console.log(this[b]["ROLL"])
dynamic_++
console.log(this[("b" + dynamic_)]["ROLL"])*/

/*var b1 = { "name": "abc", ROLL: '10' }			//13. dynamically object-looping (post increement operator)
var b2 = { 'name': "abc", ROLL: '11' }
var b3 = { name: "abc", ROLL: '12' }
var dynamic_ = 1
b = "b" + dynamic_
console.log(this[b]["ROLL"])
b = "b" + (++dynamic_)
console.log(this[b]["ROLL"])*/

/*var b1 = { "name": "abc", ROLL: '10' }			//13(b). more compact code
var b2 = { 'name': "abc", ROLL: '11' }
var b3 = { name: "abc", ROLL: '12' }
var dynamic_ = 1
console.log(this["b" + dynamic_]["ROLL"])
console.log(this["b" + ++dynamic_]["ROLL"])*/

/*var b1 = {[{ 'name': "abc", ROLL1: '10' },			//14(a). incorrect syntax-> INCOMPLETE {[]:} (Dynamically variable-looping )
			{ "name": "abc", ROLL2: '11' },
			{ name: "abc", ROLL3: '12' }]}
var dynamic_ = 1
console.log(b1["ROLL" + dynamic_])
console.log(b1["ROLL"+ (++dynamic_)])*/

/*var b1 = {student: [{ 'name': "abc", ROLL1: '10' },		//14(b). incorrect syntax(undefined-> no element as[???ROLL???] inside b1)(Dynamically variable-looping )
					{ "name": "abc", ROLL2: '11' },
					{ name: "abc", ROLL3: '12' }]}
var dynamic_ = 1
console.log(b1["ROLL" + dynamic_])
console.log(b1["ROLL"+ (++dynamic_)])*/

/*var b1 = {student: [{ 'name': "abc", ROLL1: '10' },		//14(c). correct syntax-query values as array (Dynamically variable-looping )
					{ "name": "abc", ROLL2: '11' },
					{ name: "abc", ROLL3: '12' }]
		}
var dynamic_ = 1
console.log(b1["student"][dynamic_-1]["ROLL" + dynamic_])
console.log(b1["student"][dynamic_]["ROLL"+ (++dynamic_)])*/

/*var b1 = {[{ 'name': "abc", ROLL1: '10' },			//15(a). incorrect syntax-variable as arrary
			{ "name": "abc", ROLL2: '11' },
			{ name: "abc", ROLL3: '12' }] : student
		}
var dynamic_ = 1
console.log(b1[0]["ROLL" + dynamic_])
console.log(b1[dynamic_]["ROLL" + (++dynamic_)])*/

/*var b1 = {[{ 'name': "abc", ROLL1: '10' },			//15(b). incorrect syntax-variable as arrary
			{ "name": "abc", ROLL2: '11' },
			{ name: "abc", ROLL3: '12' }] : student
		}
var dynamic_ = 1
console.log(b1[dynamic_ - 1]["ROLL" + dynamic_])
console.log(b1[dynamic_]["ROLL" + (++dynamic_)])*/

/*var b1 = {student: [{ 'name': "abc", ROLL1: '10' },		//16(a). syntax-query values as array (Dynamically variable-looping )
					{ "name": "abc", ROLL2: '11' },
					{ name: "abc", ROLL3: '12' }]
		}
for (var dynamic_ in b1.student)
		{
	console.log(dynamic_)
	//console.log(b1.student.[dynamic_][this["ROLL"+(dynamic_+1)]])	//syntaxError: Unexpected token '['
	//this[] -> IS ONLY USE TO CHECK AND SEARCH THE OBJECTS DEFINED IN SCRIPT AND NOT THE VARIABLES

	//console.log(b1.student[dynamic_](this["ROLL"+(dynamic_+1)]))	//TypeError: b1.student[dynamic_] is not a function
	//this[] -> IS ONLY USE TO CHECK AND SEARCH THE OBJECTS DEFINED IN SCRIPT AND NOT THE VARIABLES

	//console.log(b1.student[dynamic_].(this["ROLL"+(dynamic_+1)]))	//SyntaxError: Unexpected token '('
	//this[] -> IS ONLY USE TO CHECK AND SEARCH THE OBJECTS DEFINED IN SCRIPT AND NOT THE VARIABLES

	console.log((b1.student[dynamic_])["ROLL" + (++dynamic_)])	//CORRECT syntax
		}*/

/*var output = document.getElementById("output")		//17(a). InCorrect(not all on page) Statically outputting results on webpage(predefined input)
var b1 = {student: [{ 'name': "abc", ROLL1: '10' },	
	{ "name": "abc", ROLL2: '11' },
	{ name: "abc", ROLL3: '12' }]
	}
output.innerHTML = "<h1>This is fetching data from JSON File </h1>"
var dynamic1_ = b1.student[0].ROLL1
var dynamic2_ = b1.student[1].ROLL2
var dynamic3_ = b1.student[2].ROLL3
output.innerHTML = dynamic1_
output.innerHTML = dynamic2_
output.innerHTML = dynamic3_*/

/*var output = document.getElementById("output")		//17(b). InComplete(not all on page) Statically outputting results on webpage(predefined input)
var b1 = {student: [{ 'name': "abc", ROLL1: '10' },
	{ "name": "abc", ROLL2: '11' },
	{ name: "abc", ROLL3: '12' }]
	}
output.innerHTML = "<h1>This is fetching data from JSON File </h1>"
var dynamic1_ = b1.student[0].ROLL1
var dynamic2_ = b1.student[1].ROLL2
var dynamic3_ = b1.student[2].ROLL3
output.innerHTML = dynamic1_
//output.innerHTML = dynamic1_ + dynamic2_ + dynamic3_*/
//output.innerHTML = dynamic1_ +" "+ dynamic2_ +" " + dynamic3_*/

/*var output = document.getElementById("output")		//17(c). InComplete Statically outputting results on webpage(predefined input)
var b1 = {student: [{ 'name': "abc", ROLL1: '10' },
	{ "name": "abc", ROLL2: '11' },
	{ name: "abc", ROLL3: '12' }]
	}
output.innerHTML = "<h1>This is fetching data from JSON File </h1>"
var dynamic1_ = parseInt(b1.student[0].ROLL1)
var dynamic2_ = parseInt(b1.student[1].ROLL2)
var dynamic3_ = parseInt(b1.student[2].ROLL3)
output.innerHTML = dynamic1_ + dynamic2_ +  dynamic3_
output.innerHTML = dynamic1_ +" "+ dynamic2_+" " + dynamic3_*/

/*var output = document.getElementById("output")		//17(d). Correctly Statically outputting results on webpage(predefined input)
var b1 = {student: [{ 'name': "abc", ROLL1: '10' },
	{ "name": "abc", ROLL2: '11' },
	{ name: "abc", ROLL3: '12' }]
	}
var container = "<h1>This is fetching data from JSON File </h1>"
var dynamic1_ = parseInt(b1.student[0].ROLL1)
var dynamic2_ = parseInt(b1.student[1].ROLL2)
var dynamic3_ = parseInt(b1.student[2].ROLL3)
container += dynamic1_ + dynamic2_ + dynamic3_
container += dynamic1_ + " " + dynamic2_ + " " + dynamic3_
output.innerHTML = container*/

/*var output = document.getElementById("output")		//17(e). Correctly LOOPING & outputting results on webpage for Dynamical data(predefined input)
var b1 = {student: [{ 'name': "aBC", ROLL1: '10' },
		{ "name": "AbC", ROLL2: '11' },
		{ name: "ABc", ROLL3: '12' }]
	}
var container = "<h1>This is fetching data from JSON File </h1>"
for (var x in b1.student)
	{container += b1.student[x]["name"] + " " + b1.student[x]["ROLL" + (parseInt(x) + 1)] + " "
	}
output.innerHTML = container*/


/*var output = document.getElementById("output")		//17(f). Correctly LOOPING & outputting results on webpage for Dynamic data(predefined input)
var b1 = {student: [{ 'name': "abc", ROLL1: '10' },
		{ "name": "abc", ROLL2: '11' },
		{ name: "abc", ROLL3: '12' }]
		}
output.innerHTML = "<h1>This is fetching data from JSON File </h1>"
for (var dynamic_ in b1.student)
	{output.innerHTML += `<h1>${b1.student[dynamic_]["ROLL"+(parseInt(dynamic_)+ 1)]}</h1>`
	}*/

