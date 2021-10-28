function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    chk_log();
}

let googleUser = {};
let startApp = function () {
    gapi.load('auth2', function () {
        auth2 = gapi.auth2.init({
            client_id: '281077271172-bhcu5od52gjkha6vl0539pc5kev48ana.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
        });
        attachSignin(document.getElementById('customBtn'));
        if (readCookie('G_AUTHUSER_H') == '') {
            attachSignin(document.getElementById('btn-outline-like'));
        }
    });
};

function attachSignin(element) {
    auth2.attachClickHandler(element, {},
        function (googleUser) {
            let profile = googleUser.getBasicProfile();
            sigIn(profile);
            document.getElementById('g_name').innerText = googleUser.getBasicProfile().getName();
            chk_log();
        }, function (error) {
            alert('Login dibatalkan.');
        }
    );
}

function signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        writeCookie('G_AUTHUSER_H', '', 0.5);
        writeCookie('__email', '', 0.5);
        writeCookie('__name', '', 0.5);
        writeCookie('__liked', '', 0.5);
        location.reload();
    });
}

function chk_log() {
    if (readCookie('G_AUTHUSER_H') == '') {
        $('#logout').attr("hidden", true);
    } else {
        $('#logout').attr("hidden", false);
    }
}

async function asyncStartApp() {
    await startApp();
    chk_log();
}
asyncStartApp();