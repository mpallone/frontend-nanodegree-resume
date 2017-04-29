

var model = {
    bio: {
        "name": "Mark Pallone",
        "role": "Software Engineer",
        "contacts": {
            "mobile": "555-555-5555",
            "email": "mark.c.pallone@fakeemail.com",
            "github": "https://github.com/mpallone",
            "location": "Washington, DC"
        },
        "welcomeMessage": "Welcome to my website!!",
        "skills": ["Problem Solving", "Thorough Testing", "Tackling large projects"],
        "biopic": "img/large/me.jpg",
        
    },

    education: {
        "schools": [{
                "name": "University of Maryland, Baltimore County",
                "location": "Baltimore, MD",
                "degree": "Master of Science (incomplete)",
                "majors": ["Computer Science"],
                "dates": "2014-2015",
                "url": "http://www.umbc.edu/"
            },
            {
                "name": "University of Maryland, Baltimore County",
                "location": "Baltimore, MD",
                "degree": "Bachelor of Science",
                "majors": ["Computer Science", "History", "Ethnomusicology"],
                "dates": "2007-2011",
                "url": "http://www.umbc.edu/"
            }
        ],
    
        "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016-2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }],

    },

    work: {
        "jobs": [{
                "employer": "NASA GSFC",
                "title": "Software Engineer",
                "location": "Greenbelt, MD",
                "dates": "2012-2015",
                "description": "Flight Software Test Engineer supporting the Deep Space Climate Observatory (DSCOVR)"
            },
            {
                "employer": "NASA GSFC",
                "title": "Software Engineer",
                "location": "Greenbelt, MD",
                "dates": "2015-2017",
                "description": "Software Engineer building telemetry post-processing tools for the Mars Organic Molecule Organizer (MOMA)"
            }
        ],
    },

    projects: [{
            "title": "DSCOVR",
            "dates": "2012-2015",
            "description": "Deep Space Climate Observatory",
            "images": ["img/large/dscovr-launch.jpg",
                "img/large/dscovr-satellite.jpg",
                "img/large/earth-dscovr.jpg"
            ]
        },
        {
            "title": "MOMA",
            "dates": "2015-2017",
            "description": "Mars Organic Molecule Analyzer",
            "images": ["img/large/moma-logo.jpg",
                "img/large/ExoMars2018_Rover_20140321_9k.jpg"
            ]
        },
        {
            "title": "OCI",
            "dates": "2017",
            "description": "Ocean Color Instrument on the PACE spacecraft",
            "images": ["img/large/oci-diagram.jpg",
                "img/large/pace-logo.jpg"
            ]
        }
    ],
};

var view = {

    displayBio: function(bio) {
            var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
            $("#header").prepend(formattedHeaderName);
        
            var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
            $(formattedHeaderRole).insertAfter("#name");
        
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            $("#topContacts").append(formattedMobile);
            $("#footerContacts").append(formattedMobile);
        
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            $("#topContacts").append(formattedEmail);
            $("#footerContacts").append(formattedEmail);
        
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            $("#topContacts").append(formattedGithub);
            $("#footerContacts").append(formattedGithub);
        
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            $("#topContacts").append(formattedLocation);
            $("#footerContacts").append(formattedLocation);
        
            var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
            $("#header").append(formattedBioPic);
        
            var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
            $("#header").append(formattedWelcomeMsg);
        
            $("#header").append(HTMLskillsStart);
        
            bio.skills.forEach(function(skillString) {
                formattedSkill = HTMLskills.replace("%data%", skillString);
                $("#skills-h3").append(formattedSkill);
            });
    },

    displayEducation: function(education) {

        education.schools.forEach(function(schoolObject) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", schoolObject.name);
            $(".education-entry:last").append(formattedName);
            var formattedDegree = HTMLschoolDegree.replace("%data%", schoolObject.degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", schoolObject.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", schoolObject.location);
            $(".education-entry:last").append(formattedLocation);
        
            schoolObject.majors.forEach(function(majorString) {
                formattedMajor = HTMLschoolMajor.replace("%data%", majorString);
                $(".education-entry:last").append(formattedMajor);
            });
        });
        
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourseObject) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourseObject.title);
            $(".education-entry:last").append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourseObject.school);
            $(".education-entry:last").append(formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", onlineCourseObject.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%", onlineCourseObject.url);
            $(".education-entry:last").append(formattedUrl);
        });
    },

    displayWork: function(work) {
        work.jobs.forEach(function(jobObject) {
            $("#workExperience").append(HTMLworkStart);
        
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", jobObject.employer);
            $(".work-entry:last").append(formattedWorkEmployer);
        
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", jobObject.title);
            $(".work-entry:last").append(formattedWorkTitle);
        
            var formattedWorkDates = HTMLworkDates.replace("%data%", jobObject.dates);
            $(".work-entry:last").append(formattedWorkDates);
        
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", jobObject.location);
            $(".work-entry:last").append(formattedWorkLocation);
        
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", jobObject.description);
            $(".work-entry:last").append(formattedWorkDescription);
        });
    },

    displayProjects: function(projects) {
        projects.forEach(function(projectObject) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projectObject.title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projectObject.dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projectObject.description);
            $(".project-entry:last").append(formattedProjectDescription);

            projectObject.images.forEach(function(imageString) {
                var formattedImage = HTMLprojectImage.replace("%data%", imageString);
                $(".project-entry:last").append(formattedImage);

            });
        });
    },

    display: function() {
        this.displayBio(model.bio);
        this.displayEducation(model.education);
        this.displayWork(model.work); 
        this.displayProjects(model.projects);
        $("#mapDiv").append(googleMap);
    }
};

var controller = {
    init: function() {
        view.display();
    }
};

controller.init(); 

/*
 ** TODO - Hmm, why isn't this working? 
 */
// $(function() {
//     bio.display();
//     education.display();
//     work.display();
//     projects.display();
//     $("#mapDiv").append(googleMap);
// });

