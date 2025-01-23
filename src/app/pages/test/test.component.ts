import { Component } from '@angular/core';
import { SobreMimComponent } from "../../components/sobre-mim/sobre-mim.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [SobreMimComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
