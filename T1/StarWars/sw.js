$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://swapi.dev/api/people/"
        
    }).done(function (answ){
        var listadoPers = answ.results;
        for(var i = 0; i < listadoPers.length; i++){
            var template = `
            <div class="col-xl-4 col-md-6 col-sm-12 pt-sm-3 pt-md-3">
                <div class="card w-75 m-auto" >
                    <img class="card-img-top" src="https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg" alt="Card image">
                    <div class="card-img-overlay">
                        <h4 class="card-title">${listadoPers[i].name}</h4>
                        <p class="card-text">Height: ${listadoPers[i].height}</p>
                        <p class="card-text">Birth Year: ${listadoPers[i].birth_year}</p>
                        <button class="btn btnStw btn-primary" persId="${i+1}">See More</button>
                    </div>
                </div>
            </div>`;
            $('#persList').append(template);
        }
       
    });

    $(document).on('click', '.btnStw', function () {
        
      var persId = 0;
      persId = $(this).attr('persId');
        
       $.ajax({
            type: "GET",
            url: "https://swapi.dev/api/people/" + persId
       }).done(function (pers){
          console.log(pers);
          $('#persN').text(pers.name);
          $('#persM').text(pers.mass);
          $('#persHc').text(checkNull(pers.hair_color));
          $('#persSc').text(pers.skin_color);
          $('#persEc').text(checkNull(pers.eye_color));
          $('#persG').text(pers.gender);
          $('#persF').text(pers.films.length);
          $('#persSs').text(pers.starships.length);
          $('#persV').text(pers.vehicles.length);
          $('#myModal').show();
        })
    });
    $(document).on('click', '.closeModal', function(){
        $('#myModal').hide();
    });
    function checkNull(toCheck){
      if(toCheck == "n/a") return "Nothing" ;
      return toCheck;
    }
  });
