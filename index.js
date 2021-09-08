// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBgjKE9rfaEjk9_kZveMrypMrm3ui4wAkk",
	authDomain: "navrise-1b985.firebaseapp.com",
	databaseURL: "https://navrise-1b985-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "navrise-1b985",
	storageBucket: "navrise-1b985.appspot.com",
	messagingSenderId: "126798372781",
	appId: "1:126798372781:web:1a60c46f5bdab5dd510b24"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

let user = firebase.auth().signInAnonymously();
let users_root = database.ref("/Participants");


let checked = [];
let current=0;

//on pressing the submit button
document.getElementById("submit").onclick = () =>{

	let newSchoolEntry = users_root.child(document.getElementById("SchoolName").value);
	let AllEvents = newSchoolEntry.child("Events");
	// events are kept in reverse order as firebase reverses them in the right order
	/* Rise */
	let event = AllEvents.child("FROM DAEDALUS’ WORKSHOP:Building Empires");
	event.child("Participant 1").set({
		"Name":document.getElementById("RISE_P1_Name").value,
		"Email":document.getElementById("RISE_P1_Mail").value,
		"Phone_Number":document.getElementById("RISE_P1_Phone").value,

	});

	event.child("Participant 2").set({
		"Name":document.getElementById("RISE_P2_Name").value,
		"Email":document.getElementById("RISE_P2_Mail").value,
		"Phone_Number":document.getElementById("RISE_P2_Phone").value,
		
	});

	event.child("Participant 3").set({
		"Name":document.getElementById("RISE_P3_Name").value,
		"Email":document.getElementById("RISE_P3_Mail").value,
		"Phone_Number":document.getElementById("RISE_P3_Phone").value,
		
	});
	event.child("Participant 4").set({
		"Name":document.getElementById("RISE_P4_Name").value,
		"Email":document.getElementById("RISE_P4_Mail").value,
		"Phone_Number":document.getElementById("RISE_P4_Phone").value,
		
	});

	/* event 8*/
	event = AllEvents.child("FROM DAEDALUS’ WORKSHOP:Building Empires");
	event.child("Participant 1").set({
		"Name":document.getElementById("FDWBE_P1_Name").value,
		"Email":document.getElementById("FDWBE_P1_Mail").value,
		"Phone_Number":document.getElementById("FDWBE_P1_Phone").value,

	});

	event.child("Participant 2").set({
		"Name":document.getElementById("FDWBE_P2_Name").value,
		"Email":document.getElementById("FDWBE_P2_Mail").value,
		"Phone_Number":document.getElementById("FDWBE_P2_Phone").value,
		
	});

	event.child("Participant 3").set({
		"Name":document.getElementById("FDWBE_P3_Name").value,
		"Email":document.getElementById("FDWBE_P3_Mail").value,
		"Phone_Number":document.getElementById("FDWBE_P3_Phone").value,
		
	});
	
	/* event 7 */
	event = AllEvents.child("Reviving Legends: DECLAMATION");
	event.child("Participant 1").set({
		"Name":document.getElementById("RLD_P1_Name").value,
		"Email":document.getElementById("RLD_P1_Mail").value,
		"Phone_Number":document.getElementById("RLD_P1_Phone").value,
	});

	/*event 6*/
	event = AllEvents.child("Tarke Shashtra");
	event.child("Participant 1").set({
		"Name":document.getElementById("TS_P1_Name").value,
		"Email":document.getElementById("TS_P1_Mail").value,
		"Phone_Number":document.getElementById("TS_P1_Phone").value,
	});
	event.child("Participant 2").set({
		"Name":document.getElementById("TS_P2_Name").value,
		"Email":document.getElementById("TS_P2_Mail").value,
		"Phone_Number":document.getElementById("TS_P2_Phone").value,
	});

	/*event 5*/
	event = AllEvents.child("Kautalya - The Buisness Mogul");
	event.child("Participant 1").set({
		"Name":document.getElementById("KTBM_P1_Name").value,
		"Email":document.getElementById("KTBM_P1_Mail").value,
		"Phone_Number":document.getElementById("KTBM_P1_Phone").value,
	});
	event.child("Participant 2").set({
		"Name":document.getElementById("KTBM_P2_Name").value,
		"Email":document.getElementById("KTBM_P2_Mail").value,
		"Phone_Number":document.getElementById("KTBM_P2_Phone").value,
	});
	event.child("Participant 3").set({
		"Name":document.getElementById("KTBM_P3_Name").value,
		"Email":document.getElementById("KTBM_P3_Mail").value,
		"Phone_Number":document.getElementById("KTBM_P3_Phone").value,
	});

	/*event 4*/
	event = AllEvents.child("The Final Verdict");
	event.child("Participant 1").set({
		"Name":document.getElementById("TFV_P1_Name").value,
		"Email":document.getElementById("TFV_P1_Mail").value,
		"Phone_Number":document.getElementById("TFV_P1_Phone").value,
	});

	/* event 3*/
	event = AllEvents.child("The Colosseum - TV Show Event");
	event.child("Participant 1").set({
		"Name":document.getElementById("TCTSE_P1_Name").value,
		"Email":document.getElementById("TCTSE_P1_Mail").value,
		"Phone_Number":document.getElementById("TCTSE_P1_Phone").value,
	});
	event.child("Participant 2").set({
		"Name":document.getElementById("TCTSE_P2_Name").value,
		"Email":document.getElementById("TCTSE_P2_Mail").value,
		"Phone_Number":document.getElementById("TCTSE_P2_Phone").value,
	});
	event.child("Participant 3").set({
		"Name":document.getElementById("TCTSE_P3_Name").value,
		"Email":document.getElementById("TCTSE_P3_Mail").value,
		"Phone_Number":document.getElementById("TCTSE_P3_Phone").value,
	});
	event.child("Participant 4").set({
		"Name":document.getElementById("TCTSE_P4_Name").value,
		"Email":document.getElementById("TCTSE_P4_Mail").value,
		"Phone_Number":document.getElementById("TCTSE_P4_Phone").value,
	});

	/*event 2*/
	event = AllEvents.child("Folk Serpendity");
	event.child("Participant 1").set({
		"Name":document.getElementById("FS_P1_Name").value,
		"Email":document.getElementById("FS_P1_Mail").value,
		"Phone_Number":document.getElementById("FS_P1_Phone").value,
	});
	event.child("Participant 2").set({
		"Name":document.getElementById("FS_P2_Name").value,
		"Email":document.getElementById("FS_P2_Mail").value,
		"Phone_Number":document.getElementById("FS_P2_Phone").value,
	});
	event.child("Participant 3").set({
		"Name":document.getElementById("FS_P3_Name").value,
		"Email":document.getElementById("FS_P3_Mail").value,
		"Phone_Number":document.getElementById("FS_P3_Phone").value,
	});
	event.child("Participant 4").set({
		"Name":document.getElementById("FS_P4_Name").value,
		"Email":document.getElementById("FS_P4_Mail").value,
		"Phone_Number":document.getElementById("FS_P4_Phone").value,
	});
	event.child("Participant 5").set({
		"Name":document.getElementById("FS_P5_Name").value,
		"Email":document.getElementById("FS_P5_Mail").value,
		"Phone_Number":document.getElementById("FS_P5_Phone").value,
	});
	event.child("Participant 6").set({
		"Name":document.getElementById("FS_P6_Name").value,
		"Email":document.getElementById("FS_P6_Mail").value,
		"Phone_Number":document.getElementById("FS_P6_Phone").value,
	});
	event.child("Participant 7").set({
		"Name":document.getElementById("FS_P7_Name").value,
		"Email":document.getElementById("FS_P7_Mail").value,
		"Phone_Number":document.getElementById("FS_P7_Phone").value,
	});
	event.child("Participant 8").set({
		"Name":document.getElementById("FS_P8_Name").value,
		"Email":document.getElementById("FS_P8_Mail").value,
		"Phone_Number":document.getElementById("FS_P8_Phone").value,
	});

	/* event 1*/
	event = AllEvents.child("Maestros of the Royal Court");
	event.child("Participant 1").set({
		"Name":document.getElementById("MOTRC_P1_Name").value,
		"Email":document.getElementById("MOTRC_P1_Mail").value,
		"Phone_Number":document.getElementById("MOTRC_P1_Phone").value,
	});
	event.child("Participant 2").set({
		"Name":document.getElementById("MOTRC_P2_Name").value,
		"Email":document.getElementById("MOTRC_P2_Mail").value,
		"Phone_Number":document.getElementById("MOTRC_P2_Phone").value,
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

let SwitchN=()=>{
	checked;
	console.log(current);
	let field, cfield;
	let b = 0;
	for (k of checked) {
		for (let i = 0; i <= document.querySelector(".event" + checked[current]).childNodes.length; i++) {
			field = document.querySelector(".event" + checked[current]).childNodes[i]
			if (b == 1)
				return;
			if (field.tagName == "INPUT") {
				if (field.value == "") {
					alert("all values for selected events must be filled!");
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
					if(cfield != null)
						if (cfield.tagName == "INPUT") {
							if (cfield.value == "") {
								console.log("foo")
								alert("Please fill out all the fields.");
								b = 1;
								break;
							}
							else {
								
							}
						}
				};
				break
			}
		};
		};
	document.querySelector(".event" + checked[current]).style.display = "none";
	current++;
	document.querySelector(".event" + checked[current]).style.display = "block";
}

let SwitchP=()=>{
	document.querySelector(".event"+checked[current]).style.display="none";
	current--;
	if(current > 0){
		document.querySelector(".event"+checked[current]).style.display="block";
	}
	else
		document.querySelector(".checkboxes").style.display="block";
}

let toEvents = () => {
	let j=1;
	checked = [];
	current=0;
	checked.push(9);
	Array.prototype.forEach.call(document.querySelectorAll(".eventcheck"), (check)=>{
		if(check.checked == true)
			checked.push(j);
		j++;
	})
	checked.push(10);
	console.log(checked)
	document.querySelector(".checkboxes").style.display = "none";
	document.querySelector(".event"+checked[current]).style.display="block";
}

let last = 0;
let Alert = (field, msg) =>{
	if(field != last){
		console.log("fo11o");
		alert(msg);
		last = field;
		// alert(field == last)
		alert(field, last)
	}
	else{
	}
}

let toCheck = () => {
	let field, cfield;
	let b=0;
	for (let i = 0; i <= document.querySelector(".mainRegister").childNodes.length; i++){
		field = document.querySelector(".mainRegister").childNodes[i]
		if(b==1)
			break;
		if (field.tagName == "INPUT") {
			if (field.value == "") {
				alert("all values for selected events must be filled!");
				break;
			}
			else {
				document.querySelector(".mainRegister").style.display = "none";
				document.querySelector(".checkboxes").style.display = "block";
			}
		} else if (field.tagName == "DIV") {
			for (let j = 0; j <= field.childNodes.length; j++) {
				cfield = field.childNodes[j];
				if(cfield != null)
					if (cfield.tagName == "INPUT") {
						if (cfield.value == "") {
							console.log("foo")
							alert("all values for selected events must be filled!");
							b=1
							break;
						}
						else {
							document.querySelector(".mainRegister").style.display = "none";
							document.querySelector(".checkboxes").style.display = "block";
						}
					}
				};
			break
		}
	};
}

let toMain = () => {
    document.querySelector(".checkboxes").style.display = "none";
    document.querySelector(".mainRegister").style.display = "block";
}