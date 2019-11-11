import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FroalaDemoComponent } from './froala-demo.component';

describe('FroalaDemoComponent', () => {
  let component: FroalaDemoComponent;
  let fixture: ComponentFixture<FroalaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FroalaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FroalaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
