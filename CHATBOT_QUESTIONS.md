# GiggaLAB Support Chatbot - Question Guide

## Overview
The chat widget now responds to a comprehensive set of questions about the company, services, and processes. All responses include references to **team@giggalab.com** where appropriate.

---

## Supported Question Categories

### 1. **Greetings**
Keywords: `hello`, `hi`, `hey`, `labas`, `sveiki`, `good morning`, `good afternoon`, `good evening`

**Response:** Friendly greeting and offer to assist

---

### 2. **About Company**
Keywords: `about`, `who are you`, `apie`, `kas j?s`, `your company`, `giggalab`, `tell me about`, `company info`

**Response:** Introduction to GIGGALAB, mission statement, and location

---

### 3. **Location**
Keywords: `where`, `location`, `kur`, `address`, `vieta`, `based`, `office`

**Response:** Vilnius, Lithuania location and international work scope

---

### 4. **Team**
Keywords: `team`, `komanda`, `who works`, `staff`, `people`, `developers`

**Response:** Information about the team's expertise and composition

---

### 5. **Business Hours**
Keywords: `hours`, `when`, `open`, `darbo laikas`, `available`, `working hours`

**Response:** Mon-Fri, 9:00 AM - 6:00 PM (GMT+2), with email contact for urgent matters

---

### 6. **Services**
Keywords: `service`, `paslaugos`, `what do you do`, `k? darote`, `what can you`, `offer`

**Response:** Overview of web development, mobile apps, AI/ML solutions with link to Services page

---

### 7. **Pricing** ?
Keywords: `price`, `cost`, `kaina`, `kiek kainuoja`, `how much`, `pricing`, `budget`, `quote`, `biudžetas`, `estimate`, `fee`, `expensive`

**Response:** Explanation that pricing varies by project, with invitation to contact **team@giggalab.com** for custom quote

---

### 8. **Experience & Expertise**
Keywords: `experience`, `patirtis`, `expertise`, `skills`, `qualified`, `capability`

**Response:** Details about extensive experience in various technology domains

---

### 9. **Industries**
Keywords: `industr`, `sector`, `pramon?`, `client`, `work with`

**Response:** List of industries served (e-commerce, healthcare, fintech, education, etc.)

---

### 10. **Technologies**
Keywords: `technolog`, `tech stack`, `tools`, `framework`, `programming`, `languages`

**Response:** Overview of technologies used (React, Node.js, Python, cloud platforms, etc.)

---

### 11. **Process**
Keywords: `process`, `how do you work`, `metodas`, `workflow`, `approach`, `methodology`

**Response:** 4-step process: Discover ? Strategize ? Execute ? Grow

---

### 12. **Timeline**
Keywords: `how long`, `timeline`, `kiek laiko`, `duration`, `trukm?`, `time frame`, `delivery`

**Response:** Project duration ranges (2-4 weeks for simple, 2-6 months for complex) with contact info

---

### 13. **Support**
Keywords: `support`, `pagalba`, `help`, `assist`, `after launch`, `post-launch`

**Response:** 24/7 support, updates, security monitoring, and optimization services

---

### 14. **Maintenance**
Keywords: `maintenance`, `prieži?ra`, `upkeep`, `updates`, `ongoing`

**Response:** Details about maintenance services (updates, security, monitoring, enhancements)

---

### 15. **Why Choose Us**
Keywords: `why choose`, `kod?l pasirinkti`, `why you`, `what makes you`, `different`, `advantage`

**Response:** Unique value proposition - "Your success is our mission"

---

### 16. **Getting Started**
Keywords: `get started`, `start`, `prad?ti`, `begin`, `first step`, `onboard`

**Response:** Instructions to contact **team@giggalab.com** or use Contact form for free consultation

---

### 17. **Quality/Guarantee**
Keywords: `quality`, `guarantee`, `kokyb?`, `reliable`, `trust`, `assurance`

**Response:** Commitment to quality and collaborative approach

---

### 18. **Contact Information** ?
Keywords: `contact`, `kontaktai`, `email`, `reach`, `get in touch`, `susisiekti`, `phone`, `telefonas`, `call`

**Response:** Email (**team@giggalab.com**) and Contact page information with 24-hour response time

---

### 19. **Portfolio**
Keywords: `portfolio`, `work`, `darbai`, `project`, `projektas`, `example`, `previous`, `showcase`

**Response:** Invitation to check Portfolio page for recent projects

---

### 20. **Default Response**
Any other questions or messages

**Response:** Polite thank you with suggestion to contact **team@giggalab.com** or visit Contact page

---

## Key Features

? **Bilingual Support** - All responses available in English and Lithuanian
? **Multiple Keywords** - Each category recognizes various ways users might ask
? **Contact Integration** - Frequent mentions of **team@giggalab.com** for direct contact
? **User-Friendly** - Natural conversational responses
? **Comprehensive Coverage** - 20+ question categories covering all aspects of the business

---

## Example Conversations

**User:** "How much does a website cost?"
**Bot:** "Our pricing varies based on project scope and requirements. For a detailed quote tailored to your needs, please contact our team at team@giggalab.com or visit our Contact page!"

**User:** "Tell me about your company"
**Bot:** "GIGGALAB is a technology company based in Vilnius, Lithuania. We're passionate about helping businesses grow through innovative digital solutions. Our mission: Your Success Drives Our Mission!"

**User:** "What technologies do you use?"
**Bot:** "We use cutting-edge technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, Google Cloud), and more. We always choose the best tech stack for your specific needs!"

---

## Notes for Future Updates

- Bot responses can be easily updated by modifying `src/i18n/translations.js`
- Add new question categories by updating the `getBotResponse()` function in `src/components/ChatWidget.jsx`
- All responses maintain the brand voice and encourage direct contact for detailed inquiries
