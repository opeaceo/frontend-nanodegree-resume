var bio = {
	"name": "Jerry Lin",
	"role": "Web Developer", 
	"contacts": {
		"mobile" : "XXX-XXX-XXXX", 
		"github" : "opeaceo",
		"email": "jerrylinye@hotmail.com", 
		"twitter":"",
		"location": "NJ"
	}, 
	"welcomeMessage": "Welecome to my resume.", 
	"skills": [
		"JavaScript", "CSS", "HTML", "Java"
	], 
	"bioPic": "images/bio.jpg"
};


bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);


	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMessage);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);


	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(skill, index, skills) {
			var formattedSkill = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkill);
		});
	}
}
bio.display();

var work = {
	"jobs": [
		{
			"employer": "AT&T", 
			"title": "Professonal - Applications Developer", 
			"location" : "Middletown, NJ",
			"dates": "January 2013 - Current", 
			"description": "Create API for SOAP and REST web services. Design database schema. Create migration script. Design and create microservices with Spring Boot Framework and Docker.  Develop DAO, controller and operation classes for SOAP web services. Experience with CI(Continuous INtegration) and CD(Continuous Deployment). "
		}, 
		{
			"employer": "G3 Technologies, Inc.", 
			"title": "Software Developer", 
			"location" : "New Providence, NJ",
			"dates": "May 2012 - Dec 2012", 
			"description": "Designed an Android app prototype that performed automated tasks, and presented the prototype demo to potential customers."
		}, 
		{
			"employer": "Center for Solar-Terrestrial Research", 
			"title": "Database Administrator / Web Developer", 
			"location" : "Newark, NJ",
			"dates": "March 2012 - Dec 2012", 
			"description": "Created an image database that makes millions of solar images available to the community. Designed front-end webpages to query the database and an automated email webpage to perform automated email function."
		}
	]
};

function locationizer(work_obj) {
	var locationArray = [];

	for (index in work_obj.jobs) {
		var newLocation = work_obj.jobs[index].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

console.log(locationizer(work));

work.display = function () {
	for (index in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
		$(".work-entry:last").append(formattedLocation);

		var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
		$(".work-entry:last").append(formatedDescription);
	}
}

work.display();


var projects = {
	"projects": [
		{
			"title": "Portfolio Website", 
			"dates": "2018",
			"description": "Develop a responsive website that will display images, descriptions and links to each of the portfolio projects I have completed through the course of your Nanodegree program.",
			"images": ["images/project.jpg" ]
		}
	]
};

projects.display = function () {
	for (index in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formatedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
		$(".project-entry:last").append(formatedProjectDescription);

		if (projects.projects[index].images.length > 0) {
			for (image in projects.projects[index].images) {
				var formatedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[index].images);
				$(".project-entry:last").append(formatedProjectImage);
			}
		}
	}
}
projects.display();

var education = {
	"schools" : [
		{
			"name": "New Jersey Institute of Technology (NJIT)",
			"location": "Newark, NJ", 
			"degree": "Master", 
			"majors": ["CS"],
			"dates": 2012, 
			"url": "http://www.njit.edu"  
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity", 
			"dates" : 2018, 
			"url"  : "https://www.udacity.com/" 
		}
	]
};

education.display = function () {
	$("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
    	

    	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolNameAndDegree = formattedSchoolName + " - " + formattedSchoolDegree;

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

        var schoolMajors = education.schools[school].majors[0];
        for (var i = 1; i < education.schools[school].majors.length; i++) {
            schoolMajors = schoolMajors + ", " + education.schools[school].majors[i];
        }

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schoolMajors);

        $(".education-entry:last").append(formattedSchoolNameAndDegree);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolMajor);
    }

	$(".education-entry:last").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedCourseName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineCourseAndSchool = formattedCourseName + "-" + formattedOnlineSchool;
        var formattedCourseYear = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        $(".education-entry:last").append(formattedOnlineCourseAndSchool);
        $(".education-entry:last").append(formattedCourseYear);
        $(".education-entry:last").append(formattedCourseURL);
    }
}
education.display();

//returns an array of location strings from locations in resumeBuilder
function locationFinder() {
	var locations = [];

	locations.push(bio.contacts.location);
	for (var school in educations.schools) {
		locations.push(education.schools[school].location);
	}



	for (var job in work.jobs) {
		locations.push(work.jobs[job].location);
	}

	return locations;
}
$("main").append(internationalizeButton);

$("#mapDiv").append(googleMap);