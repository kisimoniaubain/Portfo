import { useEffect } from "react";

function Webscript() {
  useEffect(() => {
    function animateProgress(selector, valueSelector, endValue, color, speed) {
      const progress = document.querySelector(selector);
      const valueEl = document.querySelector(valueSelector);

      if (!progress || !valueEl) return; // prevents errors

      let startValue = 0;

      const interval = setInterval(() => {
        startValue++;
        valueEl.textContent = `${startValue}%`;
        progress.style.background = 
          // `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;
          `conic-gradient(${color} ${startValue * 3.6}deg, rgba(243, 220, 194, 0.658) 0deg)`;

        if (startValue >= endValue) clearInterval(interval);
      }, speed);
    }

    animateProgress(".html-css", ".html-progress", 90, "#fca61f", 30);
    animateProgress(".javascript", ".javascript-progress", 75, "#7d2ae8", 30);
    animateProgress(".php", ".php-progress", 35, "#20c997", 30);
    animateProgress(".reactjs", ".reactjs-progress", 55, "#3f396d", 30);

    // animateProgress(".html-css", ".html-progress", 90, "#fca61f", 30);
    // animateProgress(".javascript", ".javascript-progress", 75, "#7d2ae8", 30);
    // animateProgress(".php", ".php-progress", 80, "#20c997", 30);
    // animateProgress(".reactjs", ".reactjs-progress", 30, "#3f396d", 30);

  }, []);

  return (
    <div>
      
    </div>
  );
}

export default Webscript;