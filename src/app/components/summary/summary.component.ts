import {ChangeDetectionStrategy, Component, Input, OnInit, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {CardModule} from "primeng/card";

@Component({
  standalone: true,
  imports: [CardModule],
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements OnInit {
  @Input() summary!: string;
  public sanitizedSummary: string | null = '';
  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.sanitizedSummary = this.domSanitizer.sanitize(SecurityContext.HTML, this.summary);
  }

}
