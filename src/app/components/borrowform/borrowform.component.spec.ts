import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowformComponent } from './borrowform.component';

describe('BorrowformComponent', () => {
  let component: BorrowformComponent;
  let fixture: ComponentFixture<BorrowformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
