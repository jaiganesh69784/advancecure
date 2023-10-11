let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const optionmenu = document.querySelector(".select-menu"),
    selectbtn = optionmenu.querySelector(".select-btn"),
    options = optionmenu.querySelectorAll(".option"),
    sbtn_text = optionmenu.querySelector(".sbtn-text");

selectbtn.addEventListener("click", () => optionmenu.classList.toggle("active"))

options.forEach(option => {
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sbtn_text.innerText = selectedOption;
        // console.log(selectedOption) 

        optionmenu.classList.toggle("active");
    })
});