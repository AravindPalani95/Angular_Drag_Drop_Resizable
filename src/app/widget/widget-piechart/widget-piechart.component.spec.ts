import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPiechartComponent } from './widget-piechart.component';

describe('WidgetPiechartComponent', () => {
  let component: WidgetPiechartComponent;
  let fixture: ComponentFixture<WidgetPiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
