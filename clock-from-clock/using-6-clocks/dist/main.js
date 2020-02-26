var digits = {
    "0": [{
        //  _
        // |
        "deg": [0, 90],
        "index": [1]
    }, {
        // _
        //  |
        "deg": [90, 180],
        "index": [2]
    }, {
        // |
        "deg": [-90, 90, 90],
        "index": [3, 4]
    }, {
        // |-
        "deg": [0, -90, 90],
        "index": []
    }, {
        // -|
        "deg": [180, -90, 90],
        "index": []
    }, {
        // |_
        "deg": [0, -90],
        "index": [5]
    }, {
        // _|
        "deg": [-90, 180],
        "index": [6]
    }],
    "1": [{
        // |
        "deg": [90, 90],
        "index": [2]
    }, {
        // |
        "deg": [-90, 90, 90],
        "index": [4]
    }, {
        // |
        "deg": [-90, -90],
        "index": [6]
    }, {
        // /
        "deg": [135, 135, 135],
        "index": [1, 3, 5]
    }],
    "2": [{
        //  -
        "deg": [180, 180, 180],
        "index": [6]
    }, {
        //  -
        "deg": [0, 0, 0],
        "index": [1]
    }, {
        //  _
        // |
        "deg": [0, 90, 0],
        "index": [3]
    }, {
        // _
        //  |
        "deg": [90, 180],
        "index": [2]
    }, {
        // |_
        "deg": [0, -90],
        "index": [5]
    }, {
        // _|
        "deg": [-90, 180, -90],
        "index": [4]
    }],
    "3": [{
        //  _
        // |
        "deg": [0, 0, 0],
        "index": [1, 3, 5]
    }, {
        // _
        //  |
        "deg": [90, 180],
        "index": [2]
    }, {
        // -|
        "deg": [180, -90, 90],
        "index": [4]
    }, {
        // _|
        "deg": [-90, 180],
        "index": [6]
    }],
    "4": [{
        // _
        //  |
        "deg": [90, 180],
        "index": [2]
    }, {
        // |
        "deg": [90, 90],
        "index": [1, 2]
    }, {
        // |
        "deg": [-90, -90],
        "index": [6]
    }, {
        // -|
        "deg": [180, -90, 90],
        "index": [4]
    }, {
        // |_
        "deg": [0, -90],
        "index": [3]
    }, {
        // /
        "deg": [135, 135, 135],
        "index": [5]
    }],
    "5": [{
        //  _
        // |
        "deg": [0, 90],
        "index": [1]
    }, {
        // _
        //  |
        "deg": [90, 180, 180],
        "index": [4]
    }, {
        // -|
        "deg": [180, 180, 180],
        "index": [2]
    }, {
        // |_
        "deg": [0, -90],
        "index": [3]
    }, {
        // _|
        "deg": [-90, 180],
        "index": [6]
    }, {
        // -
        "deg": [0, 0, 0],
        "index": [5]
    }],
    "6": [{
        //  _
        // |
        "deg": [0, 90],
        "index": [1]
    }, {
        // _
        //  |
        "deg": [90, 180, 180],
        "index": [4]
    }, {
        // -|
        "deg": [180, 180, 180],
        "index": [2]
    }, {
        // |_
        "deg": [0, -90, 90],
        "index": [3, 5]
    }, {
        // _|
        "deg": [-90, 180],
        "index": [6]
    }],
    "7": [{
        //  _
        // |
        "deg": [0, 90],
        "index": [1]
    }, {
        // _
        //  |
        "deg": [90, 180],
        "index": [2]
    }, {
        // |
        "deg": [-90, 90, 90],
        "index": [4]
    }, {
        // _|
        "deg": [-90, -90],
        "index": [6]
    }, {
        // /
        "deg": [135, 135, 135],
        "index": [3, 5]
    }],
    "8": [{
        //  _
        // |
        "deg": [0, 90],
        "index": [1]
    }, {
        // _
        //  |
        "deg": [90, 180],
        "index": [2]
    }, {
        // |
        "deg": [-90, 90],
        "index": []
    }, {
        // |-
        "deg": [0, -90, 90],
        "index": [3]
    }, {
        // -|
        "deg": [180, -90, 90],
        "index": [4]
    }, {
        // |_
        "deg": [0, -90],
        "index": [5]
    }, {
        // _|
        "deg": [-90, 180],
        "index": [6]
    }],
    "9": [{
        //  _
        // |
        "deg": [0, 90],
        "index": [1]
    }, {
        // _
        //  |
        "deg": [90, 180],
        "index": [2]
    }, {
        // |-
        "deg": [0, 0, -90],
        "index": [3]
    }, {
        // -|
        "deg": [180, -90, 90],
        "index": [4]
    }, {
        // |_
        "deg": [0, 0],
        "index": [5]
    }, {
        // _|
        "deg": [-90, 180],
        "index": [6]
    }]
};
// var test = 7;
function getDigit(type, length) {
    var digit = $('<div class="digit" data-' + type + '="' + length + '"></div>');
    for(var i = 0; i < 6; i++) {
        var ticker = $('<div class="ticker"></div>');
        ticker.append('<div class="tic t1"></div>');
        ticker.append('<div class="tic t2"></div>');
        if (i == 2 || i == 3) {
            ticker.append('<div class="tic t3"></div>');
        }
        digit.append(ticker);
    }
    return digit;
}
function generateClock(container) {
    var times = ['hours', 'minutes', 'seconds'];
    var separators = 2;
    times.forEach(function(time) {
        $(container).append(getDigit(time, 'tenth'));
        $(container).append(getDigit(time, 'digit'));
        if (separators != 0) {
            $(container).append($('<div></div>').addClass('separator'));
            separators--;
        }
    });
}
function applyNumber(element, digit) {
    var parameters = digits[digit];
    parameters.forEach(function(rotation) {
        if (rotation.index.length != 0) {
            rotation.index.forEach(function(miniclock) {
                miniclock = $(element).find('.ticker:nth-child(' + miniclock + ')');
                miniclock.find('.tic.t1').css('transform', 'rotate(' + rotation.deg[0] + 'deg)').css('opacity', rotation.deg[0] != 135 ? 1 : 0);
                miniclock.find('.tic.t2').css('transform', 'rotate(' + rotation.deg[1] + 'deg)').css('opacity', rotation.deg[1] != 135 ? 1 : 0);
                if (rotation.deg.length == 3 && miniclock.find('.tic.t3')) {
                    miniclock.find('.tic.t3').css('transform', 'rotate(' + rotation.deg[2] + 'deg)').css('opacity', rotation.deg[2] != 135 ? 1 : 0);
                }
            });
        }
    });
}
function applyTime(prefix, time) {
    var digit = time % 10;
    // digit = test;
    applyNumber($('[data-' + prefix + '="digit"]'), digit);
    var tenth = Math.floor(time / 10);
    // tenth = test;
    applyNumber($('[data-' + prefix + '="tenth"]'), tenth);
}
function updateClock() {
    var date = new Date();
    applyTime('seconds', date.getSeconds());
    applyTime('minutes', date.getMinutes());
    applyTime('hours', date.getHours());
}
$(document).ready(function() {
    generateClock($('.clock'));
    updateClock();
    setInterval(function() {
        updateClock();
    }, 1000);
});
