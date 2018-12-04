function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

$(document).ready(function(){
    var name1 = getUrlParam('name1','Mazatl');
    var name2 = getUrlParam('name2','Nochtli');
    document.getElementById('name1').textContent = name1;
    document.getElementById('name2').textContent = name2;
});
