import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {
  mode = new FormControl('over');
  sockIO: SocketIOClient.Socket;
  constructor(private _router: Router) {  }

  ngOnInit() {

    this.sockIO = io.connect('http://localhost:4322/chat');

    $('#live-chat header').on('click', function() {

      $('.chat').slideToggle(300, 'swing');
      $('.chat-message-counter').fadeToggle(300, 'swing');
    });

    this.sockIO.on('new.message', (data: any) => {
        this.pushChatMessage(data.message, data.name, data.time);
    });
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['login']);
  }

  ngAfterViewInit() {
    document.getElementById('my-input').addEventListener('keypress', (key) => {
      if ( key.keyCode === 13 ) {
        this.sockIO.emit('deliver.message', {
          name: localStorage.getItem('name'),
          message: (<HTMLInputElement>document.getElementById('my-input')).value,
          time: new Date().toLocaleTimeString()
        });
        (<HTMLInputElement>document.getElementById('my-input')).value = '';
      }
    });
  }

  openDashboard() {
    this._router.navigate(['dashboard']);
  }

  openMeteoritLands() {
    this._router.navigate(['dashboard/meteorit-lands']);
  }

  openTodayNeo() {
    this._router.navigate(['dashboard/neo-today']);
  }

  openWeeklyNeo() {
    this._router.navigate(['dashboard/neo-weekly']);
  }

  pushChatMessage(chat_msg, name, time): void {
    const imgElement = document.createElement('img');
    imgElement.src = '';
    imgElement.width = 32;
    imgElement.height = 32;

    const chatTime = document.createElement('span');
    chatTime.classList.add('chat-time');
    chatTime.innerHTML = time;

    const nameElement = document.createElement('h5');
    nameElement.innerHTML = name;

    const message = document.createElement('p');
    message.innerHTML = chat_msg;

    const chatBallonContent = document.createElement('div');
    chatBallonContent.classList.add('chat-message-content');
    chatBallonContent.classList.add('clearfix');

    chatBallonContent.appendChild(chatTime);
    chatBallonContent.appendChild(nameElement);
    chatBallonContent.appendChild(message);

    const chatBallon = document.createElement('div');
    chatBallon.classList.add('chat-message');
    chatBallon.classList.add('clearfix');

    const divider = document.createElement('hr');

    chatBallon.appendChild(imgElement);
    chatBallon.appendChild(chatBallonContent);
    chatBallon.appendChild(divider);

    document.getElementById('history').appendChild(chatBallon);

  }

}
