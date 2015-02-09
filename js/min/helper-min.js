function logClicks(a,t){clickLocations.push({x:a,y:t}),console.log("x location: "+a+"; y location: "+t)}function initializeMap(){function a(){var a=[];a.push(bio.contacts.location);for(var t in education.schools)a.push(education.schools[t].location);for(var e in work.jobs)a.push(work.jobs[e].location);return a}function t(a){var t=a.geometry.location.lat(),e=a.geometry.location.lng(),s=a.formatted_address,o=window.mapBounds,i=new google.maps.Marker({map:map,position:a.geometry.location,title:s}),n=new google.maps.InfoWindow({content:s});google.maps.event.addListener(i,"click",function(){}),o.extend(new google.maps.LatLng(t,e)),map.fitBounds(o),map.setCenter(o.getCenter())}function e(a,e){e==google.maps.places.PlacesServiceStatus.OK&&t(a[0])}function s(a){var t=new google.maps.places.PlacesService(map);for(var s in a){var o={query:a[s]};t.textSearch(o,e)}}var o,i={disableDefaultUI:!0};map=new google.maps.Map(document.querySelector("#map"),i),window.mapBounds=new google.maps.LatLngBounds,o=a(),s(o)}var HTMLheaderName='<h1 id="name">%data%</h1>',HTMLheaderRole="<span>%data%</span><hr/>",HTMLcontactGeneric='<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',HTMLmobile='<li class="flex-item"><span class="orange-text">mobile: </span><span class="white-text">%data%</span></li>',HTMLemail='<li class="flex-item"><span class="orange-text">email: </span><span class="white-text">%data%</span></li>',HTMLtwitter='<li class="flex-item"><span class="orange-text">twitter: </span><span class="white-text">%data%</span></li>',HTMLgithub='<li class="flex-item"><span class="orange-text">github: </span><span class="white-text">%data%</span></li>',HTMLblog='<li class="flex-item"><span class="orange-text">blog: </span><span class="white-text">%data%</span></li>',HTMLlocation='<li class="flex-item"><span class="orange-text">location: </span><span class="white-text">%data%</span></li>',HTMLbioPic='<a href="#" class="shader"><img src="%data%" class="biopic round" /></a>',HTMLWelcomeMsg='<div class="welcome-message">%data%</div>',HTMLskillsStart='<div id="skillsBox"><h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul></div>',HTMLskills='<li class="flex-item"><span class="white-text">%data%</span></li>',HTMLworkStart='<div class="work-entry"></div>',HTMLworkEmployer='<a href="#">%data%',HTMLworkTitle=" - %data%</a>",HTMLworkDates='<div class="date-text">%data%</div>',HTMLworkLocation='<div class="location-text">%data%</div>',HTMLworkDescription="<p>%data%</p>",HTMLprojectStart='<div class="project-entry"></div>',HTMLprojectTitle='<a href="#">%data%</a>',HTMLprojectDates='<div class="date-text">%data%</div>',HTMLprojectDescription="<p>%data%</p>",HTMLprojectImage='<img src="%data%">',HTMLschoolStart='<div class="education-entry"></div>',HTMLschoolName='<a href="#">%data%',HTMLschoolDegree=" — %data%</a>",HTMLschoolDates='<div class="date-text">%data%</div>',HTMLschoolLocation='<div class="location-text">%data%</div>',HTMLschoolMajor="<em>Major: %data%</em>",HTMLonlineClasses="<h3>Online Classes</h3>",HTMLonlineTitle='<a href="#">%data%',HTMLonlineSchool=" - %data%</a>",HTMLonlineDates='<div class="date-text">%data%</div>',HTMLonlineURL='<br><a href="#">%data%</a>',internationalizeButton="<button>Internationalize</button>",googleMap='<div id="map"></div>';$(document).ready(function(){$("button").click(function(){var a=inName(name)||function(){};$("#name").html(a)})}),clickLocations=[],$(document).click(function(a){logClicks(a.pageX,a.pageY)});var map;window.addEventListener("load",initializeMap),window.addEventListener("resize",function(a){map.fitBounds(mapBounds)});