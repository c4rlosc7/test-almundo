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

  /* Show filter hotels */
  $scope.showAndHideFilter = function(showFilter){
    if($scope.showFilter == true){
      $scope.showFilter = false;
    }else if($scope.showFilter == false){
      $scope.showFilter = true;
    }
  };

  /* Show select stars */
  $scope.showStars = function(showStar){
    if($scope.showStar == true){
      $scope.showStar = false;
    }else if($scope.showStar == false){
      $scope.showStar = true;
    }
  };    

  /* Load hotel list */
  $scope.loadHotelList = function(){
    try{
      srvHotel.getHotelList().then(function(result){ 
          if (result.data.hotels) {
            $scope.hotelList = result.data.hotels;
          };
      }, function(error){
          console.log(error);
      });
    }
    catch(error){
      console.log(error);
    }
  };

  });
})(); 
  