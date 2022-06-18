import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() id!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
