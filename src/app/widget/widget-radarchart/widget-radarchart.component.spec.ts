import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRadarchartComponent } from './widget-radarchart.component';

describe('WidgetRadarchartComponent', () => {
  let component: WidgetRadarchartComponent;
  let fixture: ComponentFixture<WidgetRadarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetRadarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetRadarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
