import { Component } from '@angular/core';

@Component({
    // selector: 'app-server', /*ini selector tag*/
    //selector: '[app-server]', /*ini selector property*/
    // selector: '.app-server', /*ini selector class*/
    selector: 'app-server', 
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverID = 10;
    serverStatus = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }
    geColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}
