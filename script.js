// const nameUser = prompt(`Пожалуйта введите свое имя чтобы мы могли обращаться к вам:`);

// var nameElement = document.getElementById("name");

//   nameElement.textContent = nameUser;


function showStudentContent() {
    document.getElementById('studentContent').style.display = 'flex';
    document.getElementById('studentContent').style.width = '100%';
    document.getElementById('studentContent').style.paddingTop = '75px';
    document.getElementById('studentContent').style.justifyContent = 'space-between';
    document.getElementById('studentContent').style.flexDirection = 'row';
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
