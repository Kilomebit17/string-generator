import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  public isBlue: boolean
  public isDisable: boolean
  public isPalindrome: boolean
  public isDefault: boolean
  public result: any

  createRandomString(stringLength) {
    let randomString = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < stringLength; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return randomString
  }
  ngOnInit() {
    interval(3000).subscribe(() => {
      this.result = this.createRandomString(5).toLocaleLowerCase()
      if (this.result) {
        this.isDisable = false
        this.isDefault = true
      }
      if (this.result === this.result.split('').reverse().join('')) { // проверка на палиндром
        this.isPalindrome = true
      }
      if (/^\d{5}$/.test(this.result)) { // проверка на содержимое 5 цифр
        this.isBlue = true
      }
      if (/0/.test(this.result)) { // проверка на наличие нуля
        this.isDisable = true
      }
    })
  }

}
