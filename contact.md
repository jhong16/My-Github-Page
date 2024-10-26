---
layout: default
title: Ji hann Hong | Contact
---
<head>
  <style>
    /* Styling for the buttons */
    .button {
      padding: 10px 20px;
      margin: 5px;
      color: white;
      background-color: #333;
      border: none;
      cursor: pointer;
      font-size: 16px;
    }
  </style>

  <script type="text/javascript">
    // Function to obfuscate and copy email to clipboard
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
  </script>
</head>

<body>
  <!-- Display email and buttons -->
  <h2>Contact Me</h2>
  <p>Click below to copy my email or start an email message directly.</p>

  <!-- Button to copy email to clipboard -->
  <button class="button" onclick="copyEmail()">Copy Email</button>

  <!-- Button to open email client with mailto link -->
  <button class="button" onclick="mailTo()">Email Me</button>
</body>
