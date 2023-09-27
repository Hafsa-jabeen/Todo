import { Component } from '@angular/core';
import { Item } from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  filter: "all" | "active" | "done" = "all";
  allItems = [
    {description: "Work on article", done: true },
    {description: "Send outreach emails", done: false},
    {description: "Post on socials", done: false},
    {description: "Create a content plan", done: true}, 
  ];

  get items() {
    if (this.filter=="all") {
      return this.allItems;
    }
    return this.allItems.filter((item)=>
    this.filter=="done" ? item.done:
    !item.done
    );
  }
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
  
}



