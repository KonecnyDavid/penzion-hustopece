function w(url)
{
    window.open(url, "page", "menubar=yes, location=yes, status=yes, toolbar=no, scrollbars=yes, resizable=yes");
    return false;
}

function wf(url, width, height)
{
	width += 50; height += 50;
	window.open(url, 'foto', 'width='+width+', height='+height+', toolbar=no, location=no, resizable=yes, scrollbars=yes, top=100, left=100');
	return false; 
}


function change_js_input()
{
    var el = document.getElementById('js_input');
    el.value = 1;
    return true;
}

// ankety
function set_poll(html_id, poll_id)
{
    var el = document.getElementById('POLLS_answer_' + html_id);
    el.value = poll_id;
}

function send_poll(html_id)
{
    var el = document.getElementById('POLLS_form_' + html_id);
    el.submit();

    return true;
}

function trim(hodnota)
{
	if(hodnota.charAt(0) == " ") {
		hodnota = hodnota.substring(1,hodnota.length);
		hodnota = trim(hodnota);
	}
	if(hodnota.charAt(hodnota.length-1) == " ") {
		hodnota = hodnota.substring(0,hodnota.length-1);
		hodnota=trim(hodnota);
	}
	return hodnota;
}
