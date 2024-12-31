// Set target date to next New Year
    const targetDate = new Date(new Date().getFullYear() + 1, 0, 1);

    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;

      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('countdown').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

      if (diff <= 0) {
        clearInterval(interval);
        document.getElementById('countdown').textContent = '00:00:00';
        triggerCelebration();
      }
    }

    function updateCurrentTime() {
      const now = new Date();
      document.getElementById('current-time').textContent = 
        `Beijing Time: ${now.toLocaleString('zh-CN')}`;
    }

    function createSnowflakes() {
      for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        snowflake.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        document.body.appendChild(snowflake);
      }
    }

    function createBubbles() {
      for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 4 + 4}s`;
        bubble.style.opacity = `${Math.random() * 0.4 + 0.2}`;
        document.body.appendChild(bubble);
      }
    }

    function createBalloons() {
      for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDuration = `${Math.random() * 8 + 8}s`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
        balloon.style.opacity = `${Math.random() * 0.6 + 0.4}`;
        document.body.appendChild(balloon);
      }
    }

    function triggerCelebration() {
      particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Celebration started!');
      });
      createFireworks();
      playAudio();
      showNewYearMessage();
    }

    function createFireworks() {
      for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
      }
    }

    function showNewYearMessage() {
      const message = document.createElement('div');
      message.textContent = 'Happy New Year!';
      message.style.position = 'absolute';
      message.style.top = '50%';
      message.style.left = '50%';
      message.style.transform = 'translate(-50%, -50%)';
      message.style.fontSize = '8vw';
      message.style.color = 'var(--secondary-color)';
      message.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.5)';
      message.style.animation = 'zoomIn 1s ease-out';
      document.body.appendChild(message);
      setTimeout(() => message.remove(), 3000);
    }

    function playAudio() {
      const audio = new Audio('firework.mp3');
      audio.play();
    }

    document.body.addEventListener('click', (e) => {
      for (let i = 0; i < 15; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${e.clientX}px`;
        firework.style.top = `${e.clientY}px`;
        firework.style.animationDuration = '0.5s';
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 500);
      }
    });

    particlesJS.load('particles-js', 'particles.json');
    createSnowflakes();
    createBubbles();
    createBalloons();

    const interval = setInterval(updateCountdown, 1000);
    setInterval(updateCurrentTime, 1000);
    updateCountdown();
    updateCurrentTime();
