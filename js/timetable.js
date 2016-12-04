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
		minTime: "09:00:00",
		maxTime: "20:00:00",
		events: [
			// Example
			/*{	title: 'Morning Flow', //title of class
				start: '10:00', //starts at 10 on monday
				end:   '27:00', //24+3 is handled correctly.
				dow: [1] //repeat on Mondays
			},*/
			// Monday
			{	
				title: 'YOGALATES\n Tanja', //title of class
				start: '09:30', //time of start - Monday 9.30
                end: '10:30', // time of end - Monday 10.30
				dow: [1, 4]
			},
			{
				title: 'YOGALATES\n Tanja',
				start: '17:30', //time of start - Monday 10.00
                end: '18:30', // time of end - Monday 11.00
                color: '#DEFFDB',
				dow: [1]
			},
			{
				title: 'PILATES\n Tanja',
				start: '09:00', //time of start 
                end: '10:00', // time of end 
                color: '#FFEAC4',
				dow: [2]
			},
			{	
				title: 'ASHTANGA YOGA\n Tanja', //title of class
				start: '10:30', //time of start - Monday 9.00
                end: '11:45', // time of end - Monday 10.00
				color: '#FFEAE0',
				dow: [2, 6]
			},
			{
				title: 'PILATES\n Tanja',
				start: '17:30', //time of start - Monday 10.00
                end: '18:30', // time of end - Monday 11.00
                color: '#DEFFDB',
				dow: [2]
			},
			{
				title: 'YOGA',
				start: '18:45', //time of start - Monday 11.00
                end: '20:00', // time of end - Monday 12.00
                color: '#FFEAC4',
				dow: [2]
			},
			{	
				title: 'KUNDALINI YOGA\n Maria', //title of class
				start: '19:00', //time of start - Tuesday 9.00
                end: '20:30', // time of end - Tuesday 10.00
                color: '#FFEAC4',
				dow: [3] // repeat on Tue, Thu, Sat
			},
			{
				title: 'YOGA',
				start: '18:30', //time of start - Tuesday 11.00
                end: '20:00', // time of end - Tuesday 12.00
                color: '#D8FFF0',
				dow: [4]
			},
			{
				title: 'HATHA YOGA',
				start: '9:30', //time of start - Tuesday 11.00
                end: '10:45', // time of end - Tuesday 12.00
                color: '#D8FFF0',
				dow: [5]
			},
			{
				title: 'TAO YOGA\n Rita',
				start: '11:00', //time of start 
                end: '12:00', // time of end 
                color: '#DEFFDB',
				dow: [5]
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