const background = document.querySelector('.background');
      for (let i = 0; i < 150; i++) {
        const shape = document.createElement('div');
        const type = Math.random() < 0.5 ? 'point' : 'triangle';
        shape.classList.add('shape', type);
        shape.style.top = Math.random() * 100 + '%';
        shape.style.left = Math.random() * 100 + '%';
        const duration = Math.random() * 4 + 2;
        shape.style.animationDuration = duration + 's';
        const delay = Math.random() * duration;
        shape.style.animationDelay = -delay + 's';
        background.appendChild(shape);
    }