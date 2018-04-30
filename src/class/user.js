"use strict";

var User = /** @class */ (function () {
    function User(){
        var user_req = this.getReq();

        this.profile = {};
    
        if(user_req)
            this.authorize.apply(this, user_req);
    }
    
    User.prototype.constructor = User;

    User.prototype.isAuthorized = function(){
        return this.get('id')>0;
    };

    User.prototype.authorize = function(login, password){
        this.setReq(login, password);
    };

    User.prototype.logout = function(){

    };
    
    User.prototype.getReq = function(){
        var login = localStorage.getItem('user_login');
        var password = localStorage.getItem('user_pass');
        if(login && password)
            return [login, password];
        return false
    };

    User.prototype.setReq = function(login, password){
        // Запомниаем токен и айдишник пользователя
        localStorage.setItem('user_login', login);
        localStorage.setItem('user_pass', password);
    };

    User.prototype.get = function(field){
        return this.profile[field];
    };
    
    User.prototype.toString = function(){
        return '['+this.get('id')+'] ' + this.get('firstName') + ' ' + this.get('lastName') + ' (' + this.get('email') + ')'  
    };
    
    return User;
}());

export default User;