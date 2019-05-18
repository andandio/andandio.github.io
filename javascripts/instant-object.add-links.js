document.addEventListener("DOMContentLoaded", function() {
  for (let i = 1; i<=101; i++) {
    let url = `url(#SVGID_${i}_)`
    let poly = ($( "polygon[fill='"+url+"']" ))
    poly.addEventListener("click", openLink);
  }
});

function openLink() {

}
