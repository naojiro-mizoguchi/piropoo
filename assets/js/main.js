import $ from 'jquery'

export function hideElement(selector) {
    $(selector).hide()
};
export function clickAns(selector) {
    $(selector).removeClass(" zoomInUp")
    $(selector).addClass("animated heartBeat")
    setTimeout(function(){
        $(selector).removeClass(" heartBeat")
        $(selector).addClass(" zoomInUp")
    }, 1000);
}