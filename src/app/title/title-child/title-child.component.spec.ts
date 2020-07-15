import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleChildComponent } from './title-child.component';

describe('TitleChildComponent', () => {
  let component: TitleChildComponent;
  let fixture: ComponentFixture<TitleChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
