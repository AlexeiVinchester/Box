export const registrationHTML = `
<form id="registration-form" class="flexColumn">
    <div class="flexColumn">
        <div class="input-group">
            <input type="text" id="registration-username" class="input-field" placeholder="Username" required>
            <span id="registration-username-error"></span>
        </div>
        <div class="input-group">
            <input id="registration-phone" type="text" class="input-field" placeholder="User telephone" required>
            <span id="registration-phone-error"></span>
        </div>
        <div class="input-group">
            <input type="text" id="registration-password" class="input-field" placeholder="Password" required>
            <span id="registration-password-error"></span>
        </div>
        <button type="submit" id="registration-submit-button" class="submit-button">Register</button>
    </div>
</form>
`;