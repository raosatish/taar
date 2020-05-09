import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarmenuComponent } from './toolbarmenu.component';

describe('ToolbarmenuComponent', () => {
  let component: ToolbarmenuComponent;
  let fixture: ComponentFixture<ToolbarmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
