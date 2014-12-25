 angular.module('module88', [])
  .controller('corecontroller', function ($scope) {
			this.firstInfo = "Angularjs has been setup";       
            this.lastInfo="to work with Jade view render engine";
            $scope.angularInfo="Here Angularjs works with the new features of controller instantiation";
            this.fullInfo=function(){
            return this.firstInfo.concat(" ",this.lastInfo);
            } 
      });      
