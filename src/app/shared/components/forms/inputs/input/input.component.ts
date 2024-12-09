import { Component, input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [],
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
        id="default-search"
        class="block w-full p-3 ps-10 text-sm border outline-none rounded-lg bg-transparent focus:border-primary focus:shadow-lg"
        [placeholder]="placeholder"
        required
      />
    </div>
  `,
  styleUrl: './input.component.scss',
})
export class InputComponent implements ControlValueAccessor {
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  placeholder = input.required<string>();
  icon = input.required<string>();
}
