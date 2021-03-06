// Media uploader script
jQuery(document).ready(function($) {

    var custom_uploader;
 
     $('.uploader .button').click(function(e) {
 
        e.preventDefault();
		var attrib = '#'+$(this).parent().find('.attrib').val();
		var imgurl = '#'+$(this).parent().find('.uploaded-image').attr('id');
 
        //Extend the wp.media object
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader.on('select', function() {
            attachment = custom_uploader.state().get('selection').first().toJSON();
            $(attrib).val(attachment.id);
			$(imgurl).attr('src', attachment.sizes.thumbnail.url);
			$(imgurl).show();
			$(attrib).parent().find('.placeholder').hide();
			$(attrib).parent().find('.closer').show();
        });
 
        //Open the uploader dialog
        custom_uploader.open();
 
    });


	$('.uploader .closer').hover(function(){
		
		$('.hovermsg',this).show();
		
	}, function(){
		
		$('.hovermsg',this).hide();
		
	});
	 
	 
	 

	// Clear the uploaded picture with the "X" icon
	$('.uploader .closer').click(function(){

		var attrib = '#'+$(this).parent().parent().find('.attrib').val();
		var imgurl = '#'+$(this).parent().find('.uploaded-image').attr('id');
		$(attrib).val('');
		$(imgurl).attr('src', '');
		$(this).parent().find('.placeholder').show();
		$(this).hide();
	
	});
	
 	
});



// Color picker script
jQuery(document).ready(function($){
	
    $('.nuts-color-field').wpColorPicker();
	
});



// Tabs in the Theme Options
jQuery(document).ready(function($){
	
    $('#nuts-settings-tabs').tabs();
	
});
