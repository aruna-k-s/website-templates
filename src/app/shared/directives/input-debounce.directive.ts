import { Directive, OnInit, Input, Output, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appInputDebounce]'
})
export class InputDebounceDirective implements OnInit, OnDestroy {

  @Input() debounceTime = 500;
  @Output() callBack = new EventEmitter();
  input = new Subject();
  subscriber: any;
  constructor() { }

  ngOnInit() {
    this.subscriber = this.input.pipe(debounceTime(this.debounceTime)).subscribe((e) => {
      this.callBack.emit(e);
    })
  }

  ngOnDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  @HostListener('input', ['$event'])
  clickEvent(event) {
    this.input.next(event);
  }
}
