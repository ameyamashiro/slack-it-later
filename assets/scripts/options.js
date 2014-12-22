(function() {

    var restoreAll = function() {
        document.getElementById('request_url').value = localStorage.getItem('request_url');
        document.getElementById('channel').value = localStorage.getItem('channel');
        document.getElementById('username').value = localStorage.getItem('username');
        document.getElementById('text').value = localStorage.getItem('text');
    };
    
    var saveAll = function() {
        localStorage.setItem('request_url', document.getElementById('request_url').value);
        localStorage.setItem('channel', document.getElementById('channel').value);
        localStorage.setItem('username', document.getElementById('username').value);
        localStorage.setItem('text', document.getElementById('text').value);
    };

    var init = function() {
        restoreAll();
        document.getElementById('save').addEventListener('click', saveAll);
    };

    init();

})();
