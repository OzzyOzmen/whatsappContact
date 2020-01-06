//<script type="text/javascript">
(function () {
    var options = {
    whatsapp: "+90XXXXXXX", // Contact Number
    call_to_action: "Hello ! How can i help you today?",
    position: "right", 
    };
    var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();

//</script>




