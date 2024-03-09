const numberOfFilms = +prompt('Скільки фільмів ви переглянули ?','0');
const personalMovied ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
}
const lastFilm = prompt('Який фільм ви переглянули останнім?','');
const point = +prompt(`На скільки ви б оцінили фільм ${lastFilm} ?`,'0');

personalMovied.movies[lastFilm] = point;



console.log(personalMovied);