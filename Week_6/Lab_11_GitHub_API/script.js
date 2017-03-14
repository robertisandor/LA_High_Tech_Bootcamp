/*/
This script finds the repositories of the github username entered. 

1. Attach a "click" event handler for the button.
2. Grab the username from the text input
3. With the username, create the github API url and store it in a variable named APIUrl
	- The completed url will look like this: https://api.github.com/users/myusername/repos
4. Use the AJAX function to call the API. 
	- Be sure to use the loader gif provided while loading the results from the API call. You can find the loader in the index.html 
	- Make sure your code handles the error when no data is returned by the API
5. Loop through the data and append the data to the div with the id of results.
6. Use the empty function to clear previous data from the results div. This should clear the results each time
the button's event is fired.
*/

/* global $ */

function requestJSON(url, callback) {
    $.ajax({
        url: url,
        complete: function(xhr) {
            callback.call(null, xhr.responseJSON);
        }
    });
}

$(document).ready(function() {
    var username = "";
    var reqUrl = "";
    var APIUrl = "";
    $('button').click(function(e) {
        e.preventDefault();
        $(document).ajaxStart(function() {
            $('#loader').show();
        }).ajaxStop(function() {
            $('#loader').hide();
        });
        username = $('#username').val();
        reqUrl = 'https://api.github.com/users/' + username;
        APIUrl = 'https://api.github.com/users/' + username + '/repos';
        requestJSON(reqUrl, function(json) {
            if (json.message == 'Not Found' || username == '') {
                $('#results').html('<h2>No User Info Found</h2>');
            }
            else {
                var fullName = json.name;
                var userName = json.login;
                var aviUrl = json.avatar_url;
                var profileUrl = json.html_url;
                var location = json.location;
                var followersNum = json.followers;
                var followingNum = json.following;
                var reposNum = json.public_repos;

                if (fullName == undefined) {
                    fullName = userName;
                }
                var outhtml = '<h2>' + fullName + '(@<a href="' + profileUrl + '" target = "_blank">' + username + '</a>)</h2>' +
                    '<div ><div class="avi"><a href="' + profileUrl + '" target="_blank"><img src="' + aviUrl + '" width="80" height="80" alt="' + username + '"></a></div>' +
                    '<p>Followers: ' + followersNum + ' - Following: ' + followingNum + '<br>Repos: ' + reposNum + '</p>' + 
                    '<div class="repolist clearfix">';
                    
                var repositories;
                function outputPageContent() {
                    if (repositories.length === 0) {
                        outhtml += '<p>No repos!</p></div>';
                    } else {
                        outhtml += '<p><strong>Repos List:</strong></p> <ul>';
                        $.each(repositories, function(index) {
                            outhtml += '<li><a href="' + repositories[index].html_url + '" target="_blank">' + repositories[index].name + '</a></li>';
                        });
                        outhtml += '</ul></div>'
                    }
                    $("#results").html(outhtml);
                }
                $.getJSON(APIUrl, function(json) {
                    repositories = json;
                    outputPageContent();
                });
            }
        })
    });
});
