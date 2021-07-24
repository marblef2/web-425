import { Component, OnInit } from '@angular/core';
import { Services } from '../services.interface';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allServices!: Array<Services>;
  selectedServices!: Array<Services>
  serviceForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.allServices=[
      {
        service: 'Password Reset',
        cost: 39.99
      },
      {
        service: 'Spyware Removal',
        cost: 99.99
      },
      {
        service: 'RAM Upgrade',
        cost: 129.99
      },
      {
        service: 'Software Installation',
        cost: 49.99
      },
      {
        service: 'Tune Up',
        cost: 89.99
      },
      {
        service: 'Keyboard Cleaning',
        cost: 45.00
      },
      {
        service: 'Disk Clean-up',
        cost: 149.99
      }
    ]
   }

   get servicesFormArray(): FormArray{
     return this.serviceForm.controls.serviceOptions as FormArray;
   }

   private addServiceCheckboxes():void{
     this.allServices.forEach(() => this.servicesFormArray.push(new FormControl(false)));
   }

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      serviceOptions: new FormArray([])
    })

    this.addServiceCheckboxes();

  }

  onSubmit(){
  this.selectedServices = this.serviceForm.value.serviceOptions.map((checked, index) => checked ? this.allServices[index]: null). filter(v => v !== null);


  console.log(this.selectedServices);
  }
}
