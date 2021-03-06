import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/playlist';
import { PlaylistService } from 'src/app/services/playlist.service'
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './playlist-information.component.html'
})

export class PlaylistInformationComponent implements OnInit {
    playlist$: Observable<Playlist>;
    edit: boolean;
    constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer,
                private playlistService: PlaylistService) {}

    ngOnInit(): void {
        this.edit = false;
        this.playlist$ = this.route.paramMap.pipe(
            flatMap((params: ParamMap) => {
            const playlistId = params.get('id');
            return this.playlistService.getPlaylist(playlistId);
        }));
    }

    transform(u : string): SafeUrl{
        return this.sanitizer.bypassSecurityTrustUrl(`${environment.media}${u}`);
    }
}
