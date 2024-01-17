export const loginHtml = `
<div class="container-input flexColumn">
    <div class="button-container">
        <button id="login-button" type="button" class="toggle-button active-button">Log In</button>
        <button id="registration-button" type="button" class="toggle-button">Register</button>
    </div>
    <div class="form-container" id="form-container">
        <form id="login-form" class="flexColumn">
            <div class="flexColumn">
                <div class="input-container">
                    <input type="text" id="login-username" class="input-field" placeholder="Username" required>
                    <span id="login-username-error"></span>
                </div>
                <div class="input-container">
                    <input type="text" id="login-password" class="input-field" placeholder="Password" required>
                    <span id="login-password-error"></span>
                </div>
                <button type="submit" id="login-submit-button" class="submit-button">Log In</button>
            </div>
        </form>
    </div>
</div>
`;

/* 
    здесь нужно создать класс
    у него будет два метода
    один метод подменяет страничку
    второй метод добавляет обработчики
    так же нужно будет сделать и для формы регистрации

    добавить local Storage
    создать папку servises
    в ней создать файл user.servises.js
    посмотреть у гугле, как с этим работать и как это делается

    исправить работу с изменением цвета кнопок toggle
    лучше указать сразу в форме, это проще и правильнее, ибо
    когда все равно наши функции изменения цвета идут в обработчик, 
    который назначен только на однин входной контеййнер, поэтмоу цвет потом и не меняется
*/

function onInit(){

}

