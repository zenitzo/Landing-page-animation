window.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing");
  const words = ["engineer( )", "designer( )", "creative( )", "developer( )"];
  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      typingElement.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      // After typing completes, show the blinking cursor
      typingElement.classList.add("blink-cursor");
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      wordIndex++;
      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
      setTimeout(type, 100);
    }
  }

  type();
});

// const words = ["engineer( )", "designer( )", "creative( )", "developer( )"];
