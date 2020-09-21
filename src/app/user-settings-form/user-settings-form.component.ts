import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  // create original data set so that you can work with a copy (userSettings)
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings : UserSettings = {...this.originalUserSettings};

  constructor(private dataServivce: DataService) { }

  ngOnInit() {
  }

  // onBlur is for when a control loses focus
  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  // onSubmit is for when you click on the submit button
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.dataServivce.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('success: ', result),
      error => console.log('error: ', error)
    );
  }

}
