function btn(){
    let image = document.getElementById('image');
    let images = ['pic/img1.jpg','pic/img2.jpg','pic/img3.jpg','pic/img4.jpg',];

    let random = Math.floor(Math.random() * 4);
    image.src = images[random];
}