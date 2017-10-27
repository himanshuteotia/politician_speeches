import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpeechComponent } from './create-speech.component';

describe('CreateSpeechComponent', () => {
  let component: CreateSpeechComponent;
  let fixture: ComponentFixture<CreateSpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
