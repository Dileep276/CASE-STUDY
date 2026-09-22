# Class Management System

A web-based Class Management System designed to manage student attendance, fee payments, and academic marks using a multi-agent approach.

## Project Overview

The system divides class management operations among different specialized agents. Each agent is responsible for a specific task, while a Verification Agent checks the processed information.

The project currently provides a frontend prototype using HTML, CSS, and JavaScript.

## Features

### Student Management

* Add new students
* View student details
* Search for students
* View attendance, fee, and marks status

### Attendance Management

* Record individual student attendance
* Display present or absent status
* Attendance Agent processes attendance
* Verification Agent verifies attendance records

### Fee Management

* Display total fee amount
* Display amount paid
* Calculate remaining fee balance
* Check whether fees are paid or pending
* Fee Agent processes fee information

### Marks Management

* Record individual student marks
* Display subject-wise marks
* Marks Agent processes marks
* Verification Agent verifies marks

### Dashboard

The dashboard displays:

* Total number of students
* Verified attendance records
* Number of students with paid fees
* Verified marks
* Recent agent activities
* Status of the agents

## Multi-Agent System

The system contains four specialized agents.

### Attendance Agent

Responsible for processing and posting individual student attendance.

### Fee Agent

Responsible for checking individual student fee payment status and calculating the remaining balance.

### Marks Agent

Responsible for posting individual student marks.

### Verification Agent

Responsible for verifying attendance and marks processed by the other agents.

## Project Structure

```text
class-management/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Multi-Agent System Concept

## How to Run

1. Clone the repository.

```bash
git clone https://github.com/your-username/class-management.git
```

2. Open the project folder.

```bash
cd class-management
```

3. Open `index.html` in a web browser.

No additional dependencies are required for the current version.

## Sample Student Data

The project contains sample student records with information such as:

* Student ID
* Student name
* Class
* Attendance
* Fee payment
* Marks

## Current Limitations

This is currently a frontend prototype.

* Student data is stored in JavaScript.
* There is no backend server.
* There is no permanent database.
* Agent operations are simulated using JavaScript.
* No real AI model or AI API is currently connected.
* Authentication and authorization are not implemented.

## Future Enhancements

The project can be extended by adding:

* Backend APIs
* PostgreSQL or MySQL database
* User authentication
* Faculty and student login
* Role-based access
* Real AI agents
* Automated attendance notifications
* Fee payment integration
* Assignment management
* Examination management
* Student performance reports
* Persistent database storage

## Objective

The objective of this project is to demonstrate how a multi-agent approach can be used to divide and manage different class management operations such as attendance, fees, marks, and verification.

## Project Type

Academic Project

## License

This project is developed for educational purposes.
