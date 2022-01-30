import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpnRepositoryComponent } from './dpn-repository.component';

describe('DpnRepositoryComponent', () => {
  let component: DpnRepositoryComponent;
  let fixture: ComponentFixture<DpnRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpnRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DpnRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
