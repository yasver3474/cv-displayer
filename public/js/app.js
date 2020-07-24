feather.replace();
document.querySelector('.loading').style.display = 'block';
fetch(`/cv`).then((response) => {
    response.json().then((cv) => {

        document.querySelector('.loading').style.display = 'none'





    })
}).catch(error => {
    console.log(error);
})