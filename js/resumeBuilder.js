var bio = {
    "name": "Hiro Protagonist",
    "role": "CIC stringer",
    "welcomeMessage": "Stop Snow Crash from infecting all hackers and destroying the metaverse.",
    "bioPic": "http://fpoimg.com/600x600",
    "city" : "Los Angeles",
    "contacts": {
        "mobile": "970-618-5370",
        "email": "hiro@blacksun.org",
        "github": "hiro",
        "twitter": "@hiroprotagonist",
        "location": "Los Angeles"
    },
    "skills": [
        "Swordsmanship",
        "Coding",
        "Espionage",
        "Music Promoter"
    ]
}

var work = {
    "jobs": [
        {
            "employer": "Cosa Nova Pizza",
            "title": "Deliverator",
            "location": "Los Angeles",
            "dates worked": "1995-1997",
            "description": "Uphold the Cosa Nova promise of pizzas within 20 minutes or less."
        },
        {
            "employer": "CIC",
            "title": "Stringer",
            "location": "Los Angeles",
            "dates worked": "1996 - Present",
            "description": "Freelance CIC stringer charged with collecting and uploading useful intel."
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "Colorado Rocky Mountain School",
            "location": "Carbondale, CO",
            "degree": "High School Diploma",
            "major": "American Literature",
            "dates": "1991",
            "url": "http://www.crms.org"
        },
        {
            "name": "Colorado College",
            "location": "Colorado Springs",
            "degree": "BA",
            "major": "English",
            "dates": "1995",
            "url": "http://www.coloradocollege.edu"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Sword Fighting Algorithm",
            "dates": "Jan. 20, 2015 - Feb. 8, 2015",
            "description": "Create a sword fighting program for avatars within the metaverse to duel.",
            "images": ["http://fpoimg.com/400x400?text=image1", "http://fpoimg.com/400x400?text=image2"]
        },
        {
            "title": "Undertaker Daemon",
            "dates": "Jan. 20, 2015 - Feb. 8, 2015",
            "description": "In order to clear \"dead\" avatars from the Black Sun and allow them to regenerate, created undertaker Daemons.",
            "images": ["http://fpoimg.com/400x400?text=image3", "http://fpoimg.com/400x400?text=image4"]
        }
    ]
}

/* display functions */

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedWelcomeMessage = HTMLWelcomeMsg.replace('%data%', '<div class="ribbon-wrap"><em><strong>Objective: </strong>' + bio.welcomeMessage + '</em></div>');
    $("#header").prepend(formattedWelcomeMessage);
	$("#header").prepend(formattedName);
	
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);	
	var contact = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation;
	$("#topContacts").append(contact);
	$("#footerContacts").append(contact);	
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
	$(formattedBioPic).insertAfter("#topContacts");	
	
	function appendSkills(value, index, ar) {
		var formattedSkill = HTMLskills.replace('%data%', value);
		$("#skills").append(formattedSkill);
	}
	
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(appendSkills);
	}
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job]["dates worked"]);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
	}
}

education.display = function () {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		var formattedMajor = '&nbsp;';
		if(education.schools[school].major) {
			var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
		}
		$(".education-entry:last").append(formattedName  + formattedDegree + formattedDates + formattedLocation + formattedMajor);
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		if (projects.projects[project].images.length > 0) {
			var formattedProjectImages = '';
			for (image in projects.projects[project].images) {
				var img = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
				formattedProjectImages += img;
			}
		}
		$(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImages);
	
	}
}

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);
//$("#main").append(internationalizeButton);


