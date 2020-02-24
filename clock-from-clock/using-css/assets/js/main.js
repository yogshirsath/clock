function applyTime(prefix, time) {
    var digit = time % 10;
    $('[data-' + prefix + '="digit"]').attr('data-digit', digit);
    var tenth = Math.floor(time / 10);
    $('[data-' + prefix + '="tenth"]').attr('data-digit', tenth);
}
function updateClock() {
    var date = new Date();
    applyTime('seconds', date.getSeconds());
    applyTime('minutes', date.getMinutes());
    applyTime('hours', date.getHours());
}
$(document).ready(function() {
    updateClock();
    setInterval(function() {
        updateClock();
    }, 1000);
});