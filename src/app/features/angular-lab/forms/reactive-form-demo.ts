import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

function emailValidator(control: AbstractControl): ValidationErrors | null {
  const val = control.value as string;
  if (!val) return null;
  const hasAt = val.includes('@');
  const hasDot = val.includes('.');
  if (hasAt && hasDot) return null;
  return { customEmail: 'Email must contain "@" and "."' };
}

@Component({
  selector: 'app-reactive-form-demo',
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form-demo.html',
  styleUrl: './reactive-form-demo.css',
})
export class ReactiveFormDemoComponent {
  currentStep = signal(0);
  submitted = signal(false);

  stepLabels = ['Personal', 'Address', 'Skills'];
  countries = [
    'Argentina', 'Brasil', 'Chile', 'Colombia', 'España',
    'México', 'Perú', 'United States', 'United Kingdom', 'Other',
  ];

  form = new FormGroup({
    personal: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, emailValidator]),
    }),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    }),
    skills: new FormArray<FormGroup>([]),
  });

  get personal(): FormGroup { return this.form.get('personal') as FormGroup; }
  get address(): FormGroup { return this.form.get('address') as FormGroup; }
  get skills(): FormArray { return this.form.get('skills') as FormArray; }

  addSkill(): void {
    this.skills.push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        level: new FormControl('beginner'),
      }),
    );
  }

  removeSkill(i: number): void {
    this.skills.removeAt(i);
  }

  next(): void {
    this.markCurrentStepTouched();
    if (this.isCurrentStepValid()) {
      this.currentStep.update(s => Math.min(s + 1, 2));
    }
  }

  prev(): void {
    this.currentStep.update(s => Math.max(s - 1, 0));
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  private isCurrentStepValid(): boolean {
    const groups = [this.personal, this.address, this.form.get('skills')!] as AbstractControl[];
    return groups[this.currentStep()].valid;
  }

  private markCurrentStepTouched(): void {
    const groups = [this.personal, this.address, this.form.get('skills')!] as AbstractControl[];
    groups[this.currentStep()].markAllAsTouched();
  }
}
