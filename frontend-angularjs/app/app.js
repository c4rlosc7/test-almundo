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
    $scope.showFilter = false;
    $scope.showStar = false;

    /* Load file */
    angular.element(document).ready(function(){
      $scope.loadHotelList(); 
    });

    /* Show filter */
    $scope.showAndHideFilter = function(showFilter){
      if($scope.showFilter == true){
        $scope.showFilter = false;
      }else if($scope.showFilter == false){
        $scope.showFilter = true;
      }
    };

    /* Show stars */
    $scope.showStars = function(showStar){
      if($scope.showStar == true){
        $scope.showStar = false;
      }else if($scope.showStar == false){
        $scope.showStar = true;
      }
    };    

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
  