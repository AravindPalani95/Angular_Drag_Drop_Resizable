import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBarchartComponent } from './widget-barchart.component';

describe('WidgetBarchartComponent', () => {
  let component: WidgetBarchartComponent;
  let fixture: ComponentFixture<WidgetBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
