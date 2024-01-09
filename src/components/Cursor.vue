<template>
  <div class="cursor"></div>
</template>

<script>
export default {
  mounted() {
    // Use setTimeout to delay the execution of code inside
    // ensuring the DOM is fully constructed
    setTimeout(() => {
      const cursor = document.querySelector('.cursor');
      const iframe = document.querySelector('.restrict-iframe');

      const hideCursor = () => {
        cursor.style.display = 'none';
      };

      const showCursor = () => {
        cursor.style.display = 'block';
      };

      const isCursorOverIframe = (e) => {
        if (!iframe) return false; // Check if iframe exists
        const rect = iframe.getBoundingClientRect();
        return (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
      };

      document.addEventListener('mousemove', e => {
        if (isCursorOverIframe(e)) {
          hideCursor();
        } else {
          showCursor();
          cursor.style.top = e.clientY + 'px';
          cursor.style.left = e.clientX + 'px';
          cursor.style.zIndex = '9999';
        }
      });

      if (iframe) {
        iframe.addEventListener('mouseenter', hideCursor);
        iframe.addEventListener('mouseleave', showCursor);
      }
    }, 100); // Adjust the delay (in milliseconds) as needed
  }

</script>

<style>
.cursor {
  width: 14.5px; /* Adjust the size of the cursor */
  height: 14.5px;
  background-image: url('https://i.postimg.cc/7Lgt6Fxh/628b87a35ad06bc16f4fe050.png'); /* Replace with your image URL */
  background-size: cover; /* Adjust image size */
  background-color: transparent;
  position: fixed; /* Fix the position within the viewport */
  pointer-events: none; /* Allow mouse events to pass through */
}
</style>
