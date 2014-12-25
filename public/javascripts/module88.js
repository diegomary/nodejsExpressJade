 angular.module('module88', [])
 .factory('helperFactory', function ($http) {
    return { //Revealing Module Pattern
        getAuthStatus: function () { return $http.get('/getauthstatus', { cache: false }); }
    }
})
 .controller('headercontroller', ['$scope','helperFactory' , function ($scope,helperFactory) {
      	
        var that = this; // I get a reference to this to use inside the factory function
        helperFactory.getAuthStatus().then(function (dataResponse) {
			that.noLogged= dataResponse.data.status;
        });             

      }])
  .controller('corecontroller', ['$scope','helperFactory', function ($scope,helperFactory) {
  	this.sh=false;
			this.firstInfo = "Angularjs has been setup";       
            this.lastInfo="to work with Jade view render engine";
            $scope.angularInfo="Here Angularjs works with the new features of controller instantiation";
            this.fullInfo=function(){
            return this.firstInfo.concat(" ",this.lastInfo);
            } 
      }]);
          
