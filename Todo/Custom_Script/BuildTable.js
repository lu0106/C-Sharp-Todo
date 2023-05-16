$(document).ready(function () {
    APICall();
})

function APICall() {
    $.ajax({
        url: '/ToDoes/BuildToDoTable',
        success: function (result) {
            $('#tableDiv').html(result);
        }
    })
}