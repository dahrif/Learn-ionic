import { Component } from '@angular/core';
import {LoadingController, ToastController, AlertController} from '@ionic/angular'
import { text } from 'express';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingCtrl : LoadingController, private toastCtrl : ToastController, private alertCtrl : AlertController) {}

  async load(){
   let loading = await this.loadingCtrl.create({
      message: "Pease wait ...",
      duration: 5000
    });

      loading.present();

  }


  async toast(){
    let toast = await this.toastCtrl.create({
      message: "Done",
      duration: 3000,
      position: 'middle',
      color: "success",
      buttons: [
        {
          role: "cancel",
          icon: "close",
          handler: () => {
            console.log("Merci");
            
          }
        }
 
      ]
    });

    toast.present();
  }


  async alert(){
    let alert = await this.alertCtrl.create({
      header: "Subscribe",
      subHeader: "Please subscribe to newsletter",
      inputs : [
        {
          name: "name",
          type: "text",
          placeholder : "Name"
        },
        {
          name: "email",
          type: "email",
          placeholder : "email"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: () =>{
            console.log("Cancel");
          }
        },
        {
          text: "Subscribe",
          handler: (data) =>{
            console.log(data);
            
          }
        },
      ]
    });

    alert.present();
  
  }

}