$(window).load(function() {
        setTimeout(function() {
            $("#overlay").fadeOut(500)
        }, 2e3)
    }),

    $("form").submit(function(e) {
        e.preventDefault();
    });
$("#ofer").hide();
$(".section-hack-after").hide();
$("#error").hide();
$(".section-hack-console").hide();
$(".check").hide();

$("#start").click(function() {

    var reg = /^\d+$/;
    var input_str = $('#username').val();
    chopped_str = input_str.substring(0, input_str.length - 1);
    if (!reg.test(input_str)) {
        $("#error").show();
        return;
    }
    if (($.trim(input_str) == '') || ($.trim(input_str).length < 15)) {
        $("#error").show();
    } else {
        $('.section-hack-before').addClass('animated bounceOut');
        /*$('.section-hack-before').css("padding-bottom", 215);*/
        $(".section-info").addClass('animated fadeOut');
        setTimeout(
            function() {
                $(".section-hack-before").hide();
                $(".section-info").hide();
                $(".section-hack-after").show();
                $('.section-hack-after').addClass('animated bounceInLeft')

            }, 900);


    }
});

$(document).on("click", '.klik', function(event) {
    $("#offers").hide();

    $(".check").show();

});

$("#backToOffers").click(function() {
    $(".check").hide();
    $("#offers").show();
});

$("#hack").click(function() { //klik funkcija
    $('.section-hack-after').addClass('animated bounceOut');
    setTimeout(
        function() {
            $(".section-hack-after").hide();
            $(".section-hack-console").show();
            //$('.section-info').addClass('animated bounceInRight');
        }, 600);
    $('.section-hack-console').addClass('animated bounceInLeft')

    //console////////////////////////////////////////////////////////////////////////////////
    username = $('#username').val();
    $('#container').t('<span class="consol-red-text">Intializing app...</span> <br><span class="consol-yallow-text">Performing server authentication:</span> <span class="consol-white-text">connect_to_server(8800VP9)</span> <br><span class="consol-blue-text">Successfully authenticated secure server connection.</span> <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">AES_256_Keys();</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Open_SSL_Encryption();</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Server_8800VP9_Keychain();</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Server_8800VP9_Keychain();</span>  <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">All forms were imported successfully.</span> <br><span class="consol-yellow-text">Retrieving form input information:</span> <span class="consol-white-text">kernel.forms.obtain_user_information();</span> <br><span class="consol-yallow-text">Response:</span> <span class="consol-white-text">Obtained user form input information.</span> <br><span class="consol-blue-text">IMEI:</span>' + username + '<br><span class="consol-blue-text">Injecting the information securely into encryption server:</span> <span class="consol-white-text">kernel.generator.start_process();</span> <br><span class="consol-blue-text">Encrypting request:</span> <span class="consol-white-text">kernel.open_ssl_enc(' + username + ');</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Successfully encrypted user request.</span> <br><span class="consol-blue-text">Encrypted Information:</span> <span class="consol-white-text">905c4a1b463ec35ad0354c1cs00a</span> <br><span class="consol-blue-text">Retrieving current PRS server script:</span> <span class="consol-white-text">read_PRS_server_source();</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Successfully obtained current server script.</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Successfully injected into PRS servers.</span> <br><span class="consol-blue-text">Device Unlock is available.</span> <br><span class="consol-blue-text">Unlocking</span> (' + username + ') <span class="consol-blue-text">on iCloud server.</span> <br><span class="consol-yallow-text">Initating redirect procedure. </span><br>', {
        speed: 52,
        speed_vary: false, //20 speed
        fin: function(elem) {
            $(".section-hack-console").hide();
            $(".section-info").hide();
            $('.section-offers').addClass('animated bounceInLeft');
            $("#ofer").show();
        }
    });
    //console////////////////////////////////////////////////////////////////////////////////////
});