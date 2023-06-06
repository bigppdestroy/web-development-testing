console.log('yessir34');

var timernumb = 0
function timeradd(){
    document.getElementById('timer').innerHTML = timernumb+1;
}
document.getElementById('yoo').addEventListener('click',function(){
    alert('yessir');
    timeradd();
    console.log('okay1');
});