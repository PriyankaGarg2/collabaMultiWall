//service for login
chatApp.service('loginService',function($http){
  this.authUser=function(user){
    console.log('in login service');
    return $http.post('/login',user).
      then(function(response) {
        return response.data;
      }, function(response) {
        return "failure";
      });
    };
});

//service for registration
chatApp.service('registerService',function($http){
  this.registerUser=function(user){
    console.log('in register service');
    return $http.post('/register',user).
      then(function(response){
        return response.data;
      },function(response){
        return "failure";
      });
  };
});
