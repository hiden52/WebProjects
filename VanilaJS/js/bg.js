const body = document.querySelector("body");

const IMG_NUM = 11;

function handleImgLoad()
{
    console.log("finish");
}

function paintImage(imgNum)
{
    const image = new Image();
    image.src = `./images/${imgNum + 1}.jpg`;
    body.prepend(image);
    image.classList.add("bgImg");
}

function generateN()
{
    const number = Math.random() * IMG_NUM; 
    return Math.floor(number);
}

function init()
{
    const randNum = generateN();
    paintImage(randNum);
}
init();