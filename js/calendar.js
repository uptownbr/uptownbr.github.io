function showReserve() {
    console.log('reservation');
    $('.reserve').toggleClass('show');
}

$(document).mouseup(function (e) {
    if ($('.reserve').hasClass('show')) {
        var container = $("#bookingBox");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $('.reserve').toggleClass('show');
        }
    }
});

function showCal() {

    // page is now ready, initialize the calendar...
    if ($('#calendar').hasClass('hidden')) {
        $('#calendar').toggleClass('hidden');
    }
    $('#calendar').fullCalendar({
        height: 750,
        businessHours: [ // specify an array instead
        {
            dow: [1, 2, 3, 7], // Monday, Tuesday, Wednesday
            start: '11:00', // 11am
            end: '23:00' // 11pm
        },
        {
            dow: [4, 5, 6], // Thursday, Friday, Saturday
            start: '11:00', // 11am
            end: '02:00' // 2am
        },
        {
            dow: [7], // Sunday
            start: '11:00', // 11am
            end: '23:00' // 11pm
        }
        ],
        dayClick: function (date, jsEvent, view) {

            console.log('Clicked on: ' + date.format());
            //alert('Current view: ' + view.name);
            // Remove Background Color
            $('td').removeClass('selected');
            // Change Background Color
            $(this).addClass('selected');
            // Hide calendar 
            $('#calendar').toggleClass('hidden');
            // Show input forms
            $('.input-group').toggle();
            $('#reservation').toggle();

            // Show date picked           
            console.log(Date.parse(date.format()));
            //$('#date').attr("placeholder", Date.parse(date));
        }
    });
    $('.input-group').toggle();
    $('#reservation').toggle();
};