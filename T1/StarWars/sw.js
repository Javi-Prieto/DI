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
                        <button class="btn btnStw btn-primary" persId="${i}">See More</button>
                    </div>
                </div>
            </div>`;
            $('#persList').append(template);
        }
       
    });

    $(document).on('click', '.btnStw', function () {
        var persId = $(this).attr('persId')
        
        $.ajax({
            type: "GET",
            url: "https://swapi.dev/api/people/" + persId
        }).done(function (pers){
            var personaje = pers;
            $('#main').append(`<div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
          
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">Modal Heading</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
          
                <!-- Modal body -->
                <div class="modal-body">
                  <p>${pers.name}</p>
                </div>
          
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" id="closeModal">Close</button>
                </div>
          
              </div>
            </div>
          </div>`);
          $('#myModal').show();
        })
    });
    $(document).on('click', '#closeModal', function(){
        $('#myModal').hide()
    });
});