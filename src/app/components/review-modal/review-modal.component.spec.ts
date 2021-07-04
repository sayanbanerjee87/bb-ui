import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewModalComponent } from './review-modal.component';

describe('ReviewModalComponent', () => {
  let component: ReviewModalComponent;
  let fixture: ComponentFixture<ReviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger event', () => {
    spyOn(component.submitTransfer, 'emit');
    const event = new Event('transfer');

    component.moneyTransfer(event);
    expect(component.submitTransfer.emit).toHaveBeenCalled();
  });

  it('Should close modal', () => {
    spyOn(component.modalClose, 'emit');
    const event = new Event('close');

    component.closeModal();
    expect(component.modalClose.emit).toHaveBeenCalled();
  })
});
