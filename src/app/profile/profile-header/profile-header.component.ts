import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {IBasicProfileInformations} from "../../domain/IBasicProfileInformations";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHeaderComponent implements AfterViewInit {
  @Input()profileInfos!: IBasicProfileInformations;
  public mailTo: string = 'mailto:';
  public telTo: string = 'tel:';

  public phoneNumber: string = '';
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.mailTo += this.profileInfos.email;
    this.telTo += this.profileInfos.phoneNumber;
    this.phoneNumber = this.profileInfos.phoneNumber.replace(/\B(?=(\d{2})+(?!\d))/g, " ")
    console.log(this.phoneNumber)
    this.cdr.detectChanges();
  }

}
