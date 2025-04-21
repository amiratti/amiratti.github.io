function makeDraggable(className) {
    const elements = document.querySelectorAll(`.${className}`);

    elements.forEach(el => {
      el.style.position = 'absolute';

      let offsetX = 0, offsetY = 0, initialX = 0, initialY = 0;

      const dragMouseDown = (e) => {
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;

        document.addEventListener('mousemove', elementDrag);
        document.addEventListener('mouseup', closeDragElement);
      };

      const elementDrag = (e) => {
        e.preventDefault();
        offsetX = initialX - e.clientX;
        offsetY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;

        let newTop = el.offsetTop - offsetY;
        let newLeft = el.offsetLeft - offsetX;
        const paddingX = window.innerWidth * 0.05; 
        const paddingY = window.innerHeight * 0.05;

        const maxLeft = window.innerWidth - el.offsetWidth - paddingX;
        const minLeft = paddingX;

        newLeft = Math.max(minLeft, Math.min(maxLeft, newLeft));
        el.style.left = newLeft + "px";
        el.style.top = newTop + "px";
      };

      const closeDragElement = () => {
        document.removeEventListener('mouseup', closeDragElement);
        document.removeEventListener('mousemove', elementDrag);
      };

      el.addEventListener('mousedown', dragMouseDown);
    });
  }

  makeDraggable('chair');