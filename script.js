function show(icon) {
  var popupId = icon.parentNode.id.replace(/icon/i, 'popup');
  document.getElementById(popupId).style.display = 'block';
}

function hide(icon) {
  var popupId = icon.parentNode.id.replace(/icon/i, 'popup');
  document.getElementById(popupId).style.display = 'none';
}
