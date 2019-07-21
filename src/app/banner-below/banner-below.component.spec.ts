import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBelowComponent } from './banner-below.component';

describe('BannerBelowComponent', () => {
  let component: BannerBelowComponent;
  let fixture: ComponentFixture<BannerBelowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerBelowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
