import { Component,AfterViewChecked, ElementRef, ViewChild, OnInit} from '@angular/core';
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CourseDialogComponent}  from './course-dialog/course-dialog.component'

@Component({
  providers: [ ContextMenuService ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewChecked  {
  title = 'MessageBox';
  personalInfo = {
    name : "Mike Ross",
    status : "online",
    image : "http://emilcarlsson.se/assets/mikeross.png"
  };
  contract = [{
    name : "Louis Litt",
    status : "online",
    image : "http://emilcarlsson.se/assets/louislitt.png"
  },{
    name : "Harvey Specter",
    status : "busy",
    image : "http://emilcarlsson.se/assets/harveyspecter.png"
  },{
    name : "Rachel Zane",
    status : "away",
    image : "http://emilcarlsson.se/assets/rachelzane.png"
  },{
    name : "Donna Paulsen",
    status : "online",
    image : "http://emilcarlsson.se/assets/donnapaulsen.png"
  },{
    name : "Jessica Pearson",
    status : "busy",
    image : "http://emilcarlsson.se/assets/jessicapearson.png"
  },{
    name : "Harold Gunderson",
    status : "",
    image : "http://emilcarlsson.se/assets/haroldgunderson.png"
  },{
    name : "Daniel Hardman",
    status : "",
    image : "http://emilcarlsson.se/assets/danielhardman.png"
  },{
    name : "Katrina Bennett",
    status : "busy",
    image : "http://emilcarlsson.se/assets/katrinabennett.png"
  },];
  messages = [{
    details : [
      {
        sender : 1,
        content : "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!"
      },{
        sender : 0,
        content : "When you're backed against the wall, break the god damn thing down."
      },{
        sender : 0,
        content : "Excuses don't win championships."
      },{
        sender : 1,
        content : "Oh yeah, did Michael Jordan tell you that?"
      },{
        sender : 0,
        content : "No, I told him that."
      },{
        sender : 0,
        content : "What are your choices when someone puts a gun to your head?"
      },{
        sender : 1,
        content : "What are you talking about? You do what they say or they shoot you."
      },{
        sender : 0,
        content : "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things."
      }
    ]
  },{
    details : [
      {
        sender : 1,
        content : "Hello , how are you doing?"
      },{
        sender : 0,
        content : "am fine, thanks, you?"
      }
    ]
  },{
    details : [
      {
        sender : 0,
        content : "are you there?"
      },{
        sender : 1,
        content : "yup, what's up?"
      },{
        sender : 0,
        content : "need your help"
      },{
        sender : 1,
        content : "hold on"
      }
    ]
  },{
    details : [
      {
        sender : 1,
        content : "is it ok?"
      },{
        sender : 0,
        content : "not sure."
      },{
        sender : 1,
        content : "take your time"
      }
    ]
  },{
    details : [
      {
        sender : 0,
        content : "why are you long face?"
      },{
        sender : 1,
        content : "pls leave me alone"
      }
    ]
  },{
    details : [
      {
        sender : 1,
        content : "how's it going?"
      },{
        sender : 0,
        content : "not too bad"
      },{
        sender : 0,
        content : "what about  you?"
      },{
        sender : 1,
        content : "fine"
      }
    ]
  },{
    details : [
      {
        sender : 0,
        content : "When you're backed against the wall, break the god damn thing down."
      },{
        sender : 0,
        content : "Excuses don't win championships."
      },{
        sender : 1,
        content : "Oh yeah, did Michael Jordan tell you that?"
      },{
        sender : 0,
        content : "No, I told him that."
      }
    ]
  },{
    details : [
      {
        sender : 1,
        content : "Oh yeah, did Michael Jordan tell you that?"
      },{
        sender : 0,
        content : "No, I told him that."
      },{
        sender : 0,
        content : "What are your choices when someone puts a gun to your head?"
      },{
        sender : 1,
        content : "What are you talking about? You do what they say or they shoot you."
      },{
        sender : 0,
        content : "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things."
      }
    ]
  }];
  currentSelect = 0;
  msg : string;
  replyText : string;
  imagePath : any ;
  public items = [
    { name: 'John', otherProperty: 'Foo' },
    { name: 'Joe', otherProperty: 'Bar' }
  ];
  public menuOptions = [
    {
      html: () => 'Reply',
      click: (item, $event) => {
        console.log("delete message");
      },
    },
    {
      html: () => 'Delete',
      click: (item) => {
        console.log("delete message");
      },
    },
    {
      html: () => 'Delete',
      click: (item) => {
        console.log("delete message");
      },
    }
  ];

  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
  @ViewChild('scrollBottom') private scrollBottom: ElementRef;
  // @ViewChild('scrollBottom', {read: ElementRef})
  // scrollBottom: ElementRef;

  constructor(private contextMenuService: ContextMenuService,private dialog: MatDialog) {}
  
 
  // public onContextMenu($event: Event, item: any): void {
  //   this.contextMenuService.show.next({
  //     actions: this.menuOptions,
  //     event: $event as IContextMenuClickEvent,
  //     item: item,
  //   });
  //   $event.preventDefault();
  // }

  ngOnInit() {
    this.scrollToBottom();
  }


  ngAfterViewChecked() {        
    this.scrollToBottom();        
   } 

  onClickItem(index) {
    this.currentSelect = index;
    if(this.messages.length <= index){
      this.messages.push({
        details : [
        ]
      });
    }
    this.replyText = "";
  }

  reply(item){
    let len = this.messages[this.currentSelect].details.length;
    
    for(var i=0;i<len;i++){
      
      if((item.sender == 1)&&(item.sender == this.messages[this.currentSelect].details[i].sender)&&(item.content == this.messages[this.currentSelect].details[i].content)){
        this.replyText = '"'+item.content+'"';
      }
    }
  }

  deleteMsg(item){

    let len = this.messages[this.currentSelect].details.length;
    
    for(var i=0;i<len;i++){
      
      if((item.sender == 0)&&(item.sender == this.messages[this.currentSelect].details[i].sender)&&(item.content == this.messages[this.currentSelect].details[i].content)){
        this.messages[this.currentSelect].details.splice(i ,1);
        len --;
      }
    }
  }

  sendMsg(){
    if(this.replyText||this.msg||this.imagePath){
      var text = {
        sender : 0,
        content : this.msg,
        replied : this.replyText,
        image : this.imagePath
      };
      this.replyText = "";
      this.msg = "";
      this.imagePath = "";
      this.messages[this.currentSelect].details.push(text);
      this.scrollToBottom();      
    }

  }

  closeReply(){
    this.replyText = "";
  }

  scrollToBottom(): void {
    try {
        this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
    } catch(err) { }
  }

  addContact() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    // dialogConfig.data = {
    //   id: 1,
    //   title: 'Angular For Beginners'
    // };

    // this.dialog.open(CourseDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          if(data.name&&data.phoneNumber){
            this.contract.push({
              name : data.name,
              status : "", 
              image : data.photo
            });    
          }
        }
      }
    );  
  }

  addImage(file){
    console.log(file[0]);
    if (file[0].length === 0)
      return;

    var mimeType = file[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(file[0]); 
    reader.onload = (_event) => {
      this.imagePath = reader.result; 
    }
  }
}

