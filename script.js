function visitorContent(id){
    document.getElementById(id).style.display = 'flex';
    document.getElementById(id).style.width = '100%';
    document.getElementById(id).style.paddingTop = '75px';
    document.getElementById(id).style.justifyContent = 'space-between';
    document.getElementById(id).style.flexDirection = 'row';
    document.getElementById(id).style.borderBottomStyle = '15px solid #ffff';
}

function manyContent(id) {
    document.getElementById(id).style.display = 'flex';
    document.getElementById(id).style.flexWrap = 'wrap';
    document.getElementById(id).style.gap = '1px';
    document.getElementById(id).style.justifyContent = 'start'
}

function showStudentContent() {
    visitorContent('studentContent');
    document.getElementById('juniorContent').style.display = 'none';
}

function showJuniorContent() {
    document.getElementById('studentContent').style.display = 'none';
    visitorContent('juniorContent');
}


function showKzContent() {
    manyContent('kzContent')
    document.getElementById('worldContent').style.display = 'none';
}

function showWorldContent() {
    manyContent('worldContent');
    document.getElementById('kzContent').style.display = 'none';
}

/*-----------------------------------form section--------------------------------------------------------------------------------------*/

document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'block';
  });
  
  function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
  }
  