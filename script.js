// Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ответ и выведите в консоль только тех юзеров
//  у которых в поле last_name не менее 5ти символов

// fetch('https://reqres.in/api/users?page=1')
//   .then((reqObj) => {
//     return reqObj.json();
//   })
//   .then((data) => {
//     let a = data;
//     console.log(a);
//   });



fetch('https://reqres.in/api/users?page=1')
.then(response => response.json())
.then((data) => {
 const users = data.data;
 const filtredUsers = users.filter(user => user.last_name.length >= 5)
console.log(filtredUsers);
 
});

// Сделайте запрос по адресу https://reqes.in/api/users?page=1,
//  обработайте ошибку этого запроса и выведите в консоль Не удалось загрузить данные

try {
  fetch("https://reqes.in/api/users?page=1")
    .then((resposneObj) => {
      return resposneObj.json();
    })
    .then((data) => {
      console.log(data);
    });
  alert(data.name);
} catch (e) {
  alert("Не удалось загрузить данные");
}

// Cделайте запрос https://reqres.in/api/users?page=1, ПОСЛЕ чего найдте id пользователя под именем и фамилией Emma Wong,
//  сделайте следующий запрос на https://reqres.in/api/users/${id}, ПОСЛЕ выведите данные пользователя в консоль


fetch("https://reqres.in/api/users?page=1")
.then((reqObj) => { return reqObj.json(); })
.then(({data}) => 
{ const emmaWong = data.find(({first_name, last_name}) =>
first_name == 'Emma' && last_name == 'Wong');

if (emmaWong) {
  console.log('EMMA was found!');
}
});






