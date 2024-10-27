---
layout: page
title: Ji Hann Hong | Contact
url: /contact
---

# Contact

<head>
  <style>
    /* Container for email box and buttons */
    .email-container {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: #f3f4f6;
      border-radius: 5px;
      font-family: monospace;
      font-size: 16px;
      color: #333;
      position: relative;
      width: fit-content;
      margin-top: 20px;
    }

    /* Email display styling */
    .email-box {
      padding: 50px;
      color: #333;
      background-color: #e5e7eb;
      border: 1px solid #d1d5db;
      border-radius: 5px;
      width: max-content;
    }

    /* Button styling */
    .button {
      padding: 5px 10px;
      color: white;
      background-color: #333;
      border: none;
      cursor: pointer;
      font-size: 14px;
      margin-left: 5px;
      border-radius: 3px;
    }

    /* Button container at the top right */
    .button-container {
      position: absolute;
      top: 5px;
      right: 5px;
      display: flex;
      gap: 5px;
    }

    /* Dark mode styles */
    @media (prefers-color-scheme: dark) {
      /* Dark background and light text for main container */
      .email-container {
        background-color: #1f1f1f;
        color: #e5e5e5;
      }
      
      /* Email display box with dark theme */
      .email-box {
        background-color: #333;
        color: #e5e5e5;
        border: 1px solid #555;
      }
      
      /* Dark mode for buttons */
      .button {
        background-color: #e5e5e5;
        color: #333;
      }
    }
  </style>

  <script type="text/javascript">
    // Function to display obfuscated email
    function displayEmail() {
      const user = "ji.hann.hong";
      const domain = "gmail.com";
      document.getElementById("email-box").textContent = user + "@" + domain;
    }

    // Function to copy obfuscated email to clipboard
    function copyEmail() {
      const user = "ji.hann.hong";
      const domain = "gmail.com";
      const email = user + "@" + domain;
      
      navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
      }).catch(err => {
        alert("Failed to copy email.");
      });
    }

    // Function to create a mailto link
    function mailTo() {
      const user = "ji.hann.hong";
      const domain = "gmail.com";
      const email = user + "@" + domain;
      window.location.href = "mailto:" + email;
    }

    // Display email on page load
    window.onload = displayEmail;
  </script>
</head>

<body>
  <div class="email-container">
    <!-- Email text in monospace box, populated by JavaScript -->
    <span id="email-box" class="email-box"></span>
    
    <!-- Buttons at the top right corner -->
    <div class="button-container">
      <button class="button" onclick="copyEmail()">&#x29C9; Copy Email</button>
      <button class="button" onclick="mailTo()">@ Email Me</button>
    </div>
  </div>
</body>
