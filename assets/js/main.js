// Initializing the globlal event listener in the whole Site
document.addEventListener("DOMContentLoaded", () =>{

    // Getting all necessary elements by (Ids or ClassName)
    const toggler = document.getElementById('toggler');
    let sections = document.getElementsByTagName('section');
    let myLink = document.getElementsByClassName('nav-link');
    const nav_collapse = document.getElementById('navcollapser');

    // Toggling Open and Close the Main Nav on mobile
    const toggleNav = () =>{
        nav_collapse.hidden = true;
        toggler.addEventListener('click', (e)=> {
            const thisEl = e.target;
            toggler.classList.toggle("x");
            nav_collapse.classList.toggle("show");
            console.log(x);
        });
    };toggleNav();
    // Closing the Main Nav if open while on mobile
    const closeNav = () =>{
        Array.from(myLink).forEach((e, i) => {
            e.addEventListener('click', (d)=>{
                d.target.preventDefault;
                let href = d.target.getAttribute('href');
                if(nav_collapse.classList.contains('show') && toggler.classList.contains('x')){
                    toggler.classList.toggle("x");
                    nav_collapse.classList.toggle("show");
                }
            });
        });
    };
    closeNav();

    // adding tutorials list configurations7
    /**
     * // Selecting Categories and subcategories
    const selectCategoryAndSubcategory =()=>{
        let = Array.from(category_btn).forEach((e, i) => {
            e.addEventListener('click', (c)=>{               ;
                let hash = c.target.getAttribute('href');
                let active_subcat = document.querySelector(hash);
                if (active_subcat.classList.contains('active')) {
                    active_subcat.classList.remove('active');
                    active_subcat.previousElementSibling.classList.remove('active');
                    return false;
                }
                let subcat_list = document.querySelectorAll('.subcat-list.active');
                for (let i = 0; i < subcat_list.length; i++) {
                    let brotherEl = subcat_list[i].previousElementSibling;
                    subcat_list[i].classList.remove('active');
                    brotherEl.classList.remove('active');  
                }
                active_subcat.classList.toggle('active');
                active_subcat.previousElementSibling.classList.toggle('active');
            }, true)
        });
    }; selectCategoryAndSubcategory();
     */
    
});
/**
 * Our TODO
 * 1 - Create the Json Obeject
 *  accomplishments:
 *      courses:{
 *           courseName:"Azure DevOps"
 *           courseProvider:"Microsofit"
 *           courseStatus:"On going"
 *           coursenimage: "url" (used for displaying badgats)
 *      }
 * 2 - Render the object into Columns *
 * 3 - Create and implement the contact form
 * */ 