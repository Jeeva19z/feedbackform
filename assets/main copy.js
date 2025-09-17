
document.addEventListener("DOMContentLoaded", () => {
 


    

  // const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqKe1S6-ft7-V1aDLJz__27O-1D19lap-kIpXE2rYQla60E13XzaR4j8Cz5dQEpjPn/exec";

  // DOM refs
  const form = document.getElementById("feedbackForm");
  const submitBtn = document.getElementById("submitBtn");
  const checkboxes = document.querySelectorAll(".manager");
  const reviewSection = document.getElementById("reviews-section");
  const criteriaBody = document.getElementById("criteria-body");
  const anonToggle = document.getElementById("anonymous");
  const namedBlock = document.getElementById("namedBlock") || document.querySelector(".toggle-form");
  const usernameInput = document.getElementById("username");
  const extraEl = document.getElementById("extraFeedback");
  const okMsg = document.getElementById("okMsg");
  const errMsg = document.getElementById("errMsg");
  const loaderOverlay = document.getElementById("loaderOverlay");
  const thanksModal = document.getElementById("thanksModal");
  const thanksOkBtn = document.getElementById("thanksOkBtn");
  const toast = document.getElementById("toast");
  const chips = document.querySelectorAll('.chip');
  const hiddenInput = document.getElementById('selectedDept');
  
  const deptChips = document.querySelectorAll('#departments .chip');
  const managerSection = document.getElementById('managerSection');
  const managerContainer = document.getElementById('managers');
  const hiddenDept = document.getElementById('selectedDept');
  const hiddenManager = document.getElementById('selectedManager');
  const managercard = document.getElementById("manager-card")

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


console.log("dep",hiddenDept)
console.log("manage",hiddenManager)


deptChips.forEach(chip => {
  chip.addEventListener('click', () => {
    // Highlight selected department
managercard.style.display="block"

    deptChips.forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
    hiddenDept.value = chip.textContent;

    // Show manager section and generate managers
    managerSection.style.display = 'block';
    managerContainer.innerHTML = ''; // clear previous managers

    const selectedManagers = managersData[chip.textContent] || [];
    selectedManagers.forEach(m => {
      const mChip = document.createElement('div');
      mChip.classList.add('chip');
      mChip.textContent = m;
      managerContainer.appendChild(mChip);

      // Manager selection
      mChip.addEventListener('click', () => {
        managerContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
        mChip.classList.add('selected');
        hiddenManager.value = mChip.textContent;


      });
    });
  });
});



  // --- PERSISTENT FORM STATE ---
  const formState = {
    ratings: {},       // ratings[manager][criteria] = number
    improvements: {},  // improvements[manager] = string
    strengths: {}      // strengths[manager] = string
  };
  let prevSelected = new Set();

  function setRating(manager, criteria, value) {
    if (!formState.ratings[manager]) formState.ratings[manager] = {};
    formState.ratings[manager][criteria] = value;
  }
  function getRating(manager, criteria) {
    return formState.ratings[manager]?.[criteria] ?? null;
  }
  function setText(type, manager, value) {
    formState[type][manager] = value;
  }
  function getText(type, manager) {
    return formState[type][manager] ?? "";
  }
  function clearManagerFromState(manager) {
    delete formState.ratings[manager];
    delete formState.improvements[manager];
    delete formState.strengths[manager];
  }

  // Toast
  function showToast(msg) {
    toast.textContent = msg;
    toast.style.display = "block";
    setTimeout(() => (toast.style.display = "none"), 3000);
  }

  // Criteria
  const criteria = [
    "Provides clear guidance when you are stuck.",
    "Checks in regularly about your work or blockers.",
    "Helps prioritize or escalate issues when needed.",
    "Approachable and easy to talk to.",
    "Gives useful, constructive feedback."
  ];

  // Loader + modal
  function showLoader() {
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting…";
    loaderOverlay.style.display = "flex";
    loaderOverlay.setAttribute("aria-hidden", "false");
  }
  function hideLoader() {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit";
    loaderOverlay.style.display = "none";
    loaderOverlay.setAttribute("aria-hidden", "true");
  }
  function showThanksModal() {
    thanksModal.style.display = "flex";
    thanksModal.setAttribute("aria-hidden", "false");
    setTimeout(() => thanksOkBtn?.focus(), 0);
  }
  function hideThanksModal() {
    thanksModal.style.display = "none";
    thanksModal.setAttribute("aria-hidden", "true");

      if(localStorage.getItem("feedback_submitted")) {
  document.querySelector("form").style.display = "none";
  document.body.innerHTML += "<p>✅ Your Feedback has submited succesfully</p>";
}

  }
  thanksOkBtn?.addEventListener("click", hideThanksModal);
  thanksModal?.addEventListener("click", (e) => {
    if (e.target === thanksModal) hideThanksModal();
  });

  // Name block toggle
  function toggleNameBlock() {
    if (!namedBlock) return;
    namedBlock.style.display = anonToggle?.checked ? "none" : "block";
  }
  anonToggle?.addEventListener("change", toggleNameBlock);
  toggleNameBlock();

  // Manager selection (1..5) + render with persistence
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const selected = Array.from(checkboxes).filter(c => c.checked);

      if (selected.length > 5) {
        showToast("You can select a maximum of 5 managers.");
        cb.checked = false;
        return;
      }

      const currentSet = new Set(selected.map(s => s.value.trim()));
      // clear state of only those removed
      for (const m of prevSelected) {
        if (!currentSet.has(m)) clearManagerFromState(m);
      }
      prevSelected = currentSet;

      if (selected.length > 0) {
        reviewSection.style.display = "block";
        renderTable([...currentSet]);
      } else {
        reviewSection.style.display = "none";
        criteriaBody.innerHTML = "";
      }
    });
  });

  function renderTable(managers) {
    const headerRow = document.querySelector("thead tr");
    if (headerRow) {
      headerRow.innerHTML = "<th>Criteria</th>" + managers.map(m => `<th>${m}</th>`).join("");
    }

    criteriaBody.innerHTML = "";
    criteria.forEach((crit) => {
      const row = document.createElement("tr");
      row.innerHTML =
        `<td>${crit}</td>` +
        managers.map(m => `
          <td>
            <div class="rating" data-manager="${m}" data-criteria="${crit}">
              ${[1,2,3,4,5].map(num => `<span class="number" data-value="${num}">${num}</span>`).join("")}
            </div>
          </td>`).join("");
      criteriaBody.appendChild(row);
    });

    const improvementRow = document.createElement("tr");
    improvementRow.innerHTML =
      `<td>What are the areas of improvement for this manager?</td>` +
      managers.map(m => `<td><textarea placeholder="Type Here" data-manager="${m}" data-type="improvement"></textarea></td>`).join("");
    criteriaBody.appendChild(improvementRow);

    const strengthRow = document.createElement("tr");
    strengthRow.innerHTML =
      `<td>What does this manager do well?</td>` +
      managers.map(m => `<td><textarea placeholder="Type Here" data-manager="${m}" data-type="strength"></textarea></td>`).join("");
    criteriaBody.appendChild(strengthRow);

    attachNumberEvents();

    // --- Rehydrate from state ---
    // stars
    document.querySelectorAll(".rating").forEach(div => {
      const manager = div.dataset.manager;
      const crit = div.dataset.criteria;
      const saved = getRating(manager, crit);
      if (saved) {
        const toSelect = div.querySelector(`.number[data-value="${saved}"]`);
        if (toSelect) {
          div.querySelectorAll(".number").forEach(n => n.classList.remove("selected"));
          toSelect.classList.add("selected");
        }
      }
    });
    // textareas
    document.querySelectorAll('textarea[data-type="improvement"]').forEach(t => {
      t.value = getText("improvements", t.dataset.manager);
    });
    document.querySelectorAll('textarea[data-type="strength"]').forEach(t => {
      t.value = getText("strengths", t.dataset.manager);
    });
  }

  function attachNumberEvents() {
    document.querySelectorAll(".rating .number").forEach(num => {
      num.addEventListener("click", function () {
        const ratingDiv = this.closest(".rating");
        const manager = ratingDiv.dataset.manager;
        const crit = ratingDiv.dataset.criteria;
        const value = Number(this.dataset.value);

        ratingDiv.querySelectorAll(".number").forEach(n => n.classList.remove("selected"));
        this.classList.add("selected");

        ratingDiv.classList.remove("missing");
        ratingDiv.removeAttribute("aria-invalid");

        setRating(manager, crit, value);
      });
    });

    // Persist textareas
    document.querySelectorAll('textarea[data-type="improvement"]').forEach(t => {
      t.addEventListener("input", () => {
        t.classList.remove("missing");
        setText("improvements", t.dataset.manager, t.value);
      });
    });
    document.querySelectorAll('textarea[data-type="strength"]').forEach(t => {
      t.addEventListener("input", () => {
        t.classList.remove("missing");
        setText("strengths", t.dataset.manager, t.value);
      });
    });
  }

  // Validation: ratings + textareas required
  function validateInputs() {
    let isValid = true;

    document.querySelectorAll(".rating").forEach(div => {
      const selected = div.querySelector(".number.selected");
      if (!selected) {
        div.classList.add("missing");
        div.setAttribute("aria-invalid", "true");
        isValid = false;
      } else {
        div.classList.remove("missing");
        div.removeAttribute("aria-invalid");
      }
    });

    document.querySelectorAll('textarea[data-type="improvement"], textarea[data-type="strength"]').forEach(t => {
      if (!t.value.trim()) {
        t.classList.add("missing");
        isValid = false;
      } else {
        t.classList.remove("missing");
      }
    });

    return isValid;
  }

  function getSelectedManagers() {
    return Array.from(checkboxes).filter(c => c.checked).map(c => c.value.trim());
  }
  function collectRatings() {
    const ratings = [];
    document.querySelectorAll(".rating").forEach(ratingDiv => {
      const selected = ratingDiv.querySelector(".number.selected");
      if (selected) {
        ratings.push({
          manager: ratingDiv.dataset.manager,
          criteria: ratingDiv.dataset.criteria,
          rating: Number(selected.dataset.value)
        });
      }
    });
    return ratings;
  }
  function collectTextareas(type) {
    const obj = {};
    document.querySelectorAll(`textarea[data-type="${type}"]`).forEach(t => {
      obj[t.dataset.manager] = (t.value || "").trim();
    });
    return obj;
  }

  // Submit
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Selected department:", hiddenInput.value);
    
    if (okMsg) okMsg.style.display = "none";
    if (errMsg) errMsg.style.display = "none";

    const managers = getSelectedManagers();
    if (managers.length === 0 || managers.length > 5) {
      if (errMsg) { errMsg.textContent = "Select the managers you want to review"; errMsg.style.display = "block"; }
      else console.log("Select the managers you want to review");
      return;
    }

    const isAnonymous = !!anonToggle?.checked;
    const username = isAnonymous ? "" : (usernameInput?.value || "").trim();
    if (!isAnonymous && !username) {
      if (errMsg) { errMsg.textContent = "Please enter your name or you can remain anonymous"; errMsg.style.display = "block"; }
      else console.log("Please enter your name or you can remain anonymous");
      return;
    }

    if (!validateInputs()) {
      if (errMsg) {
        errMsg.textContent = "Please fill all ratings and comments for each manager.";
        errMsg.style.display = "block";
      } else {
        console.log("Please fill all ratings and comments for each manager.");
      }
      return;
    }

    const extraFeedback = (extraEl?.value || "").trim();
    const ratings = collectRatings();
    const improvements = collectTextareas("improvement");
    const strengths   = collectTextareas("strength");

    const body = new URLSearchParams({
     anonymous: anonToggle.checked ? "YES" : "NO",
      username,
      managers: managers.join(", "),
      ratingsJSON: JSON.stringify(ratings),
      improvementsJSON: JSON.stringify(improvements),
      strengthsJSON: JSON.stringify(strengths),
      extraFeedback,
      ua: navigator.userAgent
    });

    showLoader();
    try {
      await fetch(SCRIPT_URL, { method: "POST", body, mode: "no-cors" });

      showThanksModal();
      if (okMsg) okMsg.style.display = "block";

      // Reset UI
      form.reset();
      toggleNameBlock();
      reviewSection.style.display = "none";
      criteriaBody.innerHTML = "";

      // Reset state
      for (const k of Object.keys(formState.ratings)) delete formState.ratings[k];
      for (const k of Object.keys(formState.improvements)) delete formState.improvements[k];
      for (const k of Object.keys(formState.strengths)) delete formState.strengths[k];
      prevSelected = new Set();
      
       localStorage.setItem("feedback_submitted", "true");
    } catch (err) {
      if (errMsg) {
        errMsg.textContent = "Network error.";
        errMsg.style.display = "block";
      } else {
        console.log("Network error");
      }
    } finally {
      hideLoader();
    }
  });

     if(localStorage.getItem("feedback_submitted")) {
  document.querySelector("form").style.display = "none";
  document.body.innerHTML += "<p>✅ Your Feedback has submited.</p>";
}
  // Initialize prevSelected from any pre-checked managers (if any)
  prevSelected = new Set(getSelectedManagers());
  if (prevSelected.size > 0) {
    reviewSection.style.display = "block";
    renderTable([...prevSelected]);
  }
});