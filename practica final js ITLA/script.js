$(document).ready(function() {

    
    const digimonContainer = $('#digimonContainer');
    const searchInput = $('#searchInput');
    const searchButton = $('#searchButton');

    // aqui con esta funcion cargo mis digimon 
    function cargarDigimon() {
        $.ajax({
            url: 'https://digimon-api.vercel.app/api/digimon',
            method: 'GET',
            success: function(data) {
                mostrarDigimon(data.slice(0, 10));  //muestro solo los 10 primeros digimon 
            },
            error: function() {
                alert('Error al cargar los datos ');
            }
        });
    }

    // aqui muestro mis digimon en una card en el DOM
    function mostrarDigimon(digimons) {
        digimonContainer.empty();

        digimons.forEach(function(digimon) {
            const digimonCard = $(`
                <div class="digimon-card">
                    <img src="${digimon.img}" alt="${digimon.name}">
                    <h3>${digimon.name}</h3>
                    <p>Nivel: ${digimon.level}</p>
                </div>
            `);
            digimonContainer.append(digimonCard);
        });
    }




    // funcion para buscarl os figimon 
    function buscarDigimon() {
        const searchTerm = searchInput.val().toLowerCase();

        $.ajax({
             url: 'https://digimon-api.vercel.app/api/digimon',
             method: 'GET',
              success: function(data) {
             const filteredDigimon = data.filter(digimon =>
                 digimon.name.toLowerCase().includes(searchTerm)
                );
            mostrarDigimon(filteredDigimon.slice(0, 10)); //aqui solo listo los 10 primeros digimon para no sobrecargar la experiencia de ususario 
            },
        error: function() {
                alert('Error al buscar');
             }
        });
    }

    //  captura de los eventos aca 
    searchButton.click(buscarDigimon);
    searchInput.keypress(function(e) {
        if (e.which == 13) { 
            buscarDigimon();
        }
    });

    // cargo mis digimon al inicio de la pagina 

    cargarDigimon();
});