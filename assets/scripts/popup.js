$(function() {
    chrome.tabs.getSelected(null, function(tab) {
        var requestURL = localStorage.getItem('request_url');
        var channel    = localStorage.getItem('channel');
        var username   = localStorage.getItem('username');
        var text       = tab.title + ' : ' + tab.url;

        $.ajax({
            url: requestURL,
            type: 'post',
            data: 'payload=' + JSON.stringify({
                "channel": channel,
                "username": username,
                "text": text
            }),
            success: function() {
                console.log('success');
            },
            error: function() {
                console.log('fail');
            }
        });
    });
});
