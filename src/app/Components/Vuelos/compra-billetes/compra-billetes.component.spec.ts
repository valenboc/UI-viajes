import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraBilletesComponent } from './compra-billetes.component';

describe('CompraBilletesComponent', () => {
  let component: CompraBilletesComponent;
  let fixture: ComponentFixture<CompraBilletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraBilletesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraBilletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
