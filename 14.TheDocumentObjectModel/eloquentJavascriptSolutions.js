<style>body { min-height: 400px }</style>
<img src="img/cat.png" id="cat" style="position: absolute">
<img src="img/hat.png" id="hat" style="position: absolute">
<img src="img/hat.png" id="hat2" style="position: absolute">

<script>
  let cat = document.querySelector("#cat");
  let hat = document.querySelector("#hat");

  let angle = 0;
  let lastTime = null;
  function animate(time) {
    if (lastTime != null) angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 40 + 140) + "px";
    cat.style.left = (Math.cos(angle) * 200 + 330) + "px";
    hat.style.top = (Math.sin(angle + Math.PI) * 40 + 140) + "px";
    hat.style.left = (Math.cos(angle + Math.PI) * 200 + 330) + "px";
    hat2.style.top = (Math.sin(angle) * 50 + 90) + "px";
    hat2.style.left = (Math.cos(angle) * 200 - Math.cos(angle) * 20 + 340) + "px";
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>