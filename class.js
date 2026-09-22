let students = [

    {
        id: "CSE001",
        name: "Aarav Kumar",
        className: "B.Tech CSE",
        attendance: "Present",
        fee: 60000,
        paid: 60000,
        marks: 86
    },

    {
        id: "CSE002",
        name: "Ananya Sharma",
        className: "B.Tech CSE",
        attendance: "Present",
        fee: 60000,
        paid: 45000,
        marks: 91
    },

    {
        id: "CSE003",
        name: "Rahul Reddy",
        className: "B.Tech CSE",
        attendance: "Absent",
        fee: 60000,
        paid: 60000,
        marks: 74
    },

    {
        id: "CSE004",
        name: "Priya Singh",
        className: "B.Tech CSE",
        attendance: "Present",
        fee: 60000,
        paid: 60000,
        marks: 95
    },

    {
        id: "CSE005",
        name: "Vikram Rao",
        className: "B.Tech CSE",
        attendance: "Present",
        fee: 60000,
        paid: 30000,
        marks: 68
    },

    {
        id: "CSE006",
        name: "Sneha Patel",
        className: "B.Tech CSE",
        attendance: "Present",
        fee: 60000,
        paid: 60000,
        marks: 88
    }

];


/* ================= ACTIVITY LOG ================= */

let activities = [

    "Attendance Agent posted attendance for CSE001",

    "Verification Agent verified attendance for CSE001",

    "Fee Agent checked payment status for CSE002",

    "Marks Agent posted marks for CSE003",

    "Verification Agent verified marks for CSE003"

];


/* ================= INITIALIZATION ================= */

document.addEventListener("DOMContentLoaded", function () {

    renderDashboard();

    renderStudents();

    renderAttendance();

    renderFees();

    renderMarks();

});


/* =====================================================
   SECTION NAVIGATION
   ===================================================== */

function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {

        section.classList.remove("active-section");

    });


    document
        .getElementById(sectionId)
        .classList.add("active-section");


    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {

        item.classList.remove("active");

    });


    event.currentTarget.classList.add("active");

}


/* =====================================================
   DASHBOARD
   ===================================================== */

function renderDashboard() {

    document.getElementById("totalStudents").innerText =
        students.length;


    const verifiedAttendance =
        students.filter(student =>
            student.attendanceVerified === true
        ).length;


    const paidStudents =
        students.filter(student =>
            student.paid >= student.fee
        ).length;


    const verifiedMarks =
        students.filter(student =>
            student.marksVerified === true
        ).length;


    document.getElementById("attendanceVerified").innerText =
        verifiedAttendance;


    document.getElementById("feesPaid").innerText =
        paidStudents;


    document.getElementById("marksVerified").innerText =
        verifiedMarks;


    renderActivities();

}


/* =====================================================
   ACTIVITY LIST
   ===================================================== */

function renderActivities() {

    const container =
        document.getElementById("activityList");


    container.innerHTML = "";


    activities.slice(-6).reverse().forEach(activity => {

        container.innerHTML += `

            <div class="activity">

                <div class="activity-icon">
                    🤖
                </div>

                <div class="activity-text">
                    ${activity}
                </div>

                <div class="activity-time">
                    Just now
                </div>

            </div>

        `;

    });

}


/* =====================================================
   STUDENT TABLE
   ===================================================== */

function renderStudents() {

    const table =
        document.getElementById("studentTable");


    table.innerHTML = "";


    students.forEach(student => {

        const attendanceClass =
            student.attendance === "Present"
                ? "badge-green"
                : "badge-red";


        const feePaid =
            student.paid >= student.fee;


        const marksVerified =
            student.marksVerified
                ? "badge-green"
                : "badge-yellow";


        table.innerHTML += `

            <tr>

                <td>
                    <strong>${student.id}</strong>
                </td>

                <td>
                    ${student.name}
                </td>

                <td>
                    ${student.className}
                </td>

                <td>
                    <span class="badge ${attendanceClass}">
                        ${student.attendance}
                    </span>
                </td>

                <td>
                    <span class="badge ${
                        feePaid
                        ? "badge-green"
                        : "badge-red"
                    }">

                        ${
                            feePaid
                            ? "Paid"
                            : "Pending"
                        }

                    </span>
                </td>

                <td>
                    <span class="badge ${marksVerified}">
                        ${
                            student.marksVerified
                            ? "Verified"
                            : "Pending"
                        }
                    </span>
                </td>

            </tr>

        `;

    });

}


/* =====================================================
   SEARCH STUDENTS
   ===================================================== */

function searchStudents() {

    const search =
        document
            .getElementById("studentSearch")
            .value
            .toLowerCase();


    const rows =
        document.querySelectorAll("#studentTable tr");


    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();


        row.style.display =
            text.includes(search)
                ? ""
                : "none";

    });

}


/* =====================================================
   ATTENDANCE AGENT
   ===================================================== */

function runAttendanceAgent() {

    showToast("Attendance Agent is processing...");


    setTimeout(() => {

        students.forEach(student => {

            student.attendanceVerified = true;

        });


        activities.push(
            "Attendance Agent posted and Verification Agent verified attendance"
        );


        renderAttendance();

        renderStudents();

        renderDashboard();


        showToast(
            "Attendance posted and verified successfully."
        );

    }, 1000);

}


/* =====================================================
   ATTENDANCE TABLE
   ===================================================== */

function renderAttendance() {

    const table =
        document.getElementById("attendanceTable");


    table.innerHTML = "";


    students.forEach(student => {

        table.innerHTML += `

            <tr>

                <td>
                    <strong>${student.name}</strong>
                </td>

                <td>
                    ${student.id}
                </td>

                <td>

                    <span class="badge ${
                        student.attendance === "Present"
                        ? "badge-green"
                        : "badge-red"
                    }">

                        ${student.attendance}

                    </span>

                </td>

                <td>
                    Attendance Agent
                </td>

                <td>

                    <span class="badge ${
                        student.attendanceVerified
                        ? "badge-green"
                        : "badge-yellow"
                    }">

                        ${
                            student.attendanceVerified
                            ? "✓ Verified"
                            : "Pending"
                        }

                    </span>

                </td>

            </tr>

        `;

    });

}


/* =====================================================
   FEE AGENT
   ===================================================== */

function runFeeAgent() {

    showToast("Fee Agent is checking payments...");


    setTimeout(() => {

        activities.push(
            "Fee Agent checked payment status for all students"
        );


        renderFees();

        renderStudents();

        renderDashboard();


        showToast(
            "Fee payment status checked successfully."
        );

    }, 1000);

}


/* =====================================================
   FEE TABLE
   ===================================================== */

function renderFees() {

    const table =
        document.getElementById("feeTable");


    table.innerHTML = "";


    students.forEach(student => {

        const balance =
            student.fee - student.paid;


        const isPaid =
            balance <= 0;


        table.innerHTML += `

            <tr>

                <td>
                    <strong>${student.name}</strong>
                </td>

                <td>
                    ${student.id}
                </td>

                <td>
                    ₹${student.fee.toLocaleString()}
                </td>

                <td>
                    ₹${student.paid.toLocaleString()}
                </td>

                <td>
                    ₹${Math.max(balance, 0).toLocaleString()}
                </td>

                <td>

                    <span class="badge ${
                        isPaid
                        ? "badge-green"
                        : "badge-red"
                    }">

                        ${
                            isPaid
                            ? "Paid"
                            : "Pending"
                        }

                    </span>

                </td>

                <td>

                    <span class="badge badge-green">
                        ✓ Checked
                    </span>

                </td>

            </tr>

        `;

    });

}


/* =====================================================
   MARKS AGENT
   ===================================================== */

function runMarksAgent() {

    showToast("Marks Agent is posting marks...");


    setTimeout(() => {

        students.forEach(student => {

            student.marksVerified = true;

        });


        activities.push(
            "Marks Agent posted marks and Verification Agent verified them"
        );


        renderMarks();

        renderStudents();

        renderDashboard();


        showToast(
            "Marks posted and verified successfully."
        );

    }, 1000);

}


/* =====================================================
   MARKS TABLE
   ===================================================== */

function renderMarks() {

    const table =
        document.getElementById("marksTable");


    table.innerHTML = "";


    students.forEach(student => {

        table.innerHTML += `

            <tr>

                <td>
                    <strong>${student.name}</strong>
                </td>

                <td>
                    ${student.id}
                </td>

                <td>
                    Data Structures
                </td>

                <td>

                    <strong>
                        ${student.marks}/100
                    </strong>

                </td>

                <td>
                    Marks Agent
                </td>

                <td>

                    <span class="badge ${
                        student.marksVerified
                        ? "badge-green"
                        : "badge-yellow"
                    }">

                        ${
                            student.marksVerified
                            ? "✓ Verified"
                            : "Pending"
                        }

                    </span>

                </td>

            </tr>

        `;

    });

}


/* =====================================================
   RUN ALL AGENTS
   ===================================================== */

function runAllAgents() {

    showToast("Multi-Agent System is running...");


    setTimeout(() => {

        students.forEach(student => {

            student.attendanceVerified = true;

            student.marksVerified = true;

        });


        activities.push(
            "Multi-Agent System completed attendance, fee and marks verification"
        );


        renderDashboard();

        renderStudents();

        renderAttendance();

        renderFees();

        renderMarks();


        showToast(
            "All agents completed their operations."
        );

    }, 1200);

}


/* =====================================================
   ADD STUDENT
   ===================================================== */

function openStudentModal() {

    document.getElementById("studentModal").style.display =
        "flex";

}


function closeStudentModal() {

    document.getElementById("studentModal").style.display =
        "none";

}


function addStudent(event) {

    event.preventDefault();


    const id =
        document.getElementById("newStudentId").value;


    const name =
        document.getElementById("newStudentName").value;


    const className =
        document.getElementById("newStudentClass").value;


    const fee =
        Number(
            document.getElementById("newStudentFee").value
        );


    const newStudent = {

        id: id,

        name: name,

        className: className,

        attendance: "Present",

        attendanceVerified: false,

        fee: fee,

        paid: 0,

        marks: 0,

        marksVerified: false

    };


    students.push(newStudent);


    activities.push(
        `New student ${name} was added to the class`
    );


    renderDashboard();

    renderStudents();

    renderAttendance();

    renderFees();

    renderMarks();


    closeStudentModal();


    event.target.reset();


    showToast(
        "Student added successfully."
    );

}


/* =====================================================
   TOAST MESSAGE
   ===================================================== */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.innerText = message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}