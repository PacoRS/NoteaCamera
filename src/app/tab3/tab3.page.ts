import { Component, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions, Photo } from '@capacitor/camera';
import { IonToggle } from '@ionic/angular';
import { Storage, ref, uploadBytes } from '@angular/fire/storage'
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public image: any;
  camera: any;
  console: any;
  uploadPercent: any;
  downloadURL: any;

  constructor(private storage: AngularFireStorage) {

  }

  public async hazFoto() {
    let options: ImageOptions = {
      resultType: CameraResultType.Uri,
      allowEditing: false,
      quality: 90,
      source: CameraSource.Camera
    }
    let result: Photo = await Camera.getPhoto(options);
    this.image = result.webPath;

  }
 /* uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const ref = this.storage.ref(filePath);
    const task = ref.putString(file);
  }
  /*public async sacarCamera() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetwidth: 1024,
      correctorientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
      this.image = "data:image/jpeg;base64," + resultado;
    }).catch(error => {
      console.log(error);
    })
  }*/
}

function finalize(arg0: () => import("rxjs").Observable<any>): import("rxjs").OperatorFunction<import("firebase/compat").default.storage.UploadTaskSnapshot, unknown> {
  throw new Error('Function not implemented.');
}

