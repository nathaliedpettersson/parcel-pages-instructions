// const img = document.createElement('img');
// document.body.append(img);
// // img.src = './img/drake.jpeg'; Detta funkar inte!

// const imgUrl = new URL('./img/drake.jpeg', import.meta.url );
// img.src = imgUrl.toString(); // href works too
// console.log(imgUrl);

// Clara kollar upp detta, funkade ej att lägga upp fler bilder

// const imgNames = ['pad_thai', 'newyork', 'drake'];

// for(let i:number = 0; i<imgNames.length; i++) {
//     const img = document.createElement('img');
//     document.body.append(img);
//     const string = `./img/${imgNames[i]}`;
//     const imgUrl = new URL(string, import.meta.url );
//     console.log(imgUrl);
//     img.src = imgUrl.href;
// }

// DETTA FUNKAR OM MAN VILL LÄGGA TILL FLER BILDER

const imgUrls = [
    new URL('./img/drake.jpeg', import.meta.url ),
    new URL('./img/newyork.jpeg', import.meta.url ),
    new URL('./img/pad_thai.jpeg', import.meta.url )
]

for (const el of imgUrls) {
    const img = document.createElement('img');
    document.body.append(img);
    img.src = el.href;
}