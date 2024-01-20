document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.pageX + 'px'; // Set cursor position based on mouse X coordinate
    cursor.style.top = e.pageY + 'px'; // Set cursor position based on mouse Y coordinate
  });
  