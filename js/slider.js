var pages = 
[
    {
    image: '/assets/img/ping-pong.jpg',
    desc: "PONG GAME",
    aHref: "https://github.com/atanurgul/Ponk_Game",
    projectLang: "/assets/logo/pythonLogo.png"
},
{
    image: 'assets/img/password_manager.jpg',
    desc: "Password Manager",
    aHref: "https://github.com/atanurgul/password_manager",
    projectLang: "/assets/logo/pythonLogo.png"
},
{
    image: 'assets/img/atmirage-interface.png',
    desc: "ATM Simulator",
    aHref: "https://github.com/atanurgul/atm_simulator",
    projectLang: "/assets/logo/pythonLogo.png"
},
{
    image: 'assets/img/bmi.jpeg',
    desc: "BMI Calculator",
    aHref: "https://github.com/atanurgul/bm-_calculator",
    projectLang: "/assets/logo/pythonLogo.png"
},
{
    image: 'assets/img/btc.jpg',
    desc: "Crypto Crazy",
    aHref: "https://github.com/atanurgul/CryptoCrazy",
    projectLang: "/assets/logo/pythonLogo.png"
},
{
    image: 'assets/img/snake.png',
    desc: "Snake Game 1984",
    aHref: "https://github.com/atanurgul/Snake_game",
    projectLang: "/assets/logo/pythonLogo.png"
}
]

var index = 0;
var slideCount = pages.length;


olaylar(index);

document.querySelector(".arrow-left").addEventListener("click", (e)=>{
    index--;
    if(index < 0){
        index = slideCount -1 ;
    }
    olaylar(index)

})
document.querySelector(".arrow-right").addEventListener("click", (e)=>{
    index++;
    if(index > pages.length -1) {
        index=0;
    }
    olaylar(index)
})


function olaylar(x){
    index = x;

    document.querySelector(".project-image").setAttribute('src', pages[index].image);
    document.querySelector(".project-header").innerHTML = pages[index].desc;
    document.querySelector(".project-lang").setAttribute('src', pages[index].projectLang);
    document.querySelector(".aHref").setAttribute("href", pages[index].aHref);

}