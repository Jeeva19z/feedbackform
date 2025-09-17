document.addEventListener("DOMContentLoaded", () => {
  // --- DOM refs ---
  const form = document.getElementById("feedbackForm");
  const submitBtn = document.getElementById("submitBtn");
  const reviewSection = document.getElementById("reviews-section");
  const criteriaBody = document.getElementById("criteria-body");
  const anonToggle = document.getElementById("anonymous");
  const namedBlock = document.getElementById("namedBlock") || document.querySelector(".toggle-form");
  const usernameInput = document.getElementById("username");
  const okMsg = document.getElementById("okMsg");
  const errMsg = document.getElementById("errMsg");
  const thanksModal = document.getElementById("thanksModal");
  const thanksOkBtn = document.getElementById("thanksOkBtn");

  const deptChips = document.querySelectorAll('#departments .chip');
  const managerCard = document.getElementById("manager-card");
  const managerSection = document.getElementById('managerSection');
  const managerContainer = document.getElementById('managers');
  const hiddenDept = document.getElementById('selectedDept');
  const hiddenManager = document.getElementById('selectedManager');

  // --- Static managers map ---
const managersData = {
  "Business Analyst": [
    "Farook N IN2001",
    "Ragul V IN2808",
    "Subramanian Gopalaratnam SG1012"
  ],
  "Campaign Management": [
    "Farook N IN2001",
    "Karthikeyan Jayaram IN3108",
    "Kishore D IN2691",
    "Manigandan K IN2653",
    "Subramanian Gopalaratnam SG1012"
  ],
  "Camstats": ["Ramesh V IN2474"],
  "Cloud Infrastructure": [
    "Radhika Sundaram IN1999",
    "Santhakumar M S IN2004"
  ],
  "Compliance": [
    "Mahesh D IN3001",
    "Vandana Prabhakaran SG1003"
  ],
  "Creative": [
    "Rambacthavachalam Dhakshinamoorthy IN2000",
    "Selva Muthu Kumar C IN2421"
  ],
  "Customer Assist": [
    "Raghuram Sridharan IN2811",
    "Ram Kumar P S IN2784",
    "Subramanian Gopalaratnam SG1012"
  ],
  "Customer Success": [
    "Farook N IN2001",
    "Sanjay Tarafdar IN2510",
    "Subramanian Gopalaratnam SG1012"
  ],
  "Data Science": [
    "Mohamed Kani IN2574",
    "Sankaranarayanan S IN2089",
    "Shanthakumar V K C IN2003"
  ],
  "Database": [
    "Manikandan A IN2405",
    "Sankaranarayanan S IN2089",
    "Shanthakumar V K C IN2003"
  ],
  "DevOps": ["Santhakumar M S IN2004"],
  "Dot Net": [
    "Balachandran S IN2536",
    "Buvaneswaran P IN2409",
    "Karthik E IN2395",
    "Karthikeyan P IN2343",
    "Muthukaruppan M IN2508",
    "Narender S IN2690",
    "Ramana Murthy IN2348",
    "Rambacthavachalam Dhakshinamoorthy IN2000",
    "Retheesh V IN2101",
    "Shanthakumar V K C IN2003"
  ],
  "Finance": [
    "Anbalagan Rangasamy IN2778",
    "Radhika Sundaram IN1999",
    "Shreya Gaunekar RESUL1055",
    "Thirulokchand S IN2803"
  ],
  "Frontend": [
    "Farook N IN2001",
    "Ziyaudeen Abbas Ali IN2438"
  ],
  "Human Resources": [
    "Keith Foster US1001",
    "Nazar Muhammed IN2593",
    "Radhika Sundaram IN1999"
  ],
  "Implementation": [
    "Anurag Kumar P IN2633",
    "Mahesh Sukumar IN3068",
    "Neeraj R Pandey IN2479",
    "Subramanian Gopalaratnam SG1012"
  ],
  "Inside Sales": ["Dhananjay Visvanath RESUL1045"],
  "IT Support": ["Santhakumar M S IN2004"],
  "Legal": ["Vandana Prabhakaran SG1003"],
  "Market Research": ["Arpitha Shivkumar RESUL1042"],
  "Marketing": [
    "Anuradha Sriraman IN2554",
    "Dhananjay Visvanath RESUL1045",
    "Nagesh K S IN2022",
    "Radhika Sundaram IN1999",
    "Sekhar Vidhya Sagar IN3050",
    "Sneha Subramanian SG1004"
  ],
  "Mobile Application": [
    "Buvaneswaran P IN2409",
    "Shanthakumar V K C IN2003"
  ],
  "Operations": [
    "Radhika Sundaram IN1999",
    "Ramesh Vijayan IN2339"
  ],
  "Partner Enablement": ["Subramanian Gopalaratnam SG1012"],
  "Partner Portal": [
    "Balaji Sankara Saravanan V IN2163",
    "Ramesh V IN2474"
  ],
  "Pre-Sales": [
    "Govind Sarawagi IN2419",
    "Nagesh K S IN2022"
  ],
  "Product": ["Rambacthavachalam Dhakshinamoorthy IN2000"],
  "Product Compliances": ["Radhika Sundaram IN1999"],
  "Python": [
    "Buvaneswaran P IN2409",
    "Dinesh Babu M IN2397",
    "Mahesh Sukumar IN3068",
    "Mohamed Kani IN2574",
    "Sankaranarayanan S IN2089"
  ],
  "QA": [
    "Arun Kumar J IN2614",
    "Dinesh Babu J IN2447",
    "Mahesh Anand Anton Alphonse IN3022",
    "Radhika Sundaram IN1999",
    "Samuel Ebinezer Y IN2868",
    "Vimal Rajan V IN2685"
  ],
  "ReactJS": [
    "Arun Karthik C IN3090",
    "Farook N IN2001",
    "Ramana Murthy IN2348",
    "Vennila M IN2381"
  ],
  "Sales - India": [
    "Dinesh Menon 0IN449",
    "Nagesh K S IN2022"
  ],
  "Sales - MEIA": ["Radhika Sundaram IN1999"],
  "Sales - Operations": [
    "Dhananjay Visvanath RESUL1045",
    "Sneha Subramanian SG1004"
  ],
  "Sales - SEA": [
    "Dhananjay Visvanath RESUL1045",
    "Govind Sarawagi IN2419",
    "Mahesh Sukumar IN3068"
  ],
  "Sales - USA": [
    "Akhil Mohan IN2338",
    "Sneha Subramanian SG1004",
    "Vandana Prabhakaran SG1003"
  ],
  "TRD": [
    "Balaji Sankara Saravanan V IN2163",
    "Thanu K IN431"
  ],
  "Vendor Integration - API": [
    "Dinesh Babu M IN2397",
    "Muthukaruppan M IN2508"
  ]
};

  // --- Simple form state for one selected manager ---
  const criteria = [
   "My manager is approachable when I have questions, concerns, or feedback",
   "My manager communicates openly and transparently with me and the team",
   "My manager has given me the support/training I need to succeed",
   "My manager gives useful, constructive feedback",
   "My manager pushes my limits and challenges me",
   "My manager effectively provides direction and inspires confidence in the team",
   "My manager supports my professional growth and career development",
   "My manager effectively manages team workload",
   "My manager encourages collaboration and teamwork",
   "My manager demonstrates strong competencies even when working under pressure",
   "My manager recognizes me and appreciates my contributions in the team",
   "My manager checks in regularly about my work or blockers",
   "My manager creates a positive and inclusive work environment",
   "My manager is flexible and promotes a healthy work-life balance",
   "My manager helps prioritize or escalate issues when needed",
   "What do you think your manager's strenghts are?",
   "What are the areas of improvement for this manager?",   
  ];
  let selectedManager = "";   // single manager flow

  const formState = {
    ratings: {},       // ratings[criteria] = 1..5
    improvements: "",  // textarea
    strengths: ""      // textarea
  };

  // --- Anonymous toggle shows/hides name field ---
  function toggleNameBlock() {
    if (!namedBlock) return;
    namedBlock.style.display = anonToggle?.checked ? "none" : "block";
  }
  anonToggle?.addEventListener("change", toggleNameBlock);
  toggleNameBlock();

  // --- Department chips: display managers for that dept ---
  deptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      deptChips.forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      hiddenDept.value = chip.textContent;

      managerCard.style.display = "block";
      managerSection.style.display = 'block';
      managerContainer.innerHTML = "";

      const list = managersData[chip.textContent] || [];
      list.forEach(m => {
        const mChip = document.createElement('div');
        mChip.className = 'chip';
        mChip.textContent = m;
        managerContainer.appendChild(mChip);

        mChip.addEventListener('click', () => {
          managerContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
          mChip.classList.add('selected');
          hiddenManager.value = m;
          selectedManager = m;
          renderTableForSingleManager(m);
        });
      });
    });
  });

  // --- Render table for ONE manager only ---
  function renderTableForSingleManager(manager) {
    reviewSection.style.display = "block";

    const headerRow = document.querySelector("thead tr");
    if (headerRow) {
      headerRow.innerHTML = `<th>Criteria</th><th class="reviewee">${manager}</th>`;
    }

    criteriaBody.innerHTML = "";
    // criteria rows
    criteria.forEach(crit => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${crit}</td>
        <td>
          <div class="rating" data-criteria="${crit}">
            ${[1,2,3,4].map(n => `<span class="number" data-value="${n}">${n}</span>`).join("")}
          </div>
        </td>
      `;
      criteriaBody.appendChild(row);
    });

    // improvement row
    const improvementRow = document.createElement("tr");
    improvementRow.innerHTML = `
      <td>What are the areas of improvement for this manager?</td>
      <td><textarea placeholder="Type Here" data-type="improvement"></textarea></td>
    `;
    criteriaBody.appendChild(improvementRow);

    // strength row
    const strengthRow = document.createElement("tr");
    strengthRow.innerHTML = `
      <td>What does this manager do well?</td>
      <td><textarea placeholder="Type Here" data-type="strength"></textarea></td>
    `;
    criteriaBody.appendChild(strengthRow);

    attachRowEvents();
    rehydrateFromState();
  }

  function attachRowEvents() {
    document.querySelectorAll(".rating .number").forEach(num => {
      num.addEventListener("click", function(){
        const wrap = this.closest(".rating");
        const val = Number(this.dataset.value);
        wrap.querySelectorAll(".number").forEach(n => n.classList.remove("selected"));
        this.classList.add("selected");
        wrap.classList.remove("missing");
        formState.ratings[wrap.dataset.criteria] = val;
      });
    });

    const imp = document.querySelector('textarea[data-type="improvement"]');
    const str = document.querySelector('textarea[data-type="strength"]');

    imp?.addEventListener("input", () => {
      imp.classList.remove("missing");
      formState.improvements = imp.value;
    });
    str?.addEventListener("input", () => {
      str.classList.remove("missing");
      formState.strengths = str.value;
    });
  }

  function rehydrateFromState() {
    // ratings
    document.querySelectorAll(".rating").forEach(div => {
      const crit = div.dataset.criteria;
      const saved = formState.ratings[crit];
      if (saved) {
        const el = div.querySelector(`.number[data-value="${saved}"]`);
        el?.classList.add("selected");
      }
    });
    // text
    const imp = document.querySelector('textarea[data-type="improvement"]');
    const str = document.querySelector('textarea[data-type="strength"]');
    if (imp) imp.value = formState.improvements || "";
    if (str) str.value = formState.strengths || "";
  }

  // --- Validation (single manager) ---
  function validate() {
    let ok = true;
    if (!hiddenDept.value) ok = false;
    if (!hiddenManager.value) ok = false;

    document.querySelectorAll(".rating").forEach(div => {
      if (!div.querySelector(".number.selected")) {
        div.classList.add("missing");
        ok = false;
      } else {
        div.classList.remove("missing");
      }
    });

    const imp = document.querySelector('textarea[data-type="improvement"]');
    const str = document.querySelector('textarea[data-type="strength"]');
    if (imp && !imp.value.trim()) { imp.classList.add("missing"); ok = false; }
    if (str && !str.value.trim()) { str.classList.add("missing"); ok = false; }

    const isAnonymous = !!anonToggle?.checked;
    const username = isAnonymous ? "" : (usernameInput?.value || "").trim();
    if (!isAnonymous && !username) ok = false;

    return ok;
  }

  // --- Submit: no fetch, just show thanks and reset ---
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (okMsg) okMsg.style.display = "none";
    if (errMsg) errMsg.style.display = "none";

    if (!validate()) {
      if (errMsg){
        errMsg.textContent = "Please complete department, manager, all ratings and comments (and name if not anonymous).";
        errMsg.style.display = "block";
      }
      return;
    }

    // Show thanks modal (kept)
    thanksModal.style.display = "flex";
    thanksModal.setAttribute("aria-hidden","false");
    setTimeout(() => thanksOkBtn?.focus(), 0);

    // Reset UI + state
    form.reset();
    toggleNameBlock();
    hiddenDept.value = "";
    hiddenManager.value = "";
    selectedManager = "";
    reviewSection.style.display = "none";
    criteriaBody.innerHTML = "";
    managerCard.style.display = "none";
    managerContainer.innerHTML = "";
    document.querySelectorAll('#departments .chip').forEach(c => c.classList.remove('selected'));

    // clear state
    formState.ratings = {};
    formState.improvements = "";
    formState.strengths = "";
  });

  // Close thanks modal
  thanksOkBtn?.addEventListener("click", () => {
    thanksModal.style.display = "none";
    thanksModal.setAttribute("aria-hidden","true");
  });
  thanksModal?.addEventListener("click", (e) => {
    if (e.target === thanksModal) {
      thanksModal.style.display = "none";
      thanksModal.setAttribute("aria-hidden","true");
    }
  });
});
