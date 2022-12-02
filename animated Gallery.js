const photos = document.querySelectorAll('.photo')

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        removeActiveClasses()
        photo.classList.add('active')
    })
})

function removeActiveClasses() {
    photos.forEach(photo => {
        photo.classList.remove('active')
    })
}
document.getElementById("g3").onclick = function(){
    document.body.style.backgroundImage = "url('blue sky.jpg')";
}
document.getElementById("g4").onclick = function(){
    document.body.style.backgroundImage = "url('Divya Abhishek Photography_15.jpg')";
}
document.getElementById("g5").onclick = function(){
    document.body.style.backgroundImage = "url('Divya Abhishek Photography_16.jpg')";
}
document.getElementById("g6").onclick = function(){
    document.body.style.backgroundImage = "url('Divya Abhishek Photography_21.jpg')";
}
document.getElementById("g7").onclick = function(){
    document.body.style.backgroundImage = "url('Divya Abhishek Photography_3.jpg')";
}
document.getElementById("g8").onclick = function(){
    document.body.style.backgroundImage = "url('Divya Abhishek Photography_6.jpg')";
}
