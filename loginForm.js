export const loginHtml = `
    <form id="login-form" class="flexColumn">
        <div class="flexColumn">
            <div class="input-group">
                <input type="text" id="login-username" class="input-field" placeholder="Username" required>
                <span id="login-username-error"></span>
            </div>
            <div class="input-group">
                <input type="text" id="login-password" class="input-field" placeholder="Password" required>
                <span id="login-password-error"></span>
            </div>
            <button type="submit" id="login-submit-button" class="submit-button">Log In</button>
        </div>
    </form>
`;

