const img = document.querySelectorAll(".gallery img");
const main = document.querySelector(".preview img, #pre img , .preview, #pre");

// img.forEach((image) => {
//     image.addEventListener("click",()=>{
//         img.forEach((img)=>{
//             img.classList.remove("active");
//         })
//         image.classList.add("active");
//     })});

// to preview the selected image as the main image
if(img.length && main)
{
    const setMain = src =>{
        if(main.tagName === "IMG"){
            main.src=src;
        }
        else{
            main.style.backgroundImage = `url(${src})`;
        }
    };//You can declare a function using a const variable =>
    setMain(img[0].src);

    img.forEach(img =>{
        img.addEventListener("click",event =>{
            setMain(event.target.src)
        })
    })
    
}

img.forEach((image) => {//It will be a loop through all the images
    image.addEventListener("click",function(event){ // it will check the event of the image clicked
        removeHighlight();//this function will run everytime an image is clicked and to remove the active class from all the images
        image.classList.add("active","fade-in");//this will add the active animation to the selected image 
    })//event.target.classList.add("active");//this will add the active class to the image that was clicked
});

function removeHighlight(){
    img.forEach((image)=>{
        image.classList.remove("active");
    });
}
