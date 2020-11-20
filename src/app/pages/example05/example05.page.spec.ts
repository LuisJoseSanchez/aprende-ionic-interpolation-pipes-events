import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example05Page } from './example05.page';

describe('Example05Page', () => {
  let component: Example05Page;
  let fixture: ComponentFixture<Example05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example05Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
