document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");
    const text = "I'm Ata Gül"; 
    textElement.textContent = ""; 

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        textElement.textContent += text[i]; 
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 150); 
  });