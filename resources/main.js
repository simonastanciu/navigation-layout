$(function () {
    const menuItem = $('.menu-item');
    const pageContent = $('.content');
    const yourOrders = $('ul').find('li:nth-child(1)');
    
    ////////////////////////////////////
    menuItem.click(function() {
        pageContent.addClass('hidden');
        $("." + $(this).data('content')).removeClass('hidden');
        // $(`.${$(this).data('content')}`).removeClass('hidden');
        menuItem.removeClass('selected-item');
        $(this).addClass('selected-item');
        $('.show-header').show();
    });
    ////////////////////////////////////

    yourOrders.click(function() {
        $('.show-header').hide();
    });

    $('#orderDetailsBtn').click(function () {
        $('#orderDetails').removeClass('hidden');
        $('#yourOrders').addClass('hidden');
        $('.show-header').show();
    });
    console.log ('order-link', $('#orderDetailsBtn'));

    $('#saveButton').on('click', function() {
    });
})