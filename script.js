 
 
 
 
 //for the typing animation//

 const sentences = [
    "Welcome to Feenicks1 Solutions Ltd",
    "Explore Investment Options tailored for you",
    "Take our quick risk quiz to get started", 
   " Watch your portfolio grow over time."
   

  ];
  let part = 0;
  let index = 0;
  let currentText = '';
  let isDeleting = false;
  const textElement = document.querySelector('.pop-up-maintext');
  
  function type() {
    const fullText = sentences[part];
    if (isDeleting) {
      currentText = fullText.substring(0, index--);
    } else {
      currentText = fullText.substring(0, index++);
    }
    textElement.textContent = currentText;
    if (!isDeleting && index === fullText.length + 1) {
      // Pause after typing full sentence
      isDeleting = true;
      setTimeout(type, 3000);
      return;
    }
    if (isDeleting && index === 0) {
      // Move to next sentence
      isDeleting = false;
      part = (part + 1) % sentences.length;
    }
    const speed = isDeleting ? 50 : 120;
    setTimeout(type, speed);
  }
  // Start typing after page load
  window.onload = () => type();

 
 
 
 
 
 
 
 const counters = document.querySelectorAll('.stat-number');
  const speed = 150;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 100);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCount();
  });


  //for the calculator//

   function openPopup() {
      document.getElementById('investmentPopup').style.display = 'flex';
    }

    function closePopup() {
      document.getElementById('investmentPopup').style.display = 'none';
      document.getElementById('result').innerHTML = '';
    }

    function calculateAdvice() {
      const amount = parseFloat(document.getElementById('amount').value);
      const resultDiv = document.getElementById('result');

      if (!amount || amount <= 0) {
        resultDiv.innerHTML = "<strong>Please enter a valid amount.</strong>";
        return;
      }

      
     let advice_btn=document.querySelector('.Professional-btn');
      let advice = "";
      let typing_bubble=document.querySelector('.typing-bubble');
      typing_bubble.style.display="block";

      if(amount < 100){
       advice_btn.style.display="none";
        setTimeout(()=>{
       advice_btn.innerHTML=`Start Investing Now`; 
       typing_bubble.style.display="block"; 

        },2000)
        
        setTimeout(()=>{
          typing_bubble.style.display="none";
           resultDiv.innerHTML = "Our Investment package starts from 100 cedis";
          advice_btn.style.display="block";
        },5000)
      }

   else if(amount>=100 && amount <140){
      advice_btn.style.display="none";
        setTimeout(()=>{
    
       typing_bubble.style.display="block"; 

        },2000)
        
        setTimeout(()=>{
          typing_bubble.style.display="none";
           resultDiv.innerHTML = "We recommend you start from BitSusu Capital with monthly ROI:(5%-10%) and 2% management fee";
         
             advice_btn.innerHTML=`Start Investing Now`; 
        },5000)

        setTimeout(()=>{
           advice_btn.style.display="block";
        },6000)
   }




      else if (amount >140 && amount <499.99) {

      
        advice_btn.style.display="none";
        setTimeout(()=>{
    
       typing_bubble.style.display="block"; 

        },2000)
        
        setTimeout(()=>{
          typing_bubble.style.display="none";
           resultDiv.innerHTML = "We recommend you start from Mutual Fund Capital with monthly ROI:(5%-10%) and 2% management fee";
         
             advice_btn.innerHTML=`Start Investing Now`; 
        },5000)

        setTimeout(()=>{
           advice_btn.style.display="block";
        },6000)
       
       
      } else if (amount >= 500 && amount <=2999.99) {
      
       
       
        advice_btn.style.display="none";
        setTimeout(()=>{
       advice_btn.innerHTML=`Start Investing Now`; 
       typing_bubble.style.display="block"; 

        },2000)
        
        setTimeout(()=>{
          typing_bubble.style.display="none";
           resultDiv.innerHTML = " We recommend you start from Investwise Capital with monthly ROI:(5%-10%) and 4% management fee";
          advice_btn.style.display="block";
        },5000)


      } else if (amount >= 3000 && amount <=4999.99) {
       
       advice_btn.style.display="none";
        setTimeout(()=>{
       advice_btn.innerHTML=`Start Investing Now`; 
       typing_bubble.style.display="block"; 

        },2000)
        
        setTimeout(()=>{
          typing_bubble.style.display="none";
           resultDiv.innerHTML = `We recommend you start from Agribusiness Capital with monthly ROI:(7%-10%) and 4% management fee`;
          advice_btn.style.display="block";
        },5000)

         
      } 
      
      
      else if(amount >=5000){
        
          advice_btn.style.display="none";
        setTimeout(()=>{
       advice_btn.innerHTML=`Start Investing Now`; 
       typing_bubble.style.display="block"; 

        },2000)
        
        setTimeout(()=>{
          typing_bubble.style.display="none";
           resultDiv.innerHTML = `We recommend you start from Real Estate Pool Fund with monthly ROI:(8%-12%) and 4% management fee.`;
          advice_btn.style.display="block";
        },5000)
       
      }

      resultDiv.innerHTML = advice;
    }

    //bubble//
    function bubble(){

    
  const button_advice=document.querySelector(".Professional-btn");
  const typing_bubble=document.querySelector(".typing-bubble");
  button_advice.style.display="none"; 
  typing_bubble.style.display="block";  
 
}

///============for range slider===================


  



  // Elements
  const amountSlider = document.querySelector(".range-drag.amount");
  const durationSlider = document.querySelector(".range-drag.duration");
  const cashInvest = document.querySelector(".cash-invest");
  const durationValue = document.querySelector(".duration-value");
  const profitValue = document.querySelector(".profit-value");
  const totalValue = document.querySelector(".total-value");
  const expectedRoi = document.querySelector(".expected-roi");
  const currencySelect = document.getElementById("currencySelect");

  const btnMonth = document.querySelector(".btn-month-active");
  const btnYear = document.querySelector(".btn-year");

  // ROI %
  const roiPercent = 0.12; // 12% annual

  // Format currency
  function formatCurrency(value, currency) {
    switch(currency) {
      case "Dollar": return "$" + Number(value).toLocaleString();
      case "Euros": return "€" + Number(value).toLocaleString();
      default: return "GHS" + Number(value).toLocaleString();
    }
  }

  // Slider fill
  function updateSliderFill(slider) {
    const min = slider.min;
    const max = slider.max;
    const val = slider.value;
    const percentage = ((val - min) * 100) / (max - min);
    slider.style.background = `linear-gradient(to right, #56ab2f ${percentage}%, #ddd ${percentage}%)`;
  }

  // Tooltip generator
  function attachTooltip(slider, formatFn = (v)=>v) {
    const tooltip = document.createElement("div");
    tooltip.className = "slider-tooltip";
    slider.parentElement.style.position = "relative";
    slider.parentElement.appendChild(tooltip);

    function updateTooltip() {
      const min = slider.min;
      const max = slider.max;
      const val = slider.value;
      const percentage = ((val - min) * 100) / (max - min);

      const sliderWidth = slider.offsetWidth;
      const thumbOffset = (percentage / 100) * sliderWidth;

      tooltip.style.left = thumbOffset + "px";
      tooltip.style.top = (slider.offsetTop - 30) + "px"; // above slider
      tooltip.textContent = formatFn(val);
      tooltip.style.opacity = 1;
    }

    slider.addEventListener("input", updateTooltip);
    slider.addEventListener("mouseenter", updateTooltip);
    slider.addEventListener("mouseleave", () => { tooltip.style.opacity = 0; });

    updateTooltip(); // initialize
    return updateTooltip;
  }

  // Main calculator update (compound interest)
  function updateCalculator() {
    const amount = parseInt(amountSlider.value);
    const duration = parseInt(durationSlider.value);
    const currency = currencySelect.value;
    const isYears = btnYear.classList.contains("active");

    const durationYears = isYears ? duration : duration / 12;
    const n = isYears ? 1 : 12; // yearly vs monthly compounding

    const total = amount * Math.pow((1 + roiPercent / n), n * durationYears);
    const profit = total - amount;

    cashInvest.textContent = formatCurrency(amount, currency);
    durationValue.textContent = isYears ? `${duration} Years` : `${duration} Months`;
    expectedRoi.textContent = (roiPercent * 100).toFixed(0) + "%";
    profitValue.textContent = formatCurrency(profit, currency);
    totalValue.textContent = formatCurrency(total, currency);

    updateSliderFill(amountSlider);
    updateSliderFill(durationSlider);

    amountTooltipUpdater();
    durationTooltipUpdater();
  }

  // Toggle Months/Years
  btnMonth.addEventListener("click", () => {
    btnMonth.classList.add("active");
    btnMonth.textContent = "✅ Months";
    btnYear.classList.remove("active");
    btnYear.textContent = "Years";

    durationSlider.min = 1;
    durationSlider.max = 600; // 50 years in months
    if(durationSlider.value > 600) durationSlider.value = 12;

    updateCalculator();
  });

  btnYear.addEventListener("click", () => {
    btnYear.classList.add("active");
    btnYear.textContent = "✅ Years";
    btnMonth.classList.remove("active");
    btnMonth.textContent = "Months";

    durationSlider.min = 1;
    durationSlider.max = 50; // up to 50 years
    if(durationSlider.value > 50) durationSlider.value = 1;

    updateCalculator();
  });

  // Tooltips
  const amountTooltipUpdater = attachTooltip(amountSlider, (v) => formatCurrency(v, currencySelect.value));
  const durationTooltipUpdater = attachTooltip(durationSlider, (v) => v + (btnYear.classList.contains("active") ? " Years" : " Months"));

  // Events
  amountSlider.addEventListener("input", updateCalculator);
  durationSlider.addEventListener("input", updateCalculator);
  currencySelect.addEventListener("change", updateCalculator);

  // Init
  updateCalculator();




//------------end of calculator================//


//for video play//


  function playvideo(){
  
    const video=document.querySelector('.testimonial-video');
    const playbtn=document.querySelector('.video-icon');
    let image_overlay=document.querySelector('.image-overlay');

//initially paused//
    video.pause;

    playbtn.addEventListener('click',()=>{
      video.play();
      playbtn.style.display="none";
      image_overlay.style.display="none";

    });

    video.addEventListener('ended',()=>{
      image_overlay.style.display="block";
       playbtn.style.display="block";
    });
  }
//======================faq section==========================//
  function toggleFaq(faq) {
      const allFaqs = document.querySelectorAll('.faq-box');
      allFaqs.forEach(box => {
        if (box !== faq) box.classList.remove('active');
      });
      faq.classList.toggle('active');
    }



//subscribe button//
function subscribed(){
  let update_msg=document.querySelector('.news-update');
  let subscribe_btn=document.querySelector('.subscribe-btn');
  if((subscribe_btn.innerHTML).toLowerCase()==='subscribe'){
    subscribe_btn.innerHTML='subscribed';
    update_msg.style.display="block";
    setTimeout(()=>{
    update_msg.style.display="none";
    },2000);

  }
  else if(subscribe_btn.innerHTML='subscribed'){
     subscribe_btn.innerHTML=`Already subscribed`;
  }
  else{
     subscribe_btn.innerHTML='subscribe';
  }
 
}



function getEmail(){
  let subscribe_btn=document.querySelector('.subscribe-btn');
   let email_newsletter=document.querySelector('.email-newsletter');
   email_value=email_newsletter.value;
   if(email_value.length>0){
  subscribed();
  subscribe_btn.classList.add('is-shine');

   }
   else{
    subscribe_btn.classList.add('is-blur');
   }

}

//google translate//
function googleTranslateElementInit() {
      new google.translate.TranslateElement(
        {
          pageLanguage: 'en',   // Default website language
          includedLanguages: '', // Leave blank → includes ALL available
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
    }




//sidebar-appear//
 const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".hamburger-menu");
    const closeBtn = document.getElementById("close-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    // Open sidebar
    hamburger.addEventListener("click", () => {
      sidebar.classList.add("active");
    });

    // Close sidebar
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });

    // Accordion dropdown
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        const submenu = item.nextElementSibling;

        if (submenu.classList.contains("open")) {
          submenu.classList.remove("open");
        } else {
          // close other open menus
          document.querySelectorAll(".submenu").forEach(sm => sm.classList.remove("open"));
          submenu.classList.add("open");
        }
      });
    });

    //-====================for the chatbot part==================//
    // Questions array
const questions = [
  { question: "What’s your age range?", options: [{ text: "Under 25", value: 3 }, { text: "25-40", value: 2 }, { text: "Over 40", value: 1 }] },
  { question: "How would you describe your risk appetite?", options: [{ text: "High risk, high reward", value: 3 }, { text: "Moderate risk", value: 2 }, { text: "Low risk, safe investments", value: 1 }] },
  { question: "How long do you plan to invest?", options: [{ text: "Less than 1 year", value: 1 }, { text: "1-5 years", value: 2 }, { text: "Over 5 years", value: 3 }] },
  { question: "Have you invested before?", options: [{ text: "Yes, frequently", value: 3 }, { text: "Once or twice", value: 2 }, { text: "Never", value: 1 }] },
  { question: "Do you prefer stable income or higher growth?", options: [{ text: "Higher growth, long term focus", value: 3 }, { text: "Balanced growth and stability", value: 2 }, { text: "Stable income, low risk", value: 1 }] },
  { question: "How comfortable are you with market volatility?", options: [{ text: "Very comfortable", value: 3 }, { text: "Somewhat comfortable", value: 2 }, { text: "Not comfortable", value: 1 }] },
  { question: "Do you prefer local or international investments?", options: [{ text: "International", value: 3 }, { text: "Mixed", value: 2 }, { text: "Local only", value: 1 }] }
];
// Risk profiles
const riskProfiles = [
  { min: 7, max: 11, level: "Conservative (Low Risk)", description: "Recommended: Mutual Funds, Investwise Capital.", volatility: "Low", returns: "Low", focus: "Capital protection", emoji: "🟢" },
  { min: 12, max: 15, level: "Moderate (Balanced Risk)", description: "Recommended: Agribusiness Capital, Mixed Mutual Funds.", volatility: "Medium", returns: "Moderate", focus: "Balanced growth & income", emoji: "🟡" },
  { min: 16, max: 18, level: "Aggressive (High Risk)", description: "Recommended: Real Estate, Digital Assets (Bitcoin).", volatility: "High", returns: "High", focus: "Long term wealth accumulation", emoji: "🔴" },
  { min: 19, max: 21, level: "Speculative (Very High Risk)", description: "Recommended: Cryptocurrency & Forex.", volatility: "Very High", returns: "Very High", focus: "Maximum returns, high loss risk", emoji: "🔥" }
];
let currentQuestion = 0;
let totalScore = 0;
const icon = document.getElementById("chatbot-icon");
const windowDiv = document.getElementById("chatbot-window");
const messagesDiv = document.getElementById("chatbot-messages");
const inputDiv = document.getElementById("chatbot-input");
// Toggle chat window
icon.addEventListener("click", () => {
  if(windowDiv.style.display === "none" || windowDiv.style.display === ""){
    windowDiv.style.display = "flex";
    if(currentQuestion === 0 && messagesDiv.innerHTML === ""){
      showQuestion();
    }
  } else {
    windowDiv.style.display = "none";
  }
});
// Append bot message
function appendBotMessage(text){
  const div = document.createElement("div");
  div.className = "bot-message";
  div.textContent = text;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
// Append user message
function appendUserMessage(text){
  const div = document.createElement("div");
  div.className = "user-message";
  div.textContent = text;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
// Show next question
function showQuestion(){
  if(currentQuestion >= questions.length){
    showResult();
    return;
  }
  const q = questions[currentQuestion];
  appendBotMessage(q.question);
  inputDiv.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.addEventListener("click", () => {
      appendUserMessage(opt.text);
      totalScore += opt.value;
      currentQuestion++;
      setTimeout(showQuestion, 400);
    });
    inputDiv.appendChild(btn);
  });
}
// Show final result with Risk Bar
function showResult(){
  inputDiv.innerHTML = "";
  const profile = riskProfiles.find(p => totalScore >= p.min && totalScore <= p.max) || riskProfiles[0];
  appendBotMessage(`${profile.emoji} Risk Level: ${profile.level}`);
  appendBotMessage(`Volatility: ${profile.volatility}`);
  appendBotMessage(`Expected Returns: ${profile.returns}`);
  appendBotMessage(`Investment Focus: ${profile.focus}`);
  appendBotMessage(profile.description);
  // Risk bar
  const barContainer = document.createElement("div");
  barContainer.className = "bot-message";
  const label = document.createElement("div");
  label.textContent = "Risk Score Visual:";
  const bar = document.createElement("div");
  bar.className = "risk-bar-container";
  const fill = document.createElement("div");
  fill.className = "risk-bar-fill";
  fill.style.width = `${(totalScore/21)*100}%`;
  fill.style.background = profile.emoji === "🟢" ? "#4CAF50" :
                         profile.emoji === "🟡" ? "#FFEB3B" :
                         profile.emoji === "🔴" ? "#F44336" : "#FF5722";
  bar.appendChild(fill);
  barContainer.appendChild(label);
  barContainer.appendChild(bar);
  messagesDiv.appendChild(barContainer);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
  // Restart button
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Quiz";
  restartBtn.addEventListener("click", ()=>{
    currentQuestion = 0;
    totalScore = 0;
    messagesDiv.innerHTML = "";
    showQuestion();
  });
  inputDiv.appendChild(restartBtn);
}


// Show tooltip after page loads
const tooltip = document.getElementById("chatbot-tooltip");
window.addEventListener("load", () => {
  setTimeout(() => {
    tooltip.classList.add("show");
  }, 500); // small delay
});
// Hide tooltip after 5 seconds automatically
setTimeout(() => {
  tooltip.classList.remove("show");
}, 5500);
// Optional: hide when user clicks it
tooltip.addEventListener("click", () => {
  tooltip.classList.remove("show");
});







//================for cookies section==============//


document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');
  const customizeBtn = document.getElementById('customize-cookies');
  const modal = document.getElementById('cookie-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const savePrefBtn = document.getElementById('save-preferences');
  const analyticsCb = document.getElementById('analytics-cb');
  const marketingCb = document.getElementById('marketing-cb');
  const functionalCb = document.getElementById('functional-cb');
  const footerLink = document.getElementById('footer-cookie-link');
  function enableScripts() {
    const prefs = JSON.parse(localStorage.getItem('cookiesPrefs')) || {};
    if (prefs.analytics) console.log("Analytics enabled");
    if (prefs.marketing) console.log("Marketing scripts enabled");
    // Functional scripts always run
  }
  // Show banner if no choice yet
  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => banner.classList.add('show'), 500);
  }
  // Accept all
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted','true');
    localStorage.setItem('cookiesPrefs', JSON.stringify({analytics:true, marketing:true, functional:true}));
    banner.classList.remove('show');
    enableScripts();
  });
  // Decline all
  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted','false');
    localStorage.setItem('cookiesPrefs', JSON.stringify({analytics:false, marketing:false, functional:true}));
    banner.classList.remove('show');
  });
  // Customize
  function openModal() {
    modal.style.display = 'flex';
    const prefs = JSON.parse(localStorage.getItem('cookiesPrefs')) || {};
    analyticsCb.checked = prefs.analytics || false;
    marketingCb.checked = prefs.marketing || false;
    functionalCb.checked = prefs.functional !== undefined ? prefs.functional : true;
  }
  customizeBtn.addEventListener('click', openModal);
  footerLink.addEventListener('click', openModal);
  // Close modal
  closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
  // Save preferences
  savePrefBtn.addEventListener('click', () => {
    const prefs = {
      analytics: analyticsCb.checked,
      marketing: marketingCb.checked,
      functional: functionalCb.checked
    };
    localStorage.setItem('cookiesAccepted','true');
    localStorage.setItem('cookiesPrefs', JSON.stringify(prefs));
    modal.style.display = 'none';
    banner.classList.remove('show');
    enableScripts();
  });
  enableScripts();
});



document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('save-preferences');
  const analyticsCb = document.getElementById('analytics-cb');
  const marketingCb = document.getElementById('marketing-cb');
  const functionalCb = document.getElementById('functional-cb');
   const banner = document.getElementById('cookie-banner');
  // Load previous preferences
  const prefs = JSON.parse(localStorage.getItem('cookiesPrefs')) || {};
  analyticsCb.checked = prefs.analytics ?? true;
  marketingCb.checked = prefs.marketing ?? true;
  functionalCb.checked = prefs.functional ?? true;
  // Save preferences
  saveBtn.addEventListener('click', () => {
    const newPrefs = {
      analytics: analyticsCb.checked,
      marketing: marketingCb.checked,
      functional: functionalCb.checked
    };
    localStorage.setItem('cookiesPrefs', JSON.stringify(newPrefs));
    localStorage.setItem('cookiesAccepted', 'true');
    alert('Preferences saved!');
    document.getElementById('cookie-modal').style.display = 'none';
     banner.classList.remove('show');
     banner.style.display="none";
  });
});