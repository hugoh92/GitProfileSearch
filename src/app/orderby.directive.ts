import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appOrderBy]'
})
export class OrderByDirective implements OnChanges {
  @Input()
  appOrderBy!: any[];
  @Input()
  key!: string;
  @Input() reverse: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appOrderBy) {
      this.appOrderBy.sort((a, b) => {
        if (a[this.key] < b[this.key]) return this.reverse ? 1 : -1;
        if (a[this.key] > b[this.key]) return this.reverse ? -1 : 1;
        return 0;
      });
    }
  }
}
