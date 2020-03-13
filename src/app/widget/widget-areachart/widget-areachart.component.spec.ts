import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAreachartComponent } from './widget-areachart.component';

describe('WidgetAreachartComponent', () => {
  let component: WidgetAreachartComponent;
  let fixture: ComponentFixture<WidgetAreachartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetAreachartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAreachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
