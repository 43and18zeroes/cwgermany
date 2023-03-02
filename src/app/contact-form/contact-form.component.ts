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

    if (this.formDataValid) {
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
  }

  validateContactForm(nameField, mailField, messageField) {
    this.validateName(nameField);
    this.validateMail(mailField);
    this.validateMessage(messageField);
    this.validateForm();
  }

  validateName(nameField) {
    if (nameField.value.length >= 2 && nameField.value.length <= 50) {
      this.nameFieldValid = true;
    } else { this.nameFieldValid = false; }
  }

  validateMail(mailField) {
    if (mailField.value.includes("@")) {
      const mailFieldArray = mailField.value.split("@");
      if (mailFieldArray[0].length >= 2 && mailFieldArray[1].includes(".")) {
        const mailFieldAfterAtArray = mailFieldArray[1].split(".");
        if (mailFieldAfterAtArray[0].length >= 2 && mailFieldAfterAtArray[1].length >= 2) {
          this.mailFieldValid = true;
        } else { this.mailFieldValid = false; }
      } else { this.mailFieldValid = false; }
    } else { this.mailFieldValid = false; }
  }

  validateMessage(messageField) {
    if (messageField.value.length >= 10 && messageField.value.length <= 1000) {
      this.messageFieldValid = true;
    } else { this.messageFieldValid = false; }
  }

  validateForm() {
    if (this.nameFieldValid && this.mailFieldValid && this.messageFieldValid) {
      this.formDataValid = true;
    } else {
      this.formDataValid = false;
      this.formInvalidFeedback();
    }
  }

  formInvalidFeedback() {
    if (this.nameFieldValid) {
      this.nameField.nativeElement.classList.add('textfields__valid');
      this.nameField.nativeElement.classList.remove('textfields__invalid');
    } else {
      this.nameField.nativeElement.classList.add('textfields__invalid');
      this.nameField.nativeElement.classList.remove('textfields__valid');
    }
    if (this.mailFieldValid) {
      this.mailField.nativeElement.classList.add('textfields__valid');
      this.mailField.nativeElement.classList.remove('textfields__invalid');
    } else {
      this.mailField.nativeElement.classList.add('textfields__invalid');
      this.mailField.nativeElement.classList.remove('textfields__valid');
    }
    if (this.messageFieldValid) {
      this.messageField.nativeElement.classList.add('textfields__valid');
      this.messageField.nativeElement.classList.remove('textfields__invalid');
    } else {
      this.messageField.nativeElement.classList.add('textfields__invalid');
      this.messageField.nativeElement.classList.remove('textfields__valid');
    }
  }

  sectionHero() {
    document.getElementById("sectionHero").scrollIntoView();
  }

}
