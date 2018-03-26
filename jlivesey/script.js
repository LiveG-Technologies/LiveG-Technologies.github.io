function isOverflown(element) {
    return $(element).prop("scrollHeight") > $(element).height();
}

function copyToClipboard(element) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function doShow(element) {
    if (isOverflown(element.parent())) {
        $(element).css("display", "none");
    }
}

function doResize(element) {
    $(element).parent().parent().toggleClass("full");
    $(element).toggleClass("full");
    setTimeout(function() {
        $(element).parent().parent().toggleClass("fullDone");
        $(element).toggleClass("fullDone");
    }, 500);
}

function copyCode(element) {
    copyToClipboard($(element).siblings("pre")[0]);
}

document.onload = function() {}