document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling for Sidebar Links
  const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

  sidebarLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 20,
                  behavior: "smooth"
              });
          }
      });
  });

  // Highlight Active Sidebar Link on Scroll
  const sections = document.querySelectorAll(".section");
  window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY + 100; // Adjust offset for better detection

      sections.forEach(section => {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
              sidebarLinks.forEach(link => link.classList.remove("active"));
              const activeLink = document.querySelector(`.sidebar ul li a[href="#${section.id}"]`);
              if (activeLink) activeLink.classList.add("active");
          }
      });
  });

  // Edit Button Alert
  const editButton = document.getElementById("edit-btn");
  if (editButton) {
      editButton.addEventListener("click", function () {
          alert("Edit button clicked! You can now edit the principal's details.");
      });
  }

  // Dynamic Updates (Simulating Updates)
  function updateNumbers() {
      let admissionsCount = document.getElementById("admissions-count");
      let teachersCount = document.getElementById("teachers-count");

      // Simulating a random number update
      admissionsCount.innerText = Math.floor(Math.random() * 100) + 1;
      teachersCount.innerText = Math.floor(Math.random() * 50) + 5;
  }

  // Call the update function every 5 seconds
  setInterval(updateNumbers, 5000);
});

document.getElementById("announcementFile").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
        const list = document.getElementById("announcementList");
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.textContent = file.name;
        link.target = "_blank";
        listItem.appendChild(link);
        list.appendChild(listItem);
    }
});

// Function to display uploaded PDF in Time Table
document.getElementById("timetableFile").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
        const list = document.getElementById("timetableList");
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.textContent = file.name;
        link.target = "_blank";
        listItem.appendChild(link);
        list.appendChild(listItem);
    }
});

// Function to add multiple activities with images, headings, and captions
function addActivity() {
    const title = document.getElementById("activityTitle").value;
    const caption = document.getElementById("activityCaption").value;
    const images = document.getElementById("activityImages").files;
    const activityList = document.getElementById("activityList");

    if (images.length === 0 || title.trim() === "" || caption.trim() === "") {
        alert("Please enter a title, caption, and select at least one image.");
        return;
    }

    Array.from(images).forEach(file => {
        if (file.type.startsWith("image/")) {
            const activityItem = document.createElement("div");
            activityItem.classList.add("activity-item");

            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            img.alt = title;

            const heading = document.createElement("h3");
            heading.textContent = title;

            const captionText = document.createElement("p");
            captionText.textContent = caption;

            activityItem.appendChild(img);
            activityItem.appendChild(heading);
            activityItem.appendChild(captionText);
            activityList.appendChild(activityItem);
        }
    });

    // Reset the input fields after adding
    document.getElementById("activityTitle").value = "";
    document.getElementById("activityCaption").value = "";
    document.getElementById("activityImages").value = "";
}

function searchStudent() {
    const studentId = document.getElementById("studentId").value;
    
    // Simulated Database Lookup (Replace with AJAX for actual DB search)
    const students = {
        "101": { name: "Alice Johnson" },
        "102": { name: "Bob Smith" },
        "103": { name: "Charlie Brown" }
    };

    if (students[studentId]) {
        document.getElementById("displayId").textContent = studentId;
        document.getElementById("displayName").textContent = students[studentId].name;
        document.getElementById("studentInfo").classList.remove("hidden");
    } else {
        document.getElementById("notFoundModal").classList.remove("hidden"); // Show "Not Found" popup
        document.getElementById("studentInfo").classList.add("hidden");
    }
}

function openMarksForm() {
    const studentId = document.getElementById("displayId").textContent;
    document.getElementById("modalStudentId").value = studentId;
    document.getElementById("marksModal").classList.remove("hidden");
}

function closeMarksForm() {
    document.getElementById("marksModal").classList.add("hidden");
}

function closeNotFoundPopup() {
    document.getElementById("notFoundModal").classList.add("hidden");
}