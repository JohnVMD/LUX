import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prjkts } from './prjkts';

describe('Prjkts', () => {
  let component: Prjkts;
  let fixture: ComponentFixture<Prjkts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prjkts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prjkts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
