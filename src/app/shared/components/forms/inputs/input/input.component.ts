import { Component, inject, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  standalone: true,
  template: `
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <i class="ti ti-[icon]"></i>
      </div>
      <input
        type="search"
        [(ngModel)]="inputValue"
        (focus)="onTouched && onTouched()"
        (input)="onChange && onChange(inputValue)"
        [disabled]="isDisabled"
        class="block w-full p-3 ps-10 text-sm border outline-none rounded-lg bg-transparent focus:border-primary focus:shadow-lg"
        [placeholder]="placeholder"
        required
      />
    </div>
  `,
  styleUrl: './input.component.scss',
})
export class InputComponent implements ControlValueAccessor {
  inputValue = '';

  private ngControl = inject(NgControl, { optional: true });
  protected onTouched?: () => {};
  protected onChange?: (value: any) => [];
  protected isDisabled = false;

  constructor() {
    if (this.ngControl) this.ngControl.valueAccessor = this;
    if (this.onTouched) this.onTouched;
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

  placeholder = input.required<string>();
  icon = input.required<string>();
}
