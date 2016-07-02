angular.module('starter.services', [])

/***************************************************************************************
 * SERVICES SEARCH
 **************************************************************************************/

.service (
  "searchSrv",
  function($http, $q) {
    // Return public API
    return ({
      getBiere: getBiere
    });

    function getBiere() {
      var request = $http({
        method: "get",
        url: 'https://houblonde-2d4c4.firebaseio.com/biere.json?print=pretty',
        params: {
          action: "get"
        }
      });
      return(request.then(handleSuccess, handleError));
    }

    // Transform the successful response
    function handleError(response) {
      if (!angular.isObject(response.data) ||
        !response.data.message
      ) {
        return ($q.reject("An unknown error occurred."));
      }
      // Otherwise, use expected error message
      return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
      return (response.data);
    }
  }
);