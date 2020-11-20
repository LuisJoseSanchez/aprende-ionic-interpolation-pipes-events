import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example02Page } from './example02.page';

describe('Example02Page', () => {
  let component: Example02Page;
  let fixture: ComponentFixture<Example02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
