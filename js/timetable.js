jQuery(document).ready(function() {
	"use strict";
	
	$('#calendar').fullCalendar({
		lang: 'de',
		firstDay: 1,
		defaultView: 'agendaWeek',
		header: {
			left: 'prev, today, next',
			center: 'title',
			right: 'agendaWeek, agendaDay'
		},
		editable: true,
		events: [
			// Example
			/*{	title: 'Morning Flow', //title of class
				start: '10:00', //starts at 10 on monday
				end:   '27:00', //24+3 is handled correctly.
				dow: [1] //repeat on Mondays
			},*/
			// Monday
			{	
				title: 'Morning Flow', //title of class
				start: '09:00', //time of start - Monday 9.00
                end: '10:00', // time of end - Monday 10.00
				dow: [1, 3, 5, 0]
			},
			{
				title: 'Ashtanga Yoga',
				start: '10:00', //time of start - Monday 10.00
                end: '11:00', // time of end - Monday 11.00
                color: '#DEFFDB',
				dow: [1, 3, 5, 0]
			},
			{
				title: 'Kundalini Yoga',
				start: '11:00', //time of start - Monday 11.00
                end: '12:00', // time of end - Monday 12.00
                color: '#FFEAC4',
				dow: [1, 3, 5, 0]
			},
			{	
				title: 'Hatha Yoga\n Trainer: Joanna Doe', //title of class
				start: '12:00', //time of start - Monday 9.00
                end: '13:00', // time of end - Monday 10.00
				color: '#FFEAE0',
				dow: [1, 3, 5, 0]
			},
			{
				title: 'Ashtanga Yoga',
				start: '13:00', //time of start - Monday 10.00
                end: '14:00', // time of end - Monday 11.00
                color: '#DEFFDB',
				dow: [1, 2, 3, 4, 5, 6, 0]
			},
			{
				title: 'Kundalini Yoga',
				start: '14:00', //time of start - Monday 11.00
                end: '15:00', // time of end - Monday 12.00
                color: '#FFEAC4',
				dow: [1, 3, 5, 0]
			},
			{	
				title: 'Kundalini Yoga', //title of class
				start: '09:00', //time of start - Tuesday 9.00
                end: '10:00', // time of end - Tuesday 10.00
                color: '#FFEAC4',
				dow: [2, 4, 6] // repeat on Tue, Thu, Sat
			},
			{
				title: 'Yoga Dance',
				start: '11:00', //time of start - Tuesday 11.00
                end: '12:00', // time of end - Tuesday 12.00
                color: '#D8FFF0',
				dow: [2, 4, 6]
			},

		],
		slotLabelFormat:"HH:mm",
		columnFormat: 'dddd',
		contentHeight: 'auto',
		timeFormat: {
			agenda: 'H:mm'
		},		
	});
	$('#calendar').fullCalendar('today');
});