(function(){  
  var app = angular.module('hotel-service', ['mocks.util']);        
  
  /* Init service to message */
  app.service('srvHotel', function($http,utilMockFactory){

    /* Get to message list */
  	this.getHotelList = function(){
      try{
        if(USE_MOCKS_DATASOURCE){
          return utilMockFactory.objectToPromise(hotels);
        } 
      } 
      catch(err){
        console.log(err);
        return utilMockFactory.objectToPromiseError("Ha ocurrido un error.");
      }
  	};


  });
})(); 
