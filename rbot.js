const utterances = [
  ["hi!","hey","Heya","Hey","hello","Hello","HELLO","hi bot"],
  ["how are you","what's up"],
  ["bye"],
  ["who are you","what is your role","what do you work","what can you do"],
  ["what is your name"],
  ["how can I get guidelines or alerts in case of any disaster"],
  ["how can I get numbers of any professionals","how can I get help","how can you help"],
  ["Can i volunteer in case of any disaster","can i help you"],
  ["can I know more about this"],
  ["what knowledge do you have"],
  ["who developed you","who made you","who created you"],
  ["what are you doing","what are you upto"],
  ["Thanks","THANKS","thank you","thanks"],
  ["yes","yeah","happy","good","well"],
  ["Are you human","Are you a robot?"],
  ["which languages can you speak?"],
  ["where do you live?"],
  ["are you expensive?"],
  ["I need help","i need help","earthquake is taking place","We need help","send help","help earthquake"],
  ["what should I do till they come?","what shall I do now?","what to do now","what to do incase of earthquake","earthquake","disaster management for earthquake"],
  ["we are stuck here, most of us need water and shelter for now"],
  ["I need help","i need help","My area is starting to get flooded","We need help","send help","help flood","flood","what to do incase of floods","flood disaster management"],
  ["what should I do till they come?","what shall I do now?","what to do now"],
  ["we are stuck here, most of us need water and shelter for now"],
  ["I need to report a fire","fire","fire out","what to do incase of fire outbreak"],
  ["no","No"],
  ["no it is a brushfire","brushfire","Brushfire"],
  ["yes it is a house fire","house fire","yes it is"],
  ["landslide","there's a landslide near me","theres a landslide near me","landslide near me","what to do incase of landslide"],
  ["what can be done to prevent landslides in future"],
  ["what can be done in case of animal attacks","what to do incase of animal attack"],
  ["what to do after an animal attack","animal attack"],
  ["emergency contact numbers","emergency"],
  ["What is meant by disaster","disaster","disasters"],
  ["common disasters"],
  ["major disasters in India"],
  ["purpose of disaster management"],
  ["helpline"],
  ["why is disaster management important","importance of disaster management"]
  ];
  
const answers = [
  ["hi! How can I help you","Hey, How can I help you","Heya, How can I help you","Hey,How can I help you","Hello, How can I help you"],
  ["I'm good.How are you? Hope you are safe"],
  ["Bye,stay safe"],
  ["We are Tragic-Fighters - a disaster management service.We train and guide people about disaster management and provide them necessary help and information in case any disaster takes place at any location."],
  ["I'm a robot.You may call me Aapka Sahayak"],
  ["We have a location tracking feature for our users and in case if any calamity takes place around that location, then all the users residing around that area are notified immediately."],
  ["You may find helpline and contact details of our professionals around your area and they'll reach to you immediately incase of any emergency."],
  ["Yes, you may volunteer for other people's safety if you are safe in the first place. Thank You"],
  ["Yeah sure, You may visit our website for more details"],
  ["Well, I can guide you on disaster management on disasters such as floods, earthquake, landslide, fire destruction, animal attacks, you may also contact Helpline for any emergency."],
  ["I was developed by Binary Brains."],
  ["I am here to help you incase of any emergency. Your safety is my priority"],
  ["Your most welcome"],
  ["Good to hear that"],
  ["I am a robot!"],
  ["I speak English."],
  ["I live right here on web"],
  ["No, I am not..chill"],
  ["May you please provide us ur exact location so that it become easy for us to reach u? Till then come out of your houses and gather on an open ground nearby to avoid any injuries."],
  ["We request you to please check yourself and others for injury and provide first aid for anyone who needs it. Follow these steps:\n 1)Please keep torch,drinking water,important medicines near u. 2)Please stay out of damaged buildings. 3)Please disconnect all the electrical appliances. 4)Please check water, gas, and electric lines for damage. If any are damaged, shut off the valves. Check for the smell of gas. If you smell it, open all the windows and doors, leave immediately, and report it to the authorities (use someone else's phone). 5)Call.... in case of emergency (helpline number) 6)Turn on the radio. Don't use the phone unless it's an emergency. 7)Stay away from beaches. Tsunamis and seiches sometimes hit after the ground has stopped shaking. 8) Please stay away from damaged areas. 9)If you're at school or work, follow the emergency plan or the instructions of the person in charge. 10)We will try providing you food and basic necessitites. 11)Please STAY SAFE we will reach to u soon!!"],
  ["We will try providing you food and basic necessitites. Please STAY SAFE we will reach to u soon!!"],
  ["May you please provide us ur exact location so that it become easy for us to reach u?We request you to please stay indoors our volunteers will reach to u shortly"],
  ["1.Please keep torch,drinking water,important medicines near you. 2)Please disconnect all the electrical appliances. 3)Avoid enetering floodwaters or driving through flooded areas. 4)Call 9586314278 in case of emergency (helpline number), 5)Shift to higher floor in your building or houses."],
  ["We will try providing you food and basic necessitites. Please STAY SAFE we will reach to u soon!!"],
  ["Where is the fire? Is it a house fire? Is everyone safe?."],
  ["okay"],
  ["Brushfires can be very dangerous. Tell everyone to stay as far away from the smoke and flames as possible. Fire-Fighters are on their way."],
  ["Okay, do not Panic..1. Get the Fire Extinguisher. 2. Communicate With Others about Fire Break-out.Inform others in the house of the fire situation by screaming out loud. 3. Call the Fire Department Number - 101. 4. Leave Valuables behind.Never delay finding the best possible escape route from a burning house to find valuables when in a fire. 5. Stop, Drop and Roll.If your clothing catches fire, do not run; simply drop to the floor and roll over your back to extinguish the fire. 6. Cover Your Nostril.Cover your nostril with a shirt or a damp towel during a house fire this will prevent smoke from entering your lungs. 8. Once Out, Do not Enter Burning House.Once you escape from the fire in the house, stay out. "],
  ["Remember that driving during an intense storm can be hazardous. If you remain at home, move to a second story if possible. Staying out of the path of a landslide or debris flow saves lives. Don’t return to the area where a landslide happened until authorities tell you it’s safe. These areas are more likely to experience a slide again immediately after an event. Flooding is also more likely, so seek shelter on higher ground. Listen to emergency broadcasts and pay attention to authorities. Focus on helping your neighbors and family as much as you can, but don’t get in the way of emergency professionals. Stay alert and awake. Many debris-flow fatalities occur when people are sleeping. Listen to a NOAA Weather Radio or portable, battery-powered radio or television for warnings of intense rainfall. Be aware that intense, short bursts of rain may be particularly dangerous, especially after longer periods of heavy rainfall and damp weather.If you or a loved one are injured in a landslide, it’s important to know where the nearest emergency department is located. Our emergency care teams are ready to help you."],
  ["Replant the land that’s moved as quickly as possible to help prevent erosion and future events. A geotechnical expert can give you landscaping advice to reduce your land’s risk for landslides."],
  ["Before getting into specifics, let me say that the best way to avoid problems with wildlife is to use common sense. Be aware of what’s around you, what kind of animals you are likely to encounter, and the danger they pose. Avoidance is the best defense, so keep your distance."],
  ["Victim must be taken to hospital immediately.When you contact the police,be clear that the bite victim needs immediate medical care so the dispatcher can call ambulance.Make sure the attack has been reported.Police can come to the scene if the any animal is out of control and is likely to hurt others"],
  ["100 should be dialled for Police control room. (b) 101 should be dialled for Fire brigade. (c) 102 should be dialled for Ambulance. (d) 108 should be dialled for National level single emergency number for disaster relief."],
  ["A sudden happening that causes enormous damage to life, property and social aspects of a nation or society is called a disaster."],
  ["earthquakes, floods, cyclones, landslides, animal attacks, droughts, accidents,and forest fires."],
  ["Some of the major natural disasters faced by India during this century are: The Gujarat earthquake (2001), the Mumbai-Gujarat floods (2005), the tsunami (2004), the Uttarakhand flash-floods and the hurricane Phailin in coastal Orissa and Andhra Pradesh (2013)."],
  ["The purpose of disaster management is to reduce the destructive impact of disasters. It is not possible to prevent or avert many of these disasters but with proper disaster management, we can definitely reduce the deaths and damages caused by them."],
  ["Please contact our professional for any emergency. Contact no: 9875632141 ; Helpline: 222013697"],
  ["Disaster management plays an integral role in keeping communities safe. It involves coordinating the resources, such as pollution control systems, and responsibilities, such as following best practice policies, needed to prevent, prepare for, respond to, and recover from emergencies."]
];
const alternatives = [
  "I am unable to process. PLEASE contact helpline in case of emergency. Helpline: 3056978241",
  "Sorry, I cannot understand. Please contact our professional for any emergency. Contact no: 9875632141 ; Helpline: 2220136974"
];
const messagerForm = get(".messager-inbox");
const messagerInput = get(".messager-input");
const messagerChat = get(".messager-forchat");
const logo_img = "tragicnewlogo.png";
const logo_name = "Bot";
const me_img = "person.jpg";
const me_name = "Me";
const robot = ["How do you do, fellow human", "I am not a bot"];

function compare(utterancesArray, answersArray, string) {
  let item;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let answers = answersArray[x];
        item = answers[Math.floor(Math.random() * answers.length)];
      }
    }
  }
  return item;
}
messagerForm.addEventListener("submit", event => 
{
  event.preventDefault();
  const msgText = messagerInput.value;
  if (!msgText) return;
  messagerInput.value = "";
  addChat(me_name, me_img, "right", msgText);
  output(msgText);
});
function get(selector, root = document) {
  return root.querySelector(selector);
}
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")  
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/there/g, "there is")
    .replace(/r u/g, "are you");
  if (compare(utterances, answers, text)) {
    product = compare(utterances, answers, text);
  }
   else 
   {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }
  const delay = input.split(" ").length * 100;
  setTimeout(() => {
    addChat(logo_name, logo_img, "left", product);
  }, delay);
}
function addChat(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
    <div class="msg-pic" style="background-image: url(${img})"></div>
    <div class="msg-box">
    <div class="msg-maintitle">
    <div class="msg-maintitle-name">${name}</div>
    <div class="msg-info-time">${formatDate(new Date())}</div></div>
    <div class="msg-pop">${text}</div>
    </div>
    </div>
  `;
  messagerChat.insertAdjacentHTML("beforeend", msgHTML);
  messagerChat.scrollTop += 500;
}
