var bio = {
  name: 'Hiro Protagonist',
  role: 'CIC stringer',
  contactInfo: 'hiro@blacksun.org',
  picURL: 'http://imageserver.moviepilot.com/hiro-heroes-reborn-will-see-the-return-of-hrg-who-s-next.jpeg?width=415&height=221',
  skills: ['Swordsmanship', 'Coding', 'Espionage', 'Music Promoter']
}

bio["city"] = "Los Angeles";

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(bio.city);

