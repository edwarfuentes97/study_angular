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
  template: `
    <div class="lab-header">
      <h2>⚡ Angular Core Lab</h2>
      <p>Explore Angular's core concepts: change detection, signals, forms, and lazy loading.</p>
    </div>

    <nav class="lab-tabs">
      <a routerLink="/lab/angular" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
        Change Detection
      </a>
      <a routerLink="/lab/angular/signals" routerLinkActive="active">Signals</a>
      <a routerLink="/lab/angular/forms" routerLinkActive="active">Forms</a>
      <a routerLink="/lab/angular/lazy" routerLinkActive="active">Lazy Loading</a>
    </nav>

    <section class="lab-section">
      <h3>Multi-Step Reactive Form</h3>

      <!-- Step indicator -->
      <div class="step-indicator">
        @for (label of stepLabels; track $index) {
          <div class="step" [class.active]="currentStep() === $index" [class.done]="currentStep() > $index">
            <span class="step-num">{{ $index + 1 }}</span>
            <span class="step-label">{{ label }}</span>
          </div>
        }
      </div>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <!-- Step 1: Personal Info -->
        @if (currentStep() === 0) {
          <div class="card" formGroupName="personal">
            <h4>👤 Personal Information</h4>

            <label class="field">
              <span>First Name</span>
              <input formControlName="firstName" placeholder="John" />
              @if (personal.get('firstName')!.touched && personal.get('firstName')!.hasError('required')) {
                <span class="error">First name is required.</span>
              }
            </label>

            <label class="field">
              <span>Last Name</span>
              <input formControlName="lastName" placeholder="Doe" />
              @if (personal.get('lastName')!.touched && personal.get('lastName')!.hasError('required')) {
                <span class="error">Last name is required.</span>
              }
            </label>

            <label class="field">
              <span>Email</span>
              <input formControlName="email" placeholder="john@example.com" />
              @if (personal.get('email')!.touched && personal.get('email')!.hasError('required')) {
                <span class="error">Email is required.</span>
              } @else if (personal.get('email')!.touched && personal.get('email')!.hasError('customEmail')) {
                <span class="error">{{ personal.get('email')!.getError('customEmail') }}</span>
              }
            </label>
          </div>
        }

        <!-- Step 2: Address -->
        @if (currentStep() === 1) {
          <div class="card" formGroupName="address">
            <h4>🏠 Address</h4>

            <label class="field">
              <span>Street</span>
              <input formControlName="street" placeholder="123 Main St" />
              @if (address.get('street')!.touched && address.get('street')!.hasError('required')) {
                <span class="error">Street is required.</span>
              }
            </label>

            <label class="field">
              <span>City</span>
              <input formControlName="city" placeholder="New York" />
              @if (address.get('city')!.touched && address.get('city')!.hasError('required')) {
                <span class="error">City is required.</span>
              }
            </label>

            <label class="field">
              <span>Country</span>
              <select formControlName="country">
                <option value="">Select a country</option>
                @for (c of countries; track c) {
                  <option [value]="c">{{ c }}</option>
                }
              </select>
              @if (address.get('country')!.touched && address.get('country')!.hasError('required')) {
                <span class="error">Country is required.</span>
              }
            </label>
          </div>
        }

        <!-- Step 3: Skills -->
        @if (currentStep() === 2) {
          <div class="card">
            <h4>🛠️ Skills</h4>
            <p class="hint">Add your technical skills and proficiency level.</p>

            <div formArrayName="skills">
              @for (skill of skills.controls; track $index; let i = $index) {
                <div class="skill-row" [formGroupName]="i">
                  <input formControlName="name" placeholder="Skill name" class="skill-input" />
                  <select formControlName="level" class="skill-select">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                  <button type="button" class="btn btn-danger btn-sm" (click)="removeSkill(i)">✕</button>
                </div>
              } @empty {
                <p class="hint">No skills added yet.</p>
              }
            </div>

            <button type="button" class="btn" (click)="addSkill()">+ Add Skill</button>
          </div>
        }

        <!-- Navigation buttons -->
        <div class="form-nav">
          @if (currentStep() > 0) {
            <button type="button" class="btn" (click)="prev()">← Previous</button>
          }
          @if (currentStep() < 2) {
            <button type="button" class="btn btn-primary" (click)="next()">Next →</button>
          } @else {
            <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Submit</button>
          }
        </div>
      </form>

      <!-- Submitted result -->
      @if (submitted()) {
        <div class="card result-card">
          <h4>✅ Form Submitted</h4>
          <pre class="output-log">{{ form.value | json }}</pre>
        </div>
      }
    </section>
  `,
  styles: `
    .lab-tabs {
      display: flex; gap: 0.5rem; margin-bottom: 1.5rem;
      border-bottom: 1px solid var(--border); padding-bottom: 0.75rem;
    }
    .lab-tabs a {
      padding: 0.5rem 1rem; border-radius: 6px 6px 0 0;
      color: var(--text-muted); text-decoration: none; font-weight: 500;
      border: 1px solid transparent; transition: all 0.2s;
    }
    .lab-tabs a:hover { color: var(--text); background: var(--bg-card); }
    .lab-tabs a.active {
      color: var(--accent-purple); border-color: var(--border);
      border-bottom-color: var(--bg); background: var(--bg-card);
    }

    /* Step indicator */
    .step-indicator { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
    .step {
      display: flex; align-items: center; gap: 0.5rem;
      color: var(--text-muted); font-size: 0.9rem;
    }
    .step-num {
      width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center;
      border: 2px solid var(--border); font-weight: 700; font-size: 0.8rem;
    }
    .step.active .step-num {
      border-color: var(--accent-purple); color: var(--accent-purple); background: rgba(139,92,246,0.1);
    }
    .step.active .step-label { color: var(--text); }
    .step.done .step-num {
      border-color: var(--accent-green); color: var(--accent-green); background: rgba(63,185,80,0.1);
    }
    .step.done .step-label { color: var(--accent-green); }

    /* Form fields */
    .field { display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 1rem; }
    .field span { font-size: 0.85rem; color: var(--text-muted); }
    .field input, .field select {
      padding: 0.6rem 0.75rem; border-radius: 6px; border: 1px solid var(--border);
      background: var(--bg); color: var(--text); font-size: 0.95rem;
    }
    .field input:focus, .field select:focus { outline: none; border-color: var(--accent-purple); }
    .error { color: var(--accent-red); font-size: 0.8rem; }
    .hint { color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.75rem; }

    h4 { margin: 0 0 1rem; color: var(--accent-blue); }

    /* Skills */
    .skill-row {
      display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;
    }
    .skill-input {
      flex: 1; padding: 0.5rem 0.75rem; border-radius: 6px;
      border: 1px solid var(--border); background: var(--bg); color: var(--text);
    }
    .skill-select {
      padding: 0.5rem; border-radius: 6px; border: 1px solid var(--border);
      background: var(--bg); color: var(--text);
    }
    .btn-sm { padding: 0.35rem 0.6rem; font-size: 0.8rem; }

    /* Nav & result */
    .form-nav { display: flex; gap: 0.75rem; margin-top: 1.5rem; }
    .result-card { margin-top: 1.5rem; }
    .result-card pre { margin: 0.5rem 0 0; }
    @media (max-width: 500px) { .step-label { display: none; } }
  `,
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
