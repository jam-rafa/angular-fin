import { Component, Input, inject } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [FormsModule, CommonModule],
  standalone: true,
  template: `
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <i [ngClass]="'ti ti-' + icon"></i>
      </div>
      <input
        [type]="type"
        [(ngModel)]="inputValue"
        (focus)="onTouched && onTouched()"
        (input)="onChange && onChange(inputValue)"
        [disabled]="isDisabled"
        class="block w-full p-3 ps-10 text-sm border outline-none rounded-lg bg-transparent focus:border-primary focus:shadow-lg"
        [placeholder]="placeholder"
        [required]="required"
      />
    </div>
  `,
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string = ''; // Placeholder definido dinamicamente
  @Input() type: string = 'text'; // Tipo do input (pode ser text, password, email, etc)
  @Input() icon: string = ''; // Icone que será exibido
  @Input() required: boolean = false; // Icone que será exibido
  

  inputValue = '';
  private ngControl = inject(NgControl, { optional: true });
  protected onTouched?: () => void;
  protected onChange?: (value: any) => void;
  protected isDisabled = false;

  constructor() {
    if (this.ngControl) this.ngControl.valueAccessor = this;
  }

  writeValue(obj: any): void {
    this.inputValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
