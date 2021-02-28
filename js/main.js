var sidebar = document.getElementById('sidebar');
var body = document.getElementById('body');

function toggleSidebar() {
  if (sidebar.style.width == '0px' && body.style.marginRight == '0px') {
    sidebar.style.width = '250px';
    body.style.marginRight = '250px';
  } else {
    sidebar.style.width = '0';
    body.style.marginRight = '0';
  }
}
