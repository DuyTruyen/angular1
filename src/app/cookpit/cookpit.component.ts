import { Component, OnInit,EventEmitter,Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {
  @Output() svCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() bluePrintCreated=new EventEmitter<{serverName:string, serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput) {
    this.svCreated.emit({
      serverName:nameInput.value,
      serverContent:nameInput.value

    })
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(nameInput) {
    this.bluePrintCreated.emit({
      serverName:nameInput.value,
      serverContent:nameInput.value

    })
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  }
}
