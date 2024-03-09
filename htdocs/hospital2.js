 let slide = document.querySelectorAll(".patientReview");
 let card = document.querySelectorAll(".card");
 let closeBtn = document.getElementById("closeBtn");
 let connectBtn = document.getElementById("connectBtn");


 let count = 0;

 slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
 })

 function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
 }
 function redirectToOtherWebsite() {
    window.location.href = "index2.html"; // Replace "https://www.example.com" with the URL of the website you want to redirect to
}
function redirectToHome(){
    window.location.href = "index.html";
}
 setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun()
 }, 2000)

// Example array of doctor objects with their details
const doctors = [
        {
            name: "Comprehensive Care Programs",
            image: "h2.jpg",
            description: "• Preventive Screenings:<br>Regular screenings for early detection of health issues.<br>Promote proactive healthcare management.<br>• Specialized Treatment Options:<br>Access to advanced treatment modalities and therapies.<br>Cater to diverse medical needs and conditions.<br>• Wellness Programs:<br>Offer lifestyle modification programs.<br>Promote healthy habits and behaviors.<br>• Patient Education:<br>Provide resources and information to empower patients.<br>Enhance understanding of medical conditions and treatment options.<br>• Support Services:<br>Offer counseling and support groups.<br>Address emotional and psychological needs of patients and families."
        },
   {
       name: "Commitment to Community Health",
       image: "h3.jpg",
       description: "• Engage with underserved populations.<br>• Provide healthcare services to those in need.<br>• Offer workshops and seminars on various health topics.<br>• Empower community members to take charge of their health.<br>• Collaborate with schools, non-profits, and community centers.<br>• Extend reach and impact of health initiatives.<br>• Focus on reducing disparities in healthcare access and outcomes.<br>• Target interventions towards vulnerable populations.<br>• Strengthen community ties and resilience.<br>• Foster a sense of belonging and support within the community."
   },
   {
       name: "Patient-Centered Approach",
       image: "h5.jpg",
       description: "• Commitment to putting patients first.<br>• Prioritizing comfort, safety, and satisfaction.<br>• Emphasis on open communication.<br>• Provision of personalized care plans.<br>• Creating a supportive environment.<br>• Empowering patients to make informed decisions.<br>• Every step of the healthcare journey prioritizes patient needs.<br>• Care plans designed to meet individual requirements.<br>• Focus on delivering the highest quality care."
   }
];

// Assuming you have an array of card elements named 'cards'
// Assuming you have an array of card elements named 'cards'
card.forEach((card, index) => {
   card.addEventListener("click", function(){
       console.log(doctors[index]); // Log the details of the clicked doctor
       document.querySelector(".detail").style.display = "block";
       document.querySelector(".content").innerHTML = `
           <div class="contentContainer">
               <img src=${doctors[index].image} alt="">
               <div class="contentText">
                   <h1>${doctors[index].name}</h1>
                   <p>${doctors[index].description}</p>
               </div>
           </div>
       `;
   });
});

// Close button functionality
closeBtn.addEventListener("click", function(){
   document.querySelector(".detail").style.display = "none";
});

 connectBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Enter Details")
    }else{
        alert("Logged in Successfully")
    }
 })


