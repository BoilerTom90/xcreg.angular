import { Component, OnInit } from '@angular/core';

interface EditorInfo {
  filename: string;
  isActive: boolean;
}

@Component({
  selector: 'app-froala-demo',
  templateUrl: './froala-demo.component.html',
  styleUrls: ['./froala-demo.component.css']
})
export class FroalaDemoComponent implements OnInit {

  public editors : EditorInfo[] = [
    {filename: "file1.html", isActive: true},
    {filename: "file2.html", isActive: false},
    {filename: "file3.html", isActive: false},
    {filename: "file4.html", isActive: false},
    {filename: "file5.html", isActive: false}
  ]

  public froalaOptions: Object = {
    height: "500px",
    width: "500px"
  }
  constructor() { }

  ngOnInit() {
  }

}
