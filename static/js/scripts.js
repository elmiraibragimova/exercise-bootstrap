$('.btn-hide-left-panel').click(function() {
    
    var $panel = $('.navigation-panel'),
        $btnHide = $('.btn-hide-left-panel'),
        $mainSection = $('#main section.main');

    if ($panel.is(':visible')) {
        $btnHide.css("left", "0");
        $mainSection.css('padding-left', '15px');
    } else {
        $btnHide.css('left', '23%');
        $mainSection.css('padding-left', '0');
    }
    $panel.parent().toggleClass('col-md-3');
    $panel.toggle(0, fixMainPanelWidth);
});

$('.btn-hide-right-panel').click(function() {
    var $panel = $('.addition-info'),
        $btnHide = $('.btn-hide-right-panel');

    if ($panel.is(':visible')) {
        $btnHide.css('right', '0');
    } else {
        $btnHide.css('right', '23.7%');
    }
    $panel.parent().toggleClass('col-md-3');
    $panel.toggle(0, fixMainPanelWidth);
});

function fixMainPanelWidth() {
    var $rightPanel = $('.addition-info'),
        $leftPanel = $('.navigation-panel');
    var cols = 6;
    if (!$rightPanel.is(':visible')) {
        cols += 3;
    }
    if (!$leftPanel.is(':visible')) {
        cols += 3;
    }
    $('#main').removeClass('col-md-6 col-md-9 col-md-12').addClass('col-md-' + cols);
}






