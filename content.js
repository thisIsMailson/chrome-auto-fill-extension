const predefinedValues = {
    "input[name='name']": "John Doe",
    "input[name='email']": "johndoe@example.com",
    "input[name='phone']": "123-456-7890"
    // Add more fields as needed
  };
  
  function fillForm() {
    for (const selector in predefinedValues) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.value = predefinedValues[selector];
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", fillForm);