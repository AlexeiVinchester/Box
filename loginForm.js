export const loginHtml = `
<div class="container-input flexColumn">
    <div class="button-container">
        <button id="login-button" type="button" class="toggle-button">Log In</button>
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

