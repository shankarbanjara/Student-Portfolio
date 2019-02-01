//GET ELEMENTS FROM HTML DOCUMENT

//HAMBURGER ICON IN UPPER RIGHT CORNER 
const hamburger = document.querySelector(".hamburger");
//MENU PAGE THAT APPEARS WHEN HAMBURGER IS CLICKED
const menu = document.querySelector(".menu");
//VARIABLE THAT WILL DECIDE IF THE MENU WILL BE SHOWN OR NOT 

let showMenu = false;

//LISTEN FOR CLICK ON HAMBURGER ICON AND CALL TOGGLEMENU FUNCTION
hamburger.addEventListener("click", toggleMenu);

//DECLEAR TOGGEMENU FUNCTION
function toggleMenu() {
    //CHECK IF SHOWMENU VARIABLE IF FALSE
    if (showMenu === false) {
        // ADD A CLASS 'CLOSE' TO THE HAMBURGER IN THE HTML DOC
        hamburger.classList.add("close");
        //ADD SHOW CLASS TO ANYTHING WITH '.MENU'
        menu.classList.add("show");
        //WHEN THE HAMBURGER IS CLICKED AGAIN IT WON'T ADD ANYTHING
        showMenu = true;
    } else { //IF SHOW MENU IS TRUE 
        //REMOVE THE CLOSE CLASS FROM HANBURGER
        hamburger.classList.remove("close");
        //REMOVE THE CLOSE CLASS FROM THE MENU
        menu.classList.remove("show");
        //RESET THE SHOW MENU IS TRUE 

        showMenu = false;
    }
}
