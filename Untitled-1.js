
let aboutme = [
    {
        "code":"&#x1F476;",
        "text":"19"
    },
    {
        "code":"&#x1F382;",
        "text":"26/06/2004"
    },
    {
        "code":"&#x1F3E0;",
        "text":"Krishnagiri, Tamil Nadu"
    },
    {
        "code":"&#x1F4DE;",
        "text":"+91 9361547043"
    },
    {
        "code":"&#x1F4E7;",
        "text":"shanmugamdarasan@gmail.com"
    },
    {
        "code":"&#x1F3EB;",
        "text":"Kalasalingam University"
    },
    {
        "code":"&#x1F393;",
        "text":"B.Tech C.S.E (Cyber Security and Forensic)"
    },
    {
        "code":"&#x1F30D;",
        "text":"Travelling, Music, Cricket"
    },
    {
        "code":"&#x1F517;",
        "text":"Linkedin"
    }
]

function switchBgColor_white(aboutme) {
    let backgroundEl=document.getElementById("background");
    backgroundEl.style.backgroundImage="radial-gradient(#fff,#1d3144)";
    backgroundEl.style.height="50%";
    document.getElementById("Im_color_change").style.color = "#000000";
    document.getElementById("md_Im_color_change").style.color = "#000000";
    document.getElementById("home_page_big_para_color_change").style.color = "#000000";
    
    

    /*about Me page*/
    let about_me_backgroundEl = document.getElementById("aboutMeBack");
    about_me_backgroundEl.style.backgroundImage = "radial-gradient(#fff,#1d3144)";
    about_me_backgroundEl.style.height = "50%"
    document.getElementById("about_page_big_para_change").style.color = "#000";
    document.getElementById("about_me_h1_change").style.color = "#000";
    document.getElementById("md_about_me_h1_change").style.color = "#000";
    let aboutmeList = aboutme
    for (let item of aboutmeList){
        /* About Me List Div*/
        let aboutmeidEl = document.getElementById("aboutmeid");
        
        /* About Me List In Div */
        let aboutmeInDiv = documen.createElement("li");
        aboutmeInDiv.classList.add("d-flex","flex-row","justift-content-start","pt-3");
        /* About Me list Code li */
        let aboutmeidcode = document.createElement("p");
        aboutmeidcode.style.fontSize = "30px";
        aboutmeidcode.textContent = item.code;
        aboutmeInDiv.appendChild(aboutmeidcode);

        /* About Me list Text Para */
        let aboutmeidText = document.createElement('p');
        aboutmeidText.classList.add('icon_text','pl-3');
        aboutmeidText.textContent = item[text];
        aboutmeidText.style.color = "#000";
        aboutmeInDiv.appendChild(aboutmeidText);

        aboutmeidEl.appendChild(aboutmeInDiv);
    }

    /*Skill page*/
    let skill_backgroundEl=document.getElementById("skill_background");
    skill_backgroundEl.style.backgroundImage="radial-gradient(#fff,#1d3144)";
    skill_backgroundEl.style.height="50%";

    /*achievement page*/
    let achievement_backgroundEl=document.getElementById("achievement_background");
    achievement_backgroundEl.style.backgroundImage="radial-gradient(#fff,#1d3144)";
    achievement_backgroundEl.style.height="50%";

    /*Footer Page*/
    let footer_backgroundEl=document.getElementById("footer_background");
    footer_backgroundEl.style.backgroundImage="radial-gradient(#fff,#1d3144)";
    footer_backgroundEl.style.height="50%";
    document.getElementById("footer_address_para_change").style.color = "#000";
    document.getElementById("footer_home_change").style.color = "#000";
    document.getElementById("footer_about_me_change").style.color = "#000";
    document.getElementById("footer_skills_change").style.color = "#000";
    document.getElementById("footer_achievement_change").style.color = "#000";

}

function switchBgColor_nrml() {
    let backgroundEl=document.getElementById("background");
    backgroundEl.style.backgroundImage="radial-gradient(#277BC0,#1d3144)";
    backgroundEl.style.height="50%";
    document.getElementById("Im_color_change").style.color = "#fff";
    document.getElementById("md_Im_color_change").style.color = "#fff";
    document.getElementById("home_page_big_para_color_change").style.color = "#fff";
    
    

    /*about Me page*/
    let about_me_backgroundEl = document.getElementById("aboutMeBack");
    about_me_backgroundEl.style.backgroundImage = "radial-gradient(#277BC0,#1d3144)";
    about_me_backgroundEl.style.height = "50%"
    document.getElementById("about_page_big_para_change").style.color = "#fff";
    document.getElementById("about_me_h1_change").style.color = "#fff";
    document.getElementById("md_about_me_h1_change").style.color = "#fff";
    for (let item of aboutme){
        /* About Me List Div*/
        let aboutmeidEl = document.getElementById("aboutmeid");
        
        /* About Me List In Div */
        let aboutmeInDiv = documen.createElement("div");
        aboutmeInDiv.classList.add("d-flex","flex-row","justift-content-start","pt-3");
        /* About Me list Code Para */
        let aboutmeidcode = document.createElement("p");
        aboutmeidcode.style.fontSize = "30px";
        aboutmeidcode.textContent = item[code];
        aboutmeInDiv.appendChild(aboutmeidcode);

        /* About Me list Text Para */
        let aboutmeidText = document.createElement('p');
        aboutmeidText.classList.add('icon_text','pl-3');
        aboutmeidText.textContent = item[text];
        aboutmeidText.style.color = "#fff";
        aboutmeInDiv.appendChild(aboutmeidText);

        aboutmeidEl.appendChild(aboutmeInDiv);
    }
    

    /*Skill page*/
    let skill_backgroundEl=document.getElementById("skill_background");
    skill_backgroundEl.style.backgroundImage="radial-gradient(#277BC0,#1d3144)";
    skill_backgroundEl.style.height="50%";

    /*achievement page*/
    let achievement_backgroundEl=document.getElementById("achievement_background");
    achievement_backgroundEl.style.backgroundImage="radial-gradient(#277BC0,#1d3144)";
    achievement_backgroundEl.style.height="50%";

    /*Footer Page*/
    let footer_backgroundEl=document.getElementById("footer_background");
    footer_backgroundEl.style.backgroundImage="radial-gradient(#277BC0,#1d3144)";
    footer_backgroundEl.style.height="50%";
    document.getElementById("footer_address_para_change").style.color = "#fff";
    document.getElementById("footer_home_change").style.color = "#fff";
    document.getElementById("footer_about_me_change").style.color = "#fff";
    document.getElementById("footer_skills_change").style.color = "#fff";
    document.getElementById("footer_achievement_change").style.color = "#fff";
}

switchBgColor_nrml()