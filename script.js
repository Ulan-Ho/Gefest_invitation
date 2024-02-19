async function mainInvitation(nameUser, numberUser) {
    nameUser = prompt(`Приветствую! Меня зовут Гебрион, я твой проводник в мир программирования! 
Давай познакомимся!
Как тебя зовут?`);
    
    alert(`Привет ${nameUser}`)

    numberUser = +prompt(`Можешь дать свой номер телефона? Обещаю не в злых умыслах`);



    alert(`Спасибо за доверие!`)
    var nameElement = document.getElementById("name");

    let numberElement = []
    
    numberElement.push({nameUser: numberUser})
    
    nameElement.textContent = nameUser;

    
    return nameUser ? 'null': null

};

mainInvitation('', '');

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
