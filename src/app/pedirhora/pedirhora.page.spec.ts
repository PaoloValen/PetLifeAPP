import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedirhoraPage } from './pedirhora.page';

describe('PedirhoraPage', () => {
  let component: PedirhoraPage;
  let fixture: ComponentFixture<PedirhoraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirhoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
