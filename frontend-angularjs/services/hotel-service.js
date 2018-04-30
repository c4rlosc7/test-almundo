(function(){  
  var app = angular.module('hotel-service', ['mocks.util']);        
  
  /* Init service to hotels */
  app.service('srvHotel', function($http,utilMockFactory){

    /* Get to hotels list */
  	this.getHotelList = function(){
      try{
        if(!USE_MOCKS_DATASOURCE){
          return utilMockFactory.objectToPromise(hotels);
        }else{
          return $http.get('http://localhost:3000/hotels');
        }
      } 
      catch(err){
        console.log(err);
        return utilMockFactory.objectToPromiseError("Ha ocurrido un error.");
      }
  	};


  });
})(); 
