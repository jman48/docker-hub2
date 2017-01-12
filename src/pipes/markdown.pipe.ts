import { Pipe, PipeTransform } from '@angular/core';
import * as Markdown from 'markdown-it';

@Pipe({name: 'markdown'})
export class MarkdownParser implements PipeTransform {
  transform(value: string): string {
    const markdown = new Markdown();

    if (value) {
      return markdown.render(value);
    }

    return value;
  }
}
