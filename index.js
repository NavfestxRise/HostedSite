// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAV38QhiE1QX7tkqp8SkDzzdHceYMN2Czk",
	authDomain: "navfestxrise.firebaseapp.com",
	databaseURL: "https://navfestxrise-default-rtdb.firebaseio.com",
	projectId: "navfestxrise",
	storageBucket: "navfestxrise.appspot.com",
	messagingSenderId: "1088540129842",
	appId: "1:1088540129842:web:fc3e67d322cb949adc1a2b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

let user = firebase.auth().signInAnonymously();
let users_root = database.ref("/Participants");
let givenTeamNumber = false;
// let EmailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function EmailValidator(email){
	return true;
}
let checked = [];
let current = 0;

//on pressing the submit button
document.getElementById("submit").onclick = () => {

	let newSchoolEntry = users_root.child(document.getElementById("SchoolName").value);
	let AllEvents = newSchoolEntry.child("Events");
	// events are kept in reverse order as firebase reverses them in the right order
	/* Rise */
	let event = AllEvents.child("Rise");
	let team = event.child("Team 1");
	team.child("Participant 1").set({
		"Name": document.getElementById("RISE_T1_P1_Name").value,
		"Email": document.getElementById("RISE_T1_P1_Mail").value,
		"Phone_Number": document.getElementById("RISE_T1_P1_Phone").value,
		"Standard": document.getElementById("RISE_T1_P1_Std").value,

	});

	team.child("Participant 2").set({
		"Name": document.getElementById("RISE_T1_P2_Name").value,
		"Email": document.getElementById("RISE_T1_P2_Mail").value,
		"Phone_Number": document.getElementById("RISE_T1_P2_Phone").value,
		"Standard": document.getElementById("RISE_T1_P2_Std").value,

	});

	team.child("Participant 3").set({
		"Name": document.getElementById("RISE_T1_P3_Name").value,
		"Email": document.getElementById("RISE_T1_P3_Mail").value,
		"Phone_Number": document.getElementById("RISE_T1_P3_Phone").value,
		"Standard": document.getElementById("RISE_T1_P3_Std").value,

	});
	team.child("Participant 4").set({
		"Name": document.getElementById("RISE_T1_P4_Name").value,
		"Email": document.getElementById("RISE_T1_P4_Mail").value,
		"Phone_Number": document.getElementById("RISE_T1_P4_Phone").value,
		"Standard": document.getElementById("RISE_T1_P4_Std").value,

	});

	team = event.child("Team 2");
	team.child("Participant 1").set({
		Name: document.getElementById("RISE_T2_P1_Name").value,
		Email: document.getElementById("RISE_T2_P1_Mail").value,
		Phone_Number: document.getElementById("RISE_T2_P1_Phone").value,
		Standard: document.getElementById("RISE_T2_P1_Std").value,
	});

	team.child("Participant 2").set({
		Name: document.getElementById("RISE_T2_P2_Name").value,
		Email: document.getElementById("RISE_T2_P2_Mail").value,
		Phone_Number: document.getElementById("RISE_T2_P2_Phone").value,
		Standard: document.getElementById("RISE_T2_P2_Std").value,
	});

	team.child("Participant 3").set({
		Name: document.getElementById("RISE_T2_P3_Name").value,
		Email: document.getElementById("RISE_T2_P3_Mail").value,
		Phone_Number: document.getElementById("RISE_T2_P3_Phone").value,
		Standard: document.getElementById("RISE_T2_P3_Std").value,
	});
	team.child("Participant 4").set({
		Name: document.getElementById("RISE_T2_P4_Name").value,
		Email: document.getElementById("RISE_T2_P4_Mail").value,
		Phone_Number: document.getElementById("RISE_T2_P4_Phone").value,
		Standard: document.getElementById("RISE_T2_P4_Std").value,
	});

	team = event.child("Team 3");
	team.child("Participant 1").set({
		"Name": document.getElementById("RISE_T3_P1_Name").value,
		"Email": document.getElementById("RISE_T3_P1_Mail").value,
		"Phone_Number": document.getElementById("RISE_T3_P1_Phone").value,
		"Standard": document.getElementById("RISE_T3_P1_Std").value,

	});

	team.child("Participant 2").set({
		"Name": document.getElementById("RISE_T3_P2_Name").value,
		"Email": document.getElementById("RISE_T3_P2_Mail").value,
		"Phone_Number": document.getElementById("RISE_T3_P2_Phone").value,
		"Standard": document.getElementById("RISE_T3_P2_Std").value,
	});

	team.child("Participant 3").set({
		"Name": document.getElementById("RISE_T3_P3_Name").value,
		"Email": document.getElementById("RISE_T3_P3_Mail").value,
		"Phone_Number": document.getElementById("RISE_T3_P3_Phone").value,
		"Standard": document.getElementById("RISE_T3_P3_Std").value,
	});
	team.child("Participant 4").set({
		"Name": document.getElementById("RISE_T3_P4_Name").value,
		"Email": document.getElementById("RISE_T3_P4_Mail").value,
		"Phone_Number": document.getElementById("RISE_T3_P4_Phone").value,
		"Standard": document.getElementById("RISE_T3_P4_Std").value,
	});

	team = event.child("Team 4");
	team.child("Participant 1").set({
		Name: document.getElementById("RISE_T4_P1_Name").value,
		Email: document.getElementById("RISE_T4_P1_Mail").value,
		Phone_Number: document.getElementById("RISE_T4_P1_Phone").value,
		Standard: document.getElementById("RISE_T4_P1_Std").value,
	});

	team.child("Participant 2").set({
		Name: document.getElementById("RISE_T4_P2_Name").value,
		Email: document.getElementById("RISE_T4_P2_Mail").value,
		Phone_Number: document.getElementById("RISE_T4_P2_Phone").value,
		Standard: document.getElementById("RISE_T4_P2_Std").value,
	});

	team.child("Participant 3").set({
		Name: document.getElementById("RISE_T4_P3_Name").value,
		Email: document.getElementById("RISE_T4_P3_Mail").value,
		Phone_Number: document.getElementById("RISE_T4_P3_Phone").value,
		Standard: document.getElementById("RISE_T4_P3_Std").value,
	});
	team.child("Participant 4").set({
		Name: document.getElementById("RISE_T4_P4_Name").value,
		Email: document.getElementById("RISE_T4_P4_Mail").value,
		Phone_Number: document.getElementById("RISE_T4_P4_Phone").value,
		Standard: document.getElementById("RISE_T4_P4_Std").value,
	});
	event.child("Domain_Team_1").set(document.getElementById("Domain1").value)
	event.child("Domain_Team_2").set(document.getElementById("Domain2").value)
	event.child("Domain_Team_3").set(document.getElementById("Domain3").value)
	event.child("Domain_Team_4").set(document.getElementById("Domain4").value)

	/* event 8*/
	event = AllEvents.child("FROM DAEDALUS??? WORKSHOP:Building Empires");
	event.child("Participant 1").set({
		"Name": document.getElementById("FDWBE_P1_Name").value,
		"Email": document.getElementById("FDWBE_P1_Mail").value,
		"Phone_Number": document.getElementById("FDWBE_P1_Phone").value,
		"Standard": document.getElementById("FDWBE_P1_Std").value,

	});

	event.child("Participant 2").set({
		"Name": document.getElementById("FDWBE_P2_Name").value,
		"Email": document.getElementById("FDWBE_P2_Mail").value,
		"Phone_Number": document.getElementById("FDWBE_P2_Phone").value,
		"Standard": document.getElementById("FDWBE_P2_Std").value,

	});

	event.child("Participant 3").set({
		"Name": document.getElementById("FDWBE_P3_Name").value,
		"Email": document.getElementById("FDWBE_P3_Mail").value,
		"Phone_Number": document.getElementById("FDWBE_P3_Phone").value,
		"Standard": document.getElementById("FDWBE_P3_Std").value,

	});

	/* event 7 */
	event = AllEvents.child("Reviving Legends: DECLAMATION");
	event.child("Participant 1").set({
		"Name": document.getElementById("RLD_P1_Name").value,
		"Email": document.getElementById("RLD_P1_Mail").value,
		"Phone_Number": document.getElementById("RLD_P1_Phone").value,
		"Standard": document.getElementById("RLD_P1_Std").value,
	});

	/*event 6*/
	event = AllEvents.child("Tarke Shashtra");
	event.child("Participant 1").set({
		"Name": document.getElementById("TS_P1_Name").value,
		"Email": document.getElementById("TS_P1_Mail").value,
		"Phone_Number": document.getElementById("TS_P1_Phone").value,
		"Standard": document.getElementById("TS_P1_Std").value,
	});
	event.child("Participant 2").set({
		"Name": document.getElementById("TS_P2_Name").value,
		"Email": document.getElementById("TS_P2_Mail").value,
		"Phone_Number": document.getElementById("TS_P2_Phone").value,
		"Standard": document.getElementById("TS_P2_Std").value,
	});

	/*event 5*/
	event = AllEvents.child("Kautalya - The Buisness Mogul");
	event.child("Participant 1").set({
		"Name": document.getElementById("KTBM_P1_Name").value,
		"Email": document.getElementById("KTBM_P1_Mail").value,
		"Phone_Number": document.getElementById("KTBM_P1_Phone").value,
		"Standard": document.getElementById("KTBM_P1_Std").value,
	});
	event.child("Participant 2").set({
		"Name": document.getElementById("KTBM_P2_Name").value,
		"Email": document.getElementById("KTBM_P2_Mail").value,
		"Phone_Number": document.getElementById("KTBM_P2_Phone").value,
		"Standard": document.getElementById("KTBM_P2_Std").value,
	});
	event.child("Participant 3").set({
		"Name": document.getElementById("KTBM_P3_Name").value,
		"Email": document.getElementById("KTBM_P3_Mail").value,
		"Phone_Number": document.getElementById("KTBM_P3_Phone").value,
		"Standard": document.getElementById("KTBM_P3_Std").value,
	});

	/*event 4*/
	event = AllEvents.child("The Final Verdict");
	event.child("Participant 1").set({
		"Name": document.getElementById("TFV_P1_Name").value,
		"Email": document.getElementById("TFV_P1_Mail").value,
		"Phone_Number": document.getElementById("TFV_P1_Phone").value,
		"Standard": document.getElementById("TFV_P1_Std").value,
	});

	/* event 3*/
	event = AllEvents.child("The Colosseum - TV Show Event");
	event.child("Participant 1").set({
		"Name": document.getElementById("TCTSE_P1_Name").value,
		"Email": document.getElementById("TCTSE_P1_Mail").value,
		"Phone_Number": document.getElementById("TCTSE_P1_Phone").value,
		"Standard": document.getElementById("TCTSE_P1_Std").value,
	});
	event.child("Participant 2").set({
		"Name": document.getElementById("TCTSE_P2_Name").value,
		"Email": document.getElementById("TCTSE_P2_Mail").value,
		"Phone_Number": document.getElementById("TCTSE_P2_Phone").value,
		"Standard": document.getElementById("TCTSE_P2_Std").value,
	});
	event.child("Participant 3").set({
		"Name": document.getElementById("TCTSE_P3_Name").value,
		"Email": document.getElementById("TCTSE_P3_Mail").value,
		"Phone_Number": document.getElementById("TCTSE_P3_Phone").value,
		"Standard": document.getElementById("TCTSE_P3_Std").value,
	});
	event.child("Participant 4").set({
		"Name": document.getElementById("TCTSE_P4_Name").value,
		"Email": document.getElementById("TCTSE_P4_Mail").value,
		"Phone_Number": document.getElementById("TCTSE_P4_Phone").value,
		"Standard": document.getElementById("TCTSE_P4_Std").value,
	});

	/*event 2*/
	event = AllEvents.child("Folk Serpendity");
	event.child("Participant 1").set({
		"Name": document.getElementById("FS_P1_Name").value,
		"Email": document.getElementById("FS_P1_Mail").value,
		"Phone_Number": document.getElementById("FS_P1_Phone").value,
		"Standard": document.getElementById("FS_P1_Std").value,
	});
	event.child("Participant 2").set({
		"Name": document.getElementById("FS_P2_Name").value,
		"Email": document.getElementById("FS_P2_Mail").value,
		"Phone_Number": document.getElementById("FS_P2_Phone").value,
		"Standard": document.getElementById("FS_P2_Std").value,
	});
	event.child("Participant 3").set({
		"Name": document.getElementById("FS_P3_Name").value,
		"Email": document.getElementById("FS_P3_Mail").value,
		"Phone_Number": document.getElementById("FS_P3_Phone").value,
		"Standard": document.getElementById("FS_P3_Std").value,
	});
	event.child("Participant 4").set({
		"Name": document.getElementById("FS_P4_Name").value,
		"Email": document.getElementById("FS_P4_Mail").value,
		"Phone_Number": document.getElementById("FS_P4_Phone").value,
		"Standard": document.getElementById("FS_P4_Std").value,
	});
	event.child("Participant 5").set({
		"Name": document.getElementById("FS_P5_Name").value,
		"Email": document.getElementById("FS_P5_Mail").value,
		"Phone_Number": document.getElementById("FS_P5_Phone").value,
		"Standard": document.getElementById("FS_P5_Std").value,
	});
	event.child("Participant 6").set({
		"Name": document.getElementById("FS_P6_Name").value,
		"Email": document.getElementById("FS_P6_Mail").value,
		"Phone_Number": document.getElementById("FS_P6_Phone").value,
		"Standard": document.getElementById("FS_P6_Std").value,
	});
	event.child("Participant 7").set({
		"Name": document.getElementById("FS_P7_Name").value,
		"Email": document.getElementById("FS_P7_Mail").value,
		"Phone_Number": document.getElementById("FS_P7_Phone").value,
		"Standard": document.getElementById("FS_P7_Std").value,
	});
	event.child("Participant 8").set({
		"Name": document.getElementById("FS_P8_Name").value,
		"Email": document.getElementById("FS_P8_Mail").value,
		"Phone_Number": document.getElementById("FS_P8_Phone").value,
		"Standard": document.getElementById("FS_P8_Std").value,
	});

	/* event 1*/
	event = AllEvents.child("Maestros of the Royal Court");
	event.child("Participant 1").set({
		"Name": document.getElementById("MOTRC_P1_Name").value,
		"Email": document.getElementById("MOTRC_P1_Mail").value,
		"Phone_Number": document.getElementById("MOTRC_P1_Phone").value,
		"Standard": document.getElementById("MOTRC_P1_Std").value,
	});
	event.child("Participant 2").set({
		"Name": document.getElementById("MOTRC_P2_Name").value,
		"Email": document.getElementById("MOTRC_P2_Mail").value,
		"Phone_Number": document.getElementById("MOTRC_P2_Phone").value,
		"Standard": document.getElementById("MOTRC_P2_Std").value,
	});

	newSchoolEntry.child("Phone Number of Teacher").set(document.getElementById("Number_of_Teacher").value);
	newSchoolEntry.child("Teacher Incharge Email").set(document.getElementById("Teacher_Email").value);
	newSchoolEntry.child("Teacher Incharge").set(document.getElementById("Teacher_Name").value);
	newSchoolEntry.child("School Email").set(document.getElementById("School_Email").value);
	newSchoolEntry.child("Name of Principle").set(document.getElementById("Principle's_Name").value);
	newSchoolEntry.child("School Name").set(document.getElementById("SchoolName").value);
	alert("Registeration Completed");
	window.location.replace("http://www.navfest.in/");
}

let SwitchN = () => {
	checked;
	let field, cfield;
	let b = 0;
	let c = 0;
	if(givenTeamNumber){
		let numberOfRiseTeams = Number(document.querySelector("#InputRiseTeamNumber").value);
		for(let i=1; i<=numberOfRiseTeams; i++){
			for(let j=1; j<=4; j++){
				if(c == 0){
					if (document.querySelector("#RISE_T" + i + "_P" + j + "_Name").value == "" && c == 0){
						alert("Please fill out all the fields f");
						c = 1;
					}
					if (document.querySelector("#RISE_T" + i + "_P" + j + "_Mail").value == "" && c == 0) {
						alert("Please fill out all the fields f");
						c = 1;
					}
					if (document.querySelector("#RISE_T" + i + "_P" + j + "_Phone").value == "" && c == 0) {
						alert("Please fill out all the fields f");
						c = 1;
					}
					if (document.querySelector("#RISE_T" + i + "_P" + j + "_Std").value == "" && c == 0) {
						alert("Please fill out all the fields f");
						c = 1;
					}
					if (!EmailValidator(String(document.querySelector("#RISE_T" + i + "_P" + j + "_Mail").value).toLowerCase()) && c == 0) {
						alert("Please enter a valid email address!");
						c = 1;
					}
				}
			}
		}
	}
	

	for (k of checked) {
		for (let i = 0; i <= document.querySelector(".event" + checked[current]).childNodes.length-1; i++) {
			console.log(checked, current, checked[current], document.querySelector(".event" + checked[current]).childNodes[i])
			field = document.querySelector(".event" + checked[current]).childNodes[i]
			if (b == 1)
				return;
			if (field.tagName == "INPUT") {
				if (field.value == "") {
					alert("Please fill out all the fields in the form.");
					break;
				}
				else {
					document.querySelector(".event" + checked[current]).style.display = "none";
					current++;
					document.querySelector(".event" + checked[current]).style.display = "block";
				}
			} else if (field.tagName == "DIV") {
				for (let j = 0; j <= field.childNodes.length; j++) {
					cfield = field.childNodes[j];
					if (cfield != null)
						if (cfield.tagName == "INPUT") {
							if (cfield.value == "") {
								console.log(cfield)
								alert("Please fill out all the fields.");
								b = 1;
								break;
							}
							
							if (cfield.id.includes("_Mail"))
								if (!EmailValidator(String(cfield.value).toLowerCase())) {
									alert("Please enter a valid email address!");
									b = 1;
								}
						}
				};
			}
		};
	};
	if(b==0 && c==0){
		document.querySelector(".event" + checked[current]).style.display = "none";
		current++;
		document.querySelector(".event" + checked[current]).style.display = "block";
	}
}

let SwitchP = () => {
	document.querySelector(".event" + checked[current]).style.display = "none";
	current--;
	if (current > 0) {
		document.querySelector(".event" + checked[current]).style.display = "block";
	}
	else
		document.querySelector(".checkboxes").style.display = "block";
}


let SkipRise = () => {
	console.log(checked);
	givenTeamNumber = false;
	SwitchN();
}

let toEvents = () => {
	let j = 1;
	checked = [];
	current = 0;
	checked.push(9);
	Array.prototype.forEach.call(document.querySelectorAll(".eventcheck"), (check) => {
		if (check.checked == true)
			checked.push(j);
		j++;
	})
	checked.push(10);
	document.querySelector(".checkboxes").style.display = "none";
	document.querySelector(".event" + checked[current]).style.display = "block";
}

let last = 0;
let Alert = (field, msg) => {
	if (field != last) {
		console.log("fo11o");
		alert(msg);
		last = field;
		// alert(field == last)
		alert(field, last)
	}
	else {
	}
}

let toCheck = () => {
	let field, cfield;
	let b = 0;
	for (let i = 0; i <= document.querySelector(".mainRegister").childNodes.length-1; i++) {
		field = document.querySelector(".mainRegister").childNodes[i]
		if (b == 1)
			break;
		if (field.tagName == "INPUT") {
			if (field.value == "") {
				alert("Please fill out all the fields in the form.");
				break;
			}
			else {
				document.querySelector(".mainRegister").style.display = "none";
				document.querySelector(".checkboxes").style.display = "block";
			}
		} else if (field.tagName == "DIV") {
			for (let j = 0; j <= field.childNodes.length-1; j++) {
				cfield = field.childNodes[j];
				if (cfield != null)
					if (cfield.tagName == "INPUT") {
						if (cfield.value == "") {
							alert("Please fill out all the fields in the form.");
							b = 1
							break;
						}
						if (cfield.id.includes("_Email"))
							if (!EmailValidator(String(cfield.value).toLowerCase())){
								alert("Please enter a valid email address!");
								b = 1;
							}
					}
			};
		}
	};

	if (b==0){
		document.querySelector(".mainRegister").style.display = "none";
		document.querySelector(".checkboxes").style.display = "block";
	}
}

let toMain = () => {
	document.querySelector(".checkboxes").style.display = "none";
	document.querySelector(".mainRegister").style.display = "block";
}

let EnterRiseTeamLength = ()=>{
	document.querySelector(".GiveRiseTeamNumber").style.display = "none";
	document.querySelector(".BTTNS").style.display = "block";
	// document.querySelector(".BTTNSp").style.display = "block";
	// document.querySelector(".BTTNSn").style.display = "block";
	for (let i = 1; i <= Number(document.querySelector("#InputRiseTeamNumber").value); i++){
		  document.querySelector(".RiseTeam" + i).style.display = "block";
	}
	givenTeamNumber = true;

};

let BackToTeamNumberSelection = () =>{
	document.querySelector(".GiveRiseTeamNumber").style.display = "block";
	document.querySelector(".BTTNS").style.display = "none";
	for (let i = 1; i <= 4; i++) {
		document.querySelectorAll(".RiseTeam" + i).forEach((elem) => {
			elem.style.display = "none"
		})
	}
	givenTeamNumber = false;
}

