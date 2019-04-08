//var $listHTML=$('ul').html();
// var $listHTML=$('li:contains("свежий")').html(function(){
//     return '<em>'+$(this).text()+'</em>';
// });
//get markup var 1
var $listHTML=$('li:contains("свежий")').html();
alert($listHTML);
$('ul').before('<li class="hot"><i>'+$listHTML+'</i></li>');

//get markup var 2
var $firstEl=$('ul').children('#one');
$('ul').prepend($firstEl);