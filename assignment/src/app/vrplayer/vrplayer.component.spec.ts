import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrplayerComponent } from './vrplayer.component';

describe('VrplayerComponent', () => {
  let component: VrplayerComponent;
  let fixture: ComponentFixture<VrplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
