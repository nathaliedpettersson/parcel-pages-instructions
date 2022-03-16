const img = document.createElement('img');
document.body.append(img);
// img.src = './img/drake.jpeg'; Detta funkar inte!

const imgUrl = new URL('./img/drake.jpeg', import.meta.url );
img.src = imgUrl.toString();
console.log(imgUrl);