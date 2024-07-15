document.getElementById('fillFormButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: fillForm
      });
    });
  });
  
  function fillForm() {
    const predefinedValues = {
      "input[name='name']": "John Doe",
      "input[name='email']": "johndoe@example.com",
      "input[name='phone']": "123-456-7890"
      // Add more fields as needed
    };
  
    for (const selector in predefinedValues) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.value = predefinedValues[selector];
      });
    }
  }