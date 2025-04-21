function gradeQuiz() {
    const answers = {
      q1: 'b',
      q2: 'b',
      q3: 'b'
    };
    let score = 0;
    for (let q in answers) {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === answers[q]) {
        score += 1;
      }
    }
  
    // Convert to percentage
    const percent = Math.round((score / 3) * 100);
  
    // Hide form, show result
    document.getElementById('quiz-form').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
  
    // Update progress bar
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = percent + '%';
  
    // Color logic
    if (percent < 40) {
      progressBar.style.backgroundColor = '#ef4444'; // red
      document.getElementById('feedback').textContent = "Your smart home is at risk. Let's fix that!";
    } else if (percent < 70) {
      progressBar.style.backgroundColor = '#f59e0b'; // yellow
      document.getElementById('feedback').textContent = "You're on the right track. A few tweaks could boost your security.";
    } else {
      progressBar.style.backgroundColor = '#10b981'; // green
      document.getElementById('feedback').textContent = "Nice job! Your IoT setup is looking secure.";
    }
  }
  
  function toggleCollapse(id, btn) {
    const content = document.getElementById(id);
    const isOpen = content.classList.contains('open');
    
    content.classList.toggle('open');
    btn.classList.toggle('active');
  
    // If closing, remove padding after animation
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
  
  function toggleAll() {
    const contents = document.querySelectorAll('.collapse-content');
    const buttons = document.querySelectorAll('.collapse-btn');
    const expandAll = document.querySelector('button[onclick="toggleAll()"]');
  
    const isAnyClosed = Array.from(contents).some(c => !c.classList.contains('open'));
  
    contents.forEach(c => {
      if (isAnyClosed) {
        c.classList.add('open');
        c.style.maxHeight = c.scrollHeight + "px";
      } else {
        c.classList.remove('open');
        c.style.maxHeight = null;
      }
    });
  
    buttons.forEach(b => {
      if (isAnyClosed) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  
    expandAll.textContent = isAnyClosed ? "Collapse All" : "Expand All";
  }
  