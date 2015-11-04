var toggle = document.getElementById('toggle');
var nav = document.getElementsByTagName('nav')[0];

toggle.addEventListener("click", function(){
  toggleClassName(toggle, 'active');
  toggleClassName(nav, 'active');
});

function toggleClassName(el, className) {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(' ');
  }
}
