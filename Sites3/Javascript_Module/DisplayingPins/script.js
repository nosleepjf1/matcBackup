/**
 * Created by bobnweave on 10/13/16.
 */

for(var i = 0; i < 10; i++){
    var left = Math.floor(Math.random() * 1155) + 1;
    var top = Math.floor(Math.random() * 552) + 1;



//top doesn't work yet cause i can't figure out how to quote and unquote properly haha
    document.getElementById('map').innerHTML += '<div class="astronaut" style="left: ' + left + 'px;" "top:  " '+ top + 'px;</div>'
}