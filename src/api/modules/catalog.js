"use strict";

import F7 from 'framework7/dist/framework7.esm.bundle.js';

export default {
    checkStatus: response => {
        if (response.status >= 200 && response.status < 300) {
          return response
        } else {
          var error = new Error(response.statusText)
          error.response = response
          throw error
        }
    },
    parseJSON: response => {
        return response.json()
    },
    test: function(){
        F7.request.json('/api/pwa/service/time', {}, 
            function(data, status, xhr){
                console.log('Mainpage TEST: ', data, status, xhr);
            }, function(xhr, status){
                console.log('Error Mainpage TEST: ', xhr, status);
            });
    },
    /*getList: function(params, success, error){
        //filter, limit, offset
        F7.request.json('/api/pwa/goods', 
            { 
                limit: params.limit, 
                offset: params.offset 
            }, 
            function (data) {
                success(data);
            }, function(data){
                error( data);
            }
        );
    }*/
    getList: function(params, success, error){
        //filter, limit, offset
        let url = '/api/pwa/goods';

        url += '?limit=' + (params.limit || 10);
        url += '&offset=' + (params.offset || 0); 

        fetch(url)
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(success)
            .catch(error => console.log('request failed', error));
    }
}