const area = document.querySelector('.gussing-content');
const result = document.querySelector('.result');

area.addEventListener('click',function(event){
    if(event.target.className === 'gussing-content') return;
    axios.get(`/game?action=${event.target.className}`).then(function(res){
        console.log(res.data);
        result.textContent = res.data;
    }).catch(function(err){
        console.log(err);
    })
})
