import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {
  mode = new FormControl('over');
  constructor() { }

  ngOnInit() {
    $('#live-chat header').on('click', function() {

      $('.chat').slideToggle(300, 'swing');
      $('.chat-message-counter').fadeToggle(300, 'swing');
    });
  }

  ngAfterViewInit() {
    document.getElementById('my-input').addEventListener('keypress', (key) => {
      if ( key.keyCode === 13 ) {
        this.pushChatMessage();
      }
    });
  }

  pushChatMessage(): void {
    const imgElement = document.createElement('img');
    imgElement.src = '';
    imgElement.width = 32;
    imgElement.height = 32;

    const chatTime = document.createElement('span');
    chatTime.classList.add('chat-time');
    chatTime.innerHTML = new Date().getTime().toString();

    const nameElement = document.createElement('h5');
    nameElement.innerHTML = 'Ristyna';

    const message = document.createElement('p');
    message.innerHTML = 'Hello from the other world';

    const chatBallonContent = document.createElement('div');
    chatBallonContent.classList.add('chat-message-content');
    chatBallonContent.classList.add('clearfix');

    chatBallonContent.appendChild(chatTime);
    chatBallonContent.appendChild(nameElement);
    chatBallonContent.appendChild(message);

    const chatBallon = document.createElement('div');
    chatBallon.classList.add('chat-message');
    chatBallon.classList.add('clearfix');

    chatBallon.appendChild(imgElement);
    chatBallon.appendChild(chatBallonContent);

    document.getElementById('history').appendChild(chatBallon);

  }

}
