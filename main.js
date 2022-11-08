

function loadingStart(){
    setTimeout(()=>{
       document.querySelector('.loading').style.display = 'none';
       
    },3000);

    setTimeout(function(){
        document.querySelector('#main').style.display = 'block'
    })


}
loadingStart();