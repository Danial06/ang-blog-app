import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentForComponent } from './comment-for.component';

describe('CommentForComponent', () => {
  let component: CommentForComponent;
  let fixture: ComponentFixture<CommentForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentForComponent]
    });
    fixture = TestBed.createComponent(CommentForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
