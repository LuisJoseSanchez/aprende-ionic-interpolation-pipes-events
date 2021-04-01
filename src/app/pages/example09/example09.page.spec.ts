import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example09Page } from './example09.page';

describe('Example09Page', () => {
  let component: Example09Page;
  let fixture: ComponentFixture<Example09Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example09Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example09Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
