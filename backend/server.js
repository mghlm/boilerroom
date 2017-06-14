const http = require('http');
const fs = require('fs');

function send404Response(response) {
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Error 404: File not found");
  response.end();
}

function onRequest(request, response) {
  if(request.method == 'GET' && request.url == '/') {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(dataObj));
    // fs.createReadStream('./data.json').pipe(response);
  } else {
    send404Response(response);
  }
};

http.createServer(onRequest).listen(9000);

console.log('Server is listening on port 9000');

const dataObj = [
  {
  "title": "Stephan Bodzin Boiler Room Berlin Live Set",
  "artist": "Stephan Bodzin",
  "location": "Berlin",
  "date": "August 15, 2015",
  "boiler_room_url": "https://boilerroom.tv/recording/stephan-bodzin/",
  "soundcloud_url": "https://soundcloud.com/platform/stephan-bodzin",
  "youtube_url": "https://www.youtube.com/watch?v=Hv_oF2ol_Ks",
  "image": "https://img.youtube.com/vi/Hv_oF2ol_Ks/sddefault.jpg",
  "logo": "https://i.imgur.com/a5e3ieI.jpg"

  },
  {
  "title": "Dubfire Boiler Room Berlin DJ Set",
  "artist": "Dubfire",
  "location": "Berlin",
  "date": "November 15, 2015",
  "boiler_room_url": "https://boilerroom.tv/recording/dubfire/",
  "soundcloud_url": "https://soundcloud.com/platform/dubfire",
  "youtube_url": "https://www.youtube.com/watch?v=bmJqPnV3Jrw",
  "image": "https://img.youtube.com/vi/bmJqPnV3Jrw/sddefault.jpg",
  "logo": "https://i.imgur.com/a5e3ieI.jpg"
  },
  {
  "title": "Maceo Plex Boiler Room Berlin DJ Set",
  "artist": "Maceo Plex",
  "location": "Berlin",
  "date": "September 14, 2013",
  "boiler_room_url": "https://boilerroom.tv/recording/maceo-plex-berlin/",
  "soundcloud_url": "https://soundcloud.com/platform/maceo-plex-boiler-room",
  "youtube_url": "https://www.youtube.com/watch?v=5vHRUsP20dQ",
  "image": "https://img.youtube.com/vi/5vHRUsP20dQ/sddefault.jpg",
  "logo": "https://i.imgur.com/a5e3ieI.jpg"
  },
  {
  "title": "David August Boiler Room Berlin Live Set",
  "artist": "David August",
  "location": "Berlin",
  "date": "April 14, 2014",
  "boiler_room_url": "https://boilerroom.tv/recording/david-august/",
  "soundcloud_url": "https://soundcloud.com/platform/david-august",
  "youtube_url": "https://www.youtube.com/watch?v=mRfwdJx0NDE",
  "image": "https://img.youtube.com/vi/mRfwdJx0NDE/sddefault.jpg",
  "logo": "https://i.imgur.com/a5e3ieI.jpg"
  },
  {
  "title": "Alex Niggemann Boiler Room Berlin DJ Set",
  "artist": "Alex Niggemann",
  "location": "Berlin",
  "date": "August 15, 2015",
  "boiler_room_url": "https://boilerroom.tv/recording/alex-niggemann/",
  "soundcloud_url": "https://soundcloud.com/platform/alex-niggemann",
  "youtube_url": "https://www.youtube.com/watch?v=I6955hDvoTg",
  "image": "https://img.youtube.com/vi/I6955hDvoTg/sddefault.jpg",
  "logo": "https://i.imgur.com/a5e3ieI.jpg"
  },
  {
  "title": "Âme Boiler Room Berlin DJ Set",
  "artist": "Âme",
  "location": "Berlin",
  "date": "April 16, 2012",
  "boiler_room_url": "https://boilerroom.tv/recording/ame-65-min-mix/",
  "soundcloud_url": "https://soundcloud.com/platform/me-65-min-boiler-room-berlin",
  "youtube_url": "https://www.youtube.com/watch?v=4qljzHND1OY&t=3s",
  "image": "https://img.youtube.com/vi/4qljzHND1OY/sddefault.jpg",
  "logo": "https://i.imgur.com/a5e3ieI.jpg"
  },
  {
  "title": "Max Cooper Boiler Room Berlin DJ Set",
  "artist": "Max Cooper",
  "location": "Berlin",
  "date": "April 14, 2014",
  "boiler_room_url": "https://boilerroom.tv/recording/max-cooper/",
  "soundcloud_url": "https://soundcloud.com/platform/max-cooper",
  "youtube_url": "https://www.youtube.com/watch?v=KHQDGohpBsQ",
  "image": "https://img.youtube.com/vi/KHQDGohpBsQ/sddefault.jpg",
  "logo": "https://i.imgur.com/a5e3ieI.jpg"
  },
  {
  "title": "Oliver Koletzki Boiler Room Berlin DJ Set",
  "artist": "Oliver Koletzki",
  "location": "Berlin",
  "date": "March 17, 2017",
  "boiler_room_url": "https://boilerroom.tv/recording/oliver-koletzki/",
  "soundcloud_url": "https://soundcloud.com/platform/oliver-koletzki",
  "youtube_url": "https://www.youtube.com/watch?v=Uec7Hmvb5YE",
  "image": "https://img.youtube.com/vi/Uec7Hmvb5YE/sddefault.jpg",
  "logo": "https://i.imgur.com/a5e3ieI.jpg"
  },
  {
  "title": "Acid Pauli Boiler Room Tulum DJ Set",
  "artist": "Acid Pauli",
  "location": "Tulum",
  "date": "January 15, 2015",
  "boiler_room_url": "https://boilerroom.tv/recording/acid-pauli/",
  "soundcloud_url": "https://soundcloud.com/platform/acid-puli",
  "youtube_url": "https://www.youtube.com/watch?v=EfZu4BCi644",
  "image": "https://img.youtube.com/vi/EfZu4BCi644/sddefault.jpg",
  "logo": "https://i.imgur.com/a5e3ieI.jpg"
  },
  {
  "title": "Solomun Boiler Room Tulum DJ Set",
  "artist": "Solomun",
  "location": "Tulum",
  "date": "January 15, 2015",
  "boiler_room_url": "https://boilerroom.tv/recording/solomun/",
  "soundcloud_url": "https://soundcloud.com/platform/solomun",
  "youtube_url": "https://www.youtube.com/watch?v=bk6Xst6euQk",
  "image": "https://img.youtube.com/vi/bk6Xst6euQk/sddefault.jpg",
  "logo": "https://i.imgur.com/a5e3ieI.jpg"
  },
];
