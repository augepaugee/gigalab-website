# Chat Widget Test Questions

Use these questions to test the chat widget functionality:

## Test Set 1: Basic Questions
1. "Hello!"
2. "Who are you?"
3. "What services do you offer?"
4. "How much does it cost?"
5. "How can I contact you?"

## Test Set 2: Company Information
1. "Tell me about your company"
2. "Where are you located?"
3. "Who is on your team?"
4. "What are your business hours?"
5. "Why should I choose you?"

## Test Set 3: Technical Questions
1. "What technologies do you use?"
2. "What's your development process?"
3. "How long does a project take?"
4. "Do you offer support after launch?"
5. "What industries do you work with?"

## Test Set 4: Pricing & Budget
1. "How much for a website?"
2. "What's your pricing?"
3. "Can I get a quote?"
4. "Is it expensive?"
5. "What's the budget range?"

## Test Set 5: Getting Started
1. "How do I get started?"
2. "What's the first step?"
3. "Can I schedule a consultation?"
4. "I want to start a project"
5. "How do I begin?"

## Test Set 6: Quality & Reliability
1. "Do you guarantee quality?"
2. "Are you reliable?"
3. "Can I trust you?"
4. "What about quality assurance?"
5. "Do you have experience?"

## Test Set 7: Maintenance & Support
1. "Do you offer maintenance?"
2. "What about ongoing support?"
3. "Will you update my website?"
4. "24/7 support?"
5. "What happens after launch?"

## Test Set 8: Portfolio & Past Work
1. "Show me your work"
2. "Do you have a portfolio?"
3. "Any examples?"
4. "Previous projects?"
5. "What have you built?"

## Test Set 9: Lithuanian Language (LT)
1. "Labas!"
2. "Kas j?s esate?"
3. "Kokios j?s? paslaugos?"
4. "Kiek tai kainuoja?"
5. "Kaip susisiekti?"

## Expected Behavior

? All questions should receive relevant, helpful responses
? Pricing questions should mention **team@giggalab.com**
? Contact questions should provide email and 24-hour response time
? Company questions should highlight the mission and values
? Technical questions should mention specific technologies
? Default response should handle unexpected questions gracefully

## Edge Cases to Test

1. Random text: "asdfghjkl" ? Should give default response
2. Very long message ? Should still respond appropriately
3. Multiple questions: "What do you do and how much?" ? Should pick up on first keyword
4. Typos: "servises" or "prise" ? May not match, gives default response
5. Mixed language: "What is kaina?" ? Should work for either language keyword

---

**Note:** The chatbot uses keyword matching, so responses are triggered by specific words in the user's message. Multiple keywords can trigger the same response category.
