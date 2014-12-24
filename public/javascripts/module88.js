 angular.module('module88', [])
  .controller('corecontroller', function ($scope) {
			this.firstName = "Diego Aldo";       
            this.lastName="Burlando";
            $scope.testScope="This is a test on scope";
            this.concatenate=function(){
            return this.firstName.concat(" ",this.lastName);
            } 
      });      
