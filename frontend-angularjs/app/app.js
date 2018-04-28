/*
  authot: carlos andres martinez
  email: c4rlosc7@gmail.com
  date: 27/04/2017
*/

(function(){ 
    var app = angular.module('app', ['hotel-service']);  
  
  
    /* Init Controller */  
    app.controller('Ctrl', function($scope,
                                    $http,
                                    srvHotel){

    $scope.hotelList = [];

    /* Load file */
    angular.element(document).ready(function(){
      $scope.loadHotelList(); 
    });    

    /* Load message list using mocks */
    $scope.loadHotelList = function(){
      try{
        srvHotel.getHotelList().then(function(result){ 
            if (result.data.successful) {
                if (result.data.payload) {
                    $scope.hotelList = result.data.payload;
                    console.log($scope.hotelList);
                    
                };
            };
        }, function(error){
            debugFactory.error(error);
        });
      }
      catch(error){
        console.log(error);
      }
    };                                      
  
    });
  })(); 
  