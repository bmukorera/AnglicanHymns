//this file is for the main menu navigation

 $(document).ready(function() {
     
                $.mobile.get('navigation.html').success(function(html) {
                    $('#main_menu_list').html(html);
                });

        });



	