
function Playlist(name) { // A constructor that creates a new object with a name, an empty array under the songs property, and an property called currentSong with the value null.
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}

Playlist.prototype.addSong = function(songTitle) {
    // 'this' refers to the title of the object 
    // 'this' is defined before calling the method -> ex: myMix.addSong 'this' equals myMix
  this.songs.push(songTitle); // Method that adds a new value at the end of the songs array
};

Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) { // Checks if there are any songs in the songs array
    this.currentSong = this.songs[0]; // Sets the currentSong property to the first song in the songs array (if there are songs inside of the array)
    console.log("Now playing:", this.currentSong); // Prints to the console the current song
  }
};

Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) { // Checks if there are multiple songs in the array
    this.songs.shift(); // Removes the first value from the songs array
    this.currentSong = this.songs[0]; // Changes the currentSong property to the new first song in the array
    console.log("Skipped! Now playing:", this.currentSong); // Prints the current song to the console
  } else {
    console.log("No more songs to skip."); // If the current song is the final song in the array, it will print "No more songs to skip" in the console
  }
};

Playlist.prototype.listSongs = function() { // Prints to the console the name of the playlist and all the songs in the songs array, seperated by commas. 
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};

// New method that stops/pauses the playlist
Playlist.prototype.stopPlaying = function() {
    if(this.currentSong != null){
        this.currentSong = null;
        console.log("Playlist stopped!")
    }
    else{
        console.log("You're not playing anything.")
    }
}

let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();
  

/*
Suggestions: 
Improvement: 
One improvement I suggest is in the skipSong method, where I would reccomend pushing the skipped song to the songs array so that the playlist loops. 
I think this would be beneificial because it would preserve the playlist, instead of gradually deleting it as it is being listened to. 
*/