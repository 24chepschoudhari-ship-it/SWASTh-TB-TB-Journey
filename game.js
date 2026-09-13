const journeys={
patient:{name:"PATIENT",symbol:"P",desc:"patientDesc",scenes:[
{id:"start",tag:"DAY 1 • AT HOME",title:"The cough is not going away.",text:["You have had a persistent cough for several weeks. You are also feeling more tired than usual.","You do not know what is causing it."],choices:[
["Visit a clinic or healthcare facility.","You decide to seek professional medical evaluation instead of trying to diagnose yourself.","clinic"],
["Wait another week.","You postpone evaluation. The next scene begins one week later, with the symptoms still unresolved.","wait"],
["Ask someone at home what they think.","You get support, but nobody at home can establish what is causing the symptoms.","family"],
["Search online and try to work it out yourself.","You find many possible explanations, but an online search cannot establish whether you have TB.","online"]]},
{id:"wait",tag:"ONE WEEK LATER",title:"Still waiting.",text:["The cough is still there. You are more tired and wondering whether waiting helped.","Persistent cough can have many causes; symptoms alone cannot establish TB."],choices:[
["Go to a clinic now.","You decide that waiting has not answered the question and seek professional evaluation.","clinic"],
["Wait another week.","You continue to postpone evaluation. The story moves into a longer-delay path rather than sending you straight to testing.","delay2"],
["Ask a family member to come with you.","You turn the decision into a practical plan and get support for reaching care.","family"],
["Try to manage the symptoms yourself.","You still do not know the cause. Managing a symptom does not establish a diagnosis.","selfmanage"]]},
{id:"delay2",tag:"ANOTHER WEEK",title:"The uncertainty is becoming part of the problem.",text:["The cough has persisted and you still have no diagnosis.","Repeatedly postponing evaluation has not produced an answer."],choices:[
["Arrange a healthcare visit today.","You finally enter the healthcare pathway after a longer period of uncertainty.","clinic_delayed"],
["Ask someone to help arrange the visit.","A practical barrier is reduced, and you move toward care.","family_delayed"],
["Keep waiting because the symptoms are manageable.","You continue without an evaluation. The story now follows a prolonged-delay reflection.","reflection_delay"],
["Search for another home remedy.","Another remedy still cannot establish the cause of persistent symptoms.","reflection_delay"]]},
{id:"reflection_delay",tag:"PROLONGED DELAY",title:"Waiting has not provided an answer.",text:["You have spent more time uncertain about what is causing the symptoms.","The lesson here is not that a particular outcome is guaranteed; it is that delay can postpone the point at which appropriate evaluation begins."],choices:[
["Seek professional evaluation now.","You enter the healthcare pathway after the delay.","clinic_delayed"],
["Ask a family member to help with the visit.","Support helps you get back into the healthcare pathway.","family_delayed"],
["Keep ignoring the symptoms.","The diagnostic question remains unanswered. The game does not treat this as a safe alternative.","clinic_delayed"],
["Ask a healthcare professional what to do next.","You move toward appropriate evaluation.","clinic_delayed"]]},
{id:"family",tag:"AT HOME",title:"Getting support.",text:["A family member offers to accompany you to a healthcare facility.","Support can make care-seeking easier, but it does not replace clinical assessment."],choices:[
["Go together to a clinic.","You reach professional care with practical support.","clinic"],
["Ask them to decide whether you have TB.","They cannot diagnose TB from symptoms. You still need appropriate healthcare evaluation and testing.","clinic"],
["Postpone the visit again.","Support is available, but the diagnostic question remains unanswered.","wait"],
["Ask them to help with travel or timing.","You make a practical plan to reach care.","clinic"]]},
{id:"family_delayed",tag:"PRACTICAL SUPPORT",title:"You finally make a plan to reach care.",text:["Someone helps with travel, timing or accompaniment after the earlier delay.","You now have a clearer route to professional evaluation."],choices:[
["Go to the scheduled visit.","You enter the healthcare pathway.","clinic_delayed"],
["Ask what the next diagnostic step will be.","You arrive better prepared to discuss the evaluation.","clinic_delayed"],
["Cancel because the trip is inconvenient.","The practical barrier remains and the diagnostic pathway is postponed again.","reflection_delay"],
["Ask for another appropriate way to reach care.","You try to solve the access problem rather than abandoning evaluation.","clinic_delayed"]]},
{id:"online",tag:"ONLINE SEARCH",title:"Too many possible answers.",text:["You find information about infections, allergies, asthma and TB. Some pages disagree.","The search has not told you what is actually causing your symptoms."],choices:[
["Use the search results to self-diagnose.","Online information cannot establish a TB diagnosis.","selfmanage"],
["Choose an online medicine recommendation.","Treatment should not be selected from a symptom search alone.","selfmanage"],
["Use the information as a reason to seek professional advice.","You use the search as background, not as a diagnosis, and arrange evaluation.","clinic"],
["Close the search and keep waiting.","The uncertainty continues and evaluation is postponed.","wait"]]},
{id:"selfmanage",tag:"A FEW DAYS LATER",title:"The symptoms change, but the question remains.",text:["You tried to manage the symptoms yourself. They have changed, but you still do not know what is causing them.","A change in symptoms does not by itself confirm or rule out TB."],choices:[
["Arrange a medical evaluation.","You move into the healthcare pathway.","clinic"],
["Continue self-management and postpone evaluation.","The diagnostic question remains unanswered.","reflection_delay"],
["Ask a healthcare professional what to do next.","You seek appropriate guidance instead of trying to establish the diagnosis yourself.","clinic"],
["Ask someone at home whether the medicine worked.","Their experience cannot determine whether you have TB. You still need appropriate evaluation.","clinic"]]},
{id:"clinic",tag:"HEALTHCARE FACILITY",title:"The first clinical conversation.",text:["A healthcare professional asks about your symptoms and history and considers what evaluation is appropriate.","TB is one possible cause of prolonged cough, but symptoms alone do not confirm TB."],choices:[
["Answer the questions and follow the recommended evaluation.","You provide information needed for the next step.","testing"],
["Say that you already know it is TB.","The healthcare professional still needs appropriate evaluation and testing.","testing"],
["Leave before the evaluation is completed.","You interrupt the diagnostic pathway and create another delay.","leave"],
["Ask what testing may be needed and when to follow up.","You understand the pathway before moving ahead.","testing"]]},
{id:"clinic_delayed",tag:"HEALTHCARE FACILITY",title:"You have reached care after the delay.",text:["The healthcare professional assesses your symptoms and history.","The earlier delay does not determine the diagnosis; it means the evaluation is happening later than it might otherwise have begun."],choices:[
["Complete the recommended evaluation.","You move into the diagnostic pathway.","testing_delayed"],
["Ask what testing may be needed.","You clarify the next diagnostic step.","testing_delayed"],
["Leave because you waited long enough already.","The diagnostic pathway is interrupted again.","leave"],
["Ask when and how you should follow up.","You make the next step clearer.","testing_delayed"]]},
{id:"leave",tag:"MISSED EVALUATION",title:"You left before the question was answered.",text:["You are back home without a diagnosis.","The next decision is whether to return and complete the evaluation."],choices:[
["Return to the healthcare facility.","You re-enter the diagnostic pathway.","testing"],
["Ask someone to accompany you.","Practical support helps you return.","testing"],
["Keep waiting at home.","The diagnostic delay continues, and the question remains unanswered.","leave2"],
["Ask the facility how to continue the evaluation.","You reconnect with the healthcare pathway.","testing"]]},
{id:"leave2",tag:"MORE WAITING",title:"Still no answer.",text:["Online searches and waiting have not replaced a diagnostic evaluation.","You now have a clear choice about whether to reconnect with care."],choices:[
["Return for evaluation.","You re-enter the diagnostic pathway.","testing"],
["Ask for help getting to care.","Practical support helps you return.","testing"],
["Wait again.","The delay continues, without producing a diagnosis.","leave2"],
["Ask a healthcare professional what the next step should be.","You seek appropriate guidance.","testing"]]},
{id:"testing",tag:"DIAGNOSTIC PATHWAY",title:"Now the question becomes testable.",text:["The healthcare team decides what diagnostic evaluation is appropriate. WHO recommends rapid diagnostic tests as the initial diagnostic tests for people with signs and symptoms of TB.","The exact test and sample depend on the clinical situation and the available diagnostic pathway."],choices:[
["Provide the requested sample and follow the testing instructions.","The diagnostic process moves forward.","access"],
["Ask why the sample is needed.","You understand the procedure before proceeding.","access"],
["Refuse testing and leave.","The diagnostic question remains unanswered.","missedtest"],
["Ask when and how the result will be communicated.","You clarify the next part of the pathway.","access"]]},
{id:"testing_delayed",tag:"DIAGNOSTIC PATHWAY",title:"The same diagnostic question, reached later.",text:["You are now at the testing stage after a longer period of uncertainty.","The appropriate test and sample depend on the clinical situation and available diagnostic pathway."],choices:[
["Provide the requested sample and follow the instructions.","The diagnostic process moves forward.","access_delayed"],
["Ask what the sample is being tested for.","You understand the purpose of the next step.","access_delayed"],
["Leave before testing.","The diagnostic question remains unresolved.","missedtest"],
["Ask how the result will be communicated.","You clarify follow-up before leaving.","access_delayed"]]},
{id:"missedtest",tag:"MISSED TESTING",title:"The test did not happen.",text:["You left without completing the recommended diagnostic step.","Without appropriate assessment and testing, you still do not have an answer."],choices:[
["Return and complete the recommended testing.","You reconnect with the diagnostic pathway.","access"],
["Ask someone to help with the practical arrangements.","Support helps you complete the pathway.","access"],
["Wait until symptoms decide what happens.","Symptoms alone cannot establish the diagnosis.","missedtest"],
["Ask the healthcare facility how to reschedule.","You reconnect with the diagnostic pathway.","access"]]},
{id:"access",tag:"ACCESS & TURNAROUND",title:"The answer may not be available here.",text:["The relevant testing service may require referral or transport of a sample. Availability and turnaround can vary by setting.","A delayed result is not the same as a negative result."],choices:[
["Follow the referral process and ask when to expect the result.","You stay connected to the diagnostic pathway.","follow"],
["Return home without arranging follow-up.","You risk losing track of the result pathway.","lostfollow"],
["Ask whether an appropriate testing option is available through another facility.","You identify an access question without assuming that any one test fits every setting.","follow"],
["Ask a family member to help with travel or logistics.","Practical support helps you complete the referral pathway.","follow"]]},
{id:"access_delayed",tag:"ACCESS & TURNAROUND",title:"Access matters after testing too.",text:["The sample may need referral or transport. The earlier delay has already lengthened the overall journey, so clear follow-up matters.","A delayed result is not the same as a negative result."],choices:[
["Follow the referral process and ask when to expect the result.","You keep the result pathway clear.","follow_delayed"],
["Leave without arranging follow-up.","You risk another gap in the pathway.","lostfollow"],
["Ask whether an appropriate testing option is available elsewhere.","You identify a practical access issue.","follow_delayed"],
["Ask someone to help with transport or communication.","Practical support helps complete the pathway.","follow_delayed"]]},
{id:"lostfollow",tag:"RESULT FOLLOW-UP",title:"You are not sure what happened to the result.",text:["You do not know whether the sample was processed or when a result should be available.","A missing result is not the same as a negative result."],choices:[
["Contact the healthcare facility through the advised route.","You reconnect with the result pathway.","follow"],
["Ask a family member to help contact the facility.","Practical support helps with follow-up.","follow"],
["Assume no call means a negative result.","That assumption is not justified; you still need the actual result through the healthcare pathway.","follow"],
["Go back and ask what happened to the sample.","You seek clarification through the appropriate pathway.","follow"]]},
{id:"follow",tag:"FOLLOW-UP",title:"The diagnostic journey has shown you the gap.",text:["You have seen how care-seeking, testing, access and turnaround all affect the route to an answer.","That leads to a research question: how could biological sensing be engineered to address some practical diagnostic barriers?"],choices:[
["Explore the SWASTh-TB biological design.","You move into the proposed sensing strategy.","bio"],
["Think about what a point-of-care diagnostic would need.","You connect the real-world pathway to diagnostic design requirements.","bio"],
["Focus only on making a test cheaper.","Affordability matters, but a useful diagnostic also needs appropriate performance and a workable setting.","bio"],
["Focus only on making a result faster.","Speed matters, but it cannot replace appropriate diagnostic performance.","bio"]]},
{id:"follow_delayed",tag:"FOLLOW-UP",title:"The longer route makes the design problem clearer.",text:["You have reached the same point in the diagnostic pathway, but after more uncertainty and delay.","A useful new diagnostic would need to consider the biological signal as well as access, turnaround, portability and practical use."],choices:[
["Explore the SWASTh-TB biological design.","You move into the proposed sensing strategy.","bio"],
["Ask what a point-of-care diagnostic would need.","You connect the lived pathway to engineering requirements.","bio"],
["Focus only on cost.","Cost is important, but it is not enough by itself.","bio"],
["Focus only on speed.","Speed is important, but it is not enough by itself.","bio"]]}
]},
worker:{name:"HEALTHCARE WORKER",symbol:"H",desc:"workerDesc",scenes:[
{id:"start",tag:"FIRST CONTACT",title:"A patient arrives with persistent symptoms.",text:["The patient has a prolonged cough and is worried about TB.","Your role is not to diagnose from symptoms alone; assess the situation and follow the appropriate diagnostic pathway."],choices:[
["Take a focused history and assess the patient.","You gather information needed for the next decision.","assess"],
["Tell the patient it is definitely TB.","You give certainty that symptoms alone cannot provide.","mislead"],
["Tell the patient to return only if symptoms become severe.","The diagnostic evaluation is postponed.","delay"],
["Explain that the next step depends on assessment and appropriate testing.","You set a clear expectation without overpromising a diagnosis.","assess"]]},
{id:"mislead",tag:"COMMUNICATION",title:"The label came too early.",text:["You realize that prolonged cough can have several causes and that symptoms alone cannot establish TB.","The next step is to return to appropriate assessment and testing."],choices:[
["Clarify that assessment and testing are needed.","You correct the message and continue appropriately.","assess"],
["Continue calling it TB without testing.","The patient may be misled and the diagnostic process remains incomplete.","mislead2"],
["Ask about symptoms and history.","You return to clinical assessment.","assess"],
["Explain that rapid diagnostic tests are recommended as initial tests for people with signs and symptoms of TB.","You connect the consultation to the diagnostic pathway.","testplan"]]},
{id:"mislead2",tag:"WRONG ASSUMPTION",title:"A label is not a confirmed diagnosis.",text:["Calling a condition TB does not make it confirmed TB.","Appropriate testing is important because clinical features alone may not be specific enough."],choices:[
["Return to assessment and arrange appropriate testing.","You correct the pathway.","testplan"],
["Keep waiting for symptoms to confirm the label.","The patient remains without an appropriate diagnostic answer.","delay2"],
["Explain why testing matters.","The patient receives a clearer explanation.","testplan"],
["Refer according to the established diagnostic pathway.","You move the patient toward appropriate testing.","testplan"]]},
{id:"delay",tag:"DELAYED EVALUATION",title:"The patient leaves without a clear plan.",text:["A prolonged cough has not been evaluated yet.","The next step is to reconnect the patient with appropriate care."],choices:[
["Invite the patient back for assessment.","You reopen the diagnostic pathway.","assess"],
["Tell them to wait longer.","The delay continues.","delay2"],
["Explain why evaluation is appropriate.","You provide a clear reason to return.","assess"],
["Arrange the next appropriate evaluation pathway.","You reduce an avoidable delay.","assess"]]},
{id:"delay2",tag:"MORE DELAY",title:"The patient is still waiting.",text:["The patient returns later, still without an answer.","Delays can make timely diagnosis harder."],choices:[
["Assess the patient and arrange appropriate testing.","You move into the diagnostic pathway.","testplan"],
["Ask the patient to wait again.","The diagnostic delay continues.","delay2"],
["Explain the testing pathway.","You make the next step clear.","testplan"],
["Use the established referral pathway if local testing is unavailable.","You address an access barrier.","access"]]},
{id:"assess",tag:"ASSESSMENT",title:"What happens next?",text:["You have gathered the relevant clinical information.","The next step is to use the appropriate diagnostic pathway for the situation."],choices:[
["Arrange the appropriate recommended diagnostic test.","You move from assessment to testing.","testplan"],
["Choose a test only because it is cheap.","Low cost alone does not establish suitability.","poorchoice"],
["Choose a test only because it is fast.","Speed alone does not establish suitability or performance.","poorchoice"],
["Explain the options and expected next steps to the patient.","You combine the diagnostic pathway with clear communication.","testplan"]]},
{id:"poorchoice",tag:"DESIGN REALITY",title:"One metric is not enough.",text:["A useful TB diagnostic needs appropriate performance and must fit the clinical and operational setting.","Cost and speed matter, but neither replaces diagnostic validity."],choices:[
["Return to the appropriate diagnostic pathway.","You select testing based on clinical context and applicable guidance.","testplan"],
["Choose another test based only on speed.","The same problem remains.","poorchoice"],
["Choose another test based only on cost.","The same problem remains.","poorchoice"],
["Ask what would make a test practical at the point of care.","You turn the workflow problem into a design question.","design"]]},
{id:"testplan",tag:"DIAGNOSTIC PATHWAY",title:"The patient needs an appropriate test.",text:["WHO recommends rapid diagnostic tests as the initial diagnostic tests for people with signs and symptoms of TB.","The exact test and sample depend on the patient and the applicable diagnostic pathway."],choices:[
["Arrange the appropriate test and sample collection.","The diagnostic pathway proceeds.","access"],
["Explain the sample and what happens next.","The patient knows what to expect.","access"],
["Skip testing because the symptoms look typical.","Symptoms alone do not establish TB.","missed"],
["Ask whether testing is available locally or requires referral.","You identify an operational constraint.","access"]]},
{id:"missed",tag:"MISSED TESTING",title:"Testing was skipped.",text:["The patient leaves without the recommended diagnostic step.","The clinical question remains unresolved."],choices:[
["Reconnect the patient with the testing pathway.","You return to appropriate diagnosis.","access"],
["Explain why testing matters.","You address the reason for the missed step.","access"],
["Wait until symptoms become severe.","The diagnostic delay continues.","missed"],
["Use the established referral pathway if local testing is unavailable.","You address access instead of abandoning testing.","access"]]},
{id:"access",tag:"ACCESS & TURNAROUND",title:"The test is not available at this facility.",text:["Referral, sample transport and turnaround can become part of the diagnostic workflow.","The patient needs a clear plan for what happens next."],choices:[
["Arrange referral through the established pathway.","The sample moves toward the appropriate testing service.","follow"],
["Tell the patient to find any laboratory independently.","The pathway becomes less coordinated.","lost"],
["Check whether an appropriate testing service is available elsewhere.","You identify a practical route to testing.","follow"],
["Explain when and how the result will be communicated.","You make follow-up part of the workflow.","follow"]]},
{id:"lost",tag:"FOLLOW-UP RISK",title:"The referral is not clearly coordinated.",text:["The patient has uncertainty about where the sample is going and how the result will return.","A diagnostic pathway needs clear coordination."],choices:[
["Reconnect the patient with the established referral pathway.","You restore coordination.","follow"],
["Tell them to wait without a follow-up plan.","The result pathway becomes uncertain.","lost"],
["Contact the relevant service through the established process.","You clarify the status of the referral.","follow"],
["Explain the expected follow-up route.","The patient knows what to do next.","follow"]]},
{id:"follow",tag:"TURNAROUND & FOLLOW-UP",title:"The diagnostic pathway needs closure.",text:["The result must be communicated and acted on through the appropriate clinical pathway.","This experience raises a design question: can some barriers to accessible detection be reduced without compromising reliability?"],choices:[
["Explore SWASTh-TB as a proposed biological sensing approach.","You move into the biology section.","bio"],
["Ask what a point-of-care diagnostic would need to fit this workflow.","You connect the operational problem to engineering requirements.","bio"],
["Focus only on lowering equipment cost.","Cost is important, but it cannot replace appropriate performance.","bio"],
["Focus only on making the signal visible.","A visible signal still requires validation and an appropriate diagnostic workflow.","bio"]]},
{id:"design",tag:"DESIGN QUESTION",title:"The workflow becomes a design problem.",text:["You have identified that a diagnostic has to fit the setting in which it will actually be used.","That includes biological performance as well as practical constraints."],choices:[
["Explore SWASTh-TB.","You move into the proposed sensing strategy.","bio"],
["Think about portability and simple readout.","You connect the workflow requirement to diagnostic design.","bio"],
["Think only about cost.","Cost is important, but it is not the whole design problem.","bio"],
["Think about how a biological signal could be converted into an observable output.","You arrive at the core synthetic-biology question.","bio"]]}
]},
community:{name:"FAMILY / COMMUNITY",symbol:"C",desc:"communityDesc",scenes:[
{id:"start",tag:"AT HOME",title:"Someone close to you has a persistent cough.",text:["You want to help, but you do not know what is causing it.","TB can cause prolonged cough and other symptoms, but symptoms do not confirm TB."],choices:[
["Encourage them to seek medical advice.","You support an appropriate next step without trying to diagnose them.","care"],
["Tell everyone it is probably TB.","You create fear and stigma without a confirmed diagnosis.","stigma"],
["Tell them to ignore it for now.","The person may delay appropriate evaluation.","delay"],
["Offer to accompany them to a healthcare facility.","You turn concern into practical support.","care"]]},
{id:"stigma",tag:"COMMUNITY TALK",title:"People start making assumptions.",text:["Neighbours and relatives are asking what is wrong.","The person has not received a diagnosis, so speculation can cause unnecessary stigma."],choices:[
["Keep the person's health information private.","You avoid spreading an unconfirmed diagnosis.","privacy"],
["Tell everyone the person has TB.","You spread an unconfirmed diagnosis and may increase stigma.","stigma2"],
["Ask the person what they are comfortable sharing.","You keep the person involved in decisions about their information.","privacy"],
["Encourage people to avoid gossip and support the person seeking care.","You shift the conversation from speculation to support.","care"]]},
{id:"stigma2",tag:"STIGMA",title:"A rumour is not a diagnosis.",text:["The person is now being treated differently because others assume they have TB.","TB requires appropriate medical assessment; stigma can make it harder for people to seek care."],choices:[
["Correct the rumour and encourage appropriate medical care.","You reduce misinformation and support care-seeking.","privacy"],
["Keep repeating the rumour.","The stigma grows without adding useful information.","stigma2"],
["Ask the person what support they need.","You focus on the person's needs rather than assumptions.","care"],
["Explain that symptoms alone do not confirm TB.","You replace speculation with accurate information.","privacy"]]},
{id:"delay",tag:"DELAYED CARE",title:"The person keeps putting off the visit.",text:["Travel, time, fear or uncertainty can become barriers to seeking care.","You cannot diagnose the cause at home, but you can help with the practical next step."],choices:[
["Offer to help arrange a visit.","You reduce a practical barrier to care.","care"],
["Tell them to wait until the cough becomes severe.","The delay continues.","delay2"],
["Help with transport or scheduling.","You turn support into a concrete action.","care"],
["Search for home remedies instead of arranging care.","Home remedies do not establish the cause of persistent symptoms.","delay2"]]},
{id:"delay2",tag:"MORE DELAY",title:"Still no evaluation.",text:["The person is still unwell and the cause remains unknown.","Persistent symptoms should not be treated as a diagnosis; appropriate healthcare evaluation is still the next step."],choices:[
["Help arrange a healthcare visit.","You reduce a practical barrier.","care"],
["Tell them to wait again.","The delay continues.","delay2"],
["Ask what is making the visit difficult.","You identify a practical barrier that may be addressable.","care"],
["Offer to accompany them.","You provide practical support for seeking care.","care"]]},
{id:"privacy",tag:"SUPPORT",title:"Support without taking over.",text:["The person is considering medical evaluation.","Your role is to support them while respecting privacy and leaving diagnosis to healthcare professionals."],choices:[
["Offer to accompany them if they want.","You provide practical support without taking over.","care"],
["Tell them what diagnosis they have.","You cannot establish a diagnosis for them.","care"],
["Ask what would make it easier to reach care.","You identify a practical barrier.","care"],
["Respect their decision about who to tell.","You protect privacy while keeping support available.","care"]]},
{id:"care",tag:"GETTING TO CARE",title:"The person reaches a healthcare facility.",text:["A healthcare professional can assess the symptoms and decide what diagnostic evaluation is appropriate.","If TB is suspected, testing is needed; symptoms alone are not enough to confirm it."],choices:[
["Help them understand the next steps and follow-up.","You support the healthcare pathway.","testing"],
["Ask the clinician what information the family should understand.","You get accurate information from the appropriate source.","testing"],
["Tell the person to skip testing if they feel better.","Feeling better does not establish whether TB is present.","missed"],
["Help with travel, timing or communication.","You reduce practical barriers while leaving clinical decisions to the healthcare team.","testing"]]},
{id:"missed",tag:"MISSED TESTING",title:"The recommended test was not completed.",text:["The diagnostic question remains unanswered.","Family support can help the person reconnect with the healthcare pathway."],choices:[
["Offer to help them return for the recommended testing.","You help close the gap between care-seeking and diagnosis.","testing"],
["Tell them to wait until symptoms worsen.","The delay continues.","missed"],
["Ask the facility how to continue the diagnostic pathway.","You reconnect with appropriate care.","testing"],
["Help arrange transport or timing.","You address a practical barrier.","testing"]]},
{id:"testing",tag:"DIAGNOSTIC PATHWAY",title:"The family sees the diagnostic process up close.",text:["The healthcare team decides what test and sample are appropriate. WHO recommends rapid diagnostic tests as initial tests for people with signs and symptoms of TB.","Your role is support, not diagnosis."],choices:[
["Ask when and how the result will be communicated.","You understand the follow-up plan.","follow"],
["Help the person with practical arrangements.","You make it easier to complete the pathway.","follow"],
["Assume the result from the symptoms.","Symptoms do not confirm TB.","follow"],
["Ask whether the test is available locally or through referral.","You understand an access issue that may affect the pathway.","follow"]]},
{id:"follow",tag:"FOLLOW-UP",title:"The result is still part of the journey.",text:["You now understand that getting an answer involves more than recognizing symptoms.","This connects directly to the question behind SWASTh-TB: how can diagnostic approaches be designed to fit real-world needs?"],choices:[
["Explore SWASTh-TB and the biology behind it.","You move into the proposed sensing strategy.","bio"],
["Think about what would make testing easier to access.","You connect community barriers to diagnostic design.","bio"],
["Focus only on making the test cheap.","Affordability matters, but it is only one part of a useful diagnostic.","bio"],
["Focus only on making the result fast.","Speed matters, but appropriate performance and validation still matter.","bio"]]}
]}};

const bio=[
["TARGET","PstS-1","PstS-1 is the target antigen in the proposed sensing strategy."],
["RECOGNITION","C8Nb","C8Nb, the C8 nanobody, provides the recognition component in the proposed architecture."],
["FRAMEWORK","TAZ / Tar-EnvZ","The TAZ / Tar-EnvZ framework connects the recognition event to downstream cellular signalling."],
["RESPONSE","Two-component signalling","The two-component histidine kinase / OmpR system provides the signalling step that converts upstream sensing into a downstream response."],
["REPORTER","LacZ","LacZ (β-galactosidase) is the reporter that can act on the chromogenic substrate X-gal."],
["READOUT","X-gal → BLUE","X-gal is the chromogenic substrate; β-galactosidase activity produces the visible blue product."]
];

let lang=localStorage.getItem("swasthtb_lang")||"en",role=null,scene=0,bioStage=0;
const done=new Set();
function t(k){return (I18N[lang]||I18N.en)[k]??I18N.en[k]??k}
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));document.getElementById(id).classList.add("active");scrollTo(0,0)}
function goHome(){show("home")}
function openRoles(){document.getElementById("count").textContent=done.size;show("roles")}
function renderRoleText(){document.querySelectorAll(".role").forEach(b=>{const key=b.dataset.role;b.querySelector("strong").textContent=t(key);b.querySelector("p").textContent=t(key+"Desc");b.querySelector("em").textContent=t("enter")})}
function startRole(k){role=journeys[k];scene=0;show("journey");renderScene()}
function renderScene(){const s=role.scenes[scene];document.getElementById("roleLabel").textContent=role.name;document.getElementById("sceneLabel").textContent=`${scene+1} / ${role.scenes.length}`;document.getElementById("progress").style.width=`${((scene+1)/role.scenes.length)*100}%`;document.getElementById("roleSymbol").textContent=role.symbol;document.getElementById("sideRole").textContent=t(role.name==="PATIENT"?"patient":role.name==="HEALTHCARE WORKER"?"worker":"community");document.getElementById("sideDescription").textContent=t(role.desc);document.getElementById("tag").textContent=s.tag;document.getElementById("sceneTitle").textContent=s.title;document.getElementById("sceneText").innerHTML=s.text.map(x=>`<p>${x}</p>`).join("");const list=document.getElementById("choices");list.innerHTML="";document.getElementById("feedback").classList.add("hidden");s.choices.forEach((c,i)=>{const btn=document.createElement("button");btn.className="choice";btn.textContent=`${String.fromCharCode(65+i)}. ${c[0]}`;btn.onclick=()=>choose(i);list.appendChild(btn)})}
function choose(i){document.querySelectorAll(".choice").forEach(x=>x.disabled=true);const c=role.scenes[scene].choices[i];document.getElementById("feedbackText").textContent=c[1];document.getElementById("feedback").classList.remove("hidden");const b=document.getElementById("continue");b.textContent=c[2]==="bio"?"EXPLORE SWASTh-TB →":t("continue");b.onclick=()=>goTo(c[2])}
function goTo(id){if(id==="bio"){show("biology");bioStage=0;renderBioUI();return}const idx=role.scenes.findIndex(s=>s.id===id);if(idx<0){finishRole();return}scene=idx;renderScene()}
function finishRole(){done.add(role.name);openRoles()}
function renderText(){document.documentElement.lang=lang;document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));document.getElementById("language").value=lang;renderRoleText();renderBioUI()}
function startBiology(){bioStage=0;show("biology");renderBioUI()}
function renderBioUI(){const chain=document.getElementById("bioChain");if(!chain)return;chain.innerHTML="";bio.forEach((x,i)=>{const d=document.createElement("div");d.className="bio-node "+(i<bioStage?"done ":"")+(i===bioStage?"active":"");d.innerHTML=`<b>${x[1]}</b><small>${x[0]}</small>`;chain.appendChild(d)});if(bioStage>=bio.length){document.getElementById("bioCard").classList.add("hidden");document.getElementById("bioEnd").classList.remove("hidden");return}document.getElementById("bioCard").classList.remove("hidden");document.getElementById("bioEnd").classList.add("hidden");document.getElementById("bioType").textContent=bio[bioStage][0];document.getElementById("bioName").textContent=bio[bioStage][1];document.getElementById("bioText").textContent=bio[bioStage][2];document.getElementById("bioNext").textContent=bioStage===bio.length-1?"SEE BLUE →":t("next")}
document.getElementById("language").onchange=e=>{lang=e.target.value;localStorage.setItem("swasthtb_lang",lang);renderText();if(document.getElementById("journey").classList.contains("active")&&role)renderScene()};
document.getElementById("homeBtn").onclick=goHome;document.getElementById("startBtn").onclick=openRoles;document.getElementById("aboutBtn").onclick=()=>show("about");document.getElementById("aboutBack").onclick=goHome;document.getElementById("rolesBack").onclick=goHome;document.getElementById("journeyBack").onclick=openRoles;document.getElementById("bioBack").onclick=openRoles;document.getElementById("biologyBtn").onclick=startBiology;document.getElementById("bioNext").onclick=()=>{bioStage++;renderBioUI()};document.querySelectorAll(".role").forEach(b=>b.onclick=()=>startRole(b.dataset.role));
renderText();
