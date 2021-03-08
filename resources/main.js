// document.addEventListener("DOMContentLoaded", function(event) {
//     const menuItems = document.getElementsByClassName('menu-item');
//     console.log('menu-item', menuItems)

//     for (let x = 0; x < menuItems.length; x++) {
//         const menuItem = menuItems[x];

//         menuItem.addEventListener('click', function() {
//             for (let y = 0; y < menuItems.length; y++) {
//                 if(menuItems[y].classList.contains('selected-item')) {
//                     menuItems[y].classList.remove('selected-item');
//                 } else {
//                     continue;
//                 }
//             }
//             menuItem.classList.add('selected-item');  

//             const dataContent = menuItem.dataset.content;
//             const pageContent = document.getElementsByClassName('content');
//             for(let z = 0; z < pageContent.length; z++) {
//                 if(pageContent[z].classList.contains('hidden')) {
//                     continue;
//                 } else {
//                     pageContent[z].classList.add('hidden');
//                 }
//             }    
//             document.getElementsByClassName(dataContent)[0].classList.remove('hidden');
//             console.log('show content', dataContent);
//         });
//     }
// });

$(function () {
    const menuItem = $('.menu-item');
    console.log('menu-item');
    const pageContent = $('.content');
    console.log('page-content');

    menuItem.click(function(e) {
        if(!$(this).data('content')) {
            pageContent.addClass('hidden');               
        } 

        $(this).removeClass('hidden');
        menuItem.removeClass('selected-item');
        $(this).addClass('selected-item');

        $('.show-header').show();
    });
    console.log($('.menu-item').data('content'));


    $('#orderDetailsBtn').click(function () {
        $('#orderDetails').removeClass('hidden');
        $('#yourOrders').addClass('hidden');
    });
    console.log ('order-link', $('#orderDetailsBtn'));


    $('#saveButton').on('click', function() {
        console.log ('button-click');
    });
})