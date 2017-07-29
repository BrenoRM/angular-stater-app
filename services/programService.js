/*
 * This is a template for creating a service using angular module method. 
 * Use the example below to create services 
 *
 */

angular.module('programService', [])
.service('programs', ['$http', function ($http) {
    
	this.sorted_programs = [];

    /*
     * Get list of all programs and sort them based on display_order
     * @return Promise object  
     */
    this.getQtdTotalPessoas = function(){ 
    	return $http.get('https://iotfinder.mybluemix.net/analytics/total-pessoas');
    };

    this.getQtdPessoasBar = function(){
        return $http.get('https://iotfinder.mybluemix.net/analytics/total-pessoas-por-bar');
    };

    this.getQtdTotalPessoasHist = function(){
        return $http.get('https://iotfinder.mybluemix.net/analytics/total-pessoas-hist');
    };

    this.getPessoasBarHist = function(){
        return $http.get('https://iotfinder.mybluemix.net/analytics/total-pessoas-por-bar-hist');
    };

}]);