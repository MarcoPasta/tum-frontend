import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposComponent } from './compos.component';

describe('ComposComponent', () => {
  let component: ComposComponent;
  let fixture: ComponentFixture<ComposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
