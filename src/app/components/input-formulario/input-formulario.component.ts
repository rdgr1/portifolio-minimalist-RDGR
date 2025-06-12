import { Component , forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = 'text' | 'email' | 'name'
@Component({
    selector: 'app-input-formulario',
    standalone: true,
    imports: [ReactiveFormsModule],
    providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputFormularioComponent),
            multi: true,
        }],
    templateUrl: './input-formulario.component.html',
    styleUrls: ['./input-formulario.component.scss']
})
export class InputFormularioComponent implements ControlValueAccessor{
@Input() type: InputTypes = 'text';
@Input() placeholder: string = '';
@Input() label: string = '';
@Input() inputName: string = '';
@Input() autocomplete: string = '';
@Input() formControl: FormControl = new FormControl();
  value: string = ''
  onChange: any = () => {}
  onTouched: any= () => {}
  onInput (event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }
  writeValue(value: any): void {
      this.value = value
  }
  registerOnChange(fn: any): void {
      this.onChange = fn
  }
  registerOnTouched(fn: any): void {
      this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean): void {}
}
