import { Component, OnInit } from '@angular/core';

export interface Content {
  title: string;
  pages: Page[];
}
export interface Page {
  icon: string;
  page_title: string;
  url: string;
}

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  usingPlatform: string;
  usingBrowser: string;
  usingBrowserLanguage: string;

  contents: Content[] = [
    {
      title: 'Angular', pages: [
        {icon: 'input', page_title: 'Form & Validation', url: '/form-validation'},
        {icon: 'insert_drive_file', page_title: 'File', url: '/file'},
      ]
    },
    {
      title: '???', pages: [
        {icon: 'priority_high', page_title: 'TBD', url: '/top'},
      ]
    },
    {
      title: '???', pages: [
        {icon: 'priority_high', page_title: 'TBD', url: '/top'},
      ]
    },
    {
      title: '???', pages: [
        {icon: 'priority_high', page_title: 'TBD', url: '/top'},
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
    this.usingPlatform = window.navigator.platform;
    this.usingBrowserLanguage = window.navigator.language;

    const agent = window.navigator.userAgent.toLowerCase();
    const version = window.navigator.appVersion.toLowerCase();
    if (agent.indexOf('msie') > -1) {
      if (version.indexOf('msie 6.') > -1) {
        this.usingBrowser = 'IE6';
      } else if (version.indexOf('msie 7.') > -1) {
        this.usingBrowser = 'IE7';
      } else if (version.indexOf('msie 8.') > -1) {
        this.usingBrowser = 'IE8';
      } else if (version.indexOf('msie 9.') > -1) {
        this.usingBrowser = 'IE9';
      } else if (version.indexOf('msie 10.') > -1) {
        this.usingBrowser = 'IE10';
      } else {
        this.usingBrowser = 'IE(バージョン不明)';
      }
    } else if (agent.indexOf('trident/7') > -1) {
      this.usingBrowser = 'IE11';
    } else if (agent.indexOf('edge') > -1) {
      this.usingBrowser = 'Edge';
    } else if (agent.indexOf('chrome') > -1) {
      this.usingBrowser = 'Chrome';
    } else if (agent.indexOf('safari') > -1) {
      this.usingBrowser = 'Safari';
    } else if (agent.indexOf('opera') > -1) {
      this.usingBrowser = 'Opera';
    } else if (agent.indexOf('firefox') > -1) {
      this.usingBrowser = 'Firefox';
    }
  }

}