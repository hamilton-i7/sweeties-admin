import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TITLE_PREFIX } from '../constants/common';

@Injectable()
export class AppTitlePrefix extends TitleStrategy {
  constructor(private title: Title) {
    super();
  }

  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    this.title.setTitle(title ? `${TITLE_PREFIX} | ${title}` : TITLE_PREFIX);
  }
}
