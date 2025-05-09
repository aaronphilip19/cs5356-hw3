document.addEventListener("DOMContentLoaded", () => {
    const dogImg = document.getElementById("dog-img");
    const dogBtn = document.getElementById("new-dog");
  
    async function fetchDog() {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        dogImg.src = data.message;
      } catch (err) {
        console.error("Failed to fetch dog image:", err);
      }
    }
  
    fetchDog();
  
    dogBtn.addEventListener("click", fetchDog);
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const dogImg = document.getElementById("dog-img");
    const dogBtn = document.getElementById("new-dog");
  
    async function fetchDog() {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        dogImg.src = data.message;
      } catch (err) {
        console.error("Failed to fetch dog image:", err);
      }
    }
  
    fetchDog();
    dogBtn.addEventListener("click", fetchDog);
  
    
    const canvas = document.getElementById("interactive-canvas");
    const ctx = canvas.getContext("2d");
  
    function resizeCanvas() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
  
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      drawCircle(x, y);
    });
  
    function drawCircle(x, y) {
      const radius = 8;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 60%)`;
      ctx.fill();
    }

    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // so the cnavas can get cleared autoamtically
      }, 10000);
  
  });
  
  
    