/*const url= "https://pokeapi.co/api/v2/pokemon/1/"

fetch(url)
.then(response=>response.json())
.then(data=>{
    let element=document.getElementById('elem')
    element.innerHTML=`<p>${data.name}</p>
    <p>${data.order}</p>
    <img src='${data.sprites.front_default}'/>`;
    console.log(data);
}).catch(err=>console.log(err));*/

/*
const api_key="https://api.themoviedb.org/3/movie/550?api_key=9bd0a0df2b30bf0ce74b9348aa485dc5";
fetch(api_key)
.then(response=>response.json())
.then(data=>{
    console.log(data);
}).catch(err=>console.log(err));*/

/*const api_key='api_key=9bd0a0df2b30bf0ce74b9348aa485dc5';
const Url_Base='https://api.themoviedb.org/3';
const Api_URL= Url_Base+'/discover/movie?sort_by=popularity.desc&'+api_key;
const Img_URL='https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
const main=document.getElementById('main');
getMovies(Api_URL);


function getMovies(url){
    fetch(url).then(response => response.json())
    .then(data=>{
        console.log(data.results);
        showMovies(data.results);
    })
}*/
/*
function showMovies(data){
    main.innerHTML='';
    data.foreach(movie=>{
        const {title,poster_path,vote_average,overview}=movie;
        const movieElement=document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML=`
        <img src="${Img_URL}" alt="image">
        `;
    })

    main.appendChild(movieElement);
}


function getColor(vote){
    if(vote>=8){
        return 'green'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
}

*/


/*
      <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group me-2" role="group" aria-label="First group">
          <button type="button" class="btn btn-outline-secondary">1</button>
          <button type="button" class="btn btn-outline-secondary">2</button>
          <button type="button" class="btn btn-outline-secondary">3</button>
          <button type="button" class="btn btn-outline-secondary">4</button>
          <button type="button" class="btn btn-outline-secondary">5</button>
          <button type="button" class="btn btn-outline-secondary">6</button>
          <button type="button" class="btn btn-outline-secondary">7</button>
          <button type="button" class="btn btn-outline-secondary">8</button>
        </div>*/ 

const movies='https://api.themoviedb.org/3/movie/popular?api_key=9bd0a0df2b30bf0ce74b9348aa485dc5&language=es-Es';
const generos='https://api.themoviedb.org/3/genre/movie/list?api_key=9bd0a0df2b30bf0ce74b9348aa485dc5&language=es-Es';
const tvSeries='https://api.themoviedb.org/3/tv/popular?api_key=9bd0a0df2b30bf0ce74b9348aa485dc5&language=es-Es&page=1';
var moviescat=document.getElementById('moviecat');
var Seriescat=document.getElementById('seriescat');

async function  getPelis(){
    var response = await fetch(movies);
    var data = await response.json();
  
    var response_generos = await fetch(generos);
    var data_generos = await response_generos.json();
    var results = data.results;
  
    results.forEach(d => {
      var generos = data_generos.genres;
      var genero = generos.filter(g => {
        return g.id === d.genre_ids[0];
      });
      
      moviescat.innerHTML += 
      `<div class="col-xs-12 col-sm-6 col-lg-4">
      <div class="card">
        <img class="card-img-top img-fluid" src="https://image.tmdb.org/t/p/original${d.poster_path}" alt="Card image cap">
        <div class="card-block">
          <h3 class="card-title">${d.title}</h3>
          <p class="card-text">${d.release_date}</p>
          <h5 class="card-text">${genero[0].name}</h5>
        </div>
      </div>
    </div> `
    });
  }

 


async function getTvSeries(){
    var populares = await fetch(tvSeries);
    var data_populares = await populares.json();
    var r = data_populares.results;
    r.forEach(data_populares => {
        console.log(data_populares);
        Seriescat.innerHTML +=
        `<div class="col-xs-12 col-sm-6 col-lg-4">
        <div class="card">
          <img class="card-img-top img-fluid" src="https://image.tmdb.org/t/p/original${data_populares.poster_path}" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title">${data_populares.name}</h4>
            <p>${data_populares.overview}</p>
            <p class="card-text">${data_populares.popularity}</p>
          </div>
        </div>
      </div>`
      });
  }


function seriesClick (){
    location.href="series.html";
}
function pelisClick (){
    location.href="index.html";
}

































