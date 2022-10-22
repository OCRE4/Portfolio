import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoperfilBotonesComponent } from './fotoperfil-botones.component';

describe('FotoperfilBotonesComponent', () => {
  let component: FotoperfilBotonesComponent;
  let fixture: ComponentFixture<FotoperfilBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoperfilBotonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoperfilBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
