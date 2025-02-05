import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControlStatus, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-message',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule], // Adicionado FormsModule
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMessageComponent),
      multi: true,
    }],
  templateUrl: './input-message.component.html',
  styleUrl: './input-message.component.scss'
})
export class InputMessageComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() inputName: string = '';
  @Input() autocomplete: string = '';
  @Input() formControl: FormControl = new FormControl();
  
  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}
}
