var bio = {
    "name": "Hiro Protagonist",
    "role": "CIC stringer",
    "welcomeMessage": "",
    "city" : "Los Angeles",
    "contacts": {
        "mobile": "970-618-5370",
        "email": "hiro@blacksun.org",
        "github": "hiro",
        "twitter": "@hiroprotagonist"
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
            "city": "Carbondale, CO",
            "degree": "High School Diploma",
            "major": ""
        },
        {
            "name": "Colorado College",
            "city": "Colorado Springs",
            "degree": "BA",
            "major": "English"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Sword Fighting Algorithm",
            "dates": "Jan. 20, 2015 - Feb. 8, 2015",
            "description": "Create a sword fighting program for avatars within the metaverse to duel.",
            "images": ['http://fpoimg.com/200x200?text=image1', 'http://fpoimg.com/200x200?text=image2']
        },
        {
            "title": "Undertaker Daemon",
            "dates": "Jan. 20, 2015 - Feb. 8, 2015",
            "description": "In order to clear \"dead\" avatars from the Black Sun and allow them to regenerate, created undertaker Daemons.",
            "images": ['http://fpoimg.com/200x200?text=image3', 'http://fpoimg.com/200x200?text=image4']
        }
    ]
}

/* helper functions */

/* This is related to the Internationalize Button which must be appended (uncommented) for this function to do anything.
var inName = function(name) {
	locNameArray = name.split(" ");
	return locNameArray[0] + ' ' + locNameArray[1].toUpperCase();
}
*/

/* display functions */

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
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

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		var formattedProjectImages = '';
		for (image in projects.projects[project].images) {
			var img = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
			formattedProjectImages += img;
		}
		$(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImages);
	
	}
}

bio.display();
work.display();
projects.display();

//$("#main").append(internationalizeButton);


