const someQuota = [
// {'“Be yourself; everyone else is already taken.”',
// '― Oscar Wilde'}
// {
//     '“So many books, so little time.”',
// '― Frank Zappa'
// }
// {
//     '“A room without books is like a body without a soul.”',
// '― Marcus Tullius Cicero'
// }
// ];
'“Be yourself; everyone else is already taken.”',
'― Oscar Wilde',
'“So many books, so little time.”',
'― Frank Zappa',
'“A room without books is like a body without a soul.”',
'― Marcus Tullius Cicero'
]
var index=0;
document.getElementById('qButton').addEventListener('click',
    function(){
        document.getElementById('quotacontent').innerHTML = someQuota[index];
        index = (index + 1)%someQuota.length;
    }
);
    
    