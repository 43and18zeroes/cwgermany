import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  constructor() { }

  nameFieldValid = false;
  mailFieldValid = false;
  messageFieldValid = false;
  formDataValid = false;

  ngOnInit(): void {
  }

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    this.validateContactForm(nameField, mailField, messageField);

    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    // Todo: Animation anzeigen
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('mail', mailField.value);
    fd.append('message', messageField.value);

    await fetch('https://cwgermany.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    // Todo: Text anzeigen: Nachricht gesendet
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }

  validateContactForm(nameField, mailField, messageField) {
    this.validateName(nameField);
    this.validateMail(mailField);
    this.validateMessage(messageField);
  }

  validateName(nameField) {
    if (nameField.value.length >= 2 && nameField.value.length <= 50) {
      this.nameFieldValid = true;
      console.log("VALID NAME");
    } else {
      this.nameFieldValid = false;
      console.log("INVALID NAME");
    }
  }

  validateMail(mailField) {
    if (mailField.value.includes("@")) {
      this.mailFieldValid = true;
      const mailFieldArray = mailField.value.split("@");
      const mailFieldArray0 = mailFieldArray[0];
      const mailFieldArray1 = mailFieldArray[1];
      const mailFieldArray1Assist = mailFieldArray1;
      if (mailFieldArray0.length >= 2 && mailFieldArray1.includes(".")) {
        const mailFieldAfterAtArray = mailFieldArray1Assist.split(".");
        const mailFieldAfterAtArray0 = mailFieldAfterAtArray[0];
        const mailFieldAfterAtArray1 = mailFieldAfterAtArray[1];
        if (mailFieldAfterAtArray0.length >= 2 && mailFieldAfterAtArray1.length >= 2) {
          console.log("VALID EMAIL");
          this.mailFieldValid = true;
        } else {
          console.log("INVALID EMAIL");
          this.mailFieldValid = false;
        }
      } else {
        console.log("INVALID EMAIL");
        this.mailFieldValid = false;
      }
    } else {
      console.log("INVALID EMAIL");
      this.mailFieldValid = false;
    }
  }

  validateMessage(messageField) {
    if (messageField.value.length >= 10 && messageField.value.length <= 1000) {
      console.log("VALID MESSAGE");
      this.messageFieldValid = true;
    } else {
      console.log("INVALID MESSAGE");
      this.messageFieldValid = false;
    }
  }

  sectionHero() {
    document.getElementById("sectionHero").scrollIntoView();
  }

}
