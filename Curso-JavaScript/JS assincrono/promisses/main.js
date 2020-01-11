var minhaPromise = function() {
    return new Promise ( function (resolver, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 ) {
                if(xhr.status === 200){
                    resolver(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisicao');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response){})
    .catch(function(error){})
