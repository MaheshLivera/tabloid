import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutsComponent } from './tuts.component';

describe('TutsComponent', () => {
  let component: TutsComponent;
  let fixture: ComponentFixture<TutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
