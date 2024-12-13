$(document).ready(function() {
    
    function getRandomDogImage() {
      $.get('https://dog.ceo/api/breeds/image/random', function(data) {
       
        $('#dogImage').attr('src', data.message);
      });
    }
  
    
    getRandomDogImage();
  
    
    $('#newDogButton').click(getRandomDogImage);
  
    console.log("Ready pp");
  });