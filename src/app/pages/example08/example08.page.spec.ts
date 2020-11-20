import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example08Page } from './example08.page';

describe('Example08Page', () => {
  let component: Example08Page;
  let fixture: ComponentFixture<Example08Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example08Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
