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
            name: "Dr. Emily Davidson",
            image: "dt6.jpg",
            description: "• Board Certified in Pediatrics.<br>• Advanced Cardiac Life Support (ACLS) Certification.<br>• 10 years of experience in pediatric care.<br>• Former Chief Resident at Cityville Children's Hospital.<br>• Attending Pediatrician at Cityville General Hospital."
        },
   {
       name: "Dr. Rachel Lee",
       image: "dt5.jpg",
       description: "• Board Certified in Obstetrics and Gynecology.<br>• Advanced Life Support in Obstetrics (ALSO) Certification.<br>• 12 years of experience in obstetrics and gynecology.<br>• Former Chief Resident at Cityville Women's Hospital.<br>• Attending Physician at Cityville Women's Health Clinic."
   },
   {
       name: "Dr. Michael Johnson",
       image: "dt4.jpg",
       description: "• Board Certified in Orthopedic Surgery.<br>• Fellowship trained in Sports Medicine.<br>• 15 years of experience in orthopedic surgery.<br>• Former Chief of Orthopedic Surgery at Cityville Medical Center.<br>• Team Physician for Cityville Knights professional sports team."
   }
];

// Assuming you have an array of card elements named 'cards'
card.forEach((card, index) => {
   card.addEventListener("click", function(){
       console.log(doctors[index]); // Log the details of the clicked doctor
       document.querySelector(".detail").style.display = "block";
       document.querySelector(".content").innerHTML = `
           <img src=${doctors[index].image} alt="">
           <div class="contentText">
               <h1>${doctors[index].name}</h1>
               <p>${doctors[index].description}</p>
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


