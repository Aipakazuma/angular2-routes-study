import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route
      .params
      .subscribe(params => {
        console.log(params);
        this.id = params['id'];
        if (this.id) {
          this.spotifyService
            .getTrack(this.id)
            .subscribe((res: any) => {
              this.renderTrack(res);
            });
        }
      });
  }

  renderTrack(res: any) {
    this.track = null;
    if (res) {
      this.track = res;
    }
  }
}
