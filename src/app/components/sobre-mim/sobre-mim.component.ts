import { Component } from '@angular/core';
import { CardSocialMediaComponent } from "../card-social-media/card-social-media.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-sobre-mim',
    standalone: true,
    imports: [CardSocialMediaComponent,CommonModule],
    templateUrl: './sobre-mim.component.html',
    styleUrls: ['./sobre-mim.component.scss']
})
export class SobreMimComponent {
    social_medias = [
        {
            linkNav: "mail:torodger.dev777@gmail.com",
            linkImg: "/assets/imgs/svg/gmail-icon.svg",
            title: "Gmail",
            username: "@rodger.dev777",
            variant: "gmail",
        },
        {
            linkNav: "https://www.linkedin.com/in/rodger-vd/",
            linkImg: "/assets/imgs/svg/linkedin-social.svg",
            title: "Linkedin",
            username: "@rodger-vd",
            variant: "linkedin",
        },
        {
            linkNav: "https://github.com/rdgr1",
            linkImg: "/assets/imgs/svg/github-social.svg",
            title: "Github",
            username: "@rdgr1",
            variant: "github",
        },
        {
            linkNav: "https://www.instagram.com/_.vidallx/#",
            linkImg: "/assets/imgs/svg/insta-social.svg",
            title: "Instagram",
            username: "@_.vidallx",
            variant: "instagram",
        },
    ]
}
