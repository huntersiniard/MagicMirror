/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'Schedule',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'https://calendar.google.com/calendar/ical/huntersiniard%40gmail.com/private-b10f7ee94fb7616c9a921e701c8491ab/basic.ics',
					},
					{	
						symbol: 'calendar',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics',
					},
					{
						symbol: 'calendar-school',
						url: 'https://calendar.google.com/calendar/ical/jsiniard%40students.kennesaw.edu/private-247c97c7f84cadafadc625ea1b650863/basic.ics'
					},
				],
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Elkridge,US',
				locationID: '4354256',  //ID from http://www.openweathermap.org
				appid: 'd17396889115d4015e484146258983d5'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'Elkridge,US',
				locationID: '4354256',  //ID from http://www.openweathermap.org
	            appid: 'd17396889115d4015e484146258983d5'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "CNET",
						url: "https://www.cnet.com/rss/news/"
					},
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
            		module: 'phone_notification',
            		position: 'bottom_right',
            		header: 'Phone Notifications',
            		config:{
                	accessToken: 'o.QSjvSCHh1Dihf5vdhefoMkMbxnrVPq1q',
                	numberOfNotifications: 5,
                	displayNotificationIcon: true,
                	displayMessage: true,
                	displayCount: false,
                	alert: true,
                	fade: true,
               	 	maxCharacters: 50
            		}
		},
                {
     			module: 'email',
           		position: 'bottom_left',
            		header: 'Email',
            		config:{
                		user: 'huntersiniard@yahoo.com',
                		password: 'TsunamI95183106',
                		host: 'imap.mail.yahoo.com',
                		port: 993,
                		tls: true,
                		authTimeout: 10000,
                		numberOfEmails: 5,
                		fade: true
        		}
    		},
 		{
  		  module: 'MMM-Remote-Control'
   		 // uncomment the following line to show the URL of the remote control on the mirror
   		 // , position: 'bottom_left'
   		 // you can hide this module afterwards from the remote control itself
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
