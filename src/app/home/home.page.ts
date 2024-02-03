import { Component, OnInit } from '@angular/core';

interface Event {
  title: string;
  date: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  highlightedDates = [
    {
      title: 'Event 1',
      date: '2023-07-05',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      title: 'Event 2',
      date: '2023-07-05',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      title: 'Event 3',
      date: '2023-07-20',
      textColor: 'var(--ion-color-secondary-contrast)',
      backgroundColor: 'var(--ion-color-secondary)',
    },
    {
      title: 'Event 4',
      date: '2023-07-23',
      textColor: 'rgb(68, 10, 184)',
      backgroundColor: 'rgb(211, 200, 229)',
    },
  ];

  selectedDate: any;
  filteredEvents: any;
  eventsForDate: any;

  constructor() { }

  ngOnInit() {
    this.filteredEvents = this.highlightedDates;
  }

  filterEventsByDate(event: any) {

    const selectedDate = new Date(event.detail.value);
    const timeZoneOffset = selectedDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
    const localDate = new Date(selectedDate.getTime() - timeZoneOffset);
    const formattedDate = localDate.toISOString().split('T')[0];
    console.log(formattedDate);

    this.eventsForDate = this.highlightedDates.filter((event: { date: any; }) => event.date === formattedDate);

    // Display the events
    this.eventsForDate.forEach((event: { title: any; }) => {
      console.log(event.title);
    });
  }
}