import {Directive, ElementRef, EventEmitter, Input, NgZone, OnDestroy, OnInit} from "@angular/core";
import {Keyboard} from "@ionic-native/keyboard";
import {Content, Platform} from "ionic-angular";
import {Subscription} from "rxjs/Subscription";

@Directive({
  selector: '[keyboardAttach]'
})
export class KeyboardAttachDirective implements OnInit, OnDestroy {
  @Input('keyboardAttach') content: Content;
  @Input() btnClicked: EventEmitter<string>;

  private onShowSubscription: Subscription;
  shouldHide: boolean = true;

  private onHideSubscription: Subscription;

  constructor(private elementRef: ElementRef,
              private keyboard: Keyboard,
              public _zone: NgZone,
              private platform: Platform) {
  }

  ngOnInit() {
    if (this.platform.is('cordova') && this.platform.is('ios')) {
      this.onShowSubscription = this.keyboard.onKeyboardShow().subscribe(e => this.onShow(e));
      this.onHideSubscription = this.keyboard.onKeyboardHide().subscribe((e) => this.onHide(e));
    }
    this.btnClicked.subscribe(data => this.shouldHide = false, err => console.log(err));
  }

  ngOnDestroy() {
    if (this.onShowSubscription) {
      this.onShowSubscription.unsubscribe();
    }
    if (this.onHideSubscription) {
      this.onHideSubscription.unsubscribe();
    }
  }

  private onShow(e) {
    let keyboardHeight: number = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
    this.setElementPosition(keyboardHeight);
  };

  private onHide(e) {
    if (this.shouldHide) {
      this.setElementPosition(0);
    }
    this.shouldHide = true;
  };

  private setElementPosition(pixels: number) {
    this.elementRef.nativeElement.style.paddingBottom = pixels + 'px';
    this.content.resize();
    this._zone.run(() => {
      setTimeout(() => {
        this.content.scrollToBottom(300);
      }, 100);
    });
  }
}
