// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const flim = new Movie("KGF", "RR studio", "PG15");
console.log(flim);
console.log(flim.title);
console.log(flim.studio);
console.log(flim.rating);

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie1 {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const flim1 = new Movie1("kGF", "SKS Production", "PG-18");
const flim2 = new Movie1("RRR", "Raj Production");
const flim3 = new Movie1("DON", "Kamal Production");
console.log(flim1.rating);
console.log(flim2.rating);
console.log(flim3.rating);
console.log(flim1);
console.log(flim2);
console.log(flim3);

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie3 {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG() {
    let PG = [];
    for (let i = 0; i < allmovies.length; i++) {
      if (allmovies[i].rating === "PG") {
        PG.push(allmovies[i]);
      }
    }
    return PG;
  }
}
const Flims = new Movie3("KGF", "SKS studio", "PG-13");
const FLIMS = new Movie3("RRR", "Raj studio", "PG");
const flims = new Movie3("TOM", "Kamal studio", "PG-15");
const Flim = new Movie3("IT", "THINK studio", "PG-5");
const FLIM = new Movie3("TOY", "DESIGN studio", "PG");
const FLims = new Movie3("LOVE", "KRP studio", "PG-1");
let allmovies = [Flims, FLIMS, flims, FLims, FLIM, Flim];

console.log(flims.getPG());

//   d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

const flim4 = new Movie("Casino Royale", "Eon Production", "PG-13");
console.log(flim4);
