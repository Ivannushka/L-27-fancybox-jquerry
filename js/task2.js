  $('.row-img').hover(function() {
        const sizeUp = $(this).attr('src');
        $('#bigger-img').attr('src',sizeUp);
    });