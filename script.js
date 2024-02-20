function showStudentContent() {
    document.getElementById('studentContent').style.display = 'flex';
    document.getElementById('studentContent').style.width = '100%';
    document.getElementById('studentContent').style.paddingTop = '75px';
    document.getElementById('studentContent').style.justifyContent = 'space-between';
    document.getElementById('studentContent').style.flexDirection = 'row';
    document.getElementById('studentContent').style.borderBottomStyle = '15px solid #ffff';
    document.getElementById('juniorContent').style.display = 'none';
}

function showJuniorContent() {
    document.getElementById('studentContent').style.display = 'none';
    document.getElementById('juniorContent').style.display = 'flex';
    document.getElementById('juniorContent').style.width = '100%';
    document.getElementById('juniorContent').style.paddingTop = '75px';
    document.getElementById('juniorContent').style.justifyContent = 'space-between';
    document.getElementById('juniorContent').style.flexDirection = 'row';
}

function showKzContent() {
    document.getElementById('kzContent').style.display = 'flex';
    document.getElementById('kzContent').style.flexWrap = 'wrap';
    document.getElementById('kzContent').style.gap = '1px';
    document.getElementById('kzContent').style.justifyContent = 'start'
    document.getElementById('worldContent').style.display = 'none';
}

function showWorldContent() {
    document.getElementById('worldContent').style.display = 'flex';
    document.getElementById('worldContent').style.flexWrap = 'wrap';
    document.getElementById('worldContent').style.gap = '1px';
    document.getElementById('kzContent').style.justifyContent = 'start';    
    document.getElementById('kzContent').style.display = 'none';
}