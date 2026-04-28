---
layout: default
title: Ji Hann Hong | Resume
permalink: /resume/
hide_header: true
---

# Resume

## Summary
Hello! I am a systems engineer with a background in security, software, and hardware. I am interested in reverse engineering, designing, and making. I aim to be a well-rounded engineer.

## Skills
- **Languages & Frameworks:** Python, TypeScript, React
- **Tools & Platforms:** Git, Docker, AWS, Linux
- **Certifications:** CompTIA Security+, Google Cybersecurity Certificate
- **Other:** PCB Design (KiCad), 3D Printing, Embedded Systems

## Experience

### Software Engineer II — Dell Technologies
*February 2021 – Present · Arlington, VA*

- Led the development lifecycles for 2 security application products
	- Stack: SecurID (RSA), OpenID Connect (SSO), RxJava, Docker, Linux, Postgress, SQLite, Python
- Invented a testing application which enabled a new paradigm of testing (emulation)
- Rebuilt our compliance application to automate vulnerability scanning, management, and reporting
- Developed a FQDN/DNS feature enhancement for existing LDAP support
- Owned and supported various uncategorized needs in security development
	- Memory leaks, SNI PKI, Web Security Scanning


### Teaching Assistant — Rensselaer Polytechnic Institute
*August 2018 – May 2019 · Troy, NY*

- Provided 1-on-1 teaching assistance for debugging embedded C hardware and software, as well as fundamentals in NX, C++, Python, and Matlab, which helped students improve their understanding in these courses

### Computer Engineering Intern — Parsons Corporation
*June 2018 – December 2018*

- Implemented and documented improvements to an offense-oriented toolkit by learning and applying knowledge in cryptography, networking, and security, which enabled more effective mission completion for clients

### Computer Science Intern — KeyW Corporation
*December 2016 – January 2017*

- Designed a radio-controlled tank game at SchmooCon to engage 2,000 attendees. Engineered 3D-printed vertical joysticks, corrected controller offset in software, and designed tank audio and UI software, which produces a hands-on experience to raise KeyW's visibility


---

## Projects

### E Ink Playing Card
*[Python · Raspberry Pi · KiCad · FreeCAD]*

![E Ink PCB](/assets/images/e-ink-pcb.jpg)

![E Ink Display](/assets/images/e-ink-display.jpg)

- This was my cross-displicine exploration of creating a full stack electronic product
- Designed, manufactured a PCB that drives a Waveshare display unit
- Created a rendering software to dither general images to 3 colors

### Photogrammetric 3D Model
*[Google Earth · PolyCam · Blender · Bambu Studio]*

![House 3D Model](/assets/images/house-3d-model.jpg)

![House 3D Print](/assets/images/house-3d-print.jpg)

- This was my cross-displicine exploration of creating a 3D model
- Composed a 3D photogrammetric capture of Google Earth screenshots
- Cleaned the model in Blender for color, mesh violations, and aesthetics
- Printed on a Bambu P2S 

---

## Education

### M.S. Computer and Systems Engineering — Rensselaer Polytechnic Institute 
*January 2020 – December 2020* 

### B.S. Computer and Systems Engineering — Rensselaer Polytechnic Institute
*August 2016 – December 2019*

- GPA: 3.65/4.0
- Relevant coursework, honors, or activities *(optional)*

---

## Certifications

| Credential | Issuer | Date |
|---|---|---|
| CompTIA Security+ (SY0-701) | CompTIA | March 2026 |
| Foundations of Cybersecurity | Google | March 2026 |
| AWS Certified Cloud Practitioner | Amazon Web Services (AWS) | Nov 2025 | 
| Registered Scrum Master | Scrum Inc. | April 2025 | 
| Registered Product Owner |  Scrum Inc. | April 2025 |

# PDF Version

<style>
  /* Container for the PDF viewer */
  .pdf-container {
    width: 100%;
    padding: 0 10px; /* Small padding for mobile */
    box-sizing: border-box;
  }

  /* PDF viewer iframe styling */
  .pdf-viewer {
    width: 100%;
    height: 80vh; /* 80% of the viewport height */
    border: none;
  }

  /* Additional styling for smaller screens */
  @media (max-width: 768px) {
    .pdf-container {
      padding: 0 5px;
    }
    .pdf-viewer {
      height: 70vh; /* Smaller height on mobile for better scrolling */
    }
  }

  /* Dark mode styling for iframe */
  @media (prefers-color-scheme: dark) {
    .pdf-viewer {
      filter: invert(1) hue-rotate(180deg);
    }
  }

</style>

<div class="pdf-container">
  <iframe src="/Ji_hann_Hong_Resume_Redacted_2024.pdf" class="pdf-viewer"></iframe>
</div>
